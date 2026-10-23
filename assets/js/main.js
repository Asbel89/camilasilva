(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const I18N = {
    pt: {
      "meta.title": "Camila Silva — Bailarina de Samba & Modelo | Contratações Internacionais",
      "meta.description": "Camila Silva é bailarina, modelo e embaixadora cultural brasileira, com mais de 21 anos de carreira no Carnaval e em palcos internacionais. Apresentações, workshops e programas de samba para eventos, festivais e instituições.",

      "brand.role": "Bailarina de Samba & Modelo",
      "print.tag": "Camila Silva · Bailarina de Samba & Modelo",
      "print.contact": "WhatsApp +353 85 817 2621",
      "nav.about": "Sobre",
      "nav.career": "Carreira",
      "nav.gallery": "Galeria",
      "nav.videos": "Vídeos",
      "nav.programs": "Programas",
      "nav.contact": "Contato",
      "nav.cta": "Contrate",
      "nav.mobileLabel": "Contratações & imprensa",

      "aria.skip": "Ir para o conteúdo",
      "aria.menuOpen": "Abrir menu",
      "aria.menuClose": "Fechar menu",
      "aria.lang": "PT / EN — Mudar idioma para inglês",
      "aria.copy": "Copiar @iamcamilasilva",

      "hero.alt": "Retrato de Camila Silva com figurino claro de samba",
      "hero.eyebrow": "Bailarina de Samba · Modelo · Rainha do Carnaval",
      "hero.tagline": "O samba brasileiro no mais alto nível.",
      "hero.meta": "Dublin, Irlanda · Contratações internacionais",
      "hero.cta1": "Contrate para seu evento",
      "hero.cta2": "Conheça meu trabalho",
      "hero.pdf": "Media kit em PDF",
      "hero.proof1": "Anos de carreira",
      "hero.proof2": "Continentes",
      "hero.proof3": "Seguidores",
      "hero.proof3value": "275 mil",
      "hero.scroll": "Role para descobrir",

      "about.label": "Sobre",
      "about.title": "Samba brasileiro, levado ao palco do mundo.",
      "about.alt": "Camila Silva com figurino vermelho de carnaval",
      "about.caption": "Rainha do Carnaval · Brasil",
      "about.p1": "Camila Silva é uma bailarina, instrutora e embaixadora cultural brasileira com experiência internacional e mais de 21 anos de atuação profissional no Carnaval, em palco e em intercâmbio cultural.",
      "about.p2": "Seu trabalho vai além da apresentação. Camila ensina samba como linguagem cultural, conectando técnica, ritmo e expressão corporal às raízes afro-brasileiras do Carnaval brasileiro.",
      "about.p3": "Com experiência internacional na Europa, África, Ásia e América do Norte, Camila apresenta aulas, workshops e experiências culturais imersivas enraizadas na tradição brasileira, para públicos brasileiros e não brasileiros, festivais, instituições culturais e escolas de dança profissional.",
      "about.years": "anos de carreira",
      "about.continents": "continentes",
      "about.languages": "idiomas de trabalho",
      "about.pillar1t": "Sambando com Arte",
      "about.pillar1d": "Fundadora da Sambando com Arte — dedicada à preservação, à educação e à difusão internacional da cultura afro-brasileira do samba.",
      "about.pillar2t": "Rainha do Carnaval",
      "about.pillar2d": "Rainha do Carnaval no Brasil e no exterior, representando a cultura do samba brasileiro no mais alto nível.",
      "about.pillar3t": "Raízes afro-brasileiras",
      "about.pillar3d": "Enraizada na herança afro-brasileira — respeitosa, contextualizada e historicamente consciente.",
      "about.row1": "Base",
      "about.row2": "Território",
      "about.row3": "Formato",
      "about.territory": "Brasil",
      "about.format": "Performance · Workshop · Residência",
      "about.quote": "“Trazendo o mais alto nível da cultura do samba brasileiro para o mundo.”",

      "career.label": "Carreira",
      "career.title": "Camila Silva é reconhecida como uma das principais bailarinas de samba do Brasil.",
      "career.intro": "Sua carreira foi construída nos mais altos níveis do Carnaval brasileiro, do palco e da representação cultural. Esse reconhecimento nacional é a base de sua presença internacional.",
      "career.c1t": "Liderança no Carnaval Brasileiro",
      "career.c1d": "Referência brasileira entre bailarinas de samba, profissionais do Carnaval e produtores culturais, convidada a representar o Brasil em intercâmbios culturais internacionais.",
      "career.c2t": "Autoridade Cultural",
      "career.c2d": "Rainha do Carnaval no Brasil e no exterior, representando a cultura do samba brasileiro no mais alto nível profissional e cultural.",
      "career.c3t": "Carreira Profissional",
      "career.c3d": "Mais de 21 anos de experiência profissional no Carnaval brasileiro, em apresentações e eventos culturais pelo país. Fundadora da Sambando com Arte.",
      "career.banner": "Seu trabalho representa o samba brasileiro em seu mais alto nível profissional e cultural — enraizado na tradição e reconhecido internacionalmente.",

      "intl.eyebrow": "Experiência internacional",
      "intl.title": "Europa · África · Ásia · América do Norte",
      "intl.intro": "Camila Silva representou o samba brasileiro em quatro continentes, com apresentações, workshops e experiências culturais imersivas para públicos internacionais, festivais e instituições culturais.",
      "intl.i1c": "Suécia",
      "intl.i1city": "Estocolmo",
      "intl.i1d": "Rainha do Carnaval e instrutora de samba. Workshops, apresentações e programas de intercâmbio cultural.",
      "intl.tag1": "Rainha do Carnaval · Instrutora",
      "intl.i2c": "Cabo Verde",
      "intl.i2city": "África",
      "intl.i2d": "Embaixadora cultural e instrutora de samba. Workshops e apresentações celebrando as raízes afro-brasileiras.",
      "intl.tag2": "Embaixadora cultural · Instrutora",
      "intl.i3c": "Alemanha",
      "intl.i3city": "Coburgo",
      "intl.i3d": "Rainha do Carnaval e instrutora convidada. Apresentações em palco e workshops de samba.",
      "intl.tag3": "Rainha do Carnaval · Instrutora convidada",
      "intl.i4c": "Ásia e América do Norte",
      "intl.i4d": "Programas de intercâmbio cultural, apresentações e workshops apresentados para públicos internacionais, festivais e instituições culturais.",
      "intl.tag4": "Apresentação · Workshop",

      "gallery.label": "Galeria",
      "gallery.title": "Presença em imagem.",
      "gallery.intro": "Retratos e cenas de palco que traduzem força, elegância e brasilidade.",
      "gallery.hint": "Clique em uma imagem para ampliar.",
      "gallery.altProfile": "Retrato de Camila Silva em traje bege",

      "videos.label": "Vídeos",
      "videos.title": "O palco em movimento.",
      "videos.intro": "Momentos de apresentação do Carnaval brasileiro e de palcos internacionais — Carnaval do Rio, Sapucaí, desfiles de moda e residências artísticas.",
      "videos.hint": "Deslize para ver mais",
      "videos.watch": "Ver no Instagram",
      "video.play": "Reproduzir vídeo",
      "video.aria1": "Apresentação de samba na Sapucaí, Rio de Janeiro",
      "video.aria2": "Apresentação de samba no Carnaval do Rio de Janeiro",
      "video.aria3": "Apresentação de samba no Victoria's Secret Fashion Show",
      "video.aria4": "Apresentação de samba — TBT",
      "video.aria5": "Apresentação de samba — Rainha de Bateria 2018, Sapucaí",
      "video.aria6": "Apresentação de samba — Carnaval de São Paulo 2012",

      "social.label": "Instagram",
      "social.text": "Acompanhe o trabalho de perto — vídeos completos no Instagram.",
      "social.postsLabel": "Publicações",
      "social.postsValue": "1.743",
      "social.followersLabel": "Seguidores",
      "social.followersValue": "275 mil",
      "social.followingLabel": "Seguindo",
      "social.followingValue": "623",
      "social.cta": "Seguir no Instagram",

      "programs.label": "Ensino & Programas",
      "programs.title": "Como o samba brasileiro é ensinado a públicos internacionais.",
      "programs.intro": "A abordagem pedagógica de Camila Silva combina precisão técnica, contexto cultural e aprendizado corporal, pensados para estudantes não brasileiros e para bailarinas brasileiras interessadas em formação de samba de nível internacional. Sua metodologia traduz o samba como linguagem cultural viva — acessível, envolvente e respeitosa em relação às raízes afro-brasileiras — e já foi aplicada com sucesso na Europa, África, Ásia e América do Norte, em workshops, residências e programas culturais.",
      "method.m1t": "Técnica & Ritmo",
      "method.m1d": "Passos fundamentais do samba, estrutura rítmica e coordenação, adaptados a diferentes níveis de experiência e contextos culturais.",
      "method.m2t": "Contexto Cultural",
      "method.m2d": "Entender o samba além do movimento: história, cultura do Carnaval e herança afro-brasileira como parte do processo de aprendizagem.",
      "method.m3t": "Expressão Corporal & Presença",
      "method.m3d": "Postura, fluidez, interpretação musical e confiança, desenvolvendo uma expressão de samba autêntica.",
      "method.m4t": "Aprendizado Progressivo",
      "method.m4d": "Aulas estruturadas do nível iniciante ao avançado, garantindo clareza, segurança e desenvolvimento contínuo para participantes internacionais e bailarinas brasileiras em busca de formação avançada.",
      "programs.listTitle": "Aulas · Workshops · Residências",
      "programs.listIntro": "Camila Silva oferece programas estruturados de samba para públicos internacionais e bailarinas brasileiras, incluindo instituições culturais, festivais e escolas de dança profissional. Os programas são adaptáveis a diferentes formatos, tamanhos de grupo e níveis de experiência.",
      "programs.p1t": "Fundamentos do Samba",
      "programs.p1d": "Técnica, ritmo e coordenação. Indicado para públicos internacionais e bailarinas brasileiras em busca de refinamento técnico.",
      "programs.p1time": "60–90 min",
      "programs.p2t": "Samba Brasileiro & Experiência do Carnaval",
      "programs.p2d": "Workshops imersivos combinando dança, cultura e história do Carnaval.",
      "programs.p2time": "2–3 horas",
      "programs.p3t": "Raízes Afro-Brasileiras & Samba",
      "programs.p3d": "Explorando o samba como expressão e identidade cultural afro-brasileira.",
      "programs.p3time": "2–3 horas",
      "programs.p4t": "Presença de Palco & Performance de Samba",
      "programs.p4d": "Interpretação musical, expressão corporal e confiança de palco.",
      "programs.p4time": "2–3 horas",
      "programs.p5t": "Programa de Residência de Samba",
      "programs.p5d": "Experiências artísticas e educativas de vários dias para instituições e festivais.",
      "programs.p5time": "3–7 dias",
      "programs.ctaText": "Programas adaptáveis a diferentes formatos, grupos e níveis de experiência.",
      "programs.cta": "Falar sobre seu projeto",

      "contact.label": "Contato",
      "contact.title": "Vamos levar o samba ao seu evento?",
      "contact.intro": "Camila Silva está disponível para contratações internacionais, incluindo apresentações, workshops, residências e programas culturais. Os programas são sob medida para festivais, instituições culturais, escolas de dança e eventos especiais.",
      "contact.ctaWhats": "Falar no WhatsApp",
      "contact.ctaInstagram": "Instagram",
      "contact.pressLabel": "Imprensa & contratações internacionais",
      "contact.mediaKitLabel": "Media kit",
      "contact.mediaKitLink": "Baixar PDF",
      "contact.baseLabel": "Base",
      "contact.baseValue": "Dublin, Irlanda",
      "contact.sideTitle": "Ideal para",
      "contact.tick1": "Carnavais & festivais no mundo todo",
      "contact.tick2": "Instituições culturais & museus",
      "contact.tick3": "Escolas de dança profissional",
      "contact.tick4": "Marcas, turismo & experiências culturais",
      "contact.tick5": "Shows e eventos especiais",
      "contact.note": "Os programas são adaptáveis a diferentes formatos, tamanhos de grupo e níveis de experiência. Residências podem ser desenhadas para programas artísticos de vários dias.",
      "contact.alt": "Retrato editorial de Camila Silva com estampa de leopardo",
      "contact.caption": "Camila Silva · Dublin, Irlanda",

      "footer.close": "Trazendo o mais alto nível da cultura do samba brasileiro para o mundo.",
      "footer.mediaKit": "Media kit · PDF",
      "footer.location": "Dublin, Irlanda",
      "footer.backTop": "Voltar ao topo",

      "lightbox.label": "Galeria de fotos",
      "lightbox.close": "Fechar galeria",
      "lightbox.prev": "Imagem anterior",
      "lightbox.next": "Próxima imagem",
      "toast.copied": "Handle copiado"
    },

    en: {
      "meta.title": "Camila Silva — Samba Dancer & Model | International Bookings",
      "meta.description": "Camila Silva is a Brazilian samba dancer, model and cultural ambassador with over 21 years of experience in Carnival and on international stages. Performances, workshops and samba programs for events, festivals and institutions.",

      "brand.role": "Samba Dancer & Model",
      "print.tag": "Camila Silva · Samba Dancer & Model",
      "print.contact": "WhatsApp +353 85 817 2621",
      "nav.about": "About",
      "nav.career": "Career",
      "nav.gallery": "Gallery",
      "nav.videos": "Videos",
      "nav.programs": "Programs",
      "nav.contact": "Contact",
      "nav.cta": "Book now",
      "nav.mobileLabel": "Bookings & press",

      "aria.skip": "Skip to content",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.lang": "PT / EN — Switch language to Portuguese",
      "aria.copy": "Copy @iamcamilasilva",

      "hero.alt": "Portrait of Camila Silva in a light samba costume",
      "hero.eyebrow": "Samba Dancer · Model · Queen of Carnival",
      "hero.tagline": "Brazilian samba at its highest level.",
      "hero.meta": "Dublin, Ireland · International bookings",
      "hero.cta1": "Book for your event",
      "hero.cta2": "Discover my work",
      "hero.pdf": "Media kit PDF",
      "hero.proof1": "Years of experience",
      "hero.proof2": "Continents",
      "hero.proof3": "Followers",
      "hero.proof3value": "275K",
      "hero.scroll": "Scroll to discover",

      "about.label": "About",
      "about.title": "Brazilian samba, carried to the world stage.",
      "about.alt": "Camila Silva in a red carnival costume",
      "about.caption": "Queen of Carnival · Brazil",
      "about.p1": "Camila Silva is an internationally experienced Brazilian samba dancer, instructor and cultural ambassador with over 21 years of professional experience in Carnival, stage performance and international cultural exchange.",
      "about.p2": "Her work goes beyond performance. Camila teaches samba as a cultural language, connecting technique, rhythm and body expression with the Afro-Brazilian roots of Brazilian Carnival.",
      "about.p3": "With international experience across Europe, Africa, Asia and North America, Camila delivers samba classes, workshops and immersive cultural experiences rooted in Brazilian tradition, designed for Brazilian and non-Brazilian audiences, festivals, cultural institutions and professional dance schools.",
      "about.years": "years of experience",
      "about.continents": "continents",
      "about.languages": "working languages",
      "about.pillar1t": "Sambando com Arte",
      "about.pillar1d": "Founder of Sambando com Arte — dedicated to the preservation, education and international dissemination of Afro-Brazilian samba culture.",
      "about.pillar2t": "Queen of Carnival",
      "about.pillar2d": "Queen of Carnival in Brazil and internationally, representing Brazilian samba culture at the highest level.",
      "about.pillar3t": "Afro-Brazilian roots",
      "about.pillar3d": "Rooted in Afro-Brazilian heritage — respectful, contextual and historically aware.",
      "about.row1": "Based in",
      "about.row2": "Territory",
      "about.row3": "Format",
      "about.territory": "Brazil",
      "about.format": "Performance · Workshop · Residency",
      "about.quote": "“Bringing the highest level of Brazilian samba culture to the world.”",

      "career.label": "Career",
      "career.title": "Camila Silva is recognized as one of the leading samba dancers in Brazil.",
      "career.intro": "Her career was built at the highest levels of Brazilian Carnival, stage performance and cultural representation. That national recognition forms the foundation of her international presence.",
      "career.c1t": "Carnival Leadership Brazil",
      "career.c1d": "Brazilian reference among samba dancers, Carnival professionals and cultural producers, invited to represent Brazil in international cultural exchanges.",
      "career.c2t": "Cultural Authority",
      "career.c2d": "Queen of Carnival in Brazil and internationally, representing Brazilian samba culture at the highest professional and cultural level.",
      "career.c3t": "Professional Career",
      "career.c3d": "Over 21 years of professional experience in Brazilian Carnival, stage performances and cultural events across the country. Founder of Sambando com Arte.",
      "career.banner": "Her work represents Brazilian samba at its highest professional and cultural level — rooted in tradition and recognized internationally.",

      "intl.eyebrow": "International experience",
      "intl.title": "Europe · Africa · Asia · North America",
      "intl.intro": "Camila Silva has represented Brazilian samba across four continents, delivering performances, workshops and immersive cultural experiences for international audiences, festivals and cultural institutions.",
      "intl.i1c": "Sweden",
      "intl.i1city": "Stockholm",
      "intl.i1d": "Carnival Queen and Samba Instructor. Workshops, performances and cultural exchange programs.",
      "intl.tag1": "Queen of Carnival · Instructor",
      "intl.i2c": "Cabo Verde",
      "intl.i2city": "Africa",
      "intl.i2d": "Cultural Ambassador and Samba Instructor. Workshops and performances celebrating Afro-Brazilian roots.",
      "intl.tag2": "Cultural Ambassador · Instructor",
      "intl.i3c": "Germany",
      "intl.i3city": "Coburg",
      "intl.i3d": "Carnival Queen and Guest Instructor. Stage performances and samba workshops.",
      "intl.tag3": "Queen of Carnival · Guest Instructor",
      "intl.i4c": "Asia & North America",
      "intl.i4d": "Cultural exchange programs, performances and workshops presented for international audiences, festivals and cultural institutions.",
      "intl.tag4": "Performance · Workshop",

      "gallery.label": "Gallery",
      "gallery.title": "Presence, in frame.",
      "gallery.intro": "Portraits and stage moments that convey strength, elegance and Brazilian identity.",
      "gallery.hint": "Click an image to enlarge.",
      "gallery.altProfile": "Portrait of Camila Silva in a beige outfit",

      "videos.label": "Videos",
      "videos.title": "The stage in motion.",
      "videos.intro": "Performance moments from Brazilian Carnival and international stages — Carnival Rio, Sapucaí, fashion shows and artistic residencies.",
      "videos.hint": "Swipe to see more",
      "videos.watch": "View on Instagram",
      "video.play": "Play video",
      "video.aria1": "Samba performance at Sapucaí, Rio de Janeiro",
      "video.aria2": "Samba performance at Rio de Janeiro Carnival",
      "video.aria3": "Samba performance at the Victoria's Secret Fashion Show",
      "video.aria4": "Samba performance — TBT",
      "video.aria5": "Samba performance — Rainha de Bateria 2018, Sapucaí",
      "video.aria6": "Samba performance — São Paulo Carnival 2012",

      "social.label": "Instagram",
      "social.text": "Follow the work up close — full videos on Instagram.",
      "social.postsLabel": "Posts",
      "social.postsValue": "1,743",
      "social.followersLabel": "Followers",
      "social.followersValue": "275K",
      "social.followingLabel": "Following",
      "social.followingValue": "623",
      "social.cta": "Follow on Instagram",

      "programs.label": "Teaching & Programs",
      "programs.title": "How Brazilian samba is taught to international audiences",
      "programs.intro": "Camila Silva's teaching approach combines technical precision, cultural context and embodied learning, designed for non-Brazilian students and for Brazilian dancers interested in international-level samba education. Her methodology translates samba as a living cultural language — accessible, engaging and respectful of its Afro-Brazilian roots — and has been successfully applied in Europe, Africa, Asia and North America, in workshops, residencies and cultural programs.",
      "method.m1t": "Technique & Rhythm",
      "method.m1d": "Fundamental samba steps, rhythm structure and coordination, adapted to different experience levels and cultural backgrounds.",
      "method.m2t": "Cultural Context",
      "method.m2d": "Understanding samba beyond movement: history, Carnival culture and Afro-Brazilian heritage as part of the learning process.",
      "method.m3t": "Body Expression & Presence",
      "method.m3d": "Posture, fluidity, musical interpretation and confidence, developing authentic samba expression.",
      "method.m4t": "Progressive Learning",
      "method.m4d": "Classes structured from beginner to advanced levels, ensuring clarity, safety and continuous development for international participants and Brazilian dancers seeking advanced training.",
      "programs.listTitle": "Classes · Workshops · Residencies",
      "programs.listIntro": "Camila Silva offers structured samba programs designed for international audiences and Brazilian dancers, including cultural institutions, festivals and professional dance schools. Programs are adaptable to different formats, group sizes and experience levels.",
      "programs.p1t": "Fundamentals of Samba",
      "programs.p1d": "Technique, rhythm and coordination. Suitable for international audiences and Brazilian dancers seeking technical refinement.",
      "programs.p1time": "60–90 min",
      "programs.p2t": "Brazilian Samba & Carnival Experience",
      "programs.p2d": "Immersive workshops combining dance, culture and Carnival history.",
      "programs.p2time": "2–3 hours",
      "programs.p3t": "Afro-Brazilian Roots & Samba",
      "programs.p3d": "Exploring samba as Afro-Brazilian cultural expression and identity.",
      "programs.p3time": "2–3 hours",
      "programs.p4t": "Stage Presence & Samba Performance",
      "programs.p4d": "Musical interpretation, body expression and stage confidence.",
      "programs.p4time": "2–3 hours",
      "programs.p5t": "Samba Residency Program",
      "programs.p5d": "Multi-day artistic and educational experiences for institutions and festivals.",
      "programs.p5time": "3–7 days",
      "programs.ctaText": "Programs adaptable to different formats, group sizes and experience levels.",
      "programs.cta": "Discuss your project",

      "contact.label": "Contact",
      "contact.title": "Let's bring samba to your event?",
      "contact.intro": "Camila Silva is available for international bookings, including performances, workshops, residencies and cultural programs. Programs are tailored for festivals, cultural institutions, dance schools and special events.",
      "contact.ctaWhats": "Message on WhatsApp",
      "contact.ctaInstagram": "Instagram",
      "contact.pressLabel": "Press & international bookings",
      "contact.mediaKitLabel": "Media kit",
      "contact.mediaKitLink": "Download PDF",
      "contact.baseLabel": "Location",
      "contact.baseValue": "Dublin, Ireland",
      "contact.sideTitle": "Ideal for",
      "contact.tick1": "Carnivals & festivals worldwide",
      "contact.tick2": "Cultural institutions & museums",
      "contact.tick3": "Professional dance schools",
      "contact.tick4": "Brands, tourism & cultural experiences",
      "contact.tick5": "Stage shows & special events",
      "contact.note": "Programs are adaptable to different formats, group sizes and experience levels. Residencies can be tailored for multi-day artistic programs.",
      "contact.alt": "Editorial portrait of Camila Silva in leopard print",
      "contact.caption": "Camila Silva · Dublin, Ireland",

      "footer.close": "Bringing the highest level of Brazilian samba culture to the world.",
      "footer.mediaKit": "Media kit · PDF",
      "footer.location": "Dublin, Ireland",
      "footer.backTop": "Back to top",

      "lightbox.label": "Photo gallery",
      "lightbox.close": "Close gallery",
      "lightbox.prev": "Previous image",
      "lightbox.next": "Next image",
      "toast.copied": "Handle copied"
    }
  };

  const $ = (selector, context) => (context || document).querySelector(selector);
  const $$ = (selector, context) => Array.from((context || document).querySelectorAll(selector));

  const safeStorage = {
    get(key) {
      try { return window.localStorage.getItem(key); } catch (error) { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch (error) { /* noop */ }
    }
  };

  const forcedLang = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
  const storedLang = (safeStorage.get("cs-lang") || "").toLowerCase();
  let lang = forcedLang === "en" || forcedLang === "pt"
    ? forcedLang
    : (storedLang === "en" || storedLang === "pt" ? storedLang : "pt");

  let menuOpen = false;
  let toastTimer = 0;
  let lightboxIndex = 0;
  let lightboxTrigger = null;

  const header = $("#header");
  const navLinks = $("#navLinks");
  const burger = $("#burger");
  const langToggle = $("#langToggle");
  const navProgress = $("#navProgress");
  const navItems = $$("[data-nav]");
  const galleryItems = $$("[data-lightbox]");
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");
  const lightboxCount = $("#lightboxCount");
  const toast = $("#toast");

  const pdfForLang = () => lang === "pt"
    ? "Camila-Silva-Media-Kit-PT.pdf"
    : "Camila-Silva-Media-Kit.pdf";

  const currentDictionary = () => I18N[lang] || I18N.pt;

  function applyLanguage(next) {
    lang = I18N[next] ? next : "pt";
    safeStorage.set("cs-lang", lang);

    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    document.documentElement.setAttribute("data-lang", lang);

    const dictionary = currentDictionary();

    $$("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key in dictionary) element.textContent = dictionary[key];
    });

    $$("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      if (key in dictionary) element.setAttribute("aria-label", dictionary[key]);
    });

    $$("[data-i18n-alt]").forEach((element) => {
      const key = element.getAttribute("data-i18n-alt");
      if (key in dictionary) element.setAttribute("alt", dictionary[key]);
    });

    $$("[data-lang-label]").forEach((element) => {
      element.classList.toggle("is-active", element.getAttribute("data-lang-label") === lang);
    });

    $$("[data-download]").forEach((element) => {
      const file = pdfForLang();
      element.setAttribute("href", file);
      element.setAttribute("download", file);
    });

    document.title = dictionary["meta.title"];
    const description = $('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary["meta.description"]);

    if (burger) {
      burger.setAttribute("aria-label", dictionary[menuOpen ? "aria.menuClose" : "aria.menuOpen"]);
    }

    if (lightbox && lightbox.open) updateLightbox();
  }

  function setMenu(open, restoreFocus) {
    if (!header || !navLinks || !burger) return;
    menuOpen = open;
    header.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", currentDictionary()[open ? "aria.menuClose" : "aria.menuOpen"]);
    document.body.classList.toggle("is-locked", open);

    if (open) {
      const firstLink = navLinks.querySelector("a[href]");
      if (firstLink) window.setTimeout(() => firstLink.focus({ preventScroll: true }), 60);
    } else if (restoreFocus) {
      burger.focus({ preventScroll: true });
    }
  }

  function visibleFocusable(container) {
    return $$("a[href], button:not([disabled])", container).filter((element) => {
      const styles = window.getComputedStyle(element);
      return element.getClientRects().length > 0 && styles.visibility !== "hidden" && styles.display !== "none";
    });
  }

  function updateActiveNav() {
    if (!navItems.length) return;
    const probe = window.scrollY + window.innerHeight * 0.34;
    let activeId = "";

    navItems.forEach((link) => {
      const target = $(link.getAttribute("href"));
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY;
      if (probe >= top) activeId = target.id;
    });

    navItems.forEach((link) => {
      const isActive = link.getAttribute("href") === "#" + activeId;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function onScroll() {
    const scrolled = window.scrollY;
    if (header) header.classList.toggle("is-stuck", scrolled > 40);

    if (navProgress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(scrolled / scrollable, 1) : 0;
      navProgress.style.width = (progress * 100).toFixed(2) + "%";
    }

    updateActiveNav();
  }

  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => {
      onScroll();
      scrollTicking = false;
    });
  }, { passive: true });

  if (burger) {
    burger.addEventListener("click", () => setMenu(!menuOpen, !menuOpen));
  }

  if (navLinks) {
    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a[href]") && menuOpen) setMenu(false, false);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!menuOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false, true);
      return;
    }

    if (event.key !== "Tab" || !header) return;
    const focusable = visibleFocusable(header);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const desktopQuery = window.matchMedia("(max-width: 1020px)");
  const handleDesktopQuery = (event) => {
    if (!event.matches && menuOpen) setMenu(false, false);
  };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", handleDesktopQuery);
  else if (desktopQuery.addListener) desktopQuery.addListener(handleDesktopQuery);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(lang === "pt" ? "en" : "pt");
    });
  }

  const revealElements = $$(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const videos = $$(".reel video");

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      const frame = video.closest(".reel__frame");
      if (frame) {
        frame.classList.add("is-playing");
        const button = frame.querySelector("[data-reel-toggle]");
        if (button) button.hidden = true;
      }
      videos.forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
    });
    video.addEventListener("pause", () => {
      const frame = video.closest(".reel__frame");
      if (frame) frame.classList.remove("is-playing");
    });
  });

  $$("[data-reel-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const frame = button.closest(".reel__frame");
      const video = frame ? frame.querySelector("video") : null;
      if (!video) return;

      video.controls = true;
      video.muted = false;

      const attempt = video.play();
      if (attempt && attempt.catch) {
        attempt.catch(() => {
          video.muted = true;
          const mutedAttempt = video.play();
          if (mutedAttempt && mutedAttempt.catch) mutedAttempt.catch(() => {});
        });
      }

      button.hidden = true;
      if (frame) frame.classList.add("is-playing");
      window.setTimeout(() => video.focus({ preventScroll: true }), 0);
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      videos.forEach((video) => {
        if (!video.paused) video.pause();
      });
    }
  });

  function captionFor(item) {
    return lang === "pt" ? item.getAttribute("data-caption-pt") : item.getAttribute("data-caption-en");
  }

  function updateLightbox() {
    if (!lightboxImage || !lightboxCaption || !lightboxCount) return;
    const item = galleryItems[lightboxIndex];
    if (!item) return;
    const image = item.querySelector("img");

    lightboxImage.setAttribute("src", item.getAttribute("data-full") || "");
    lightboxImage.setAttribute("alt", image ? image.alt : "");
    lightboxCaption.textContent = captionFor(item) || "";
    lightboxCount.textContent = (lightboxIndex + 1) + " / " + galleryItems.length;
  }

  function openLightbox(index, trigger) {
    if (!lightbox) return;
    lightboxIndex = index;
    lightboxTrigger = trigger || null;
    updateLightbox();

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
      document.body.classList.add("is-locked");
    }
  }

  function closeLightbox() {
    if (!lightbox) return;
    if (typeof lightbox.close === "function" && lightbox.open) {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
      document.body.classList.remove("is-locked");
      if (lightboxTrigger) lightboxTrigger.focus({ preventScroll: true });
    }
  }

  function stepLightbox(direction) {
    if (!galleryItems.length) return;
    lightboxIndex = (lightboxIndex + direction + galleryItems.length) % galleryItems.length;
    updateLightbox();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index, item));
  });

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    lightbox.addEventListener("close", () => {
      document.body.classList.remove("is-locked");
      if (lightboxTrigger) lightboxTrigger.focus({ preventScroll: true });
    });

    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        stepLightbox(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        stepLightbox(1);
      }
    });
  }

  const lightboxClose = $("#lightboxClose");
  const lightboxPrev = $("#lightboxPrev");
  const lightboxNext = $("#lightboxNext");
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => stepLightbox(1));

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve) => {
      const field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try { document.execCommand("copy"); } catch (error) { /* noop */ }
      document.body.removeChild(field);
      resolve();
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  $$("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-copy");
      if (!value) return;
      copyText(value).then(() => showToast(currentDictionary()["toast.copied"]));
    });
  });

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyLanguage(lang);
  onScroll();
})();
