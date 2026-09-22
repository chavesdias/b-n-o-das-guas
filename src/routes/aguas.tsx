import { useState } from "react";
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
  MessageCircle,
  Play,
  ShieldCheck,
  X,
  Sparkles,
  Video,
  Waves,
} from "lucide-react";

import mountainsImage from "@/assets/titicaca-mountains.jpg.asset.json";
import labyrinthImage from "@/assets/titicaca-labyrinth.jpeg.asset.json";
import chakanaImage from "@/assets/titicaca-chakana.jpeg.asset.json";

const paymentLink = "[LINK DE PAGAMENTO]";
const youtubeLink = "[LINK DO YOUTUBE]";

export const Route = createFileRoute("/aguas")({
  head: () => ({
    meta: [
      { title: "Bênção das Águas com Alice Chaves · Vivência online" },
      {
        name: "description",
        content:
          "Vivência online e ao vivo, inspirada nas águas sagradas do Lago Titicaca, para equilibrar sua força criativa e sua expressão autêntica. 18 de outubro, das 9h às 12h.",
      },
      { property: "og:title", content: "Bênção das Águas com Alice Chaves" },
      {
        property: "og:description",
        content:
          "Vivência online e ao vivo, inspirada nas águas sagradas do Lago Titicaca. 18 de outubro, das 9h às 12h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const keywords = [
  "Equilíbrio emocional",
  "Fluxo",
  "Voz autêntica",
  "Criatividade",
  "Acolhimento",
  "Ancestralidade",
  "Poder de criação e manifestação",
  "Leveza",
  "Conexão com os ritmos da Natureza",
  "Clareza",
  "Relacionamentos saudáveis",
];

const journeyItems = [
  "O simbolismo das águas",
  "Uma introdução à cosmologia andina, para aplicar no dia a dia e viver mais conectada com a Terra",
  "Uma prática diária com as águas",
  "A Bênção das Águas, em uma jornada guiada até o coração do Titicaca",
];

const audienceItems = [
  "Quer se aprofundar na sua criatividade e autenticidade",
  "Quer harmonizar questões ligadas ao útero e à reprodução",
  "Quer curar a relação com a mãe e a ancestralidade materna",
  "Quer encontrar a própria voz",
  "Deseja viver mais no fluxo, em harmonia com os ritmos naturais da Terra",
  "Busca uma forma leve e profunda de se harmonizar com as questões ligadas ao feminino",
];

// Depoimentos: troque [Nome] e [Cidade] depois de pedir autorização a cada pessoa.
const testimonials = [
  {
    text: "Iniciei muito inquieta, sentindo várias coisas me incomodando. Com o tempo fui me entregando para a respiração e… não sei para onde fui. Terminei plena. Há muito tempo não tinha essa sensação.",
    name: "[Nome]",
    city: "[Cidade]",
  },
  {
    text: "Me sinto mais serena. Reajo menos, compreendo mais. Antigas dores começam a perder a intensidade e reconto a minha história. Hoje sinto mais luz e fluidez, na minha casa externa e na interna também.",
    name: "[Nome]",
    city: "[Cidade]",
  },
  {
    text: "Estou sentindo novos caminhos se abrindo. Parecia que antes estava tudo bloqueado, eu não conseguia enxergar perspectivas futuras. Agora os caminhos estão se abrindo de novo.",
    name: "[Nome]",
    city: "[Cidade]",
  },
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
    answer:
      "Com a compra confirmada, o Sympla envia a confirmação por e-mail e você é adicionada a um grupo silencioso e temporário no WhatsApp. Por lá eu envio o link do Zoom e os materiais complementares.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia: se sentir que a vivência não é para você, basta pedir e devolvemos 100% do valor.",
  },
  {
    question: "Homens e pessoas sem útero físico podem participar?",
    answer: "Sim. A bênção atua também no útero energético, o centro de criação que todas e todos carregamos.",
  },
  {
    question: "O que preciso ter em mãos?",
    answer: "Um lugar tranquilo, um copo com água e um caderno para anotações.",
  },
];

const notForItems = [
  "Procura processos catárticos",
  "Espera uma solução milagrosa, sem se abrir ao próprio processo",
];

const includedItems = [
  "Vivência de 3 horas ao vivo pelo Zoom",
  "A Bênção das Águas, guiada por Alice",
  "O simbolismo das águas e uma introdução à cosmologia andina",
  "PDF com práticas para você continuar em casa",
  "Áudio de Conexão para manter a prática no dia a dia",
  "Gravação completa por 30 dias",
  "Grupo silencioso e temporário no WhatsApp, só para o link e os materiais",
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

function youtubeEmbed(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0` : null;
}

function VideoCard() {
  const [playing, setPlaying] = useState(false);
  const embed = youtubeEmbed(youtubeLink);
  return (
    <div className="video-placeholder">
      {playing && embed ? (
        <iframe
          className="video-embed"
          src={embed}
          title="Mensagem de Alice às margens do Titicaca"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src="/folhas-coca.jpg"
            alt="Folhas de coca oferecidas às águas do Lago Titicaca"
            className="video-water-texture video-photo"
            loading="lazy"
            width={1200}
            height={1600}
          />
          {embed ? (
            <button type="button" onClick={() => setPlaying(true)} aria-label="Assistir à mensagem de Alice">
              <span className="play-button"><Play aria-hidden="true" size={24} fill="currentColor" /></span>
              <span>Assistir à mensagem de Alice</span>
            </button>
          ) : (
            <a href={youtubeLink} target="_blank" rel="noreferrer" aria-label="Assistir ao vídeo no YouTube">
              <span className="play-button"><Play aria-hidden="true" size={24} fill="currentColor" /></span>
              <span>Assistir à mensagem de Alice</span>
            </a>
          )}
        </>
      )}
    </div>
  );
}

function ChakanaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="-3.7 -4.9 7.4 8.6" className={className} fill="none" stroke="currentColor" strokeWidth="0.16" strokeLinejoin="round" aria-hidden="true">
      <path d="M-1 -3H1V-2H2V-1H3V1H2V2H1V3H-1V2H-2V1H-3V-1H-2V-2H-1Z" />
      <circle cx="0" cy="0" r="0.55" />
      <circle cx="0" cy="-3.95" r="0.45" />
    </svg>
  );
}

function ChakanaDivider() {
  return (
    <div className="chakana-divider" aria-hidden="true">
      <span />
      <ChakanaIcon />
      <span />
    </div>
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
          src="/titicaca-aguas.jpg"
          alt="Amanhecer sobre as águas calmas do Lago Titicaca, com montanhas ao fundo"
          className="hero-image"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="brand-mark" aria-label="Alice Chaves">
            <Waves aria-hidden="true" size={24} strokeWidth={1.2} />
            <span>Alice Chaves</span>
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
          <VideoCard />
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
            <img src={chakanaImage.url} alt="Chakana de pedra às margens do Titicaca" loading="lazy" width={1024} height={1280} />
          </figure>
          <figure className="gallery-wide">
            <img src={mountainsImage.url} alt="Cordilheira andina sob nuvens profundas" loading="lazy" width={768} height={1024} />
          </figure>
          <figure className="gallery-small">
            <img src={labyrinthImage.url} alt="Labirinto ritual diante do Lago Titicaca" loading="lazy" width={1024} height={1280} />
          </figure>
        </div>
      </section>

      <section className="deep-section">
        <WaveDivider dark />
        <div className="section-shell">
          <div className="deep-intro">
            <SectionLabel>O que a bênção trabalha</SectionLabel>
            <h2>Criação e expressão em harmonia</h2>
            <p>
              A Bênção atua nos corpos sutis (energético, de sabedoria e de memória), com foco
              especial no segundo e no quinto chakras. Eles estão interligados e se refletem na nossa
              vida em:
            </p>
          </div>
          <ul className="keyword-tags" aria-label="Palavras-chave da vivência">
            {keywords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
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
        <div className="section-shell">
          <div className="audience-head">
            <SectionLabel>Para quem é</SectionLabel>
            <h2>Para quem é essa vivência</h2>
            <p>Você não precisa ter experiência prévia. Só disponibilidade para estar presente.</p>
          </div>
          <div className="audience-columns">
            <div className="audience-card">
              <h3>É para você que…</h3>
              <div className="audience-list">
                {audienceItems.map((item) => (
                  <div key={item}>
                    <Check aria-hidden="true" size={18} strokeWidth={1.8} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="audience-card audience-card-not">
              <h3>Não é para você que…</h3>
              <div className="audience-list">
                {notForItems.map((item) => (
                  <div key={item}>
                    <X aria-hidden="true" size={18} strokeWidth={1.8} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="centered-action"><SignupLink>Quero garantir minha vaga</SignupLink></div>
      </section>

      <section className="section-shell testimonials-section">
        <SectionLabel>Depoimentos</SectionLabel>
        <h2>O que dizem de quem já viveu o trabalho da Alice</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.text}>
              <Sparkles aria-hidden="true" size={20} strokeWidth={1.3} />
              <p>“{item.text}”</p>
              <footer>{item.name} <span>· {item.city}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <ChakanaDivider />

      <section className="guide-section">
        <div className="section-shell guide-grid">
          <img
            src="/alice-bio.jpg"
            alt="Alice Chaves, com o Lago Titicaca e um portal com a chakana ao fundo"
            className="portrait-photo"
            style={{ objectPosition: "center" }}
            loading="lazy"
          />
          <div className="guide-copy">
            <SectionLabel>Quem conduz</SectionLabel>
            <h2>Alice Chaves</h2>
            <p className="guide-role">Terapeuta energética</p>
            <p>
              Há mais de 10 anos dedicada às práticas energéticas, trabalha com Registros Akáshicos,
              Radiestesia, Radiônica, Geometria Sagrada, Theta Healing e Reiki.
            </p>
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
        <ChakanaIcon className="chakana-watermark" />
        <div className="section-shell">
          <SectionLabel>Inscrição</SectionLabel>
          <h2>Bênção das Águas</h2>
          <div className="offer-meta">
            <p>Vivência online e ao vivo pelo Zoom · domingo, 18 de outubro de 2026, das 9h às 12h (Brasília)</p>
            <p>Gravação disponível por 30 dias</p>
          </div>
          <div className="offer-grid">
            <div className="included-box">
              <h3>O que está incluído</h3>
              <ul>
                {includedItems.map((item) => (
                  <li key={item}><Check aria-hidden="true" size={16} strokeWidth={2} /><span>{item}</span></li>
                ))}
              </ul>
              <div className="guarantee">
                <ShieldCheck aria-hidden="true" size={26} strokeWidth={1.4} />
                <p><strong>Garantia de 7 dias.</strong> Se sentir que não é para você, basta pedir e devolvemos 100% do valor.</p>
              </div>
            </div>
            <div className="price-grid">
              <article className="price-card featured">
                <span className="availability"><b>Disponível</b><b>agora</b></span>
                <p>Lote 1</p>
                <div className="price"><small>R$</small><strong>111</strong></div>
                <span>até [data] · Pix ou cartão</span>
                <SignupLink>Garantir no Lote 1</SignupLink>
              </article>
              <article className="price-card">
                <p>Lote 2</p>
                <div className="price"><small>R$</small><strong>144</strong></div>
                <span>a partir de [data]</span>
                <p className="later-note">Disponível após o encerramento do primeiro lote.</p>
              </article>
              <p className="secure-note">Pagamento seguro pelo Sympla.</p>
            </div>
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
        <h2>Que as águas abram os seus caminhos mais leves e verdadeiros.</h2>
        <SignupLink light>Quero garantir minha vaga</SignupLink>
        <div className="footer-bottom">
          <div className="footer-brand">Alice Chaves</div>
          <nav aria-label="Redes e contato">
            <a href="[Instagram]" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" size={17} /> Instagram</a>
            <a href="[WhatsApp]" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /> WhatsApp</a>
            <span><Mail aria-hidden="true" size={17} /> [e-mail]</span>
          </nav>
          <p>Esta vivência é uma prática energética e não substitui acompanhamento médico ou terapêutico.</p>
        </div>
        <p className="copyright">© 2026 Alice Chaves · CNPJ [número] · Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
