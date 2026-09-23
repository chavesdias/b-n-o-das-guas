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


const paymentLink = "https://www.sympla.com.br/evento-online/bencao-das-aguas-edicao-primavera-26/3589447";
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
  "Uma breve introdução à cosmologia andina, para viver mais conectada com a sua real natureza",
  "O simbolismo e o poder oculto das águas",
  "Acesso a uma prática ancestral que te apoia a manifestar a vida dos seus sonhos",
  "A Bênção das Águas, através de uma leve e profunda visualização guiada",
];

const audienceItems = [
  "Equilibrar as suas emoções e se expressar com mais verdade",
  "Harmonizar a relação com a mãe simbólica e real, com filhas e/ou com a ancestralidade feminina",
  "Levar cuidado energético às regiões do útero, do ventre e da garganta",
  "Uma vida mais criativa, trilhando seu próprio caminho",
  "Viver mais no fluxo, em harmonia com os ritmos naturais da Terra",
  "Vivenciar um caminho leve e autêntico para honrar o seu aspecto feminino",
];

// Depoimentos: troque [Nome] e [Cidade] depois de pedir autorização a cada pessoa.
const testimonials = [
  {
    text: "Acordei com um senso de serenidade muito grande. Aquela urgência que a gente cria na cabeça, de que tudo precisa acontecer agora, foi embora. Eu já sabia disso racionalmente, mas depois do seu atendimento esse entendimento passou para o corpo. Sinto uma paz profunda.",
    name: "Mariana N.",
    city: "",
  },
  {
    text: "Estou sentindo novos caminhos se abrindo. Parecia que antes estava tudo bloqueado, eu não conseguia enxergar perspectivas futuras. Agora os caminhos estão se abrindo de novo.",
    name: "Daniela P.",
    city: "",
  },
  {
    text: "Se eu consegui chegar onde estou hoje, tenho certeza de que você e a sua energia me ajudaram, abrindo caminhos, abrindo minha mente e me fortalecendo para tomar a decisão que eu precisava tomar. Você é tão doce, tão sutil e, ao mesmo tempo, me ajudou a fazer transformações tão potentes.",
    name: "Cláudia C.",
    city: "",
  },
];

const faqItems = [
  {
    question: "Preciso ter alguma experiência?",
    answer:
      "Não. A vivência é para quem está começando agora e também para quem já caminha há tempo. Basta disponibilidade para estar presente.",
  },
  {
    question: "Preciso ter um útero?",
    answer:
      "Não. A vivência é aberta a todas as pessoas, independentemente de gênero ou corpo. A Bênção atua nos corpos sutis.",
  },
  {
    question: "A vivência segue alguma religião?",
    answer:
      "Não. Aplicamos conceitos espirituais universalistas e a sabedoria da natureza.",
  },
  {
    question: "Não posso estar ao vivo. Posso assistir depois?",
    answer: "Sim. A gravação fica disponível por 30 dias para você assistir quando quiser.",
  },
  {
    question: "Como recebo o link de acesso?",
    answer:
      "Com a compra confirmada, o Sympla envia a confirmação por e-mail e você é adicionada a um grupo silencioso e temporário no WhatsApp. Por lá eu envio o link do Zoom e os materiais complementares.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia após a compra: se sentir que a vivência não é para você, basta pedir e devolvemos 100% do valor.",
  },
  {
    question: "O que preciso para participar?",
    answer:
      "Um lugar tranquilo, seu computador ou celular com acesso ao Zoom, um copo com água e um caderno para anotações.",
  },
];

const notForItems = [
  "Procura processos catárticos ou intensos para sentir que \"aconteceu algo\"",
  "Espera uma solução milagrosa, sem se abrir ao próprio processo",
  "Busca fortalecer a polarização entre feminino e masculino",
];

const includedItems = [
  "Vivência de 3 horas ao vivo pelo Zoom",
  "A Bênção das Águas",
  "O simbolismo das águas e uma introdução à cosmologia andina",
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
              Uma bênção recebida das águas do Lago Titicaca, para mover o que está travado em
              sua vida.
            </p>
            <p className="hero-themes">Equilíbrio emocional · Ancestralidade · Criatividade e voz autêntica</p>
            <div className="hero-date">
              <CalendarDays aria-hidden="true" size={19} strokeWidth={1.5} />
              <span>18 de outubro de 2026</span>
              <i aria-hidden="true" />
              <Clock3 aria-hidden="true" size={19} strokeWidth={1.5} />
              <span>9h às 12h · Brasília</span>
              <i aria-hidden="true" />
              <span>Edição Primavera 2026</span>
            </div>
            <SignupLink light>Quero receber a Bênção</SignupLink>
          </div>
          <a href="#identificacao" className="scroll-cue" aria-label="Ir para o conteúdo">
            <span>Desça para sentir</span>
            <ArrowDown aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section className="section-shell highlights-section">
        <div className="highlights-strip">
          <article>
            <Clock3 aria-hidden="true" size={22} strokeWidth={1.4} />
            <strong>3 horas ao vivo</strong>
            <p>Uma manhã de conhecimento, prática e a Bênção das Águas.</p>
          </article>
          <article>
            <Video aria-hidden="true" size={22} strokeWidth={1.4} />
            <strong>Gravação por 30 dias</strong>
            <p>Não pode estar ao vivo? Assista no seu tempo.</p>
          </article>
          <article>
            <Gift aria-hidden="true" size={22} strokeWidth={1.4} />
            <strong>Material complementar</strong>
            <p>Se quiser continuar suas práticas em casa.</p>
          </article>
        </div>
      </section>

      <section id="identificacao" className="section-shell identification-section">
        <div className="narrow-copy reveal-block">
          <SectionLabel>Um convite</SectionLabel>
          <h2>Tem algo que precisa mudar, mas você não sabe muito bem como?</h2>
          <div className="questions-list">
            <p>Talvez a vida pareça travada, sem brilho.</p>
            <p>Talvez as emoções estejam desequilibradas, oscilando mais do que você gostaria.</p>
            <p>Talvez você venha de relações que te esvaziaram, e ainda esteja se desvencilhando delas.</p>
            <p>Ou talvez seja aquela conhecida pergunta ainda sem resposta: quem eu sou, e o que eu vim fazer aqui?</p>
          </div>
          <p className="closing-line">As águas conhecem o caminho.</p>
        </div>
      </section>

      <WaveDivider />

      <section className="section-shell origin-section">
        <div className="content-grid">
          <VideoCard />
          <div className="origin-copy">
            <SectionLabel>De onde vem essa bênção</SectionLabel>
            <h2>Uma bênção recebida às margens do Titicaca</h2>
            <p>
              Em setembro estive em peregrinação pelo Peru. Entrei num barco até o centro do Lago
              Titicaca, o lago navegável mais alto do planeta, e entreguei três folhas de coca às
              suas águas, me apresentando.
            </p>
            <p>
              O Titicaca é considerado o segundo chakra da Terra, e ali as águas são chamadas de
              Mama Cocha, a Mãe Água. São águas sagradas, que guardam mistérios, símbolos e
              histórias vivas até hoje.
            </p>
            <p className="origin-highlight">O que recebi delas é o que trago para esta vivência.</p>
          </div>
        </div>

        <div className="water-gallery" aria-label="Águas e paisagens do Lago Titicaca">
          <figure className="gallery-tall">
            <img src="/galeria-chakana-alta.jpg" alt="Chakana de pedra com a Flor da Vida, diante do Lago Titicaca" loading="lazy" width={1224} height={1530} />
          </figure>
          <figure className="gallery-wide">
            <img src="/galeria-lago.jpg" alt="Muros de pedra e as águas azuis do Lago Titicaca" loading="lazy" width={1600} height={900} />
          </figure>
          <figure className="gallery-small">
            <img src="/galeria-margem.jpg" alt="Margem de pedras e as águas do Lago Titicaca" loading="lazy" width={1600} height={928} />
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
            <strong>Bônus</strong>
            <p>Áudio de Conexão para você manter uma prática diária.</p>
          </div>
        </div>
        <div className="centered-action"><SignupLink>Quero viver essa jornada</SignupLink></div>
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
              <h3>É para você que busca…</h3>
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
        <div className="centered-action"><SignupLink>Essa vivência é para mim</SignupLink></div>
      </section>

      <section className="section-shell testimonials-section">
        <SectionLabel>Depoimentos</SectionLabel>
        <h2>O que dizem sobre o trabalho com a Alice</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.text}>
              <Sparkles aria-hidden="true" size={20} strokeWidth={1.3} />
              <p>“{item.text}”</p>
              <footer>{item.name}{item.city ? <span>· {item.city}</span> : null}</footer>
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
            <p className="guide-role">Terapeuta holística, pesquisadora e viajante</p>
            <p>
              Conduzo encontros e atendimentos desde 2018, com mais de 600 horas de formação, entre
              elas: Leitura de Memórias e Cura Akáshica, Respiração Biodinâmica e Liberação de
              Traumas e Mestrado em Reiki Usui.
            </p>
            <p>
              O que me move é traduzir o invisível em práticas com os pés no chão, e trazer leveza
              com profundidade para os processos de autoconhecimento e espiritualidade.
            </p>
            <p className="guide-registry">Registro profissional CRTH-BR 20291</p>
          </div>
        </div>
      </section>

      <section className="investment-section">
        <ChakanaIcon className="chakana-watermark" />
        <div className="section-shell">
          <SectionLabel>Inscrição</SectionLabel>
          <h2>Bênção das Águas</h2>
          <div className="offer-meta">
            <p>Vivência online e ao vivo pelo Zoom · domingo, 18 de outubro de 2026, das 9h às 12h (Brasília)</p>
            <p>Gravação disponível por 30 dias · Edição Primavera 2026</p>
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
                <span>até 09/10 · ou em até 12x de R$11,71</span>
                <SignupLink>Garantir minha vaga no Lote 1</SignupLink>
              </article>
              <article className="price-card">
                <p>Lote 2</p>
                <div className="price"><small>R$</small><strong>144</strong></div>
                <span>a partir de 10/10 · ou em até 12x de R$15,19</span>
                <p className="later-note">Disponível após o encerramento do primeiro lote.</p>
              </article>
              <p className="secure-note">Pagamento seguro pelo Sympla.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell ayni-section">
        <div className="narrow-copy">
          <SectionLabel>Ayni</SectionLabel>
          <h2>Receber e devolver</h2>
          <p>
            Na cosmologia andina, Ayni é o princípio da reciprocidade: aquilo que recebemos da vida
            também nos convida a oferecer algo de volta.
          </p>
          <p>
            Por isso, a Bênção das Águas não termina em nós. Uma parte de cada inscrição será
            destinada a uma iniciativa que cuida das águas, dos territórios e das comunidades que
            delas dependem. A cada edição, alguma iniciativa é cuidadosamente selecionada e
            contemplada.
          </p>
          <p className="closing-line">
            Ao participar, você entra em um ciclo maior de reciprocidade. É o nosso Ayni.
          </p>
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="faq-heading">
          <SectionLabel>Dúvidas</SectionLabel>
          <h2>Perguntas frequentes</h2>
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
        <SignupLink light>Sim, quero participar</SignupLink>
        <div className="footer-bottom">
          <div className="footer-brand">Alice Chaves</div>
          <nav aria-label="Redes e contato">
            <a href="https://www.instagram.com/alichaves" target="_blank" rel="noreferrer"><Instagram aria-hidden="true" size={17} /> Instagram</a>
            <a href="https://wa.me/5531991354712" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={17} /> WhatsApp</a>
            <a href="mailto:alicechaves@gmail.com"><Mail aria-hidden="true" size={17} /> E-mail</a>
          </nav>
          <p>Esta vivência é uma prática energética e não substitui acompanhamento médico ou terapêutico.</p>
        </div>
        <p className="copyright">© 2026 Alice Chaves · CNPJ 38.022.989/0001-07 · Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
