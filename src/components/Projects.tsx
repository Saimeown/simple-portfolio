import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import KibblerVideo from '../../pics/kibbler.mp4';
import MatchwrkImage from '../../pics/Matchwrk.png';
import SanrioWorldImage from '../../pics/SanrioWorld.png';
import DevPortfolioImage from '../../pics/devportfolio.png';
import TometouVideo from '../../pics/tometou.mp4';
import TwoDPortfolioVideo from '../assets/2d-portfolio.mp4';
import WavrImage from '../assets/wavr - desktop.png';
import RestaurantImage from '../assets/restaurant.png';
import NagareVideo from '../assets/nagare.mp4';
import AutumnVacationImage from '../assets/FallVacation-optimized.jpg';
import ChattelImage from '../assets/chattel-optimized.jpg';

type ProjectLink = { label: string; url: string };

type ShowcaseProject = {
  id: string;
  order: number;
  name: string;
  statement: string;
  description: string;
  medium: 'video' | 'image';
  asset: string;
  links?: ProjectLink[];
  labels: string[];
  accent: string;
};

const projects: ShowcaseProject[] = [
  {
    id: 'showcase-autumn-vacation',
    order: 1,
    name: 'Autumn Vacation',
    statement: 'Seasonal escapes made simple to discover and book.',
    description: 'A warm, autumn-inspired travel booking interface that guides travelers from destination discovery to trip details and booking.',
    medium: 'image',
    asset: AutumnVacationImage,
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/fVhWInVJgX5O53b9t5CVDb/Autumn-Themed-Vacation-or-Travel-Booking-App--Community-?node-id=8102-12&p=f&t=kQcDzqXTgvVlBQ4D-0&scaling=scale-down-width&content-scaling=fixed&page-id=8102%3A11' }],
    labels: ['Travel booking', 'Mobile UI', 'Product design'],
    accent: '#ed6d22'
  },
  {
    id: 'showcase-kibbler',
    order: 8,
    name: 'Kibbler',
    statement: 'A calmer way to care for pets from anywhere.',
    description: 'A smart feeder interface concept built around clarity, dependable controls, and an approachable visual system.',
    medium: 'video',
    asset: KibblerVideo,
    links: [{ label: 'Live site', url: 'https://kibbler.pages.dev/' }],
    labels: ['IoT dashboard', 'Product UI', 'System design'],
    accent: '#e66a1f'
  },
  {
    id: 'showcase-wavr',
    order: 2,
    name: 'WAV.R',
    statement: 'Audio gear presented with the energy of the music.',
    description: 'A responsive storefront for headphones, earbuds, and music accessories with bold product storytelling.',
    medium: 'image',
    asset: WavrImage,
    links: [
      { label: 'Desktop', url: 'https://www.figma.com/proto/ACjZjuzPEDuXPJDfpGwAn6/WAV.R?node-id=403-3188&p=f&t=7UIHud7u8gAM7W1f-0&scaling=scale-down-width&content-scaling=fixed&page-id=403%3A2441' },
      { label: 'Mobile', url: 'https://www.figma.com/proto/ACjZjuzPEDuXPJDfpGwAn6/WAV.R?node-id=183-2000&p=f&t=7UIHud7u8gAM7W1f-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' }
    ],
    labels: ['E-commerce', 'Responsive UI', 'Product design'],
    accent: '#ff9d22'
  },
  {
    id: 'showcase-chattel',
    order: 3,
    name: 'Chattel',
    statement: 'Modern furniture for considered, comfortable spaces.',
    description: 'A furniture e-commerce website that pairs an atmospheric visual direction with clear shopping paths and approachable product discovery.',
    medium: 'image',
    asset: ChattelImage,
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/QzYeSYkZStVtoOTWmhcl95/Chattel?node-id=1-2&p=f&t=QUVNi7oLeTCx1RHP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' }],
    labels: ['Furniture e-commerce', 'Web design', 'Product UI'],
    accent: '#55bdb8'
  },
  {
    id: 'showcase-matchwrk',
    order: 4,
    name: 'Matchwrk',
    statement: 'A friendlier first step into finding the right talent.',
    description: 'A conversion-focused marketplace landing page with playful illustration and crisp message hierarchy.',
    medium: 'image',
    asset: MatchwrkImage,
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/2rpGH5XmGbYfgGS0KDANc9/Matchwrk?node-id=330-762&p=f&t=EYCuCb0Qs4gpBUho-0&scaling=scale-down-width&content-scaling=fixed&page-id=25%3A145' }],
    labels: ['Landing page', 'Marketing UI', 'Visual design'],
    accent: '#fca4d9'
  },
  {
    id: 'showcase-sanrioworld',
    order: 5,
    name: 'SanrioWorld',
    statement: 'A character portal with toy-like depth and charm.',
    description: 'A colorful claymorphism interface that keeps playful composition and everyday usability in balance.',
    medium: 'image',
    asset: SanrioWorldImage,
    links: [{ label: 'Prototype', url: 'https://www.figma.com/proto/mLerOGltkX0v4nUGMS2XvH/Claymorphism-Sanrio-Theme-UI-and-Assets?node-id=1-3&p=f&t=r0RMBPtKISyIPlYL-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1' }],
    labels: ['Claymorphism', 'Theme UI', 'Character product'],
    accent: '#ffc5d9'
  },
  {
    id: 'showcase-devportfolio',
    order: 6,
    name: 'devportfolio',
    statement: 'A monochrome portfolio built to make a strong entrance.',
    description: 'A typography-heavy design exploration focused on confidence, pace, and immersive first impressions.',
    medium: 'image',
    asset: DevPortfolioImage,
    links: [{ label: 'Live site', url: 'https://seamon.vercel.app' }],
    labels: ['Editorial UI', 'Monochrome', 'Portfolio'],
    accent: '#d8ddd2'
  },
  {
    id: 'showcase-2d-portfolio',
    order: 9,
    name: '2D Portfolio',
    statement: 'Personal work turned into an illustrated digital world.',
    description: 'A 2D-themed portfolio mockup with character-led art direction, motion, and a clear browsing flow.',
    medium: 'video',
    asset: TwoDPortfolioVideo,
    labels: ['2D art direction', 'Portfolio', 'Motion'],
    accent: '#65e6ff'
  },
  {
    id: 'showcase-tometou',
    order: 10,
    name: 'tometou',
    statement: 'Anonymous messages designed around emotional safety.',
    description: 'A low-friction social concept with a focused submission flow and deliberately gentle interaction patterns.',
    medium: 'video',
    asset: TometouVideo,
    labels: ['Social UI', 'Interaction flow', 'Concept'],
    accent: '#ff715b'
  },
  {
    id: 'showcase-cabs-korean',
    order: 11,
    name: 'CABS Korean',
    statement: 'A restaurant landing page with appetite and attitude.',
    description: 'A bold web concept for an unlimited samgyupsal experience, pairing direct navigation with energetic brand color.',
    medium: 'image',
    asset: RestaurantImage,
    labels: ['Restaurant web', 'Visual design', 'Landing page'],
    accent: '#ff3e7f'
  },
  {
    id: 'showcase-nagare',
    order: 7,
    name: 'Nagare',
    statement: 'Web design shaped through rhythm and movement.',
    description: 'A motion-led web study exploring pacing, visual transitions, and a more expressive browsing experience.',
    medium: 'video',
    asset: NagareVideo,
    links: [{ label: 'Live site', url: 'https://ink-flock.pages.dev/' }],
    labels: ['Web design', 'Motion design', 'Interaction'],
    accent: '#a78bfa'
  }
];

const orderedProjects = [...projects].sort((projectA, projectB) => projectA.order - projectB.order);

const MotionPreview = ({ project }: { project: ShowcaseProject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;

      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) setShouldLoad(true);
    }, { rootMargin: '250px 0px', threshold: 0.05 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isVisible) {
      void video.play().catch(() => {
        // Autoplay can be disabled by the visitor's browser settings.
      });
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? project.asset : undefined}
      loop
      muted
      playsInline
      preload="none"
      aria-label={`${project.name} motion preview`}
    />
  );
};

const ProjectMedia = ({ project }: { project: ShowcaseProject }) => (
  <div className="work-card__media" style={{ backgroundColor: project.accent }}>
    {project.medium === 'video' ? (
      <MotionPreview project={project} />
    ) : (
      <img src={project.asset} alt={`${project.name} interface preview`} loading="lazy" />
    )}
  </div>
);

const Projects = () => (
  <section className="work-panel" id="projects" data-section="projects">
    <div className="section-heading">
      <div className="section-heading__copy">
        <p><span /> Featured work</p>
        <h2>UI Design<br />Collection.</h2>
      </div>
      <div className="section-heading__shapes" aria-hidden="true">
        <span className="shape shape--sun" />
        <span className="shape shape--beam" />
        <span className="shape shape--diamond" />
        <span className="shape shape--coin" />
        <span className="shape shape--core" />
        <span className="shape shape--petal" />
        <span className="shape shape--dot" />
        <span className="shape shape--pillar" />
        <span className="shape shape--bowl" />
        <span className="shape shape--small-sun" />
        <span className="shape shape--slash" />
        <span className="shape shape--half" />
      </div>
    </div>

    <div className="work-grid">
      {orderedProjects.map((project, index) => (
        <article
          className="work-card"
          id={project.id}
          key={project.id}
          style={{ '--project-accent': project.accent } as CSSProperties}
        >
          <ProjectMedia project={project} />
          <div className="work-card__body">
            <div>
              <div className="work-card__meta">
                <p className="work-card__name">{project.name}</p>
                <span className="work-card__number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{project.statement}</h3>
              <p className="work-card__description">{project.description}</p>
              <div className="work-card__disciplines">
                <p>Design focus</p>
                <ul aria-label={`${project.name} disciplines`}>
                  {project.labels.map((label) => <li key={label}>{label}</li>)}
                </ul>
              </div>
            </div>

            <div className="work-card__footer">
              {project.links?.length ? (
                project.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} <FiArrowUpRight />
                  </a>
                ))
              ) : (
                <span>Concept study</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
