import { FiDownload, FiGrid, FiHome, FiMail } from 'react-icons/fi';
import ResumeFile from '../assets/saimeown.pdf';
import EyePair from './EyePair';

const Header = () => (
  <nav className="portfolio-nav" aria-label="Primary navigation">
    <a className="portfolio-nav__brand" href="#about" aria-label="Saimeown home">
      <EyePair variant="nav" />
      <span>SAIMEOWN</span>
    </a>

    <div className="portfolio-nav__links">
      <a href="#about" aria-label="About" data-label="About"><FiHome /></a>
      <a href="#projects" aria-label="Projects" data-label="Projects"><FiGrid /></a>
      <a href="#contact" aria-label="Contact" data-label="Contact"><FiMail /></a>
    </div>

    <a className="portfolio-nav__resume" href={ResumeFile} download="SIMON-PAMINTUAN-CV-UI.pdf">
      Resume <FiDownload />
    </a>
  </nav>
);

export default Header;
