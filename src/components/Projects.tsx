import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import KibblerVideo from '../../pics/kibbler.mp4';
import MatchwrkImage from '../../pics/Matchwrk.png';
import SanrioWorldImage from '../../pics/SanrioWorld.png';
import DevPortfolioImage from '../../pics/devportfolio.png';
import TwoDPortfolioVideo from '../assets/2d-portfolio.mp4';
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
  accent: string;
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
    labels: ['IoT dashboard', 'System UI', 'Product concept'],
    accent: 'bg-[#c8ff4d]'
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
    labels: ['Landing page', 'Marketing UI', 'Visual storytelling'],
    accent: 'bg-[#ff8ed4]'
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
    labels: ['Claymorphism', 'Theme UI', 'Character product'],
    accent: 'bg-[#ffc5d9]'
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
    labels: ['Editorial UI', 'Monochrome', 'Portfolio concept'],
    accent: 'bg-[#f2f2f2]'
  },
  {
    id: 'showcase-2d-portfolio',
    rank: '05',
    name: '2D Portfolio',
    tagline: 'A playful, illustrated portfolio world',
    description:
      'A 2D-themed portfolio mockup that turns personal work into a character-led digital space, balancing expressive art direction with a clear browsing flow.',
    medium: 'video',
    asset: TwoDPortfolioVideo,
    labels: ['2D art direction', 'Portfolio mockup', 'Motion preview'],
    accent: 'bg-[#65e6ff]'
  },
  {
    id: 'showcase-tometou',
    rank: '06',
    name: 'tometou',
    tagline: 'Anonymous message interface concept',
    description:
      'A social micro-product concept centered on emotional safety, clear submission flow, and low-friction interaction patterns.',
    medium: 'video',
    asset: TometouVideo,
    labels: ['Social UI', 'Interaction flow', 'Concept product'],
    accent: 'bg-[#ff715b]'
  }
];

const Projects = () => {
  const titleReveal = useRevealOnScroll({ delay: 100 });

  return (
    <section className="projects-section relative w-full overflow-hidden bg-black py-20 lg:py-28" data-section="projects">
      <img
        src={SkillsWave}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[180px] w-full object-cover object-top sm:h-[220px] lg:h-[260px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-20 xl:px-28">
        <div
          ref={titleReveal.ref}
          className={`mb-12 mt-20 border-b border-white/20 pb-7 sm:mt-24 lg:mb-16 lg:mt-28 lg:pb-10 reveal-fade-up ${titleReveal.isRevealed ? 'revealed' : ''}`}
        >
          <h2 className="font-sora text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            UI Design Collection
          </h2>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {showcaseProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                id={project.id}
                key={project.id}
                className="project-card group relative overflow-hidden border border-white/[0.14] bg-[#0a0a0a]"
              >
                <div className={`absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-[0.18] transition-transform duration-700 ease-out group-hover:scale-x-100 ${project.accent}`} />

                <div className={`grid min-h-[520px] lg:grid-cols-12 ${isEven ? '' : 'lg:[&_.project-copy]:order-first'}`}>
                  <div className={`project-media relative min-h-[280px] overflow-hidden bg-[#111] sm:min-h-[380px] lg:col-span-7 lg:min-h-[560px] ${isEven ? '' : 'lg:order-last'}`}>
                    {project.medium === 'video' ? (
                      <video
                        src={project.asset}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={`${project.name} motion preview`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                      />
                    ) : (
                      <img
                        src={project.asset}
                        alt={`${project.name} interface preview`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-white/20 bg-black/60 px-3 py-2 font-sora text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:bottom-5 sm:left-5">
                      {project.medium === 'video' && <FiPlay className="h-3 w-3 fill-current" />}
                      {project.medium === 'video' ? 'Playing preview' : 'Interface still'}
                    </div>
                  </div>

                  <div className="project-copy relative flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10 xl:p-12">
                    <span className="project-rank pointer-events-none absolute right-5 top-3 select-none font-sora text-[5.5rem] font-extrabold leading-none sm:right-7 sm:text-[7rem] lg:right-8 lg:top-5 lg:text-[8.5rem]">
                      {project.rank}
                    </span>

                    <div className="relative z-10">
                      <p className="font-sora text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        Project {project.rank} / {project.medium === 'video' ? 'Motion' : 'UI design'}
                      </p>
                      <h3 className="mt-16 break-words font-sora text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:mt-24 lg:text-5xl xl:text-6xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 max-w-md font-sora text-base font-medium leading-snug text-white/90 sm:text-lg">
                        {project.tagline}
                      </p>
                      <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-[15px]">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-10">
                      <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-5" aria-label={`${project.name} disciplines`}>
                        {project.labels.map((label) => (
                          <li key={`${project.id}-${label}`} className="flex items-center gap-2 font-sora text-[10px] font-medium uppercase tracking-[0.12em] text-white/50 sm:text-[11px]">
                            <span className={`h-1.5 w-1.5 rounded-full ${project.accent}`} />
                            {label}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link inline-flex items-center gap-3 font-sora text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            aria-label={`Open ${project.name} live preview in a new tab`}
                          >
                            View live project
                            <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <p className="flex items-center gap-3 font-sora text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                            <span className="relative flex h-2 w-2">
                              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-40 ${project.accent}`} />
                              <span className={`relative inline-flex h-2 w-2 rounded-full ${project.accent}`} />
                            </span>
                            Concept study
                          </p>
                        )}
                      </div>
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
