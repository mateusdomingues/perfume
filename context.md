# PROJECT CONTEXT — MAISON VEYRA

## Project
Maison Veyra

## Project type
Luxury perfume interactive landing page.

## Main objective
Create a highly visual, cinematic and premium landing page centered around three luxury perfumes.

This is NOT a traditional e-commerce project.

The main value of the project is the interactive hero experience:
- one perfume is shown at a time;
- the perfume sits above a premium stage/platform;
- cinematic lights illuminate the bottle;
- arrows allow navigation between perfumes;
- when the perfume changes, the whole environment changes with it.

The website must feel like a luxury product presentation, not like a generic carousel.

---

# MAIN CONCEPT

The first screen must immediately show the product.

The perfume is the main protagonist.

The hero should contain:

- perfume bottle centered prominently;
- premium dark stage/platform below the bottle;
- directional lighting;
- atmospheric background;
- perfume name;
- short tagline;
- olfactory notes;
- navigation arrows;
- subtle indicators showing that there are 3 perfumes.

The user can click left/right arrows to navigate.

Every perfume has its own:
- bottle;
- scene color;
- lighting;
- background atmosphere;
- text;
- fragrance notes;
- visual identity.

---

# BRAND

## Name
Maison Veyra

## Brand personality
- luxury;
- mysterious;
- contemporary;
- refined;
- exclusive;
- cinematic;
- minimal.

## Main visual positioning
Modern luxury perfumery.

Avoid excessive ornamentation.

The visual should feel expensive through:
- spacing;
- typography;
- light;
- composition;
- movement;
- restraint.

---

# PERFUME COLLECTION

Only 3 perfumes must exist in the first version.

Do not create more products.

---

## PERFUME 01 — AZURE NOCTIS

### Color identity
Deep blue.

### Mood
- cold;
- nocturnal;
- elegant;
- mysterious;
- calm;
- sophisticated.

### Main notes
- bergamot;
- iris;
- incense;
- ambergris;
- cedar.

### Scene
- black / dark blue background;
- deep blue glow behind product;
- subtle cold haze;
- white-blue spotlight;
- cool reflections on stage;
- restrained particles.

### Bottle
- dark transparent blue glass;
- silver metallic cap/details;
- minimal label;
- strong silhouette.

### Tagline
"O mistério do azul após a meia-noite."

---

## PERFUME 02 — ROUGE VELOURS

### Color identity
Deep red / burgundy.

### Mood
- sensual;
- intense;
- warm;
- seductive;
- luxurious;
- dramatic.

### Main notes
- damask rose;
- dark cherry;
- saffron;
- vanilla;
- musk.

### Scene
- deep black / burgundy background;
- red glow;
- warm side lighting;
- controlled atmospheric haze;
- ruby reflections on stage.

### Bottle
- dark red transparent glass;
- metallic rose / chrome details;
- elegant but visually strong.

### Tagline
"Intensidade sedutora em cada acorde."

---

## PERFUME 03 — VERT ÉCLIPSE

### Color identity
Emerald green.

### Mood
- exotic;
- fresh;
- noble;
- refined;
- distinctive;
- natural but luxurious.

### Main notes
- fig leaf;
- vetiver;
- sage;
- oak moss;
- sandalwood.

### Scene
- dark charcoal / emerald background;
- green atmospheric glow;
- soft directional beams;
- subtle botanical / organic feeling without literal leaves everywhere;
- green reflections on stage.

### Bottle
- dark transparent emerald glass;
- refined metallic cap;
- premium minimal label.

### Tagline
"Frescura nobre com profundidade marcante."

---

# EXPERIENCE FLOW

## Initial load
The page should begin dark.

Sequence:
1. stage appears subtly;
2. a small ambient glow turns on;
3. main spotlight activates;
4. perfume is revealed;
5. brand appears;
6. perfume title appears;
7. notes and controls appear.

The entrance should feel like a luxury reveal.

Do not create a long preloader.

---

# PRODUCT NAVIGATION

Navigation must work through:
- left arrow;
- right arrow.

Order:
1. Azure Noctis
2. Rouge Velours
3. Vert Éclipse

Navigation should loop:
- after Vert Éclipse → Azure Noctis;
- before Azure Noctis → Vert Éclipse.

---

# TRANSITION LOGIC

When changing perfume:

1. lock navigation temporarily;
2. current text fades/slides out;
3. current perfume slightly rotates and moves laterally;
4. bottle scales down slightly;
5. ambient light begins changing color;
6. stage glow transitions;
7. next bottle enters from opposite direction;
8. bottle settles in the center;
9. next text animates in;
10. navigation unlocks.

The transition must be coordinated.

It must NOT resemble a normal website carousel.

---

# IDLE MOTION

When no interaction is happening:
- subtle vertical floating motion;
- very small rotation / perspective movement;
- lighting shimmer;
- restrained haze motion.

The motion must remain elegant and subtle.

Do not make the bottle spin continuously.

---

# SUPPORTING SECTIONS

The hero is the priority.

Below it, create only a few elegant sections:

## Section 1 — Brand Manifesto
Short editorial section about Maison Veyra.

## Section 2 — The Collection
Visual overview of the 3 perfumes.

## Section 3 — Olfactory Composition
Highlight notes and mood of the collection.

## Section 4 — Final CTA
Strong closing section.

Do not create unnecessary sections.

---

# CTA

Primary CTA:
"Explorar coleção"

Optional secondary CTA:
"Descobrir a essência"

No cart.
No checkout.
No login.
No database.

---

# TECHNICAL INTENT

This project is a visual front-end showcase.

Priorities:
1. animation;
2. product presentation;
3. visual polish;
4. responsiveness;
5. performance.

Suggested stack:
- React or Next.js;
- TypeScript;
- GSAP;
- GSAP Timeline;
- optional ScrollTrigger for below-the-fold sections.

Avoid adding heavy dependencies without real need.

---

# IMPORTANT RESTRICTIONS

Do not:
- create more than 3 perfumes;
- turn it into an online store;
- create cart;
- create checkout;
- create authentication;
- create admin panel;
- create database;
- add unnecessary UI;
- use generic card-heavy layouts;
- use generic carousels;
- use excessive gradients;
- use excessive glassmorphism;
- add random visual elements.

The main visual idea must remain:
perfume + stage + lighting + animated scene transition.