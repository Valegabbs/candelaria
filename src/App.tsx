import { useState, type FormEvent } from 'react'
import { ArrowDown, ArrowUpRight, ChevronDown, MapPin, Menu, MessageCircle, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import AnimatedScroll from './components/ui/animated-scroll'
import './App.css'

const whatsappNumber = '5511910000776'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Colégio Candelária', href: 'https://iecandelaria.com.br/' },
  { label: 'EPA', href: 'https://escolapaulistaagrimensura.org.br/' },
  { label: 'FEASP', href: 'https://feasp.edu.br/' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contato', href: '#contato' },
]

const schools = [
  { title: 'Colégio Candelária', kicker: 'Da base para a vida', description: 'Do Berçário ao Ensino Médio.', image: '/assets/colegio-logo.png', tags: ['Educação Infantil', 'Fundamental', 'Ensino Médio'], button: 'Conheça o Colégio', url: 'https://iecandelaria.com.br/', theme: 'school' },
  { title: 'EPA - Escola Paulista de Agrimensura', kicker: 'Técnica que abre caminhos', description: 'Formação técnica em Agrimensura.', image: '/assets/epa-logo.png', tags: ['Prática de campo', 'Tecnologia', 'Empregabilidade'], button: 'Conheça a EPA', url: 'https://escolapaulistaagrimensura.org.br/', theme: 'epa' },
  { title: 'FEASP', kicker: 'Conhecimento que transforma', description: 'Graduação e Pós-Graduação.', image: '', tags: ['Engenharia Cartográfica e de Agrimensura', 'Graduação em Pedagogia', 'Georreferenciamento de Imóveis Rurais e Urbanos', 'Pós-Graduação Educação Inclusiva', 'Psicopedagogia', 'Pós-Graduação Práticas de Libras'], button: 'Conheça a FEASP', url: 'https://feasp.edu.br/', theme: 'feasp' },
]

const socialGroups = [
  { name: 'FEASP', links: [{ label: 'Facebook FEASP', href: 'https://web.facebook.com/faculdadefeasp/', icon: FaFacebookF }, { label: 'Instagram FEASP', href: 'https://www.instagram.com/stories/faculdadefeasp/', icon: FaInstagram }] },
  { name: 'Escola Técnica Paulista de Agrimensura', links: [{ label: 'Facebook EPA', href: 'https://web.facebook.com/EscolaPaulistaDeAgrimensura/', icon: FaFacebookF }, { label: 'Instagram EPA', href: 'https://www.instagram.com/epa_agrimensura/', icon: FaInstagram }] },
  { name: 'Colégio Candelária', links: [{ label: 'Facebook Colégio Candelária', href: 'https://web.facebook.com/iecandelaria/', icon: FaFacebookF }, { label: 'Instagram Colégio Candelária', href: 'https://www.instagram.com/ie_candelaria/', icon: FaInstagram }] },
]

function InstitutionLogo({ school }: { school: typeof schools[number] }) {
  return school.image ? <img src={school.image} alt={`Logo ${school.title}`} /> : <strong className="logo-fallback">FEASP</strong>
}

function InstitutionsScroll() {
  return <section id="instituicoes" className="institutions">
    <div className="section-heading"><p className="section-kicker">Uma trajetória sem interrupções</p>
      <h2>Três instituições.<br/><em>Um caminho completo.</em></h2><p>Integram a UniCandelária</p></div>
    <div className="cards-grid">{schools.map(school => <article className={`school-card ${school.theme}`} key={school.title}>
      <div className="card-image"><InstitutionLogo school={school}/></div>
      <div className="card-body"><p className="card-kicker">{school.kicker}</p><h3>{school.title}</h3><p>{school.description}</p>
        <div className="tags">{school.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a href={school.url}>{school.button}<ArrowUpRight size={17}/></a>
      </div></article>)}</div>
  </section>
}

function BrandSlider() {
  return <div className="brand-slider" aria-label="Instituições que integram a UniCandelária">
    <p>Três instituições. Uma formação para a vida toda.</p>
    <div className="brand-window"><div className="brand-track">{[0, 1].map(copy => <div className="brand-group" key={copy} aria-hidden={copy === 1}>
      {schools.map(school => <a key={school.title} href={school.url} tabIndex={copy === 1 ? -1 : undefined}><InstitutionLogo school={school}/></a>)}
    </div>)}</div></div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const whatsapp = String(formData.get('whatsapp') || '').trim()
    const interest = String(formData.get('interest') || '').trim()
    const message = `Olá! Vim do site, me chamo ${name} e quero saber mais sobre a ${interest}. Meu WhatsApp é ${whatsapp}.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Uni Candelária"><img src="/assets/logo.png" alt="UNI Candelária"/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav id="main-navigation" className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.label} className={item.label === 'Início' ? 'active' : ''} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <a className="top-whatsapp" aria-label="Fale no WhatsApp" href={`https://wa.me/${whatsappNumber}`}><span>Fale no WhatsApp</span><i><MessageCircle size={17}/></i></a>
      </header>

      <section id="inicio" className="hero-section">
        
        <div className="hero-copy">
          <p className="eyebrow"><span/> Colégio · Técnico · Graduação · Pós</p>
          <h1>Formação para<br/><span className="sr-only">a vida toda.</span><span className="typing-line" aria-hidden="true"><span>a vida toda.</span><span>cada fase.</span><span>o seu futuro.</span></span></h1>
          <p className="hero-text">Do Berçário à Pós-Graduação, três instituições conectadas em um só ecossistema educacional.</p>
          <div className="hero-actions">
            <a className="primary-light" href="#instituicoes">Conheça nossas instituições <ArrowDown size={17}/></a>
            <a className="whatsapp-outline" href={`https://wa.me/${whatsappNumber}`}><MessageCircle size={17}/> WhatsApp (11) 91000-0776</a>
          </div>
          <div className="student-reviews"><div className="student-avatars" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div><div><span className="review-stars" aria-hidden="true">★★★★★</span><p>Avaliações dos nossos alunos</p></div></div>
        </div>
        <BrandSlider/>
        <a className="scroll-cue" href="#instituicoes"><span>Descubra o caminho</span><ArrowDown size={16}/></a>
      </section>

      <InstitutionsScroll/>

      <section id="cursos" className="journey">
        <div className="section-heading"><p className="section-kicker">Educação que acompanha você</p><h2>Uma jornada.<br/><em>Muitas possibilidades.</em></h2><p>Formação conectada, do primeiro passo ao próximo grande objetivo.</p></div>
        <AnimatedScroll items={schools.map(school => ({ title: school.title, description: school.description, theme: school.theme, href: school.url, action: school.button, logo: <InstitutionLogo school={school}/>, tags: school.tags }))}/>
      </section>

      <section id="contato" className="contact-band reveal-section">
        <div className="contact-copy"><p className="section-kicker">O próximo passo começa aqui</p><h2>Seu futuro tem<br/><em>um caminho aqui.</em></h2><p>Cadastre-se e conheça as condições especiais vigentes.</p><a className="whatsapp-yellow" href={`https://wa.me/${whatsappNumber}`}><MessageCircle size={23}/> Falar no WhatsApp</a></div>
        <form className="lead-form" onSubmit={handleLeadSubmit}>
          <div className="form-heading"><span>Vamos conversar</span><strong>Conte seu interesse</strong></div>
          <label><span>Nome</span><input name="name" placeholder="Seu nome" autoComplete="name" required/></label>
          <label><span>WhatsApp</span><input name="whatsapp" placeholder="Seu WhatsApp" inputMode="tel" autoComplete="tel" required/></label>
          <label className="select-label"><span>Interesse</span><select name="interest" defaultValue="" required><option value="" disabled>Qual instituição?</option><option>Colégio Candelária</option><option>EPA</option><option>FEASP</option></select><ChevronDown size={20}/></label>
          <button type="submit">Quero saber mais <ArrowUpRight size={18}/></button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/assets/logo.png" alt="UNI Candelária"/><div className="footer-item"><MapPin/><span>Rua Arantiguaba, 804 - Vila Maria - São Paulo</span></div><div className="socials" aria-label="Redes sociais UniCandelária"><a href="https://www.instagram.com/unicandelaria/" aria-label="Instagram UniCandelária"><FaInstagram/></a><a href="https://www.linkedin.com/company/unicandelaria/?viewAsMember=true" aria-label="LinkedIn UniCandelária"><FaLinkedinIn/></a></div></div>
        {socialGroups.map((group) => <div className="footer-social-group" key={group.name}><strong>{group.name}</strong><div className="socials" aria-label={`Redes sociais ${group.name}`}>{group.links.map((link) => { const Icon = link.icon; return <a href={link.href} aria-label={link.label} key={link.href}><Icon/></a> })}</div></div>)}
      </footer>
    </main>
  )
}

export default App
