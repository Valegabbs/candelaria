import {
  ChevronDown,
  Globe2,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import './App.css'

const navItems = ['Início', 'Colégio Candelária', 'EPA', 'FEASP', 'Cursos', 'Contato']

const schools = [
  {
    title: 'Colégio Candelária',
    description: 'Do Berçário ao Ensino Médio.',
    image: '/assets/colegio-generated.png',
    tags: ['Educação Infantil', 'Fundamental', 'Ensino Médio'],
    button: 'Conheça o Colégio',
    theme: 'school',
  },
  {
    title: 'EPA - Escola Paulista de Agrimensura',
    description: 'Formação técnica em Agrimensura.',
    image: '/assets/epa-generated.png',
    tags: ['Prática de campo', 'Tecnologia', 'Empregabilidade'],
    button: 'Conheça a EPA',
    theme: 'epa',
  },
  {
    title: 'FEASP',
    description: 'Graduação e Pós-Graduação.',
    image: '/assets/feasp-generated.png',
    tags: ['Engenharia', 'Pedagogia', 'Psicologia', 'ADS'],
    button: 'Conheça a FEASP',
    theme: 'feasp',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Uni Candelária">
          <img src="/assets/logo.png" alt="UNI Candelária" />
        </a>
        <nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item} className={item === 'Início' ? 'active' : ''} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="top-whatsapp" href="https://wa.me/5511910000776">
          <MessageCircle size={15} />
          Fale no WhatsApp
        </a>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">COLÉGIO • TÉCNICO • GRADUAÇÃO • PÓS</p>
          <h1>Educação para cada fase. Formação para vida toda.</h1>
          <p className="hero-text">
            Do Berçário à Pós-Graduação, três instituições conectadas em um só ecossistema educacional.
          </p>
          <div className="hero-actions">
            <a className="primary-light" href="#instituicoes">Conheça nossas instituições</a>
            <a className="whatsapp-outline" href="https://wa.me/5511910000776">
              <MessageCircle size={17} />
              WhatsApp (11) 91000-0776
            </a>
          </div>
        </div>
        <div className="hero-collage" role="img" aria-label="Estudantes em diferentes etapas de formação" />
      </section>

      <section id="instituicoes" className="institutions">
        <div className="section-heading">
          <h2>Três instituições. Um caminho completo.</h2>
          <p>Integram a UniCandelária</p>
        </div>
        <div className="cards-grid">
          {schools.map((school) => (
            <article className={`school-card ${school.theme}`} key={school.title}>
              <img src={school.image} alt="" />
              <div className="card-body">
                <h3>{school.title}</h3>
                <p>{school.description}</p>
                <div className="tags">
                  {school.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#contato">{school.button}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey" id="cursos">
        <div className="section-heading">
          <h2>Uma jornada. Muitas possibilidades.</h2>
          <p>Formação conectada, do primeiro passo ao próximo grande objetivo.</p>
        </div>
      </section>

      <section id="contato" className="contact-band">
        <div className="contact-shape" aria-hidden="true" />
        <div className="contact-copy">
          <h2>Seu futuro tem um caminho aqui.</h2>
          <span className="yellow-line" />
          <p>Cadastre-se e conheça as condições especiais vigentes.</p>
          <a className="whatsapp-yellow" href="https://wa.me/5511910000776">
            <MessageCircle size={27} />
            Falar no WhatsApp
          </a>
        </div>
        <form className="lead-form">
          <label>
            <span>Nome</span>
            <input name="name" placeholder="Nome" />
          </label>
          <label>
            <span>WhatsApp</span>
            <input name="whatsapp" placeholder="WhatsApp" />
          </label>
          <label className="select-label">
            <span>Interesse</span>
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Interesse
              </option>
              <option>Colégio Candelária</option>
              <option>EPA</option>
              <option>FEASP</option>
            </select>
            <ChevronDown size={22} />
          </label>
          <button type="submit">Quero saber mais</button>
        </form>
      </section>

      <footer className="site-footer">
        <img src="/assets/logo.png" alt="UNI Candelária" />
        <div className="footer-item">
          <MapPin />
          <span>Rua Arantiguaba, 804 - Vila Maria - São Paulo</span>
        </div>
        <div className="footer-item">
          <Globe2 />
          <span>unicandelaria.com.br</span>
        </div>
        <div className="footer-item">
          <MessageCircle />
          <span>WhatsApp (11) 91000-0776</span>
        </div>
        <div className="socials" aria-label="Redes sociais">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://tiktok.com" aria-label="TikTok"><FaTiktok /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </footer>
    </main>
  )
}

export default App
