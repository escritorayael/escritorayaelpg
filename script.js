/* =========================
   Helpers
========================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =========================
   Footer year
========================= */
(() => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* =========================
   Dropdowns (desktop + mobile)
========================= */
(() => {
  const dropdownItems = Array.from(document.querySelectorAll(".has-dropdown"));
  let pinnedItem = null;  // abierto por click
  let hoverItem = null;   // abierto por hover temporal
  const closeTimers = new Map(); // timers por item (para no cerrar por "gap")

  function openItem(item) {
    if (!item) return;
    item.classList.add("is-open");
    const btn = item.querySelector(".nav-link-btn");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  function closeHoverItem(item) {
    if (!item) return;
    // Si este item está pinned, no lo cierres aquí
    if (item.classList.contains("is-pinned")) return;

    item.classList.remove("is-open");
    const btn = item.querySelector(".nav-link-btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function closePinned(item) {
    if (!item) return;
    item.classList.remove("is-open", "is-pinned");
    const btn = item.querySelector(".nav-link-btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function clearCloseTimer(item) {
    const t = closeTimers.get(item);
    if (t) clearTimeout(t);
    closeTimers.delete(item);
  }

  function scheduleCloseIfNotHovered(item) {
    clearCloseTimer(item);

    // delay pequeño para permitir bajar del link al dropdown sin "parpadeo"
    const timer = setTimeout(() => {
      // si el mouse no está sobre el item (ni link ni dropdown), cerramos hover
      if (!item.matches(":hover") && !item.classList.contains("is-pinned")) {
        closeHoverItem(item);
        if (hoverItem === item) hoverItem = null;
        restorePinned();
      }
    }, 120);

    closeTimers.set(item, timer);
  }

  function restorePinned() {
    // Si no hay hover activo y existe pinned, re-abrimos pinned
    if (!hoverItem && pinnedItem) openItem(pinnedItem);
  }

  dropdownItems.forEach(item => {
    const btn = item.querySelector(".nav-link-btn");
    if (!btn) return;

    // CLICK: fija/desfija
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isAlreadyPinned = item.classList.contains("is-pinned");

      // Si ya estaba pinned -> cerrar todo
      if (isAlreadyPinned) {
        clearCloseTimer(item);
        closePinned(item);
        pinnedItem = null;
        hoverItem = null;
        return;
      }

      // Fijar este
      pinnedItem = item;

      // Cerrar cualquier hover abierto (distinto al pinned)
      dropdownItems.forEach(x => {
        clearCloseTimer(x);
        if (x !== item) {
          x.classList.remove("is-open", "is-pinned");
          const b = x.querySelector(".nav-link-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.add("is-pinned");
      openItem(item);
    });

    // ENTER por hover (sirve tanto en link como en dropdown porque están dentro del LI)
    item.addEventListener("mouseenter", () => {
      // si entro al mismo que está pinned, no cambies hoverItem
      if (pinnedItem === item) {
        clearCloseTimer(item);
        return;
      }

      clearCloseTimer(item);

      hoverItem = item;

      // Oculta pinned mientras hover está activo
      if (pinnedItem) pinnedItem.classList.remove("is-open");

      // Cierra otros hovers
      dropdownItems.forEach(x => {
        if (x !== item && x !== pinnedItem) {
          clearCloseTimer(x);
          closeHoverItem(x);
        }
      });

      openItem(item);
    });

    // LEAVE: no cierres inmediatamente; programa cierre si realmente ya no está hovered
    item.addEventListener("mouseleave", () => {
      // si es pinned, no hacemos nada
      if (item.classList.contains("is-pinned")) return;

      scheduleCloseIfNotHovered(item);
    });

    // EXTRA: si el cursor entra directamente al dropdown (por cualquier razón) cancela cierre
    const dropdown = item.querySelector(".dropdown");
    if (dropdown) {
      dropdown.addEventListener("mouseenter", () => clearCloseTimer(item));
      dropdown.addEventListener("mouseleave", () => {
        if (!item.classList.contains("is-pinned")) scheduleCloseIfNotHovered(item);
      });
    }
  });

  // Click afuera: cerrar todo
  document.addEventListener("click", () => {
    dropdownItems.forEach(item => {
      clearCloseTimer(item);
      item.classList.remove("is-open", "is-pinned");
      const btn = item.querySelector(".nav-link-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
    pinnedItem = null;
    hoverItem = null;
  });

  // ESC: cerrar todo
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    dropdownItems.forEach(item => {
      clearCloseTimer(item);
      item.classList.remove("is-open", "is-pinned");
      const btn = item.querySelector(".nav-link-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
    pinnedItem = null;
    hoverItem = null;
  });
})();



/* =========================
   Mobile nav toggle
========================= */
(() => {
  const toggle = $(".nav-toggle");
  const nav = $(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al hacer click en un link (móvil)
  $$(".nav a", nav).forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* =========================
   Hero carousel
========================= */
(() => {
  const track = $("#heroTrack");
  if (!track) return;

  const slides = $$("[data-slide]", track);
  const prevBtn = $(".hero-arrow-left");
  const nextBtn = $(".hero-arrow-right");
  const dots = $$(".dot");
  let index = 0;
  let autoTimer = null;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach((d, di) => d.classList.toggle("is-active", di === index));
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, 6500);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  }

  prevBtn?.addEventListener("click", () => { prev(); startAuto(); });
  nextBtn?.addEventListener("click", () => { next(); startAuto(); });

  dots.forEach(d => {
    d.addEventListener("click", () => {
      const i = Number(d.dataset.dot || "0");
      goTo(i);
      startAuto();
    });
  });

  // Swipe (móvil)
  let startX = 0;
  let isDown = false;

  track.addEventListener("pointerdown", (e) => {
    isDown = true;
    startX = e.clientX;
    stopAuto();
  });

  track.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    isDown = false;
    const dx = e.clientX - startX;

    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
    startAuto();
  });

  track.addEventListener("pointercancel", () => {
    isDown = false;
    startAuto();
  });

  // Teclado (accesibilidad)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { prev(); startAuto(); }
    if (e.key === "ArrowRight") { next(); startAuto(); }
  });

  goTo(0);
  startAuto();
})();

/* =========================
   FULL WIDTH FADE CAROUSEL
========================= */
(() => {
  const root = document.getElementById("heroCarousel");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".carousel-fade-slide"));
  const prevBtn = root.querySelector(".left-arrow");
  const nextBtn = root.querySelector(".right-arrow");
  const dots = Array.from(root.querySelectorAll(".c-dot"));

  let index = 0;
  let timer = null;

  function show(i){
    index = (i + slides.length) % slides.length;
    slides.forEach((s, si) => s.classList.toggle("active", si === index));
    dots.forEach((d, di) => d.classList.toggle("is-active", di === index));
  }

  function next(){ show(index + 1); }
  function prev(){ show(index - 1); }

  function start(){
    stop();
    timer = setInterval(next, 6500);
  }
  function stop(){
    if (timer) clearInterval(timer);
    timer = null;
  }

  prevBtn?.addEventListener("click", () => { prev(); start(); });
  nextBtn?.addEventListener("click", () => { next(); start(); });

  dots.forEach(d => {
    d.addEventListener("click", () => {
      const i = Number(d.dataset.dot || 0);
      show(i);
      start();
    });
  });

  // Pausa si el mouse está encima
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);

  // Swipe (móvil)
  let startX = 0;
  let down = false;

  root.addEventListener("pointerdown", (e) => {
    down = true;
    startX = e.clientX;
    stop();
  });

  root.addEventListener("pointerup", (e) => {
    if (!down) return;
    down = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    start();
  });

  root.addEventListener("pointercancel", () => {
    down = false;
    start();
  });

  show(0);
  start();
})();


/* =========================
   Fade Carousel (full width) + dots
========================= */
(() => {
  const container = document.querySelector(".carousel-fade-container");
  if (!container) return;

  const slides = Array.from(container.querySelectorAll(".carousel-fade-slide"));
  const prevBtn = container.querySelector(".left-arrow");
  const nextBtn = container.querySelector(".right-arrow");
  const dots = Array.from(container.querySelectorAll(".c-dot"));

  let index = 0;
  let timer = null;
  const interval = 6500;

  function paintDots() {
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, si) => s.classList.toggle("active", si === index));
    paintDots();
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  function start() {
    stop();
    timer = setInterval(next, interval);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  prevBtn?.addEventListener("click", () => { prev(); start(); });
  nextBtn?.addEventListener("click", () => { next(); start(); });

  // Dots click
  dots.forEach(d => {
    d.addEventListener("click", () => {
      const i = Number(d.dataset.dot || "0");
      show(i);
      start();
    });
  });

  // Pausa al hover
  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  // Swipe
  let startX = 0;
  let isDown = false;

  container.addEventListener("pointerdown", (e) => {
    isDown = true;
    startX = e.clientX;
    stop();
  });

  container.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    isDown = false;

    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    start();
  });

  container.addEventListener("pointercancel", () => {
    isDown = false;
    start();
  });

  show(0);
  start();

  // Compatibilidad si algo llama estas funciones
  window.nextSlide = next;
  window.prevSlide = prev;
})();







// =========================
// SEARCH SYSTEM (About sidebar + Search page)
// =========================
(function(){
  const BOOKS = Array.isArray(window.BOOKS) ? window.BOOKS : [];

  function escapeHtml(str){
    return String(str ?? "")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function formatDate(iso){
    if(!iso) return "";
    // muestra estilo "Oct 1,2003" similar a la imagen (sin espacio después de coma)
    const d = new Date(iso + "T00:00:00");
    if(Number.isNaN(d.getTime())) return iso;
    const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const m = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    return `${m} ${day},${year}`;
  }

  function normalize(s){
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function searchBooks(q){
    const nq = normalize(q).trim();
    if(!nq) return [];

    return BOOKS.filter(b => {
      const title = normalize(b.title);
      return title.includes(nq);
    });
  }

  function sortPopular(list){
    return [...list].sort((a,b) => (b.popularity||0) - (a.popularity||0));
  }
  function sortRecent(list){
    return [...list].sort((a,b) => new Date(b.date||0) - new Date(a.date||0));
  }
  function sortComment(list){
    return [...list].sort((a,b) => (b.comments||0) - (a.comments||0));
  }

  function renderMiniList(container, list){
    if(!container) return;
    container.innerHTML = list.slice(0,4).map(b => {
      return `
        <a class="nr-mini-item" href="${escapeHtml(b.url || "#")}">
          <img class="nr-mini-cover"
     src="${escapeHtml(b.cover || "")}"
     alt="${escapeHtml(b.title)}"
     onerror="this.onerror=null; this.src='IMAGES/placeholder-book.png';">

          <div>
            <div class="nr-mini-title">${escapeHtml(b.title)}</div>
            <div class="nr-mini-date">${escapeHtml(formatDate(b.date))}</div>
          </div>
        </a>
      `;
    }).join("");
  }

  function initSidebarWidget(scopeEl){
    if(!scopeEl) return;

    const tabs = scopeEl.querySelectorAll(".nr-tab");
    const panes = scopeEl.querySelectorAll(".nr-pane");

    const popularPane = scopeEl.querySelector('[data-pane="popular"]');
    const recentPane  = scopeEl.querySelector('[data-pane="recent"]');
    const commentPane = scopeEl.querySelector('[data-pane="comment"]');

    renderMiniList(popularPane, sortPopular(BOOKS));
    renderMiniList(recentPane,  sortRecent(BOOKS));
    renderMiniList(commentPane, sortComment(BOOKS));

    tabs.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        tabs.forEach(t => {
          const active = t === btn;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", String(active));
        });

        panes.forEach(p => {
          const match = p.getAttribute("data-pane") === tab;
          p.classList.toggle("is-active", match);
          p.hidden = !match;
        });
      });
    });
  }

  // Init all sidebar widgets (about + search page)
  document.querySelectorAll(".nr-sidebar .nr-widget").forEach(initSidebarWidget);

  // SEARCH PAGE render
  const isSearchPage = document.body?.getAttribute("data-page") === "search";
  if(isSearchPage){
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    const cleanQ = q.trim();

    const titleEl = document.getElementById("searchTitle");
    const subEl   = document.getElementById("searchSub");
    const crumbEl = document.getElementById("searchCrumb");

    if(titleEl) titleEl.textContent = `Resultados para ${cleanQ || ""}`.trim();
    if(crumbEl){
      crumbEl.innerHTML = `
        <a href="index.html" class="breadcrumb-link">Inicio</a>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">Resultados para "${escapeHtml(cleanQ)}"</span>
      `;
    }

    // rellena input del sidebar
    const q2 = document.getElementById("q2");
    if(q2) q2.value = cleanQ;

    const results = cleanQ ? searchBooks(cleanQ) : [];
    const listEl = document.getElementById("resultsList");
    const noEl = document.getElementById("noResults");

    if(listEl){
      listEl.innerHTML = results.map(b => {
        const cats = Array.isArray(b.categories) ? b.categories : [];
        const catsText = cats.length ? cats.join(", ") : "Todos los libros";
        return `
          <article class="nr-result">
            <img class="nr-result-cover"
     src="${escapeHtml(b.cover || "")}"
     alt="${escapeHtml(b.title)}"
     onerror="this.onerror=null; this.src='IMAGES/placeholder-book.png';">

            <div>
              <h2 class="nr-result-title">
                <a href="${escapeHtml(b.url || "#")}">${escapeHtml(b.title)}</a>
              </h2>

              <div class="nr-result-meta">
                <span>${escapeHtml(formatDate(b.date))}</span>
                <span class="nr-dot" aria-hidden="true"></span>
                <span>${escapeHtml(catsText)}</span>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    const has = results.length > 0;
    if(noEl) noEl.hidden = has;
  }

  // Footer year (si no lo tienes ya en tu script)
  const y = document.getElementById("year");
  if(y && !y.textContent) y.textContent = new Date().getFullYear();
})();


// =========================
// FIX: submit/click siempre redirige a search.html?q=...
// =========================
(function () {
  function goToSearch(query) {
    const q = String(query || "").trim();
    if (!q) return;
    window.location.href = "search.html?q=" + encodeURIComponent(q);
  }

  // Soporta varios forms (about, search, etc.)
  const forms = document.querySelectorAll(
    'form[action="search.html"], form[action="./search.html"], #siteSearchForm2, #siteSearchForm'
  );

  forms.forEach((form) => {
    // input por name="q" (tu caso) o cualquier input type search/text dentro
    const input =
      form.querySelector('input[name="q"]') ||
      form.querySelector('input[type="search"]') ||
      form.querySelector('input[type="text"]');

    if (!input) return;

    // 1) Submit (Enter o botón submit)
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goToSearch(input.value);
    });

    // 2) Click en botón (por si el botón es type="button" en otra página)
    const btn = form.querySelector('button[type="submit"], button, input[type="submit"]');
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToSearch(input.value);
      });
    }
  });
})();

