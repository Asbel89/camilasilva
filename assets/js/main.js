/* =========================================================
   CAMILA SILVA - MEDIA KIT  |  interactions + i18n
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- translations ---------------- */
  const I18N = {
    en: {
      "brand.role": "Samba Dancer & Model",
      "nav.profile": "Profile",
      "nav.career": "Career",
      "nav.dance": "Dance",
      "nav.international": "International",
      "nav.method": "Method",
      "nav.programs": "Programs",
      "nav.contact": "Contact",
      "nav.cta": "Bookings",

      "hero.eyebrow": "Press Kit · Media Kit",
      "hero.title": "Camila\u00A0Silva",
      "hero.role": "Professional Samba Dancer & Model",
      "hero.crown": "👑 Samba Queen Brasil",
      "hero.loc": "Dublin | Ireland",
      "hero.globe": "🌍 International Bookings",
      "hero.cta1": "International Bookings",
      "hero.cta2": "WhatsApp",
      "hero.pdf": "Download PDF",

      "print.tag": "Media Kit · Professional Samba Dancer & Model",
      "print.contact": "Dublin, Ireland · +353 85 817 2621",

      "stats.postsLabel": "Posts",
      "stats.followersLabel": "Followers",
      "stats.followingLabel": "Following",
      "stats.yearsLabel": "Years of experience",

      "about.eyebrow": "Profile",
      "about.title": "Brazilian samba, carried to the world stage.",
      "about.p1": "Camila Silva is an internationally experienced Brazilian samba dancer, instructor and cultural ambassador with over 21 years of professional experience in Carnival, stage performance and international cultural exchange.",
      "about.p2": "Her work goes beyond performance. Camila teaches samba as a cultural language, connecting technique, rhythm and body expression with the Afro-Brazilian roots of Brazilian Carnival.",
      "about.p3": "With international experience across Europe, Africa, Asia and North America, Camila delivers samba classes, workshops and immersive cultural experiences rooted in Brazilian tradition, designed for Brazilian and non-Brazilian audiences, festivals, cultural institutions and professional dance schools.",
      "about.founder": "Founder of Sambando com Arte — dedicated to the preservation, education and international dissemination of Afro-Brazilian samba culture.",
      "about.role": "Queen of Carnival in Brazil and internationally, representing Brazilian samba culture at the highest level.",
      "about.roots": "Rooted in Afro-Brazilian heritage — respectful, contextual and historically aware.",
      "about.tag": "Professional · Carnival · Stage",
      "about.row1": "Based in",
      "about.row2": "Territory",
      "about.row3": "Working languages",
      "about.row4": "Format",
      "about.quote": "“Bringing the highest level of Brazilian samba culture to the world.”",

      "career.eyebrow": "Career Highlights & National Recognition",
      "career.title": "Camila Silva is recognized as one of the leading samba dancers in Brazil.",
      "career.intro": "Her career was built at the highest levels of Brazilian Carnival, stage performance and cultural representation. That national recognition forms the foundation of her international presence.",
      "career.c1t": "Carnival Leadership Brazil",
      "career.c1d": "Brazilian reference among samba dancers, Carnival professionals and cultural producers, invited to represent Brazil in international cultural exchanges.",
      "career.c2t": "Cultural Authority",
      "career.c2d": "Queen of Carnival in Brazil and internationally, representing Brazilian samba culture at the highest professional and cultural level.",
      "career.c3t": "Professional Career",
      "career.c3d": "Over 21 years of professional experience in Brazilian Carnival, stage performances and cultural events across the country. Founder of Sambando com Arte.",
      "career.banner": "Her work represents Brazilian samba at its highest professional and cultural level — rooted in tradition and recognized internationally.",

      "intl.eyebrow": "International Experience",
      "intl.title": "Europe | Africa | Asia | North America",
      "intl.intro": "Camila Silva has represented Brazilian samba across four continents, delivering performances, workshops and immersive cultural experiences for international audiences, festivals and cultural institutions.",
      "intl.i1t": "Sweden <small>Stockholm</small>",
      "intl.i1d": "Carnival Queen of Carnival and Samba Instructor. Workshops, performances and cultural exchange programs.",
      "intl.tag1": "Queen of Carnival · Instructor",
      "intl.i2t": "Cabo Verde <small>Africa</small>",
      "intl.i2d": "Cultural Ambassador and Samba Instructor. Workshops and performances celebrating Afro-Brazilian roots.",
      "intl.tag2": "Cultural Ambassador · Instructor",
      "intl.i3t": "Germany <small>Coburg</small>",
      "intl.i3d": "Carnival Queen & Guest Instructor. Stage performances and samba workshops.",
      "intl.tag3": "Queen of Carnival · Guest Instructor",
      "intl.i4t": "Asia & North America",
      "intl.i4d": "Cultural exchange programs, performances and workshops presented for international audiences, festivals and cultural institutions.",
      "intl.tag4": "Performance · Workshop",

      "dance.eyebrow": "On Stage",
      "dance.title": "Dance Reels",
      "dance.intro": "Performance moments from Brazilian Carnival and international stages — Carnival Rio, Sapucaí, fashion shows and international residencies.",
      "dance.note": "Full reels on Instagram: @iamcamilasilva",

      "method.eyebrow": "Teaching & Method",
      "method.title": "How Brazilian samba is taught to international audiences",
      "method.intro": "Camila Silva's teaching approach combines technical precision, cultural context and embodied learning, designed for non-Brazilian students and for Brazilian dancers interested in international-level samba education. Her methodology translates samba as a living cultural language — accessible, engaging and respectful of its Afro-Brazilian roots — and has been successfully applied in Europe, Africa, Asia and North America, in workshops, residencies and cultural programs.",
      "method.m1t": "Technique & Rhythm",
      "method.m1d": "Fundamental samba steps, rhythm structure and coordination, adapted to different experience levels and cultural backgrounds.",
      "method.m2t": "Cultural Context",
      "method.m2d": "Understanding samba beyond movement: history, Carnival culture and Afro-Brazilian heritage as part of the learning process.",
      "method.m3t": "Body Expression & Presence",
      "method.m3d": "Posture, fluidity, musical interpretation and confidence, developing authentic samba expression.",
      "method.m4t": "Progressive Learning",
      "method.m4d": "Classes structured from beginner to advanced levels, ensuring clarity, safety and continuous development for international participants and Brazilian dancers seeking advanced training.",

      "prog.eyebrow": "Programs & Workshops",
      "prog.title": "Classes · Workshops · Residencies",
      "prog.intro": "Camila Silva offers structured samba programs designed for international audiences and Brazilian dancers, including cultural institutions, festivals and professional dance schools. Programs are adaptable to different formats, group sizes and experience levels.",
      "prog.p1t": "Fundamentals of Samba",
      "prog.p1d": "Technique, rhythm and coordination. Suitable for international audiences and Brazilian dancers seeking technical refinement.",
      "prog.p2t": "Brazilian Samba & Carnival Experience",
      "prog.p2d": "Immersive workshops combining dance, culture and Carnival history.",
      "prog.p3t": "Afro-Brazilian Roots & Samba",
      "prog.p3d": "Exploring samba as Afro-Brazilian cultural expression and identity.",
      "prog.p4t": "Stage Presence & Samba Performance",
      "prog.p4d": "Musical interpretation, body expression and stage confidence.",
      "prog.p5t": "Samba Residency Program",
      "prog.p5d": "Multi-day artistic and educational experiences for institutions and festivals.",
      "prog.min": "min",
      "prog.hours": "hours",
      "prog.days": "days",

      "contact.eyebrow": "Bookings & Contact",
      "contact.title": "International Bookings",
      "contact.text": "Camila Silva is available for international bookings, including performances, workshops, residencies and cultural programs. Programs are tailored for festivals, cultural institutions, dance schools and special events.",
      "contact.label": "Press & International Bookings",
      "contact.cta1": "Message on WhatsApp",
      "contact.whatsapp": "WhatsApp",
      "contact.sideTitle": "Ideal for",
      "contact.tick1": "Carnivals & festivals worldwide",
      "contact.tick2": "Cultural institutions & museums",
      "contact.tick3": "Professional dance schools",
      "contact.tick4": "Brands, tourism & cultural tourism",
      "contact.tick5": "Stage shows & special events",
      "contact.note": "Programs are adaptable to different formats, group sizes and experience levels. Residencies can be tailored for multi-day artistic programs.",

      "footer.close": "Bringing the highest level of Brazilian samba culture to the world."
    },

    pt: {
      "brand.role": "Bailarina e Modelo de Samba",
      "nav.profile": "Perfil",
      "nav.career": "Carreira",
      "nav.dance": "Dança",
      "nav.international": "Internacional",
      "nav.method": "Método",
      "nav.programs": "Programas",
      "nav.contact": "Contato",
      "nav.cta": "Bookings",

      "hero.eyebrow": "Press Kit · Media Kit",
      "hero.title": "Camila\u00A0Silva",
      "hero.role": "Bailarina e Modelo de Samba Profissional",
      "hero.crown": "👑 Rainha do Carnaval do Brasil",
      "hero.loc": "Dublin | Irlanda",
      "hero.globe": "🌍 Contratações Internacionais",
      "hero.cta1": "Contratações Internacionais",
      "hero.cta2": "WhatsApp",
      "hero.pdf": "Baixar PDF",

      "print.tag": "Media Kit · Bailarina e Modelo de Samba Profissional",
      "print.contact": "Dublin, Irlanda · +353 85 817 2621",

      "stats.postsLabel": "Publicações",
      "stats.followersLabel": "Seguidores",
      "stats.followingLabel": "Seguindo",
      "stats.yearsLabel": "Anos de experiência",

      "about.eyebrow": "Perfil",
      "about.title": "Samba brasileiro levado ao palco mundial.",
      "about.p1": "Camila Silva é uma bailarina, instrutora e embaixadora cultural brasileira com experiência internacional e mais de 21 anos de atuação profissional no Carnaval, em palco e em intercâmbio cultural.",
      "about.p2": "Seu trabalho vai além da apresentação. Camila ensina samba como linguagem cultural, conectando técnica, ritmo e expressão corporal às raízes afro-brasileiras do Carnaval brasileiro.",
      "about.p3": "Com experiência internacional na Europa, África, Ásia e América do Norte, Camila apresenta aulas, workshops e experiências culturais imersivas enraizadas na tradição brasileira, para públicos brasileiros e não brasileiros, festivais, instituições culturais e escolas de dança profissional.",
      "about.founder": "Fundadora da Sambando com Arte — dedicada à preservação, à educação e à difusão internacional da cultura afro-brasileira do samba.",
      "about.role": "Rainha do Carnaval no Brasil e no exterior, representando a cultura do samba brasileiro no mais alto nível.",
      "about.roots": "Enraizada na herança afro-brasileira — respeitosa, contextualizada e historicamente consciente.",
      "about.tag": "Profissional · Carnaval · Palco",
      "about.row1": "Base",
      "about.row2": "Território",
      "about.row3": "Idiomas de trabalho",
      "about.row4": "Formato",
      "about.quote": "“Trazendo o mais alto nível da cultura do samba brasileiro para o mundo.”",

      "career.eyebrow": "Destaques de Carreira & Reconhecimento Nacional",
      "career.title": "Camila Silva é reconhecida como uma das principais bailarinas de samba do Brasil.",
      "career.intro": "Sua carreira foi construída nos mais altos níveis do Carnaval brasileiro, do palco e da representação cultural. Esse reconhecimento nacional é a base de sua presença internacional.",
      "career.c1t": "Liderança no Carnaval Brasileiro",
      "career.c1d": "Referência brasileira entre bailarinas de samba, profissionais do Carnaval e produtores culturais, convidada a representar o Brasil em intercâmbios culturais internacionais.",
      "career.c2t": "Autoridade Cultural",
      "career.c2d": "Rainha do Carnaval no Brasil e no exterior, representando a cultura do samba brasileiro no mais alto nível profissional e cultural.",
      "career.c3t": "Carreira Profissional",
      "career.c3d": "Mais de 21 anos de experiência profissional no Carnaval brasileiro, em apresentações e eventos culturais pelo país. Fundadora da Sambando com Arte.",
      "career.banner": "Seu trabalho representa o samba brasileiro em seu mais alto nível profissional e cultural — enraizado na tradição e reconhecido internacionalmente.",

      "intl.eyebrow": "Experiência Internacional",
      "intl.title": "Europa | África | Ásia | América do Norte",
      "intl.intro": "Camila Silva representou o samba brasileiro em quatro continentes, com apresentações, workshops e experiências culturais imersivas para públicos internacionais, festivais e instituições culturais.",
      "intl.i1t": "Suécia <small>Estocolmo</small>",
      "intl.i1d": "Rainha do Carnaval e Instrutora de Samba. Workshops, apresentações e programas de intercâmbio cultural.",
      "intl.tag1": "Rainha do Carnaval · Instrutora",
      "intl.i2t": "Cabo Verde <small>África</small>",
      "intl.i2d": "Embaixadora Cultural e Instrutora de Samba. Workshops e apresentações celebrando as raízes afro-brasileiras.",
      "intl.tag2": "Embaixadora Cultural · Instrutora",
      "intl.i3t": "Alemanha <small>Coburgo</small>",
      "intl.i3d": "Rainha do Carnaval e Instrutora Convidada. Apresentações em palco e workshops de samba.",
      "intl.tag3": "Rainha do Carnaval · Instrutora Convidada",
      "intl.i4t": "Ásia e América do Norte",
      "intl.i4d": "Programas de intercâmbio cultural, apresentações e workshops apresentados para públicos internacionais, festivais e instituições culturais.",
      "intl.tag4": "Apresentação · Workshop",

      "dance.eyebrow": "No Palco",
      "dance.title": "Vídeos de Dança",
      "dance.intro": "Momentos de apresentação do Carnaval brasileiro e de palcos internacionais — Carnaval do Rio, Sapucaí, desfiles de moda e residências artística.",
      "dance.note": "Vídeos completos no Instagram: @iamcamilasilva",

      "method.eyebrow": "Ensino & Método",
      "method.title": "Como o samba brasileiro é ensinado a públicos internacionais",
      "method.intro": "A abordagem pedagógica de Camila Silva combina precisão técnica, contexto cultural e aprendizado corporal, pensados para estudantes não brasileiros e para bailarinas brasileiros interessados em formação de samba de nível internacional. Sua metodologia traduz o samba como linguagem cultural viva — acessível, envolvente e respeitosa em relação às raízes afro-brasileiras — e já foi aplicada com sucesso na Europa, África, Ásia e América do Norte, em workshops, residências e programas culturais.",
      "method.m1t": "Técnica e Ritmo",
      "method.m1d": "Passos fundamentais do samba, estrutura rítmica e coordenação, adaptados a diferentes níveis de experiência e contextos culturais.",
      "method.m2t": "Contexto Cultural",
      "method.m2d": "Entender o samba além do movimento: história, cultura do Carnaval e herança afro-brasileira como parte do processo de aprendizagem.",
      "method.m3t": "Expressão Corporal e Presença",
      "method.m3d": "Postura, fluidez, interpretação musical e confiança, desenvolvendo uma expressão de samba autêntica.",
      "method.m4t": "Aprendizado Progressivo",
      "method.m4d": "Aulas estruturadas do nível iniciante ao avançado, garantindo clareza, segurança e desenvolvimento contínuo para participantes internacionais e bailarinas brasileiros em busca de formação avançada.",

      "prog.eyebrow": "Programas & Workshops",
      "prog.title": "Aulas · Workshops · Residências",
      "prog.intro": "Camila Silva oferece programas estruturados de samba para públicos internacionais e bailarinas brasileiros, incluindo instituições culturais, festivais e escolas de dança profissional. Os programas são adaptáveis a diferentes formatos, tamanhos de grupo e níveis de experiência.",
      "prog.p1t": "Fundamentos do Samba",
      "prog.p1d": "Técnica, ritmo e coordenação. Indicado para públicos internacionais e bailarinas brasileiros em busca de refinamento técnico.",
      "prog.p2t": "Samba Brasileiro & Experiência do Carnaval",
      "prog.p2d": "Workshops imersivos combinando dança, cultura e história do Carnaval.",
      "prog.p3t": "Raízes Afro-Brasileiras & Samba",
      "prog.p3d": "Explorando o samba como expressão e identidade cultural afro-brasileira.",
      "prog.p4t": "Presença de Palco & Performance de Samba",
      "prog.p4d": "Interpretação musical, expressão corporal e confiança de palco.",
      "prog.p5t": "Programa de Residência de Samba",
      "prog.p5d": "Experiências artísticas e educativas de vários dias para instituições e festivais.",
      "prog.min": "min",
      "prog.hours": "horas",
      "prog.days": "dias",

      "contact.eyebrow": "Contratações & Contato",
      "contact.title": "Contratações Internacionais",
      "contact.text": "Camila Silva está disponível para contratações internacionais, incluindo apresentações, workshops, residências e programas culturais. Os programas são sob medida para festivais, instituições culturais, escolas de dança e eventos especiais.",
      "contact.label": "Imprensa & Contratações Internacionais",
      "contact.cta1": "Falar no WhatsApp",
      "contact.whatsapp": "WhatsApp",
      "contact.sideTitle": "Ideal para",
      "contact.tick1": "Carnavais & festivais no mundo todo",
      "contact.tick2": "Instituições culturais & museus",
      "contact.tick3": "Escolas de dança profissional",
      "contact.tick4": "Marcas, turismo & turismo cultural",
      "contact.tick5": "Shows e eventos especiais",
      "contact.note": "Os programas são adaptáveis a diferentes formatos, tamanhos de grupo e níveis de experiência. Residências podem ser desenhadas para programas artísticos de vários dias.",

      "footer.close": "Trazendo o mais alto nível da cultura do samba brasileiro para o mundo."
    }
  };

  const LOCALE = { en: "en-US", pt: "pt-BR" };
  const NUMBER_SUFFIX = {
    en: { followers: "K", years: "+" },
    pt: { followers: " mil", years: "+" }
  };

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------- state ---------------- */
  const forced = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
  let lang = (forced === "pt" || forced === "en")
    ? forced
    : ((localStorage.getItem("cs-lang") || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  let countersDone = false;

  /* ---------------- counters ---------------- */
  const counters = $$("[data-count]");

  function locale() {
    return LOCALE[lang] || "en-US";
  }

  function renderCounters(ratio) {
    counters.forEach(function (el) {
      const target = Number(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      const n = Math.round(target * ratio);
      const text = n.toLocaleString(locale()) + suffix;
      el.textContent = text;
      const slot = el.parentElement && el.parentElement.querySelector(".stats__final");
      if (slot) slot.textContent = target.toLocaleString(locale()) + suffix;
    });
  }

  function updateCounters() {
    counters.forEach(function (el) {
      el.setAttribute("data-value", "1");
    });
    renderCounters(1);
  }

  function runCounters() {
    if (countersDone) return;
    countersDone = true;
    const dur = 1600;
    const start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      counters.forEach(function (el) {
        el.setAttribute("data-value", eased.toFixed(4));
      });
      renderCounters(eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------------- language ---------------- */
  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    localStorage.setItem("cs-lang", lang);
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    document.documentElement.setAttribute("data-lang", lang);

    const dict = I18N[lang];
    $$("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!(key in dict)) return;
      const value = dict[key];
      if (/<small>|<br>/i.test(value)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    $$("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (key in dict) el.innerHTML = dict[key];
    });

    $$("[data-lang-label]").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang-label") === lang);
    });

    const followers = $("#statFollowers");
    const years = $("#statYears");
    if (followers) followers.setAttribute("data-suffix", NUMBER_SUFFIX[lang].followers);
    if (years) years.setAttribute("data-suffix", NUMBER_SUFFIX[lang].years);

    $$("[data-download]").forEach(function (el) {
      const file = lang === "pt" ? "Camila-Silva-Media-Kit-PT.pdf" : "Camila-Silva-Media-Kit.pdf";
      el.setAttribute("href", file);
      el.setAttribute("download", file);
    });

    if (countersDone) updateCounters();
  }

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(lang === "en" ? "pt" : "en");
    });
  }

  /* ---------------- nav ---------------- */
  const nav = $("#nav");
  const burger = $("#burger");
  const navLinks = $("#navLinks");

  function onScroll() {
    if (nav) nav.classList.toggle("is-stuck", window.scrollY > 40);
    const bar = $("#navProgress");
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
      bar.style.width = (pct * 100).toFixed(2) + "%";
    }
    const img = $("[data-parallax]");
    if (img && !document.body.classList.contains("printing")) {
      const y = window.scrollY * parseFloat(img.getAttribute("data-parallax"));
      img.style.transform = "translate3d(0," + y.toFixed(1) + "px,0) scale(1.06)";
    }
  }

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });
  onScroll();

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-locked", open);
      if (nav) nav.classList.toggle("is-open", open);
    });
    $$("#navLinks a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("is-locked");
        if (nav) nav.classList.remove("is-open");
      });
    });
  }

  /* ---------------- reels ---------------- */
  const reels = $$("[data-reel]");
  reels.forEach(function (video) {
    const frame = video.closest(".reel__frame");
    if (!frame) return;

    video.addEventListener("play", function () { frame.classList.remove("is-paused"); });
    video.addEventListener("pause", function () { frame.classList.add("is-paused"); });
    if (video.paused) frame.classList.add("is-paused");

    frame.addEventListener("click", function () {
      if (video.paused) {
        const p = video.play();
        if (p && p.catch) p.catch(function () { /* blocked */ });
      } else {
        video.pause();
      }
    });

    const start = video.play();
    if (start && start.catch) {
      start.catch(function () {
        frame.classList.add("is-paused");
      });
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      reels.forEach(function (v) { if (!v.paused) { v.dataset.resume = "1"; v.pause(); } });
    } else {
      reels.forEach(function (v) {
        if (v.dataset.resume) { delete v.dataset.resume; const p = v.play(); if (p && p.catch) p.catch(function () {}); }
      });
    }
  });

  /* ---------------- reveal on scroll ---------------- */
  const revealables = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Number(el.getAttribute("data-delay") || 0);
        setTimeout(function () { el.classList.add("is-visible"); }, delay + i * 60);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- start counters when stats visible ---------------- */
  if ("IntersectionObserver" in window && counters.length) {
    const stats = $(".stats");
    if (stats) {
      const cio = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { runCounters(); cio.disconnect(); }
      }, { threshold: 0.01, rootMargin: "0px 0px 40% 0px" });
      cio.observe(stats);
    }
  } else {
    runCounters();
  }

  /* ---------------- toast + copy ---------------- */
  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2200);
  }

  $$("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const value = btn.getAttribute("data-copy");
      const done = function () { showToast(lang === "pt" ? "Handle copiado" : "Handle copied"); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* noop */ }
        document.body.removeChild(ta);
        done();
      }
    });
  });

  /* ---------------- print / PDF ---------------- */
  $$("[data-print]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.add("printing");
      window.setTimeout(function () {
        window.print();
        document.body.classList.remove("printing");
      }, 60);
    });
  });

  window.addEventListener("beforeprint", function () {
    document.body.classList.add("printing");
  });
  window.addEventListener("afterprint", function () {
    document.body.classList.remove("printing");
  });

  /* ---------------- misc ---------------- */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyLang(lang);
  renderCounters(0);
})();
