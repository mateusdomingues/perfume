# TASKS — MAISON VEYRA

Execute tasks in order.

Do not expand the scope.

Do not invent extra features.

---

# PHASE 01 — PROJECT BASE

- inspect existing project structure;
- keep current framework if already initialized;
- use TypeScript;
- create clean component structure;
- confirm project runs locally;
- install GSAP only if not already available;
- do not install unnecessary packages.

---

# PHASE 02 — PERFUME DATA MODEL

Create one centralized data file for exactly 3 perfumes.

Each perfume must contain:
- id;
- index;
- name;
- tagline;
- description;
- notes;
- scene colors;
- image path;
- optional UI accent colors.

Perfumes:
1. Azure Noctis
2. Rouge Velours
3. Vert Éclipse

Do not hardcode the same perfume data across multiple components.

---

# PHASE 03 — HERO STRUCTURE

Create the hero as the main experience.

Required elements:
- full viewport hero;
- minimal header;
- product area;
- stage/platform;
- atmospheric background;
- spotlight/glow;
- perfume information;
- perfume index;
- left navigation arrow;
- right navigation arrow;
- CTA.

Do not create supporting sections before the hero is functional.

---

# PHASE 04 — STAGE

Create a premium stage/platform under the perfume.

Required:
- elliptical/circular shape;
- dark polished finish;
- subtle reflection;
- soft product shadow;
- colored light ring;
- color ring linked to current perfume.

It must feel like a physical presentation pedestal.

---

# PHASE 05 — SCENE SYSTEM

Create a dynamic scene system controlled by active perfume.

Azure:
blue.

Rouge:
red.

Vert:
green.

On product change update:
- main background;
- radial glow;
- spotlight tint;
- stage ring color;
- haze color;
- UI accent.

Use smooth interpolation/transitions.

No abrupt background swapping.

---

# PHASE 06 — INITIAL REVEAL

Implement initial GSAP entrance timeline.

Sequence:
1. ambient glow;
2. stage;
3. spotlight;
4. perfume;
5. brand;
6. perfume name;
7. tagline;
8. notes;
9. arrows / CTA.

Keep full sequence concise and premium.

---

# PHASE 07 — NAVIGATION

Implement:
- previous;
- next;
- looping navigation.

Prevent navigation spam.

While a transition is playing:
- lock controls.

Unlock once transition completes.

---

# PHASE 08 — PERFUME TRANSITION

Build one reusable transition timeline.

Exit current perfume:
- lateral movement;
- slight rotation;
- slight scale reduction;
- fade.

Change scene during exit.

Enter next perfume:
- opposite lateral movement;
- opposite slight rotation;
- fade;
- scale back to 1.

Animate text independently but synchronized.

The animation must feel like a scene transition, not a carousel.

---

# PHASE 09 — IDLE MOVEMENT

Add subtle infinite bottle motion.

Required:
- slow vertical float;
- smooth sine easing;
- very small distance.

Optional:
- tiny 3D rotation.

Pause / control animations correctly when product changes.

Do not create animation conflicts.

---

# PHASE 10 — POINTER PARALLAX

Desktop only.

Add very subtle mouse-reactive movement to:
- perfume;
- glow;
- optional spotlight.

Movement must be small.

Disable on:
- touch;
- small screens;
- prefers-reduced-motion when appropriate.

---

# PHASE 11 — RESPONSIVE HERO

Optimize:
- desktop;
- tablet;
- mobile.

Ensure:
- perfume does not overflow;
- stage stays visually connected;
- arrows remain accessible;
- text remains readable;
- scene lighting is still visible;
- no horizontal scroll.

---

# PHASE 12 — SUPPORTING SECTIONS

Only after hero is complete.

Create:

## Manifesto
Short premium editorial copy.

## Collection
Show the three perfumes.

## Composition
Display fragrance notes elegantly.

## Final CTA
Strong brand closing.

Keep them visually secondary to hero.

---

# PHASE 13 — SCROLL ANIMATION

Use ScrollTrigger for supporting sections.

Use:
- reveal;
- translate;
- opacity;
- mask;
- restrained stagger.

Avoid excessive animation.

---

# PHASE 14 — PERFORMANCE

Review:
- image sizes;
- animation loops;
- unnecessary re-renders;
- resize handling;
- mobile effects;
- GSAP cleanup;
- event listener cleanup.

Ensure smooth interaction.

---

# PHASE 15 — FINAL QA

Check:

- all 3 perfumes work;
- arrows loop correctly;
- rapid clicks do not break state;
- colors update correctly;
- texts update correctly;
- stage updates correctly;
- no layout shifts;
- no console errors;
- responsive behavior;
- mobile performance;
- build passes.

---

# STOP CONDITION

When all tasks above are complete:

1. run the project build;
2. fix only build/type errors;
3. report:
   - files created;
   - files modified;
   - dependencies added;
   - build status;
   - how to run locally.

Do NOT deploy.

Do NOT push to Git.

Do NOT create a repository.

Do NOT keep modifying the project after reporting completion.