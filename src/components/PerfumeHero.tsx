import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { perfumes } from '../data/perfumes';
import { ArrowIcon } from './ArrowIcon';

const TOTAL = perfumes.length;

export function PerfumeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const perfume = perfumes[activeIndex];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(rootRef.current, { opacity: 1 });
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => setIsAnimating(false),
      });

      timeline
        .fromTo(sceneRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .fromTo(glowRef.current, { opacity: 0, scale: 0.45 }, { opacity: 0.9, scale: 1, duration: 0.75 }, 0.2)
        .fromTo(stageRef.current, { opacity: 0, scaleX: 0.65, y: 18 }, { opacity: 1, scaleX: 1, y: 0, duration: 0.8 }, 0.45)
        .fromTo(spotlightRef.current, { opacity: 0 }, { opacity: 0.75, duration: 0.75 }, 0.65)
        .fromTo(bottleRef.current, { opacity: 0, y: 55, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 0.85)
        .fromTo('.brand-reveal', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.55 }, 1.08)
        .fromTo('.copy-name', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65 }, 1.28)
        .fromTo('.copy-tagline', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 1.48)
        .fromTo(['.copy-meta', controlsRef.current], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.06 }, 1.65);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const navigate = (direction: 1 | -1) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex = (activeIndex + direction + TOTAL) % TOTAL;
    const nextPerfume = perfumes[nextIndex];
    const exitX = direction * -72;
    const enterX = direction * 96;
    const root = rootRef.current;

    const timeline = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => setIsAnimating(false),
    });

    timeline
      .to(copyRef.current, { opacity: 0, x: -direction * 22, duration: 0.28 })
      .to(bottleRef.current, { opacity: 0, x: exitX, rotation: direction * -4, scale: 0.94, duration: 0.46 }, 0)
      .to(root, {
        '--scene-dark': nextPerfume.colors.dark,
        '--scene-primary': nextPerfume.colors.primary,
        '--scene-glow': nextPerfume.colors.glow,
        '--scene-light': nextPerfume.colors.light,
        '--scene-haze': nextPerfume.colors.haze,
        duration: 0.66,
      }, 0.12)
      .to(glowRef.current, { scale: 1.08, opacity: 0.82, duration: 0.34, yoyo: true, repeat: 1 }, 0.12)
      .to(stageRef.current, { filter: 'brightness(1.16)', duration: 0.32, yoyo: true, repeat: 1 }, 0.12)
      .add(() => {
        setActiveIndex(nextIndex);
        gsap.set(bottleRef.current, { x: enterX, rotation: direction * 5, scale: 0.94, opacity: 0 });
        gsap.set(copyRef.current, { x: direction * 22, opacity: 0 });
      }, 0.47)
      .to(bottleRef.current, { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.58, ease: 'power3.out' }, 0.5)
      .to(copyRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0.67);
  };

  return (
    <main
      ref={rootRef}
      className="hero"
      style={{
        '--scene-dark': perfume.colors.dark,
        '--scene-primary': perfume.colors.primary,
        '--scene-glow': perfume.colors.glow,
        '--scene-light': perfume.colors.light,
        '--scene-haze': perfume.colors.haze,
      } as React.CSSProperties}
    >
      <div ref={sceneRef} className="scene" aria-hidden="true">
        <div className="scene-vignette" />
        <div className="scene-haze scene-haze-left" />
        <div className="scene-haze scene-haze-right" />
        <div ref={spotlightRef} className="spotlight" />
        <div ref={glowRef} className="ambient-glow" />
      </div>

      <header className="site-header brand-reveal">
        <a className="wordmark" href="#top" aria-label="Maison Veyra — início">Maison Veyra</a>
        <nav aria-label="Navegação principal">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="top" className="hero-layout" aria-label={`Perfume ${perfume.name}`}>
        <div ref={copyRef} className="perfume-copy" aria-live="polite">
          <div className="copy-meta perfume-index"><span>{perfume.index}</span><i /> <span>03</span></div>
          <p className="copy-meta eyebrow">Eau de parfum · 75 ml</p>
          <h1 className="copy-name">{perfume.name}</h1>
          <p className="copy-tagline">{perfume.tagline}</p>
          <p className="copy-meta description">{perfume.description}</p>
          <div className="copy-meta notes" aria-label="Notas olfativas">
            {perfume.notes.map((note) => <span key={note}>{note}</span>)}
          </div>
          <a className="copy-meta primary-cta" href="#collection">Explorar coleção <span aria-hidden="true">↗</span></a>
        </div>

        <div className="product-stage">
          <div className="bottle-wrap">
            <img ref={bottleRef} className={`bottle bottle-${perfume.id}`} src={perfume.imagePath} alt={`Frasco do perfume ${perfume.name}`} />
          </div>
          <div ref={stageRef} className="stage" aria-hidden="true">
            <div className="stage-reflection" style={{ backgroundImage: `url(${perfume.imagePath})` }} />
            <div className="stage-top" />
            <div className="stage-edge" />
          </div>
        </div>

        <div ref={controlsRef} className="hero-controls">
          <button className="nav-arrow nav-previous" onClick={() => navigate(-1)} disabled={isAnimating} aria-label="Perfume anterior">
            <ArrowIcon direction="left" />
          </button>
          <div className="scene-dots" aria-hidden="true">
            {perfumes.map((item, index) => <span key={item.id} className={index === activeIndex ? 'is-active' : ''} />)}
          </div>
          <button className="nav-arrow nav-next" onClick={() => navigate(1)} disabled={isAnimating} aria-label="Próximo perfume">
            <ArrowIcon direction="right" />
          </button>
        </div>
      </section>

      <div className="edition-mark brand-reveal" aria-hidden="true">No. {perfume.index} — Olfactory study</div>
    </main>
  );
}
