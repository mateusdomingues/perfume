# DESIGN SYSTEM — MAISON VEYRA

# CORE VISUAL DIRECTION

Main concept:
"Luxury cinematic perfume showcase."

The website should feel closer to:
- a luxury fragrance campaign;
- a fashion editorial;
- a premium product launch;
- a cinematic product reveal.

It must NOT feel like:
- a SaaS landing page;
- a template;
- a common e-commerce;
- a generic AI-generated website.

---

# GLOBAL PALETTE

## Base
Background:
#050505

Dark surface:
#0B0B0D

Soft white:
#F4F1EA

Muted text:
#9B9B9F

Metal:
#C7C7C7

---

# PERFUME COLORS

## Azure Noctis
Primary:
#1648A8

Glow:
#2867E8

Dark accent:
#07152F

Light accent:
#9BBEFF

---

## Rouge Velours
Primary:
#8C1429

Glow:
#D52A49

Dark accent:
#2E070E

Light accent:
#F1909F

---

## Vert Éclipse
Primary:
#0F6A4E

Glow:
#19A36E

Dark accent:
#05271D

Light accent:
#85D7B5

---

# TYPOGRAPHY

Use one luxury editorial serif for major titles.

Suggested style:
- high contrast serif;
- elegant proportions;
- refined spacing.

Possible direction:
Cormorant Garamond / Bodoni-style / Canela-style equivalent.

Use one clean sans-serif for:
- labels;
- notes;
- buttons;
- secondary text.

Suggested style:
Manrope / Inter / Neue Haas-like equivalent.

---

# HERO LAYOUT

## Desktop composition

Viewport:
100vh minimum.

Hero should occupy the entire first screen.

### Product
- bottle centered horizontally;
- slightly above center vertically;
- dominant size;
- no container card around it.

### Stage
Below perfume:
- elliptical or circular platform;
- low profile;
- black polished material;
- subtle mirror reflection;
- thin luminous ring around edge.

### Background
Layered:
1. dark base;
2. atmospheric radial glow;
3. haze/fog layer;
4. spotlight cone;
5. optional subtle particle layer.

Do not use obvious background images unless necessary.

---

# PRODUCT SCALE

Desktop:
- visually large;
- roughly 38–52vh tall depending on bottle proportions.

Mobile:
- roughly 34–44vh tall.

The bottle must remain the visual protagonist.

---

# HERO TEXT

Suggested desktop arrangement:

Left side:
- perfume index;
- perfume name;
- tagline;
- short description;
- notes.

Center:
- perfume.

Right/lateral areas:
- navigation controls.

Alternatively, text can be positioned low-left if that creates stronger balance.

Do not center everything.

---

# BRAND HEADER

Header should be very minimal.

Left:
MAISON VEYRA

Right:
COLLECTION
ABOUT
or one minimal menu icon.

Header must not compete with the product.

Transparent over hero.

---

# NAVIGATION ARROWS

## Position
Left/right sides of hero.

## Shape
Circular or slightly oval.

## Style
- transparent dark background;
- thin border;
- subtle blur;
- no chunky UI.

## Hover
- scale to ~1.05;
- border becomes brighter;
- arrow shifts a few pixels;
- scene-colored subtle glow.

## Active/click
- quick scale compression;
- immediate transition response.

---

# PERFUME INDEX

Show a subtle indicator such as:

01 / 03

or:

01
02
03

Current perfume should be emphasized.

Keep this very clean.

---

# STAGE DESIGN

Platform:
- black;
- polished;
- low height;
- elliptical;
- subtle gradient/reflection.

Under bottle:
- soft shadow;
- controlled reflection;
- centered glow.

Edge:
thin luminous ring.

Ring color changes depending on current perfume.

---

# LIGHTING

Each scene uses 3 main light ideas.

## Key light
Top/front.

Strong enough to define bottle shape.

## Rim light
Back-left or back-right.

Uses current perfume accent color.

## Fill light
Very subtle.

Prevents black areas from disappearing completely.

---

# SCENE — AZURE NOCTIS

Background:
black transitioning into deep navy.

Primary glow:
blue behind bottle.

Light:
cool.

Fog:
cold thin haze.

Motion:
slow horizontal haze.

Feeling:
midnight, mystery, calm power.

---

# SCENE — ROUGE VELOURS

Background:
black transitioning into burgundy.

Primary glow:
deep red.

Light:
warmer and more dramatic.

Fog:
slightly denser than Azure.

Motion:
slow drifting atmospheric movement.

Feeling:
sensual, intense, elegant.

---

# SCENE — VERT ÉCLIPSE

Background:
black transitioning into emerald.

Primary glow:
green.

Light:
clean with emerald rim.

Atmosphere:
soft and slightly organic.

Avoid cliché jungle visuals.

Feeling:
natural luxury, freshness, confidence.

---

# INITIAL HERO ANIMATION

Use a GSAP timeline.

Suggested timeline:

0.0s:
hero exists but almost fully dark.

0.2s:
stage ambient glow begins.

0.5s:
stage fades/scales in.

0.7s:
spotlight increases.

0.9s:
perfume enters from slightly below with opacity 0.

1.1s:
perfume reaches main position.

1.3s:
brand/text begins revealing.

1.5s:
name enters.

1.7s:
tagline enters.

1.9s:
notes and navigation enter.

Total feel:
fast enough to avoid annoyance;
slow enough to feel premium.

---

# PERFUME CHANGE ANIMATION

Use one coordinated GSAP timeline.

Approximate duration:
0.9s to 1.3s.

## Exit
Current product:
- x: ±80px;
- rotation: ±4deg;
- scale: 0.94;
- opacity: 0.

Current text:
- x: ∓20px;
- opacity: 0;
- stagger very small.

## Scene
Start changing background early during transition.

Animate:
- background color / glow;
- platform ring;
- spotlight tint;
- haze tint.

Do not wait for the previous product to fully disappear.

## Entrance
Next product:
starts from opposite side:
- x: ±100px;
- rotation: ∓5deg;
- scale: 0.94;
- opacity: 0.

Moves to:
- x: 0;
- rotation: 0;
- scale: 1;
- opacity: 1.

Text enters after bottle starts settling.

---

# IDLE ANIMATION

Bottle:
vertical movement:
approximately 6–10px.

Duration:
4–6 seconds.

Ease:
sine.inOut.

Repeat:
infinite.

Yoyo:
true.

Optional:
very subtle rotationY around ±1–2 degrees.

Do not use excessive movement.

---

# MOUSE INTERACTION

Optional but recommended on desktop.

Bottle reacts subtly to pointer position.

Maximum motion:
- rotateX: ±2deg;
- rotateY: ±3deg;
- x/y: very small.

Stage and glow may react even less.

Disable this behavior on touch devices.

---

# SUPPORTING SECTION ANIMATIONS

Use ScrollTrigger with restraint.

Possible effects:
- mask reveal;
- staggered text;
- subtle image scale;
- perfume names sliding in;
- line expansion;
- opacity.

Do not make every element animate differently.

Maintain visual coherence.

---

# MOBILE EXPERIENCE

Hero remains the priority.

Mobile order:
1. brand/header;
2. perfume title;
3. product;
4. stage;
5. tagline / notes;
6. arrows.

Arrows can sit lower left/right.

Keep scene colors and lighting.

Reduce:
- haze complexity;
- particle count;
- pointer effects.

Maintain smooth performance.

---

# BUTTON STYLE

Primary CTA:
dark / transparent button with thin light border.

Hover:
current perfume color subtly fills/glows.

Use generous horizontal padding.

Do not use square buttons.

---

# VISUAL RULES

Always:
- high contrast;
- controlled highlights;
- large whitespace;
- premium spacing;
- consistent animation timing.

Avoid:
- cards everywhere;
- excessive borders;
- multiple gradients competing;
- giant blobs;
- generic neon cyberpunk;
- random floating geometric objects;
- overdone glassmorphism;
- huge paragraphs.

---

# FINAL VISUAL TARGET

The first impression should be:

"I am watching a luxury perfume commercial that I can interact with."

The hero is the portfolio piece.

Invest most design and animation effort there.