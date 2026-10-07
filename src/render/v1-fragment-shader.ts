/**
 * Faithful atlas port of the public V1 fragment shader.
 *
 * Source: 42libft/viscous-led-vortex-art
 * Commit: 9b5f556b3461a7a0252904bcd584da8f26e0dacf
 *
 * The visual code below follows V1 except for atlas-integration seams and one
 * deliberate AR simplification: the failed Curl/Layu warp branches are
 * omitted. Viewport-local coordinates, an explicit visual aspect, optional
 * 90° source rotation, an active-vortex count for one black circle per panel,
 * and a final rotating non-overlap colour sector are added. The exact
 * upstream shader remains available in the public source repository above.
 */
export const v1AtlasFragmentShader = /* glsl */ `
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_viewportOrigin;
uniform float u_visualAspect;
uniform float u_vortexAspect;
uniform int u_rotateSource;
uniform int u_vortexCount;
uniform float u_time;
uniform vec2 u_vortexPos[3];
uniform vec2 u_vortexVel[3];
uniform float u_vortexRadius[3];
uniform float u_vortexSpin[3];
uniform float u_speed;
uniform float u_vortexStrength;
uniform float u_ledStrength;
uniform float u_glow;
uniform int u_displayMode;
uniform int u_colorMode;
uniform float u_colorStyleMix;
uniform vec4 u_flowMix;
uniform float u_cellBoilMix;
uniform float u_cellStretchMix;
uniform float u_skinMix;
uniform float u_unevenCellMix;
uniform float u_fireflyEnabled;
uniform float u_hueCenter;
uniform float u_sectorHalfWidth;

out vec4 outColor;

#define PI 3.141592653589793

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec3 rgbToHsv(vec3 color) {
  vec4 k = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(color.bg, k.wz), vec4(color.gb, k.xy), step(color.b, color.g));
  vec4 q = mix(vec4(p.xyw, color.r), vec4(color.r, p.yzx), step(p.x, color.r));
  float delta = q.x - min(q.w, q.y);
  float epsilon = 1.0e-10;
  return vec3(
    abs(q.z + (q.w - q.y) / (6.0 * delta + epsilon)),
    delta / (q.x + epsilon),
    q.x
  );
}

vec3 hsvToRgb(vec3 hsv) {
  vec3 primary = abs(fract(hsv.xxx + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return hsv.z * mix(vec3(1.0), clamp(primary - 1.0, 0.0, 1.0), hsv.y);
}

vec3 sectorizeV1Color(vec3 rawColor) {
  vec3 hsv = rgbToHsv(clamp(rawColor, 0.0, 1.0));
  // The continuous triangle fold retains more local hue contrast than sine
  // while guaranteeing that every chromatic pixel stays in this panel's
  // rotating, disjoint sector. It also avoids one transcendental per pixel.
  float triangle = abs(fract(hsv.x + 0.25) * 2.0 - 1.0) * 2.0 - 1.0;
  float localHue = triangle * u_sectorHalfWidth;
  hsv.x = fract(u_hueCenter + localHue);
  return hsvToRgb(hsv);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
    mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.52;
  mat2 r = mat2(0.82, -0.57, 0.57, 0.82);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = r * p * 2.03 + 12.7;
    a *= 0.5;
  }
  return v;
}

vec2 rotate2(vec2 p, float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c) * p;
}

vec2 flowPatch(vec2 uv, vec2 center, vec2 dir, float radius, float phase) {
  vec2 d = uv - center;
  float wobble = fbm((uv + center) * 8.0 + vec2(phase * 0.07, -phase * 0.05));
  d += vec2(
    fbm(uv * 5.2 + phase * 0.06),
    fbm(uv * 4.7 - phase * 0.05 + 9.0)
  ) * 0.060 - 0.030;
  float m = smoothstep(radius * (0.95 + wobble * 0.28), radius * 0.16, length(d));
  float curl = sin((d.x * dir.y - d.y * dir.x) * 14.0 + phase + wobble * 5.0) * 0.5 + 0.5;
  vec2 tangent = normalize(vec2(-d.y, d.x) + 0.0001);
  vec2 bentDir = normalize(dir + tangent * (curl - 0.5) * 1.15 + vec2(d.y, -d.x) * 0.75);
  return bentDir * m * (0.30 + 0.42 * wobble);
}

float warpedVoronoi(vec2 p, float time, out float membrane, out float fill, out float ribs, out float idValue) {
  vec2 base = floor(p);
  vec2 f = fract(p);
  float cluster = fbm(base * 0.42 + time * 0.012);
  vec2 sizeSkew = vec2(
    mix(0.86, 1.34, hash12(base + 31.0)),
    mix(0.82, 1.42, hash12(base + 47.0))
  );
  float f1 = 20.0;
  float f2 = 20.0;
  vec2 nearest = vec2(0.0);
  idValue = 0.0;

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 cell = vec2(float(x), float(y));
      vec2 id = base + cell;
      vec2 jitter = vec2(hash12(id + 0.17), hash12(id + 9.41));
      jitter = 0.5 + (jitter - 0.5) * 0.64;
      jitter += 0.08 * vec2(
        sin(time * 0.23 + hash12(id + 2.0) * 6.283),
        cos(time * 0.19 + hash12(id + 5.0) * 6.283)
      );
      vec2 d = cell + jitter - f;
      float angle = (hash12(id + 3.7) - 0.5) * 1.7 + sin(time * 0.045 + hash12(id) * 6.0) * 0.22;
      d = rotate2(d, angle);
      float localCluster = mix(cluster, hash12(id + 21.0), 0.38);
      d *= vec2(0.78 + hash12(id + 6.1) * 0.28, 1.24 + hash12(id + 8.4) * 0.80);
      d *= mix(vec2(1.0), sizeSkew * mix(0.70, 1.38, localCluster), 0.24 + u_unevenCellMix * 0.42);
      float dist = dot(d, d);
      if (dist < f1) {
        f2 = f1;
        f1 = dist;
        nearest = d;
        idValue = hash12(id + 13.3);
      } else if (dist < f2) {
        f2 = dist;
      }
    }
  }

  float d1 = sqrt(f1);
  float edge = sqrt(f2) - d1;
  membrane = 1.0 - smoothstep(0.035, 0.145, edge);
  fill = 1.0 - smoothstep(0.30, 0.76, d1);
  float ribLine = sin(nearest.y * 14.0 + sin(nearest.x * 8.0 + time * 0.18) * 1.3);
  ribs = fill * (1.0 - membrane) * (1.0 - smoothstep(0.06, 0.24, abs(ribLine)));
  return d1;
}

// Color: main hue is controlled independently from shape/motion settings.
vec3 palette(float t, int mode, float time) {
  t = fract(t);
  vec3 blue1 = vec3(0.005, 0.025, 0.22);
  vec3 blue2 = vec3(0.00, 0.16, 0.95);
  vec3 blue3 = vec3(0.00, 0.86, 1.00);
  vec3 blue4 = vec3(0.86, 0.98, 1.00);
  vec3 blue = mix(blue1, blue2, smoothstep(0.08, 0.42, t));
  blue = mix(blue, blue3, smoothstep(0.35, 0.76, t));
  blue = mix(blue, blue4, pow(smoothstep(0.88, 1.0, t), 8.0) * 0.55);

  vec3 red1 = vec3(0.28, 0.00, 0.06);
  vec3 red2 = vec3(1.00, 0.02, 0.06);
  vec3 red3 = vec3(1.00, 0.00, 0.78);
  vec3 red4 = vec3(0.55, 1.00, 0.05);
  vec3 red = mix(red1, red2, smoothstep(0.04, 0.42, t));
  red = mix(red, red3, smoothstep(0.38, 0.72, t));
  red = mix(red, red4, smoothstep(0.76, 0.94, t) * (1.0 - smoothstep(0.95, 1.0, t)));
  red = mix(red, vec3(1.0, 0.86, 0.96), pow(smoothstep(0.94, 1.0, t), 9.0) * 0.38);

  vec3 hotA = vec3(0.02, 0.05, 0.16);
  vec3 hotB = vec3(1.00, 0.08, 0.78);
  vec3 hotC = vec3(1.00, 0.54, 0.02);
  vec3 hotD = vec3(0.62, 0.10, 1.00);
  vec3 hotE = vec3(0.00, 0.74, 0.95);
  vec3 vivid = mix(hotA, hotB, smoothstep(0.05, 0.24, t));
  vivid = mix(vivid, hotC, smoothstep(0.24, 0.48, t));
  vivid = mix(vivid, hotD, smoothstep(0.48, 0.70, t));
  vivid = mix(vivid, hotE, smoothstep(0.72, 0.90, t) * 0.70);
  vivid = mix(vivid, vec3(1.0), pow(smoothstep(0.90, 1.0, t), 6.0) * 0.50);
  vivid = pow(max(vivid, 0.0), vec3(0.62));

  vec3 green1 = vec3(0.02, 0.09, 0.025);
  vec3 green2 = vec3(0.00, 0.78, 0.20);
  vec3 green3 = vec3(0.12, 1.00, 0.78);
  vec3 green4 = vec3(0.80, 1.00, 0.14);
  vec3 green = mix(green1, green2, smoothstep(0.05, 0.40, t));
  green = mix(green, green3, smoothstep(0.38, 0.74, t));
  green = mix(green, green4, smoothstep(0.72, 0.94, t) * 0.55);

  vec3 yellow1 = vec3(0.18, 0.08, 0.01);
  vec3 yellow2 = vec3(1.00, 0.48, 0.02);
  vec3 yellow3 = vec3(1.00, 0.92, 0.18);
  vec3 yellow4 = vec3(0.00, 0.82, 0.70);
  vec3 yellow = mix(yellow1, yellow2, smoothstep(0.05, 0.40, t));
  yellow = mix(yellow, yellow3, smoothstep(0.34, 0.72, t));
  yellow = mix(yellow, yellow4, smoothstep(0.78, 0.96, t) * 0.34);

  vec3 white1 = vec3(0.72, 0.82, 0.90);
  vec3 white2 = vec3(1.00, 0.92, 0.78);
  vec3 white3 = vec3(0.88, 1.00, 0.96);
  vec3 pearl = mix(white1, white2, smoothstep(0.10, 0.56, t));
  pearl = mix(pearl, white3, smoothstep(0.48, 0.92, t));
  pearl = mix(pearl, vec3(1.0), pow(smoothstep(0.78, 1.0, t), 4.0) * 0.45);

  vec3 pink = mix(vec3(0.22, 0.00, 0.10), vec3(1.00, 0.00, 0.62), smoothstep(0.08, 0.50, t));
  pink = mix(pink, vec3(1.00, 0.48, 0.92), smoothstep(0.48, 0.84, t));
  pink = mix(pink, vec3(0.96, 0.98, 1.00), smoothstep(0.88, 1.0, t) * 0.34);

  vec3 purple = mix(vec3(0.05, 0.00, 0.20), vec3(0.48, 0.08, 1.00), smoothstep(0.08, 0.52, t));
  purple = mix(purple, vec3(1.00, 0.00, 0.78), smoothstep(0.50, 0.78, t) * 0.52);
  purple = mix(purple, vec3(0.00, 0.82, 1.00), smoothstep(0.78, 0.98, t) * 0.38);

  if (mode == 1) return blue;
  if (mode == 2) return red;
  if (mode == 3) return green;
  if (mode == 4) return yellow;
  if (mode == 5) return pearl;
  if (mode == 6) return pink;
  if (mode == 7) return purple;

  return vivid;
}

vec3 contrastAccent(float t, int mode) {
  t = fract(t);
  vec3 cyan = vec3(0.00, 0.92, 1.00);
  vec3 lime = vec3(0.52, 1.00, 0.02);
  vec3 magenta = vec3(1.00, 0.00, 0.82);
  vec3 orange = vec3(1.00, 0.38, 0.00);
  vec3 violet = vec3(0.50, 0.16, 1.00);
  vec3 pearl = vec3(0.96, 0.98, 1.00);

  if (mode == 1) return mix(mix(cyan, pearl, smoothstep(0.25, 0.58, t)), orange, smoothstep(0.72, 0.96, t) * 0.42);
  if (mode == 2) return mix(mix(cyan, lime, smoothstep(0.22, 0.62, t)), pearl, smoothstep(0.78, 0.98, t) * 0.55);
  if (mode == 3) return mix(mix(magenta, cyan, smoothstep(0.24, 0.62, t)), pearl, smoothstep(0.78, 0.98, t) * 0.45);
  if (mode == 4) return mix(mix(cyan, magenta, smoothstep(0.20, 0.58, t)), violet, smoothstep(0.70, 0.96, t) * 0.38);
  if (mode == 5) return mix(mix(cyan, magenta, smoothstep(0.20, 0.62, t)), lime, smoothstep(0.72, 0.96, t) * 0.30);
  if (mode == 6) return mix(mix(cyan, lime, smoothstep(0.20, 0.58, t)), pearl, smoothstep(0.70, 0.96, t) * 0.38);
  if (mode == 7) return mix(mix(orange, lime, smoothstep(0.20, 0.58, t)), cyan, smoothstep(0.72, 0.96, t) * 0.42);
  return palette(t, 0, 0.0);
}

vec3 analogPalette(float t, int mode) {
  t = fract(t);
  if (mode == 1) {
    return mix(mix(vec3(0.005, 0.015, 0.16), vec3(0.00, 0.20, 0.85), smoothstep(0.08, 0.52, t)), vec3(0.00, 0.78, 1.00), smoothstep(0.62, 0.96, t) * 0.55);
  }
  if (mode == 2) {
    return mix(mix(vec3(0.24, 0.00, 0.035), vec3(1.00, 0.02, 0.06), smoothstep(0.08, 0.48, t)), vec3(1.00, 0.00, 0.72), smoothstep(0.54, 0.96, t) * 0.62);
  }
  if (mode == 3) {
    return mix(mix(vec3(0.02, 0.08, 0.02), vec3(0.00, 0.68, 0.18), smoothstep(0.08, 0.52, t)), vec3(0.16, 1.00, 0.56), smoothstep(0.60, 0.96, t) * 0.52);
  }
  if (mode == 4) {
    return mix(mix(vec3(0.20, 0.08, 0.00), vec3(1.00, 0.42, 0.00), smoothstep(0.08, 0.50, t)), vec3(1.00, 0.88, 0.16), smoothstep(0.58, 0.96, t) * 0.58);
  }
  if (mode == 5) {
    return mix(mix(vec3(0.72, 0.80, 0.88), vec3(1.00, 0.92, 0.80), smoothstep(0.08, 0.56, t)), vec3(0.90, 1.00, 0.98), smoothstep(0.58, 0.96, t) * 0.50);
  }
  if (mode == 6) {
    return mix(mix(vec3(0.24, 0.00, 0.12), vec3(1.00, 0.00, 0.58), smoothstep(0.08, 0.52, t)), vec3(1.00, 0.42, 0.86), smoothstep(0.58, 0.96, t) * 0.55);
  }
  if (mode == 7) {
    return mix(mix(vec3(0.04, 0.00, 0.18), vec3(0.40, 0.08, 0.88), smoothstep(0.08, 0.52, t)), vec3(0.78, 0.18, 1.00), smoothstep(0.58, 0.96, t) * 0.50);
  }
  return palette(t, 0, 0.0);
}

vec2 panelUv(vec2 fragUv, out float inside, out float edge) {
  if (u_displayMode == 0) {
    inside = 1.0;
    edge = 0.0;
    return fragUv;
  }

  float screenAspect = u_resolution.x / u_resolution.y;
  float targetAspect = 0.265;
  vec2 size = vec2(targetAspect / screenAspect, 0.92);
  if (size.x > 0.54) {
    size.x = 0.54;
    size.y = size.x * screenAspect / targetAspect;
  }
  vec2 mn = 0.5 - size * 0.5;
  vec2 mx = 0.5 + size * 0.5;
  vec2 q = (fragUv - mn) / size;
  vec2 d = min(q, 1.0 - q);
  inside = step(0.0, d.x) * step(0.0, d.y);
  edge = inside * (1.0 - smoothstep(0.0, 0.018, min(d.x, d.y)));
  return q;
}

void main() {
  vec2 fragUv = (gl_FragCoord.xy - u_viewportOrigin) / u_resolution;
  float inside;
  float edge;
  vec2 uv = panelUv(fragUv, inside, edge);

  if (inside < 0.5) {
    float vignette = 1.0 - length(fragUv - 0.5) * 1.25;
    outColor = vec4(vec3(0.001, 0.002, 0.006) * max(vignette, 0.0), 1.0);
    return;
  }

  if (u_rotateSource == 1) {
    uv = vec2(uv.y, 1.0 - uv.x);
  }

  vec2 p = uv;
  float t = u_time * max(u_speed, 0.01);
  float visualAspect = u_visualAspect;

  vec2 coreP = uv;
  float hole = 0.0;
  float sink = 0.0;
  float lensBowl = 0.0;
  float innerInk = 0.0;
  float lensEnergy = 0.0;
  vec2 lensWarp = vec2(0.0);

  // Black-hole lensing: each dark circle bends the sampling domain before the fluid is generated.
  // The warp follows the circle velocity, so material in front is thrown into the wake.
  for (int i = 0; i < 3; i++) {
    if (i >= u_vortexCount) continue;
    vec2 vortexPos = u_vortexPos[i];
    if (u_rotateSource == 1) {
      vortexPos = vec2(vortexPos.y, 1.0 - vortexPos.x);
    }
    vec2 coreUv = coreP - vortexPos;
    // The fluid field and the displayed mesh do not share an aspect ratio.
    // Keep the V1 field tuning in u_visualAspect, but measure the event
    // horizon in the actual panel aspect so every black circle stays round.
    vec2 coreMetric = vec2(coreUv.x * u_vortexAspect, coreUv.y);
    float coreDist = length(coreMetric);
    float r = u_vortexRadius[i];
    float influence = 1.0 - smoothstep(r * 0.55, r * 2.50, coreDist);
    float mass = influence * (r * r) / (coreDist * coreDist + r * r * 0.34);
    mass = min(mass, 1.28);
    float horizonFade = smoothstep(r * 0.34, r * 0.78, coreDist);
    float flip = influence * horizonFade * (1.0 - smoothstep(r * 0.62, r * 2.50, coreDist));
    vec2 bendMetric = -coreMetric * flip * 0.48 * u_vortexStrength;
    bendMetric *= horizonFade;
    lensWarp += vec2(bendMetric.x / u_vortexAspect, bendMetric.y);
    lensEnergy += (flip + mass * 0.06) * horizonFade;

    float blackCore = 1.0 - smoothstep(r * 0.36, r * 0.43, coreDist);
    hole = max(hole, blackCore);
    innerInk = max(innerInk, 1.0 - smoothstep(r * 0.20, r * 0.38, coreDist));
    sink = max(sink, mass * 0.08 * (1.0 - blackCore));
    lensBowl = max(lensBowl, flip * 0.04 * (1.0 - blackCore));
  }

  float flowTurn = sin(t * 0.115) + 0.45 * sin(t * 0.047 + 1.7);
  float flowEpochTime = t * 0.070;
  float flowEpoch = floor(flowEpochTime);
  float epochBlend = smoothstep(0.18, 0.92, fract(flowEpochTime));
  float calmA = smoothstep(0.70, 0.90, hash12(vec2(flowEpoch, 8.73)));
  float calmB = smoothstep(0.70, 0.90, hash12(vec2(flowEpoch + 1.0, 8.73)));
  float calmGate = mix(calmA, calmB, epochBlend);
  float uniA = smoothstep(0.50, 0.72, hash12(vec2(flowEpoch, 2.17))) * (1.0 - calmA);
  float uniB = smoothstep(0.50, 0.72, hash12(vec2(flowEpoch + 1.0, 2.17))) * (1.0 - calmB);
  float uniGate = mix(uniA, uniB, epochBlend);
  float cellularGate = mix(
    smoothstep(0.56, 0.78, hash12(vec2(flowEpoch, 4.91))),
    smoothstep(0.56, 0.78, hash12(vec2(flowEpoch + 1.0, 4.91))),
    epochBlend
  );
  float surgeGate = mix(
    smoothstep(0.76, 0.94, hash12(vec2(flowEpoch, 6.34))),
    smoothstep(0.76, 0.94, hash12(vec2(flowEpoch + 1.0, 6.34))),
    epochBlend
  );
  float cellBoilGate = u_cellBoilMix;
  float cellStretchGate = u_cellStretchMix;
  float skinSurfaceGate = u_skinMix;
  float plainGate = 1.0 - clamp(u_flowMix.z + cellBoilGate + cellStretchGate, 0.0, 1.0);
  float forcedFlow = clamp(u_flowMix.x + u_flowMix.y + u_flowMix.z + u_flowMix.w + u_cellBoilMix + u_cellStretchMix, 0.0, 1.0);
  float autoFade = 1.0 - smoothstep(0.18, 0.92, forcedFlow);
  calmGate *= autoFade;
  uniGate *= autoFade;
  cellularGate *= autoFade;
  surgeGate *= autoFade;
  float waveMode = 0.5 + 0.5 * sin(t * 0.039);
  float cellMode = 0.5 + 0.5 * sin(t * 0.031 + 2.2);
  float divisionMode = pow(0.5 + 0.5 * sin(t * 0.021 + fbm(uv * 1.35) * 4.0), 3.0);
  float pulse = 0.5 + 0.5 * sin(t * 0.72 + fbm(uv * 2.4) * 2.6);
  calmGate = clamp(calmGate + u_flowMix.x, 0.0, 1.0);
  uniGate = clamp(uniGate + u_flowMix.y, 0.0, 1.0);
  cellularGate = clamp(cellularGate + u_flowMix.z + cellBoilGate + cellStretchGate, 0.0, 1.0);
  surgeGate = clamp(surgeGate + u_flowMix.w, 0.0, 1.0);
  float flowActivity = mix(1.0, 0.035, calmGate);
  waveMode = mix(waveMode, 1.0, uniGate * 0.85);
  divisionMode = mix(divisionMode, 1.0, cellularGate * 0.82 + cellBoilGate * 0.18);
  cellMode = mix(cellMode, 1.0, cellularGate * 0.72 + cellBoilGate * 0.20);
  pulse = mix(pulse, 1.0, surgeGate * 0.70);
  vec2 waveDir = normalize(vec2(sin(t * 0.041) * 0.7 + 0.9, cos(t * 0.037) * 0.6));
  float waveBend = fbm(uv * 3.0 + vec2(t * 0.014, -t * 0.010));
  float wave = sin(dot(uv, waveDir) * (12.0 + waveBend * 9.0) + t * (0.50 + waveMode * 0.55) + waveBend * 4.5);
  vec2 oilFlow = vec2(flowTurn * 0.22, cos(t * 0.083) * 0.11) * flowActivity;
  oilFlow += waveDir * wave * (0.010 + waveMode * 0.020 + uniGate * 0.075) * (1.0 - divisionMode * 0.45) * flowActivity;
  oilFlow += waveDir * uniGate * 0.16;
  vec2 oilShear = vec2((uv.y - 0.5) * sin(t * 0.071) * 0.20, (uv.x - 0.5) * cos(t * 0.053) * 0.10) * flowActivity * (1.0 - uniGate * 0.65);

  vec2 patchA = flowPatch(
    uv,
    vec2(0.52 + 0.19 * sin(t * 0.061), 0.24 + 0.14 * cos(t * 0.047)),
    normalize(vec2(cos(t * 0.19), sin(t * 0.13))),
    0.20 + 0.05 * sin(t * 0.043),
    t * 3.1
  );
  vec2 patchB = flowPatch(
    uv,
    vec2(0.47 + 0.17 * sin(t * 0.039 + 3.0), 0.70 + 0.12 * cos(t * 0.052)),
    normalize(vec2(-sin(t * 0.16), cos(t * 0.12))),
    0.17 + 0.04 * cos(t * 0.050),
    -t * 2.4
  );
  vec2 localSpill = patchA * (0.024 + 0.020 * pulse + surgeGate * 0.035) + patchB * (0.018 + 0.018 * (1.0 - pulse) + surgeGate * 0.026);
  localSpill *= mix(flowActivity, 2.4, surgeGate);

  p = uv + lensWarp + oilFlow + oilShear + localSpill;
  // Fluid: multiple motion regimes create waves, cell-like splitting, local spills, and a subtle pulse.
  vec2 warp = vec2(
    fbm(p * (2.45 + pulse * 0.28) + vec2(t * 0.038, -t * 0.026) + waveDir * waveMode * 0.35),
    fbm(p * (2.65 + cellMode * 0.38) + vec2(-9.4, 5.1) + vec2(-t * 0.033, t * 0.030))
  ) - 0.5;
  p += warp * (0.090 + pulse * 0.030 + surgeGate * 0.055) + localSpill * (0.48 + surgeGate * 0.62);

  vec2 q = p;
  q.x *= visualAspect * 2.9;
  float skinGate = cellularGate;
  // Material field: the oily domain comes first, then Voronoi is evaluated in
  // that bent space. This makes scales/cells stretch into chili-oil shapes
  // instead of drawing oil on top of unrelated Voronoi cells.
  float boilStability = cellBoilGate * cellularGate;
  float voronoiWarpAmount = mix(0.14 + surgeGate * 0.13, 0.060, skinGate);
  voronoiWarpAmount *= 1.0 - boilStability * 0.58;
  vec2 oilDomain = p + oilFlow * 0.42 + localSpill * 1.10 + lensWarp * 0.12;
  vec2 skinDomain = uv + lensWarp * 0.16 + warp * 0.10 + localSpill * 0.18;
  skinDomain = mix(skinDomain, uv + lensWarp * 0.10, boilStability * 0.72);
  oilDomain = mix(oilDomain, skinDomain, skinGate);
  vec2 flowDir = normalize(waveDir + vec2(
    fbm(uv * 1.7 + t * 0.010) - 0.5,
    fbm(uv * 1.9 - t * 0.012 + 4.0) - 0.5
  ) * 0.38);
  vec2 stretchDir = flowDir;
  vec2 stretchPerp = vec2(-stretchDir.y, stretchDir.x);
  vec2 centeredOil = oilDomain - 0.5;
  float stretchAmount = surgeGate * 0.24;
  vec2 vorUv = 0.5
    + stretchDir * dot(centeredOil, stretchDir) * (1.0 + stretchAmount)
    + stretchPerp * dot(centeredOil, stretchPerp) * (1.0 - stretchAmount * 0.20);
  float zoom = 1.0 + cellStretchGate * 1.45;
  vec2 zoomCenter = vec2(0.50 + 0.08 * sin(t * 0.037), 0.54 + 0.16 * cos(t * 0.029));
  vorUv = mix(vorUv, zoomCenter + (vorUv - zoomCenter) / zoom, cellStretchGate);
  vorUv += warp * mix(0.10, 0.034, skinGate) * (1.0 - cellStretchGate * skinGate * 0.55) * (1.0 - boilStability * 0.66);
  vec2 punchWarp = vec2(0.0);
  float punch = 0.0;
  vec2 pd0 = vec2((uv.x - 0.38) * visualAspect / 0.265, uv.y - 0.32);
  vec2 pd1 = vec2((uv.x - 0.62) * visualAspect / 0.265, uv.y - 0.56);
  vec2 pd2 = vec2((uv.x - 0.46) * visualAspect / 0.265, uv.y - 0.78);
  float pa0 = smoothstep(0.48, 0.98, sin(t * 1.25 + 1.7) * 0.5 + 0.5);
  float pa1 = smoothstep(0.48, 0.98, sin(t * 1.05 + 4.1) * 0.5 + 0.5);
  float pa2 = smoothstep(0.48, 0.98, sin(t * 0.92 + 6.2) * 0.5 + 0.5);
  float pm0 = exp(-dot(pd0, pd0) / 0.018) * pa0 * cellBoilGate;
  float pm1 = exp(-dot(pd1, pd1) / 0.022) * pa1 * cellBoilGate;
  float pm2 = exp(-dot(pd2, pd2) / 0.020) * pa2 * cellBoilGate;
  punchWarp += normalize(pd0 + vec2(0.0001)) * pm0 * 0.036;
  punchWarp += normalize(pd1 + vec2(0.0001)) * pm1 * 0.040;
  punchWarp += normalize(pd2 + vec2(0.0001)) * pm2 * 0.034;
  punch = max(pm0, max(pm1, pm2));
  punch *= 1.0 - smoothstep(0.18, 0.70, lensEnergy);
  punchWarp *= 1.0 - smoothstep(0.18, 0.70, lensEnergy);
  vorUv += punchWarp;
  vec2 vorWarp = vec2(
    fbm(vorUv * 2.2 + vec2(t * 0.020, -t * 0.014)),
    fbm(vorUv * 2.0 + vec2(-6.4, 3.1) + vec2(-t * 0.017, t * 0.019))
  ) - 0.5;
  vorWarp += (vec2(
    fbm(vorUv * 5.0 + vorWarp * 1.8 + 12.0),
    fbm(vorUv * 5.4 - vorWarp * 1.6 - 9.0)
  ) - 0.5) * mix(0.30, 0.105, skinGate) * (1.0 - cellStretchGate * skinGate * 0.50) * (1.0 - boilStability * 0.60);
  vec2 vorQ = vorUv + vorWarp * voronoiWarpAmount;
  vorQ.x *= visualAspect * mix(2.15 + surgeGate * 0.35, 2.55, skinGate);
  vorQ = mix(vorQ, vec2((uv.x - 0.5) * visualAspect * 2.55 + 0.5, uv.y), boilStability * 0.42);
  float preNoVortexBoil = 1.0 - smoothstep(0.020, 0.115, lensEnergy);
  vec2 pressureDirA = normalize(vec2(
    sin(uv.y * 8.0 + t * 0.21),
    cos(uv.x * 7.0 - t * 0.18)
  ) + 0.0001);
  vec2 pressureDirB = normalize(vec2(
    fbm(uv * vec2(2.2, 5.8) + vec2(-t * 0.012, t * 0.017)) - 0.5,
    fbm(uv * vec2(3.1, 4.6) + vec2(t * 0.016, t * 0.010) + 8.0) - 0.5
  ) + 0.0001);
  vec2 pressureDirC = normalize(mix(vec2(-pressureDirA.y, pressureDirA.x), pressureDirB, 0.45));
  float pressureCellA = fbm(uv * vec2(4.2, 10.5) + vec2(t * 0.010, -t * 0.012));
  float pressureCellB = fbm(uv * vec2(6.4, 7.2) + vec2(-t * 0.014, t * 0.009) + 17.0);
  vec2 pressureDirD = normalize(vec2(
    sin(uv.y * 9.0 + t * 0.31 + pressureCellB * 4.0),
    cos(uv.x * 7.0 - t * 0.27 + pressureCellA * 5.0)
  ) + pressureDirA * 0.25);
  float pressurePulseA = smoothstep(0.18, 0.92, sin(t * 0.82 + pressureCellA * 8.0) * 0.5 + 0.5);
  float pressurePulseB = smoothstep(0.24, 0.96, sin(t * 0.57 + pressureCellB * 10.5 + 2.4) * 0.5 + 0.5);
  float pressurePulseC = smoothstep(0.34, 0.98, sin(t * 1.08 + (pressureCellA - pressureCellB) * 7.0 + 5.1) * 0.5 + 0.5);
  float pressureMaskA = smoothstep(0.18, 0.78, pressureCellA) * (1.0 - smoothstep(0.92, 1.0, pressureCellA));
  float pressureMaskB = smoothstep(0.24, 0.72, pressureCellB) * (1.0 - smoothstep(0.86, 1.0, pressureCellB));
  float crossingMask = smoothstep(0.34, 0.80, pressureCellA + pressureCellB * 0.45);
  vec2 pressureWarp = (
    pressureDirA * pressurePulseA * pressureMaskA +
    pressureDirB * pressurePulseB * pressureMaskB * 0.72 +
    pressureDirC * pressurePulseC * pressureMaskA * pressureMaskB * 0.70 +
    pressureDirD * pressurePulseA * pressurePulseB * crossingMask * 0.52
  ) * preNoVortexBoil * cellBoilGate * cellularGate * 0.072;
  // Keep Cellular borders coherent during boil. The pulse should read as
  // lens/height pressure, not as melting Voronoi borders.
  vorQ += pressureWarp * 0.16;
  float vorMembrane;
  float vorFill;
  float vorRibs;
  float vorId;
  float vorCellScale = (3.25 + cellularGate * 2.75 + cellBoilGate * 3.0) * (1.0 - cellStretchGate * skinGate * 0.34);
  float stableCellTime = t * (1.0 - boilStability * 0.82);
  float vorDist = warpedVoronoi(vorQ * vorCellScale, stableCellTime, vorMembrane, vorFill, vorRibs, vorId);
  float baseVorMembrane = vorMembrane;
  // Boil: existing Voronoi cells rise and relax outside the black-hole lens
  // field. No extra colony layer is drawn; the current cell body gets height.
  float noVortexBoil = 1.0 - smoothstep(0.020, 0.115, lensEnergy);
  float boilId = vorId;
  float colonyField = vorFill;
  float boilRim = vorMembrane;
  float cellBeat = 0.5 + 0.5 * sin(
    t * (0.48 + vorId * 0.80)
    + vorId * 18.0
    + floor(vorId * 9.0)
    + pressureCellA * 2.2
    - pressureCellB * 1.6
  );
  float boilPulse = smoothstep(0.18, 0.96, cellBeat);
  boilPulse = pow(boilPulse, 1.35);
  float colonyRegion = smoothstep(0.18, 0.82, fbm(uv * 1.20 + vec2(t * 0.003, -t * 0.004)));
  float colonyMask = noVortexBoil * mix(0.74, 1.0, colonyRegion);
  float boilImpact = cellBoilGate * colonyMask * (0.22 + boilPulse * 0.92);
  float microMembrane = vorMembrane;
  float microFill = vorFill;
  float microRibs = vorRibs;
  float microId = vorId;
  vec2 idDir = normalize(vec2(hash12(vec2(vorId, 2.1)) - 0.5, hash12(vec2(vorId, 7.4)) - 0.5) + 0.0001);
  vec2 colonyDir = normalize(mix(idDir, pressureDirA + pressureDirB * 0.65 + pressureDirC * 0.55 + pressureDirD * 0.45, 0.56 + 0.34 * pressurePulseB) + 0.0001);
  vec2 cellLocal = vec2(dot(vorQ, colonyDir), dot(vorQ, vec2(-colonyDir.y, colonyDir.x)));
  float splitSeam = (1.0 - smoothstep(0.012, 0.055, abs(fract(cellLocal.x * (1.8 + vorId * 2.2) + vorId * 3.1) - 0.50))) * vorFill * boilImpact * smoothstep(0.78, 0.98, boilPulse) * 0.22;
  float colonyBulge = boilImpact * vorFill * (0.35 + vorFill * 0.82);
  float microDist = vorDist;
  float boilCells = colonyBulge * (0.88 + boilRim * 0.12);
  boilCells *= 1.0 - smoothstep(0.96, 1.0, vorMembrane);
  float boilBody = smoothstep(0.10, 0.66, boilCells);
  float lensRise = boilImpact * smoothstep(0.12, 0.88, vorFill) * (1.0 - smoothstep(0.86, 1.0, vorMembrane));
  vec2 lensGrad = vec2(dFdx(vorFill), dFdy(vorFill));
  vec2 lensDir = normalize(lensGrad * (0.55 + pressurePulseA * 0.28) + colonyDir * (0.0022 + pressurePulseB * 0.0030) + pressureDirC * pressurePulseC * 0.0024 + pressureDirD * crossingMask * 0.0020);
  float lensReturn = sin(boilPulse * 3.14159265);
  float directionFlutter = 0.72 + 0.28 * sin(t * 0.36 + vorId * 9.0 + pressureCellB * 3.0);
  vec2 boilLensWarp = lensDir * lensRise * lensReturn * directionFlutter * (0.095 + 0.155 * smoothstep(0.30, 0.95, vorFill));
  vorMembrane = max(vorMembrane, boilRim * boilImpact * 0.18);
  vorMembrane = max(vorMembrane, splitSeam * 0.18);
  vorRibs = max(vorRibs, boilRim * boilImpact * 0.16);
  float vorScaleMode = smoothstep(0.12, 0.88, cellularGate + surgeGate * 0.35);
  float stretchRemnant = smoothstep(0.58, 0.88, fbm(uv * 1.10 + flowDir * 0.36 + vec2(t * 0.008, -t * 0.005)));
  vorScaleMode *= mix(1.0, 0.46 + stretchRemnant * 0.20, cellStretchGate);
  vec2 skinQ = skinDomain;
  skinQ.x *= visualAspect * 2.9;
  q = mix(q, skinQ, skinGate * 0.86);
  q += boilLensWarp * (2.25 + cellularGate * 3.30);
  vec2 flowQ = vec2(sin(t * 0.093) * 0.55, cos(t * 0.067) * 0.30) + waveDir * wave * 0.22;
  float cellBlob = fbm(q * (2.75 + cellMode * 1.15) + flowQ + vec2(t * 0.034, -t * 0.042));
  float splitField = sin(cellBlob * 15.0 + fbm(q * 8.0 - t * 0.026) * 4.5 + t * 0.32);
  float cellWarp = fbm(q * (5.0 + cellMode * 1.6) + vec2(-4.0, 7.0) + warp * 2.7 + vec2(-t * 0.039, t * 0.032));
  float thick = fbm(q * (5.6 + pulse * 1.3) + vec2(sin(t * 0.040) * 0.55, t * 0.058) + cellBlob * (0.35 + cellMode * 0.42));
  float fineScale = mix(14.0, 7.5, plainGate);
  float fine = fbm(q * fineScale + warp * mix(2.8, 1.2, plainGate) + localSpill * mix(1.7, 0.35, plainGate) - vec2(t * 0.050, sin(t * 0.052) * 0.32));
  cellBlob = mix(cellBlob, vorFill * 0.62 + vorId * 0.38, vorScaleMode * 0.72);
  cellBlob = mix(cellBlob, vorFill * 0.62 + boilId * 0.18 + colonyBulge * 0.20, boilBody * 0.34);
  cellWarp = mix(cellWarp, 1.0 - vorMembrane * 0.58 + vorRibs * 0.22, vorScaleMode * 0.54);
  cellWarp = mix(cellWarp, max(cellWarp, 0.48 + colonyBulge * 0.64 - splitSeam * 0.22), boilBody * 0.56);
  thick = mix(thick, vorDist + vorRibs * 0.35, vorScaleMode * 0.45);
  thick = mix(thick, max(thick, 0.40 + colonyBulge * 0.70 - microDist * 0.08), boilBody * 0.46);
  float boil = (cellularGate * 0.32 + cellBoilGate * 1.75) * (
    0.5 + 0.5 * sin(fbm(q * (5.8 + cellBoilGate * 5.6) + vec2(t * 0.12, -t * 0.08) + microId * boilCells * 2.2) * 18.0 + t * (2.3 + cellBoilGate * 1.8))
  );
  float tubeField = sin(q.x * 13.0 + fbm(q * 3.0 + t * 0.030) * 7.0)
    + sin(q.y * 17.0 + fbm(q * 4.6 - t * 0.024) * 6.0)
    + sin((q.x + q.y) * 10.0 + thick * 8.0 + t * 0.40);
  float tubeLines = 1.0 - smoothstep(0.05, 0.42, abs(tubeField));
  float lineSuppression = 1.0 - vorScaleMode * 0.72;
  float tubeNetwork = tubeLines * cellularGate * 0.08 * lineSuppression * (1.0 - cellStretchGate * 0.92);
  float tubeCore = (1.0 - smoothstep(0.02, 0.16, abs(tubeField))) * 0.45
    * cellularGate * (0.58 + lineSuppression * 0.42);
  float bubbleField = fbm(q * (6.8 + cellBoilGate * 7.0) + vec2(sin(t * 0.35), cos(t * 0.29)) + cellBlob * 1.4 + vorId * cellBoilGate * 2.0 + microId * boilCells * 1.6);
  float heartbeat = 0.5 + 0.5 * sin(t * (2.15 + cellBoilGate * 1.9) + bubbleField * (8.0 + cellBoilGate * 4.0));
  heartbeat = smoothstep(0.28, 0.92, heartbeat);
  float bubblePush = smoothstep(0.48 - cellBoilGate * 0.10, 0.86, bubbleField) * (cellularGate + cellBoilGate * 0.85) * (0.38 + 0.62 * heartbeat);
  bubblePush = max(bubblePush, colonyBulge * (0.58 + heartbeat * 0.82));
  float vein = sin((q.y * 18.0 + thick * 8.5 + sin(q.x * 11.0 + t * 0.090) * 1.6 + wave * waveMode * 2.4));
  float bands = sin((q.x * 10.5 - q.y * 6.5) + thick * 10.0 + fine * 1.4 + splitField * cellMode * (0.9 + cellularGate * 1.8) + boil * 2.2 + sin(t * 0.060) * 1.7);
  float layer = smoothstep(-0.28, 0.46, bands + vein * 0.42);
  layer = mix(layer, smoothstep(-0.18, 0.62, sin((q.x * 2.6 + q.y * 1.8) + thick * 3.0 + t * 0.045)), plainGate * 0.72);
  float cellContour = fract(cellBlob * (4.2 + boilCells * 1.7) + cellWarp * (2.0 + boilCells * 0.55) + layer * 0.42 + microId * boilCells * 0.72);
  cellContour = mix(cellContour, fract(boilId * 4.7 + vorFill * 1.65 + boilRim * 0.28), boilBody * cellBoilGate * 0.12);
  float dividingMembrane = splitSeam * (0.72 + heartbeat * 0.28);
  float contourMembrane = 1.0 - smoothstep(0.018, 0.090, abs(cellContour - 0.50));
  contourMembrane *= 1.0 - cellularGate * (0.42 + cellBoilGate * 0.28);
  float stableMembrane = baseVorMembrane * vorScaleMode;
  float membrane = max(contourMembrane, stableMembrane);
  membrane = max(membrane, dividingMembrane * boilCells * 0.78);
  membrane = mix(membrane, max(boilRim * (0.72 + boilImpact * 0.14), splitSeam * 0.30), boilBody * cellBoilGate * 0.16);
  membrane = max(membrane, stableMembrane * (0.88 + cellBoilGate * 0.18));
  membrane = mix(membrane, membrane * 0.48 + smoothstep(0.42, 0.78, thick) * 0.18, skinSurfaceGate);
  membrane *= 1.0 - plainGate * 0.82;
  float whiteGel = smoothstep(0.78, 1.18, cellWarp + membrane * 0.38) * mix(1.0, 0.45, skinSurfaceGate);
  float blackPuddle = smoothstep(0.62, 0.91, fbm(q * 4.3 + 31.0)) * smoothstep(0.18, 0.76, 1.0 - cellWarp);
  blackPuddle = max(
    blackPuddle,
    smoothstep(0.56, 0.84, fbm(q * 5.2 + warp * 2.2 + vec2(t * 0.020, -t * 0.018))) * smoothstep(0.30, 0.92, 1.0 - thick) * 0.72
  );
  float blackSeason = smoothstep(0.20, 0.86, sin(t * 0.027 + hash12(vec2(floor(t * 0.045), 5.1)) * 4.0) * 0.5 + 0.5);
  blackPuddle = max(
    blackPuddle,
    smoothstep(0.46, 0.76, fbm(q * 7.2 + vec2(-t * 0.018, t * 0.015) + cellBlob * 1.6)) * smoothstep(0.22, 0.80, 1.0 - fine) * blackSeason
  );
  blackPuddle = max(blackPuddle, cellularGate * smoothstep(0.62, 0.92, 1.0 - bubbleField) * 0.34);
  blackPuddle = max(
    blackPuddle,
    vorScaleMode * vorMembrane * smoothstep(0.38, 0.88, 1.0 - vorId) * 0.38 * (1.0 - cellularGate * cellBoilGate * 0.64)
  );
  blackPuddle *= 1.0 - cellularGate * cellBoilGate * 0.34;
  blackPuddle *= 1.0 - stableMembrane * cellularGate * 0.20;
  blackPuddle *= mix(1.0, 0.28, plainGate);
  float darkChannel = smoothstep(0.48, 0.86, 1.0 - cellWarp) * (1.0 - membrane * 0.55) * (1.0 - whiteGel * 0.5);
  darkChannel = max(darkChannel, stableMembrane * (0.50 - cellularGate * cellBoilGate * 0.20));
  darkChannel *= 1.0 - boilBody * cellBoilGate * 0.58;
  darkChannel *= 1.0 - cellularGate * cellBoilGate * 0.18;
  darkChannel *= mix(1.0, 0.36, plainGate);
  // Organic depth: broad black-green vessels and small pores, closer to a
  // translucent skin/oil surface than a uniform Voronoi outline.
  vec2 vesselDir = normalize(vec2(0.32 + sin(t * 0.017) * 0.16, 1.0));
  vec2 vesselPerp = vec2(-vesselDir.y, vesselDir.x);
  vec2 vesselQ = vec2(dot(q, vesselDir), dot(q, vesselPerp));
  float vesselFlow = fbm(q * 1.35 + vec2(t * 0.010, -t * 0.008) + lensWarp * 0.35);
  float vesselLine = 1.0 - smoothstep(0.035, 0.22, abs(sin(vesselQ.x * 7.2 + vesselFlow * 5.6 + thick * 2.8)));
  vesselLine *= smoothstep(0.38, 0.76, fbm(q * 2.0 + vec2(-t * 0.009, t * 0.006)));
  vesselLine *= 1.0 - smoothstep(0.50, 0.86, whiteGel);
  float poreField = fbm(q * 9.0 + cellBlob * 2.2 + vec2(t * 0.018, -t * 0.015));
  float pores = smoothstep(0.72, 0.90, poreField) * smoothstep(0.28, 0.82, 1.0 - cellWarp);
  pores *= max(cellularGate, skinSurfaceGate) * (1.0 - plainGate * 0.70);
  vesselLine *= 1.0 + skinSurfaceGate * 0.65;
  pores *= 1.0 + skinSurfaceGate * 0.85;
  blackPuddle = max(blackPuddle, vesselLine * 0.56 + pores * 0.22);
  darkChannel = max(darkChannel, vesselLine * 0.72 + pores * 0.32);
  float noisyBoundary = 1.0 - smoothstep(0.018, 0.090, abs(fract(thick * 3.5 + fine * 1.2 + cellBlob * 1.8) - 0.5));
  noisyBoundary *= 1.0 - cellularGate * (0.36 + cellBoilGate * 0.24);
  float boundary = max(noisyBoundary, stableMembrane);
  boundary *= 1.0 - plainGate * 0.86;
  float cellIndex = floor((cellBlob * 5.5 + cellWarp * 3.0 + layer * 1.8 + vorId * vorScaleMode * 3.0)) / 8.0;
  float oil = fract(cellIndex + thick * 0.55 + fine * 0.22 + layer * 0.12);
  float divisionRegion = smoothstep(0.42, 0.78, fbm(uv * 1.9 + vec2(t * 0.006, -t * 0.007)));
  float divisionAmount = smoothstep(0.18, 0.82, divisionMode) * divisionRegion;
  float splitScale = mix(4.0, 8.5, cellMode) + boilCells * 5.5;
  float splitCell = fract((cellBlob * 1.35 + cellWarp * 0.95 + thick * 0.40) * splitScale);
  float splitMembrane = 1.0 - smoothstep(0.020, 0.095, abs(splitCell - 0.50));
  float splitFill = smoothstep(0.10, 0.36, splitCell) * (1.0 - smoothstep(0.64, 0.92, splitCell));
  float splitRibs = splitFill * (1.0 - smoothstep(0.06, 0.25, abs(sin(thick * 22.0 + cellWarp * 8.0 + t * 0.12 + boil * 1.8))));

  float analogBlackStyle = clamp(u_colorStyleMix, 0.0, 1.0);
  float contrastStyle = 1.0 - analogBlackStyle;
  float colorRate = mix(0.030, 0.055, contrastStyle);
  float colorEpoch = floor(t * colorRate);
  float colorPhase = fract(t * colorRate);
  float colorSwap = smoothstep(0.86, 0.98, hash12(vec2(colorEpoch, 12.4)));
  float colorSwapTarget = hash12(vec2(colorEpoch, 43.8)) * 1.45 - 0.36;
  float colorSwapEase = colorSwap * smoothstep(0.0, 0.28, colorPhase) * (1.0 - smoothstep(0.78, 1.0, colorPhase));
  float autoColor = float(u_colorMode == 0);
  float globalHue = (sin(t * 0.018) * 0.18 + sin(t * 0.007 + 2.1) * 0.14 + colorSwapTarget * colorSwapEase) * autoColor;
  float localHueDrift = fbm(uv * 1.2 + vec2(t * 0.006, -t * 0.004)) * mix(0.045, 0.22, contrastStyle + autoColor);
  // Color mode owns palette separation. Shape modes feed the coordinates, but
  // the color mode decides whether pigments stay restrained, vivid, or random.
  float pearlColorMode = float(u_colorMode == 5);
  float colorSeparation = mix(0.86, 0.46, analogBlackStyle);
  colorSeparation = mix(colorSeparation, 0.42, pearlColorMode);
  float colorBands = mix(8.0, 5.0, analogBlackStyle);
  float separatedOil = floor(fract(oil + layer * 0.22 + cellBlob * 0.10) * colorBands) / colorBands;
  float separatedUnder = floor(fract(oil + 0.43 + fine * 0.10) * colorBands) / colorBands;
  float colorEdge = smoothstep(0.42, 0.58, fract(oil * colorBands + thick * 0.18 + fine * 0.08));
  separatedOil = mix(oil, separatedOil, colorSeparation);
  separatedUnder = mix(oil + 0.42, separatedUnder, colorSeparation * 0.86);
  vec3 col = mix(palette(separatedOil + globalHue + localHueDrift, u_colorMode, u_time), analogPalette(separatedOil + globalHue + localHueDrift, u_colorMode), analogBlackStyle);
  vec3 under = mix(palette(separatedUnder + globalHue * 0.7, u_colorMode, u_time + 39.0), analogPalette(separatedUnder + globalHue * 0.7, u_colorMode), analogBlackStyle);
  vec3 cellColor = mix(
    palette(floor(fract(cellIndex + cellWarp * 0.18) * colorBands) / colorBands + localHueDrift + t * 0.010, u_colorMode, u_time + 12.0),
    analogPalette(floor(fract(cellIndex + cellWarp * 0.18) * colorBands) / colorBands + localHueDrift + t * 0.010, u_colorMode),
    analogBlackStyle
  );
  float accentField = fbm(q * 2.0 + warp * 0.42 + vec2(t * 0.014, -t * 0.010));
  float accentIsland = smoothstep(0.54, 0.74, accentField + 0.16 * sin(thick * 6.0 + t * 0.05));
  accentIsland *= 1.0 - smoothstep(0.86, 1.0, accentField);
  vec3 accentColor = contrastAccent(separatedOil + fine * 0.28 + localHueDrift, u_colorMode);
  col = mix(col, accentColor, contrastStyle * accentIsland * 0.42);
  cellColor = mix(cellColor, accentColor, contrastStyle * smoothstep(0.62, 0.90, cellWarp + accentField * 0.35) * 0.26);
  vec3 divisionBase = mix(vec3(0.92, 0.62, 0.24), vec3(0.52, 0.92, 0.56), smoothstep(0.18, 0.86, cellWarp + fine * 0.25));
  divisionBase = mix(divisionBase, vec3(1.0, 0.84, 0.44), splitRibs * 0.36);
  divisionBase *= 0.74 + 0.36 * splitFill;
  vec3 vorCellColor = mix(
    vec3(0.96, 0.62, 0.20),
    vec3(0.40, 0.95, 0.68),
    smoothstep(0.12, 0.92, vorId + cellWarp * 0.25)
  );
  vorCellColor = mix(vorCellColor, mix(palette(vorId + oil * 0.33 + localHueDrift, u_colorMode, u_time + 71.0), analogPalette(vorId + oil * 0.33 + localHueDrift, u_colorMode), analogBlackStyle), 0.42);
  vorCellColor *= 0.72 + vorFill * 0.40 + vorRibs * 0.18;
  col = mix(under * 0.42, col, max(colorEdge, 0.48 + 0.30 * layer));
  col = mix(col, cellColor, (0.24 + 0.24 * colorEdge) + 0.14 * smoothstep(0.35, 0.78, cellBlob));
  col = mix(col, mix(under, col, 0.56 + 0.18 * layer), plainGate * 0.72);
  col = mix(col, mix(palette(oil + 0.78, u_colorMode, u_time), analogPalette(oil + 0.78, u_colorMode), analogBlackStyle), boundary * 0.12);
  col = mix(col, vec3(0.56, 0.78, 0.66), membrane * (0.08 + analogBlackStyle * 0.035));
  col = mix(col, vec3(0.88, 0.96, 0.86), whiteGel * 0.045);
  col = mix(col, divisionBase, max(divisionAmount, boilCells * 0.28) * splitFill * 0.42);
  col = mix(col, vec3(0.012, 0.008, 0.004), max(splitMembrane * divisionAmount, splitSeam * 0.78) * 0.42);
  col = mix(col, vec3(0.07, 0.034, 0.014), max(splitRibs * divisionAmount, splitSeam * 0.38) * 0.24);
  col = mix(col, vec3(0.010, 0.007, 0.006), cellularGate * 0.14);
  vec3 boilBodyColor = mix(
    palette(boilId + localHueDrift + oil * 0.28, u_colorMode, u_time + 94.0),
    analogPalette(boilId + localHueDrift + oil * 0.28, u_colorMode),
    analogBlackStyle
  );
  float darkCellInterior = smoothstep(0.46, 0.86, blackPuddle + darkChannel * 0.72 + (1.0 - cellWarp) * 0.18);
  vec3 brightMembraneTint = mix(vec3(0.92, 0.96, 0.90), vec3(1.0, 0.78, 0.38), smoothstep(0.25, 0.85, vorId));
  vec3 darkMembraneTint = vec3(0.018, 0.009, 0.005);
  vec3 membraneTint = mix(darkMembraneTint, brightMembraneTint, darkCellInterior * (0.72 + cellBoilGate * 0.28));
  col = mix(col, boilBodyColor * (0.80 + colonyBulge * 0.42), boilBody * cellBoilGate * 0.38);
  col = mix(col, membraneTint, boilRim * boilImpact * 0.24);
  col += vec3(1.0, 0.80, 0.38) * pow(max(colonyBulge, 0.0), 2.3) * cellBoilGate * 0.18;
  vec3 skinTint = mix(vec3(0.035, 0.17, 0.075), vec3(0.00, 0.30, 0.24), smoothstep(0.20, 0.86, cellBlob));
  skinTint = mix(skinTint, vec3(0.03, 0.08, 0.20), smoothstep(0.58, 0.95, thick) * 0.45);
  col = mix(col, col * 0.42 + skinTint * 1.05, skinSurfaceGate * (0.34 + darkChannel * 0.18));
  vec3 tubeColor = mix(vec3(0.98, 0.72, 0.18), vec3(0.86, 0.08, 0.02), smoothstep(0.46, 0.90, oil));
  tubeColor = mix(tubeColor, contrastAccent(oil + 0.18 + localHueDrift, u_colorMode), contrastStyle * (0.26 + 0.18 * cellWarp));
  col = mix(col, tubeColor, tubeNetwork * (0.18 + bubblePush * 0.10));
  col += vec3(1.0, 0.78, 0.34) * tubeCore * (0.12 + bubblePush * 0.16);
  col = mix(col, vec3(0.012, 0.006, 0.004), cellularGate * (1.0 - tubeNetwork) * smoothstep(0.38, 0.82, 1.0 - cellWarp) * 0.24);
  // Voronoi composition: low warp reads as biological plates; high warp smears
  // the same cells into oil islands without drawing a regular grid.
  col = mix(col, vorCellColor, vorScaleMode * vorFill * (0.38 + cellularGate * 0.18));
  float edgeBrightWhenDark = smoothstep(0.42, 0.86, darkChannel + blackPuddle * 0.70);
  vec3 cellularEdgeColor = mix(
    vec3(0.004, 0.003, 0.002),
    mix(vec3(0.94, 0.96, 0.88), vec3(1.0, 0.70, 0.28), smoothstep(0.20, 0.90, vorId)),
    cellularGate * edgeBrightWhenDark * (0.55 + cellBoilGate * 0.35)
  );
  float continuousEdge = stableMembrane * cellularGate * (0.18 + cellBoilGate * 0.08);
  col = mix(col, cellularEdgeColor, max(vorScaleMode * vorMembrane * (0.13 + smoothstep(0.45, 0.95, 1.0 - vorId) * 0.14), continuousEdge));
  col += vec3(0.62, 0.88, 0.62) * vorRibs * vorScaleMode * 0.055;
  float blackMix = mix(0.40, 0.58, analogBlackStyle);
  blackMix = mix(blackMix, 0.46, pearlColorMode);
  vec3 deepOil = mix(vec3(0.002, 0.003, 0.007), vec3(0.005, 0.030, 0.014), smoothstep(0.20, 0.90, thick));
  col = mix(col, deepOil, blackPuddle * (blackMix + skinSurfaceGate * 0.10));
  col *= 1.0 - darkChannel * (0.44 + skinSurfaceGate * 0.16);
  float moodBlue = smoothstep(0.15, 0.75, sin(t * 0.013 + 0.4) * 0.5 + 0.5) * autoColor;
  float moodGreen = smoothstep(0.18, 0.82, sin(t * 0.011 + 2.5) * 0.5 + 0.5) * autoColor;
  float moodGold = smoothstep(0.20, 0.86, sin(t * 0.009 + 4.4) * 0.5 + 0.5) * autoColor;
  float moodWhite = pow(smoothstep(0.58, 0.98, sin(t * 0.006 + 1.3) * 0.5 + 0.5), 3.0) * autoColor;
  vec3 moodTint = normalize(vec3(0.20 + moodGold * 1.25, 0.28 + moodGreen * 1.10 + moodGold * 0.35, 0.24 + moodBlue * 1.35));
  col = mix(col, col * moodTint * 1.85, 0.30);
  float pearlMode = float(u_colorMode == 5);
  col = mix(col, vec3(0.92, 0.98, 1.0), moodWhite * smoothstep(0.52, 1.0, cellWarp + fine * 0.28) * 0.30);
  col = mix(col, palette(oil + 0.36 + localHueDrift, 0, u_time), pearlMode * (0.18 + boundary * 0.12 + splitRibs * 0.10));
  col = mix(col, vec3(0.94, 0.98, 1.0), pearlMode * whiteGel * 0.24);
  col = pow(max(col, 0.0), vec3(0.94));
  col = (col - 0.5) * mix(1.78, 1.46, skinSurfaceGate) + 0.5;
  float satLum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(satLum), col, 1.55);

  // Gloss/depth: height-derived normals create wet, raised fluid highlights.
  float height = cellBlob * 0.52 + thick * 0.48 + fine * 0.14 + membrane * 0.30 + layer * 0.16 + divisionAmount * splitFill * 0.40 + splitRibs * divisionAmount * 0.18 + boil * 0.18 + bubblePush * 0.62 + colonyBulge * 0.78 + lensRise * 1.75 + boilRim * boilImpact * 0.34 - splitSeam * 0.34 + tubeNetwork * 0.18 + vorMembrane * vorScaleMode * 0.50 + vorFill * vorScaleMode * 0.18 + vorRibs * vorScaleMode * 0.20;
  vec2 grad = vec2(dFdx(height), dFdy(height));
  vec3 normal = normalize(vec3(-grad * 34.0, 1.0));
  vec3 lightDir = normalize(vec3(-0.35, 0.5, 0.76));
  float spec = pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 62.0);
  spec += pow(max(dot(normal, lightDir), 0.0), 18.0) * 0.16;
  spec *= 1.0;

  // Glow: firefly-like emitters appear sparsely and blink with irregular timing.
  vec2 cell = floor(uv * vec2(12.0, 32.0));
  float sparkleSeed = hash12(cell);
  vec2 cellUv = fract(uv * vec2(12.0, 32.0)) - 0.5;
  float fireflyCount = smoothstep(0.94, 0.995, hash12(cell + floor(t * 0.025)));
  float blink = 0.5 + 0.5 * sin(t * (0.18 + sparkleSeed * 0.42) + sparkleSeed * 20.0);
  blink = pow(smoothstep(0.34, 1.0, blink), 3.0);
  float glint = exp(-dot(cellUv, cellUv) * 28.0) * fireflyCount * blink * u_fireflyEnabled * 0.78;
  float microGlow = pow(max(fine - 0.78, 0.0), 2.0) * 0.55 * u_fireflyEnabled;

  float darkInk = smoothstep(0.72, 0.97, fbm(q * 12.0 + 19.0)) * smoothstep(0.16, 1.0, fine);
  col *= 1.0 - darkInk * 0.58;
  col += vec3(1.0, 0.98, 0.92) * spec * 1.35;
  col += vec3(0.88, 0.97, 1.0) * (glint + microGlow * 0.25) * u_glow * 3.2;

  // Vortex: final event horizon mask. No painted halo; the visible effect is the warped background.
  col = mix(col, vec3(0.0), max(hole, innerInk * 0.86));

  // LED texture: thin display structure, clamped so high GUI values stay usable.
  float ledAmount = min(u_ledStrength, 0.72);
  vec2 ledUv = uv * vec2(180.0, 320.0);
  vec2 ledCell = abs(fract(ledUv) - 0.5);
  float gridLine = max(smoothstep(0.475, 0.5, ledCell.x), smoothstep(0.475, 0.5, ledCell.y));
  float dotMask = 1.0 - smoothstep(0.15, 0.49, length(ledCell));
  float scan = 0.965 + 0.035 * sin(uv.y * 1600.0);
  col *= mix(1.0, 0.88 + dotMask * 0.17, ledAmount);
  col *= mix(1.0, 1.0 - gridLine * 0.20, ledAmount);
  col *= mix(1.0, scan, ledAmount * 0.38);

  float vignette = 1.0 - smoothstep(0.25, 0.86, length(uv - 0.5));
  col *= 0.66 + 0.50 * vignette;
  col = pow(max(col, 0.0), vec3(0.92));

  outColor = vec4(sectorizeV1Color(col), 1.0);
}
`;
