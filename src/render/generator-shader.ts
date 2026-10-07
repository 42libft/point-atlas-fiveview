export const v1AtlasVertexShader = /* glsl */ `
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;
export const panelVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const panelFragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uAtlas;
  uniform vec4 uAtlasRect;
  varying vec2 vUv;

  void main() {
    vec2 inset = vec2(0.0025);
    vec2 safeUv = mix(inset, vec2(1.0) - inset, vUv);
    vec2 atlasUv = uAtlasRect.xy + safeUv * uAtlasRect.zw;
    gl_FragColor = texture2D(uAtlas, atlasUv);
  }
`;
