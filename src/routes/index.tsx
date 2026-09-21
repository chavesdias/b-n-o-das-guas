import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Gift,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
  Video,
  Waves,
} from "lucide-react";

import heroImage from "@/assets/titicaca-hero.jpg";
import reedsImage from "@/assets/titicaca-reeds.jpg";
import ripplesImage from "@/assets/titicaca-ripples.jpg";
import stonesImage from "@/assets/titicaca-stones.jpg";

const paymentLink = "[LINK DE PAGAMENTO]";
const youtubeLink = "[LINK DO YOUTUBE]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bênção das Águas — Vivência online com Alice Chaves" },
      {
        name: "description",
        content:
          "Uma vivência online para harmonizar criatividade, voz e fluxo a partir das águas sagradas do Lago Titicaca.",
      },
      { property: "og:title", content: "Bênção das Águas" },
      {
        property: "og:description",
        content:
          "Receba a Bênção das Águas em uma jornada guiada ao coração do Lago Titicaca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const workItems = [
  "Autenticidade e a própria voz",
  "Criatividade, criação e manifestação",
  "Relacionamentos e sexualidade",
  "Harmonização energética de questões ligadas ao útero, à reprodução e à tireoide",
];

const journeyItems = [
  "O simbolismo das águas",
  "Uma introdução à cosmologia andina, para aplicar no dia a dia e viver mais conectada com a Terra",
  "Uma prática diária com as águas",
  "A Bênção das Águas, em uma jornada guiada até o coração do Titicaca",
];

const audienceItems = [
  "Para quem quer se aprofundar na sua criatividade e autenticidade",
  "Para quem quer harmonizar questões ligadas ao útero e à reprodução",
  "Para quem quer curar a relação com a mãe e a ancestralidade materna",
  "Para quem quer encontrar a própria voz",
  "Para quem deseja viver mais no fluxo, em harmonia com os ritmos naturais da Terra",
];

const faqItems = [
  {
    question: "Preciso seguir alguma religião?",
    answer: "Não. A vivência é aberta a todas as pessoas, de qualquer caminho espiritual.",
  },
  {
    question: "Não posso ao vivo. Posso assistir depois?",
    answer: "Sim. A gravação fica disponível por 30 dias.",
  },
  {
    question: "Como recebo o link de acesso?",
    answer: "Após a inscrição, você recebe o link por [e-mail/WhatsApp].",
  },
  {
    question: "E se eu não tiver útero físico?",
    answer: "A bênção atua também no útero energético, que todas e todos carregamos.",
  },
];

function SignupLink({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={paymentLink}
      target="_blank"
      rel="noreferrer"
      className={light ? "button-sacred button-sacred-light" : "button-sacred"}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.6} />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
      <span aria-hidden="true" />
    </p>
  );
}

function WaveDivider({ dark = false }: { dark?: boolean }) {
  return <div className={dark ? "wave-divider wave-divider-dark" : "wave-divider"} aria-hidden="true" />;
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Águas serenas e montanhas do Lago Titicaca ao amanhecer"
          className="hero-image"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="brand-mark" aria-label="Casa Templo">
            <Waves aria-hidden="true" size={24} strokeWidth={1.2} />
            <span>Casa Templo</span>
          </div>
          <div className="hero-copy">
            <p className="hero-kicker">Vivência online e ao vivo</p>
            <h1>Bênção<br />das Águas</h1>
            <p className="hero-description">
              Uma vivência para harmonizar sua criatividade, sua voz e seu fluxo, a partir das águas
              sagradas do Lago Titicaca.
            </p>
            <div className="hero-date">
              <CalendarDays aria-hidden="true" size={19} strokeWidth={1.5} />
              <span>18 de outubro de 2026</span>
              <i aria-hidden="true" />
              <Clock3 aria-hidden="true" size={19} strokeWidth={1.5} />
              <span>9h às 12h · Brasília</span>
            </div>
            <SignupLink light>Quero garantir minha vaga</SignupLink>
          </div>
          <a href="#identificacao" className="scroll-cue" aria-label="Ir para o conteúdo">
            <span>Desça para sentir</span>
            <ArrowDown aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section id="identificacao" className="section-shell identification-section">
        <div className="narrow-copy reveal-block">
          <SectionLabel>Um chamado para o seu fluxo</SectionLabel>
          <h2>Você sente que existe algo em você querendo nascer, mas não flui?</h2>
          <div className="questions-list">
            <p>Sente dificuldade de se expressar, de criar, de confiar no seu corpo?</p>
            <p>Carrega pesos da sua linhagem materna?</p>
          </div>
          <p className="closing-line">Talvez seja hora de deixar as águas fazerem o seu trabalho.</p>
        </div>
      </section>

      <WaveDivider />

      <section className="section-shell origin-section">
        <div className="content-grid">
          <div className="video-placeholder">
            <div className="video-water-texture" />
            <a href={youtubeLink} target="_blank" rel="noreferrer" aria-label="Assistir ao vídeo no YouTube">
              <span className="play-button"><Play aria-hidden="true" size={24} fill="currentColor" /></span>
              <span>Assistir à mensagem de Alice</span>
            </a>
          </div>
          <div className="origin-copy">
            <SectionLabel>De onde vem essa bênção</SectionLabel>
            <h2>Um chamado recebido às margens do Titicaca</h2>
            <p>
              Acabei de voltar de uma viagem mística e ascensional pelo Peru. Às margens do Lago
              Titicaca, o lago navegável mais alto do planeta, recebi um grande alinhamento.
            </p>
            <p>
              O Titicaca é considerado o segundo chakra da Terra. Um dos lugares mais poderosos e de
              cura que existem, com águas sagradas que guardam mistérios, símbolos e histórias vivas
              até hoje.
            </p>
            <p className="origin-highlight">
              Estou chamando isso de Bênção das Águas. E agora você também pode recebê-la.
            </p>
          </div>
        </div>

        <div className="water-gallery" aria-label="Águas e paisagens do Lago Titicaca">
          <figure className="gallery-tall">
            <img src={ripplesImage} alt="Reflexos dourados nas águas do Titicaca" loading="lazy" width={1024} height={1280} />
          </figure>
          <figure className="gallery-wide">
            <img src={reedsImage} alt="Ilha de juncos e montanhas no Lago Titicaca" loading="lazy" width={1280} height={960} />
          </figure>
          <figure className="gallery-small">
            <img src={stonesImage} alt="Pedras ancestrais às margens das águas" loading="lazy" width={1024} height={1280} />
          </figure>
        </div>
      </section>

      <section className="deep-section">
        <WaveDivider dark />
        <div className="section-shell">
          <div className="deep-intro">
            <SectionLabel>O que a bênção trabalha</SectionLabel>
            <h2>Harmonizar o que você sente.<br />Liberar o que você veio expressar.</h2>
            <p>
              Uma grande harmonização, alinhamento e purificação energética dos nossos centros de
              energia, especialmente do segundo e do quinto chakras.
            </p>
          </div>
          <div className="benefit-grid">
            {workItems.map((item, index) => (
              <article className="benefit-item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell journey-section">
        <div className="journey-heading">
          <SectionLabel>A jornada</SectionLabel>
          <h2>O que você vai viver em 3 horas</h2>
          <p>Um encontro de presença, conhecimento e reconexão com a inteligência das águas.</p>
        </div>
        <ol className="journey-list">
          {journeyItems.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
        <div className="bonus-band">
          <Gift aria-hidden="true" size={28} strokeWidth={1.3} />
          <div>
            <strong>Bônus para continuar o ritual</strong>
            <p>O áudio da Bênção das Águas para você repetir em casa sempre que precisar.</p>
          </div>
        </div>
        <div className="centered-action"><SignupLink>Quero receber a Bênção</SignupLink></div>
      </section>

      <section className="audience-section">
        <div className="section-shell audience-inner">
          <div className="audience-title">
            <SectionLabel>Para quem é</SectionLabel>
            <h2>Para quem escuta o chamado das águas</h2>
            <p>Você não precisa ter experiência prévia. Apenas disponibilidade para estar presente.</p>
          </div>
          <div className="audience-list">
            {audienceItems.map((item) => (
              <div key={item}>
                <Check aria-hidden="true" size={18} strokeWidth={1.8} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="centered-action"><SignupLink>Quero garantir minha vaga</SignupLink></div>
      </section>

      <section className="section-shell testimonials-section">
        <SectionLabel>Depoimentos</SectionLabel>
        <h2>Experiências que atravessaram outras águas</h2>
        <p className="demo-note">Espaço reservado para depoimentos reais de participantes.</p>
        <div className="testimonial-grid">
          {[1, 2, 3].map((item) => (
            <blockquote key={item}>
              <Sparkles aria-hidden="true" size={20} strokeWidth={1.3} />
              <p>“Insira aqui um depoimento breve e verdadeiro sobre a experiência com Alice.”</p>
              <footer>Nome da participante <span>· Cidade</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="guide-section">
        <div className="section-shell guide-grid">
          <div className="portrait-placeholder" role="img" aria-label="Espaço reservado para foto de Alice Chaves">
            <div className="portrait-rings" />
            <Waves aria-hidden="true" size={46} strokeWidth={0.9} />
            <span>Foto de Alice Chaves</span>
          </div>
          <div className="guide-copy">
            <SectionLabel>Quem conduz</SectionLabel>
            <h2>Alice Chaves</h2>
            <p className="guide-role">Fundadora da Casa Templo</p>
            <p>
              Há mais de 10 anos dedicada às práticas energéticas, trabalha com Registros Akáshicos,
              Radiestesia, Radiônica, Geometria Sagrada, Theta Healing e Reiki.
            </p>
            <div className="guide-signature">Casa Templo</div>
          </div>
        </div>
      </section>

      <section className="section-shell details-section">
        <div className="details-heading">
          <SectionLabel>Como funciona</SectionLabel>
          <h2>Prepare seu espaço.<br />As águas chegam até você.</h2>
        </div>
        <div className="details-grid">
          <article><CalendarDays aria-hidden="true" /><span>Data e horário</span><strong>18/10/2026, domingo<br />das 9h às 12h · Brasília</strong></article>
          <article><Video aria-hidden="true" /><span>Formato</span><strong>3 horas, online e ao vivo<br />pelo [Zoom/Meet]</strong></article>
          <article><Clock3 aria-hidden="true" /><span>Acesso</span><strong>Gravação por 30 dias<br />+ bônus em áudio</strong></article>
          <article><Heart aria-hidden="true" /><span>Turma</span><strong>Vagas limitadas para<br />um encontro próximo</strong></article>
        </div>
      </section>

      <section className="investment-section">
        <div className="section-shell">
          <SectionLabel>Investimento</SectionLabel>
          <h2>Escolha receber esse chamado</h2>
          <div className="price-grid">
            <article className="price-card featured">
              <span className="availability">Disponível agora</span>
              <p>Lote 1</p>
              <div className="price"><small>R$</small><strong>111</strong></div>
              <span>até [data]</span>
              <SignupLink>Garantir no Lote 1</SignupLink>
            </article>
            <article className="price-card">
              <p>Lote 2</p>
              <div className="price"><small>R$</small><strong>144</strong></div>
              <span>a partir de [data]</span>
              <p className="later-note">Disponível após o encerramento do primeiro lote.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="faq-heading">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2>Antes de mergulhar</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-symbol"><Waves aria-hidden="true" size={30} strokeWidth={1} /></div>
        <h2>Que as águas abram seus caminhos.</h2>
        <SignupLink light>Quero garantir minha vaga</SignupLink>
        <div className="footer-bottom">
          <div className="footer-brand">Casa Templo</div>
          <nav aria-label="Redes e contato">
            <a href="[Instagram]" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" size={17} /> Instagram</a>
            <a href="[WhatsApp]" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /> WhatsApp</a>
            <span><Mail aria-hidden="true" size={17} /> [e-mail]</span>
          </nav>
          <p>Esta vivência é uma prática energética e não substitui acompanhamento médico ou terapêutico.</p>
        </div>
      </footer>
    </main>
  );
}