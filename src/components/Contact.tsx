import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', website: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const isConfigured = serviceId && templateId && publicKey
        && serviceId !== 'your_service_id_here'
        && templateId !== 'your_template_id_here'
        && publicKey !== 'your_public_key_here';

      if (isConfigured) {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      } else {
        console.info('EmailJS is not configured. Form submission was simulated.', formData);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-panel" id="contact" data-section="contact">
      <div className="contact-panel__intro">
        <p className="contact-panel__eyebrow"><span /> Get in touch</p>
        <h2>Let’s make<br />something<br />memorable.</h2>
        <p>Have a website, product interface, or visual refresh in mind? Tell me where you want to take it.</p>

        <div className="contact-panel__links">
          <a href="mailto:simonbriangarcia@gmail.com" aria-label="Email Simon"><FiMail /></a>
          <a href="https://www.facebook.com/saimeown/" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
          <a href="https://www.instagram.com/saymese/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
        </div>
        <a className="contact-panel__email" href="mailto:simonbriangarcia@gmail.com">simonbriangarcia@gmail.com</a>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <p>Open to freelance projects, collaborations, and thoughtful conversations about design.</p>

        <label>
          <span>Name *</span>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          <span>Email *</span>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@email.com" autoComplete="email" required />
        </label>
        <label>
          <span>Website</span>
          <input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://" />
        </label>
        <label>
          <span>Message *</span>
          <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="What would you like to create?" rows={4} required />
        </label>

        {submitStatus === 'success' && <p className="contact-form__status" role="status">Thanks — your message is ready. I’ll get back to you soon.</p>}
        {submitStatus === 'error' && <p className="contact-form__status" role="alert">Something went wrong. Please email me directly instead.</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Say hello'} <FiArrowUpRight />
        </button>
      </form>
    </section>
  );
};

export default Contact;
