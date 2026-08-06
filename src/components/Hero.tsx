import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import EyePair from './EyePair';
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

type CarouselItem = {
  name: string;
  asset: string;
  medium: 'image' | 'video';
};

const leftCarousel: CarouselItem[] = [
  { name: 'Autumn Vacation', asset: AutumnVacationImage, medium: 'image' },
  { name: 'WAV.R', asset: WavrImage, medium: 'image' },
  { name: 'Kibbler', asset: KibblerVideo, medium: 'video' },
  { name: 'CABS Korean', asset: RestaurantImage, medium: 'image' },
  { name: 'tometou', asset: TometouVideo, medium: 'video' }
];

const rightCarousel: CarouselItem[] = [
  { name: 'Matchwrk', asset: MatchwrkImage, medium: 'image' },
  { name: '2D Portfolio', asset: TwoDPortfolioVideo, medium: 'video' },
  { name: 'SanrioWorld', asset: SanrioWorldImage, medium: 'image' },
  { name: 'Nagare', asset: NagareVideo, medium: 'video' },
  { name: 'devportfolio', asset: DevPortfolioImage, medium: 'image' }
];

const CarouselTrack = ({ items, direction }: { items: CarouselItem[]; direction: 'down' | 'up' }) => (
  <div className={`hero-carousel__column hero-carousel__column--${direction}`}>
    <div className="hero-carousel__track">
      {[...items, ...items].map((item, index) => (
        <div className="hero-carousel__item" key={`${direction}-${item.name}-${index}`}>
          {item.medium === 'video' ? (
            <video src={item.asset} autoPlay loop muted playsInline preload="metadata" />
          ) : (
            <img src={item.asset} alt="" loading="eager" />
          )}
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <div className="portfolio-fold" id="about" data-section="about">
    <header className="portfolio-hero">
      <p className="portfolio-hero__kicker">UI Designer · Philippines</p>
      <h1>
        Interfaces<br />
        people<br />
        remember.
      </h1>

      <div className="hero-carousel" aria-hidden="true">
        <CarouselTrack items={leftCarousel} direction="down" />
        <CarouselTrack items={rightCarousel} direction="up" />
      </div>

      <EyePair className="portfolio-hero__eyes" />

    </header>

    <section className="portfolio-intro" aria-labelledby="intro-title">
      <div className="portfolio-intro__topline">
        <h2 id="intro-title">Hello, I’m Simon.</h2>
        <div className="portfolio-intro__actions" aria-label="Social links">
          <a href="https://www.facebook.com/saimeown/" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
          <a href="https://www.instagram.com/saymese/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          <a href="mailto:simonbriangarcia@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <p>
        I’m a UI designer creating personality-rich websites, product interfaces, and motion-led digital experiences.
        I turn visual direction into clear, memorable screens that feel as good to use as they look.
      </p>
    </section>
  </div>
);

export default Hero;
