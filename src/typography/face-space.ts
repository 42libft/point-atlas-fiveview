import type { FaceId } from "./view-blend";
const GLYPH_SCALE = .56;
const TOP_HEIGHT = .78;
const SIDE_CENTER_HEIGHT = .39;
const SIDE_OFFSET = .72;
export function mapGlyphPointToFace(
  face: FaceId,
  glyphX: number,
  glyphY: number,
  normalOffset = 0,
): readonly [number, number, number] {
  const x = glyphX * GLYPH_SCALE;
  const y = glyphY * GLYPH_SCALE;
  switch (face) {
    case "top":
      return [x, TOP_HEIGHT + normalOffset, -y];
    case "front":
      return [x, SIDE_CENTER_HEIGHT + y, SIDE_OFFSET + normalOffset];
    case "right":
      return [SIDE_OFFSET + normalOffset, SIDE_CENTER_HEIGHT + y, -x];
    case "back":
      return [-x, SIDE_CENTER_HEIGHT + y, -SIDE_OFFSET - normalOffset];
    case "left":
      return [-SIDE_OFFSET - normalOffset, SIDE_CENTER_HEIGHT + y, x];
  }
}

