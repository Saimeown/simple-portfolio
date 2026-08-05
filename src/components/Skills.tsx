import { FiArrowRight, FiLayers, FiMousePointer, FiTrendingUp } from 'react-icons/fi';

const capabilities = [
  {
    icon: FiLayers,
    title: 'Visual systems with character',
    description: 'Type, color, spacing, and reusable components shaped into one recognizable product language.'
  },
  {
    icon: FiMousePointer,
    title: 'Interactions that explain themselves',
    description: 'Useful motion, clear feedback, and interface states that make every next step feel natural.'
  },
  {
    icon: FiTrendingUp,
    title: 'Design grounded in outcomes',
    description: 'Focused messages and purposeful journeys that support both the user and the business behind the screen.'
  }
];

const workflow = ['Discover', 'Direction', 'Wireframe', 'Visual design', 'Prototype', 'Refine'];

const Skills = () => (
  <>
    <section className="process-band" aria-label="Design workflow">
      <div className="process-band__heading">
        <h2>How I work</h2>
        <p>A practical process with room for play, built to move from a rough idea to an interface ready to show.</p>
      </div>
      <div className="process-band__track">
        {[...workflow, ...workflow].map((step, index) => (
          <span key={`${step}-${index}`}>{step}<FiArrowRight /></span>
        ))}
      </div>
    </section>

    <section className="capabilities-panel">
      <h2>What I bring</h2>
      <div className="capabilities-grid">
        {capabilities.map(({ icon: Icon, title, description }, index) => (
          <article key={title}>
            <span className="capabilities-grid__index">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Skills;
