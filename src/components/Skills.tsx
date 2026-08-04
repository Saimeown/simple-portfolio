import Background from '../assets/skills-bg.svg';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const approachCards = [
  {
    title: 'Visual Systems',
    description:
      'Typography scale, spacing rhythm, and color strategy that keep interfaces expressive without sacrificing usability.'
  },
  {
    title: 'Interaction Design',
    description:
      'Motion cues, feedback loops, and state clarity that make products feel responsive, understandable, and alive.'
  },
  {
    title: 'Conversion Thinking',
    description:
      'Screen structures built for business intent: clear CTAs, focused messaging, and reduced friction in key flows.'
  }
];

const workflow = ['Discover', 'Direction', 'Wireframe', 'Visual Polish', 'Prototype'];

const Skills = () => {
  const titleReveal = useRevealOnScroll({ delay: 150 });
  const cardsReveal = useRevealOnScroll({ delay: 300 });
  const workflowReveal = useRevealOnScroll({ delay: 450 });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20" data-section="skills">
      <img
        src={Background}
        alt="Approach Background"
        className="absolute top-0 left-0 w-full min-h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-52">
        <div
          ref={titleReveal.ref}
          className={`text-center mt-24 mb-12 lg:mb-16 reveal-fade-up ${titleReveal.isRevealed ? 'revealed' : ''}`}
        >
          <p className="text-cyan-200 tracking-[0.2em] text-xs sm:text-sm uppercase font-sora font-semibold">How I Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-sora font-bold mt-3">
            Design Approach
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed">
            My process blends concept thinking and execution discipline so every interface feels intentional, clear, and memorable.
          </p>
        </div>

        <div
          ref={cardsReveal.ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 reveal-fade-up ${cardsReveal.isRevealed ? 'revealed' : ''}`}
        >
          {approachCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md p-6 lg:p-7 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <h3 className="text-xl lg:text-2xl font-sora font-bold text-white">{card.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>

        <div
          ref={workflowReveal.ref}
          className={`mt-10 lg:mt-12 rounded-2xl border border-white/20 bg-black/35 backdrop-blur-md p-5 lg:p-7 reveal-fade-up ${workflowReveal.isRevealed ? 'revealed' : ''}`}
        >
          <p id="skills-carousel-1" className="text-sm uppercase tracking-[0.16em] text-cyan-100 font-sora font-semibold mb-4">
            Workflow
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/90 font-sora text-xs sm:text-sm"
              >
                <span className="text-cyan-200">0{index + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
