export type AmbientParameters = Readonly<{
  density: number;
  galaxyConcentration: number;
  spread: number;
  particleSize: number;
  signalContrast: number;
  outerStars: number;
}>;

export const DEFAULT_AMBIENT_PARAMETERS: AmbientParameters = Object.freeze({
  density: 1,
  galaxyConcentration: 0.29,
  spread: 0.87,
  particleSize: 0.85,
  signalContrast: 1,
  outerStars: 0,
});
