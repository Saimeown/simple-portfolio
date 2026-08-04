import { FiExternalLink, FiPlay, FiLock } from 'react-icons/fi';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import KibblerVideo from '../../pics/kibbler.mp4';
import MatchwrkImage from '../../pics/Matchwrk.png';
import SanrioWorldImage from '../../pics/SanrioWorld.png';
import DevPortfolioImage from '../../pics/devportfolio.png';
import TometouVideo from '../../pics/tometou.mp4';
import SkillsWave from '../assets/skills-bg.svg';

type ShowcaseProject = {
  id: string;
  rank: string;
  name: string;
  tagline: string;
  description: string;
  medium: 'video' | 'image';
  asset: string;
  liveUrl?: string;
  labels: string[];
};

const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'showcase-kibbler',
    rank: '01',
    name: 'Kibbler',
    tagline: 'Smart feeder interface concept',
    description:
      'A product UI direction for an IoT pet-feeding experience with clear hierarchy, dashboard readability, and a trust-focused visual system.',
    medium: 'video',
    asset: KibblerVideo,
    labels: ['IoT Dashboard', 'System UI', 'Product Concept']
  },
  {
    id: 'showcase-matchwrk',
    rank: '02',
    name: 'Matchwrk',
    tagline: 'Talent marketplace landing page',
    description:
      'A conversion-ready landing page with soft gradient framing, playful illustration language, and strong first-screen message clarity.',
    medium: 'image',
    asset: MatchwrkImage,
    liveUrl:
      'https://www.figma.com/proto/2rpGH5XmGbYfgGS0KDANc9/Matchwrk?node-id=330-762&p=f&t=EYCuCb0Qs4gpBUho-0&scaling=min-zoom&content-scaling=fixed&page-id=25%3A145',
    labels: ['Landing Page', 'Marketing UI', 'Visual Storytelling']
  },
  {
    id: 'showcase-sanrioworld',
    rank: '03',
    name: 'SanrioWorld',
    tagline: 'Claymorphism character portal',
    description:
      'A colorful themed interface blending playful composition, toy-like depth, and UI controls that preserve readability across bright surfaces.',
    medium: 'image',
    asset: SanrioWorldImage,
    liveUrl:
      'https://www.figma.com/proto/mLerOGltkX0v4nUGMS2XvH/Claymorphism-Sanrio-Theme-UI-and-Assets?node-id=1-3&p=f&t=r0RMBPtKISyIPlYL-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1',
    labels: ['Claymorphism', 'Theme UI', 'Character Product']
  },
  {
    id: 'showcase-devportfolio',
    rank: '04',
    name: 'devportfolio',
    tagline: 'Monochrome portfolio exploration',
    description:
      'A high-contrast and typography-heavy portfolio layout designed for strong visual confidence and immersive first-impression impact.',
    medium: 'image',
    asset: DevPortfolioImage,
    liveUrl: 'https://seamon.vercel.app',
    labels: ['Editorial UI', 'Monochrome', 'Portfolio Concept']
  },
  {
    id: 'showcase-tometou',
    rank: '05',
    name: 'tometou',
    tagline: 'Anonymous message interface concept',
    description:
      'A social micro-product concept centered on emotional safety, clear submission flow, and low-friction interaction patterns.',
    medium: 'video',
    asset: TometouVideo,
    labels: ['Social UI', 'Interaction Flow', 'Concept Product']
  }
];

const Projects = () => {
  const titleReveal = useRevealOnScroll({ delay: 100 });

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-black" data-section="projects">
      <img
        src={SkillsWave}
        alt="Wave transition"
        className="pointer-events-none absolute top-0 left-0 w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover object-top z-0"
      />

      <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-52">
        <div
          ref={titleReveal.ref}
          className={`text-center mb-14 lg:mb-20 mt-20 sm:mt-24 lg:mt-28 reveal-fade-up ${titleReveal.isRevealed ? 'revealed' : ''}`}
        >
          <p className="text-cyan-200/90 tracking-[0.2em] text-xs sm:text-sm font-sora font-semibold uppercase">
            Showcase
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white">
            UI Design Collection
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
            Ranked works focused on visual direction, usability clarity, and memorable interaction patterns.
            Every piece here is treated as a product experience, not just a static mockup.
          </p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {showcaseProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                id={project.id}
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:border-cyan-300/40 ${
                  isEven ? '' : 'lg:translate-y-3'
                }`}
              >
                <div className="absolute -right-5 -top-10 text-[95px] sm:text-[120px] font-black text-white/10 leading-none select-none">
                  {project.rank}
                </div>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-stretch`}>
                  <div className="w-full lg:w-[58%]">
                    <div className="relative h-full min-h-[250px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden rounded-2xl border border-white/15 bg-black">
                      {project.medium === 'video' ? (
                        <video
                          src={project.asset}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <img
                          src={project.asset}
                          alt={`${project.name} preview`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="w-full lg:w-[42%] flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90 font-sora font-semibold">#{project.rank}</p>
                      <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-white font-sora font-extrabold">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-lg text-rose-100/95 font-sora font-medium">{project.tagline}</p>
                      <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.labels.map((label) => (
                          <span
                            key={`${project.id}-${label}`}
                            className="rounded-full border border-white/25 px-3 py-1 text-xs sm:text-sm text-white/80 font-sora"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 font-sora font-semibold text-sm transition-all duration-300 hover:bg-cyan-200"
                        >
                          <FiExternalLink className="h-4 w-4" />
                          Live Preview
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/30 text-white/80 px-4 py-2.5 font-sora font-semibold text-sm">
                          <FiLock className="h-4 w-4" />
                          Not Live Yet
                        </span>
                      )}

                      {project.medium === 'video' && (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 text-white/80 px-4 py-2.5 font-sora font-semibold text-sm">
                          <FiPlay className="h-4 w-4" />
                          Motion Preview
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
