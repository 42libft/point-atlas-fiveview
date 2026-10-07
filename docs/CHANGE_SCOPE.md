# Source scope

Point Atlas Fiveview contains the independent five-view authoring application, custom image-target AR preparation and automated checks. User masks drive the point-cloud geometry and appearance.

The source includes mask normalization, SDF/raster sampling, view blending, generic procedural color patterns, four display modes, JSON persistence, image-target validation and MindAR lifecycle cleanup. Procedural rendering code authored for an earlier project by the same owner is reused under this project's MIT license; its public source reference remains in the shader comment. No source image is included.

No artwork entry, artwork image, precompiled tracking target, fixed glyph data, alternate glyph mapping or color-vision-specific branch is included. Samples are generated from simple text, shapes and deterministic code. Git history, private workflow records and installed dependencies are excluded from source packages.

Unit-test MessagePack fixtures test the input schema only. The optional headless check separately compiles a generated image using the real MindAR compiler. Neither is a physical tracking-success claim.
