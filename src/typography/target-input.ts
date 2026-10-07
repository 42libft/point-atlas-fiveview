import type { FaceId } from "./view-blend";
/** Generic positions accepted by the inherited membership generator. */
export type GlyphTargetInput = { byFace: Readonly<Record<FaceId, { positions: Float32Array }>> };
