// books-landing.js
//
// ✅ Qué hace este archivo ahora (con i18n):
// - NO muestra el botón "Comprar en Amazon" ni ningún CTA en book-details.html.
// - Toma el slug ?book=... y rellena la sección de "distribución" con links
//   que apuntan a ese MISMO libro en cada tienda (Amazon, Google Play, Kobo, etc.).
// - Si defines links exactos por tienda en book.stores, usa esos. Si no,
//   genera automáticamente enlaces de búsqueda dirigidos con el título.
// - Asigna data-i18n para título, tagline, release y cada párrafo de descripción,
//   con claves basadas en el slug del libro (p.ej.: books.cuando-todo-calla.title).
//
// 👉 Cómo fijar un link exacto (opcional) en cada libro:
// stores: { amazon: "https://www.amazon.com/dp/XXXXXXXXX", kobo: "https://..." }
//
// Tiendas soportadas (keys):
// amazon, googleplay, barnesnoble, kobo, applebooks, everand, tolino, overdrive,
// cloudlibrary, bakertaylor, hoopla, odilo, vivlio, borrowbox, smashwords, palace, fable
//
// ⚠️ Importante: No necesitas tocar tu HTML. Este JS toma los <a> ya existentes
// en #available .distributors-grid y les reasigna el href según el libro cargado.
//
// 📝 i18n:
// - Este archivo deja los textos base en español y añade data-i18n.
// - Carga tus traducciones desde lang.json (ver ejemplo debajo del archivo).
(function () {
  // ---------------------------
  // 1) DATA DE TUS LIBROS (base ES)
  // ---------------------------
  window.BOOKS_LANDING = {
    "cuando-todo-calla": {
      title: "Cuando Todo Calla",
      release: "DISPONIBLE",
      tagline: "Una historia sobre pérdida, resiliencia y el amor que sostiene en la oscuridad.",
      image: "IMAGES/cuando todo calla book.png",
      paragraphs: [
        "¿Qué sucede cuando el amor más puro se enfrenta a la prueba más devastadora?",
        "Lilian, una ejecutiva brillante y madre soltera, ha aprendido a vivir con la presión, el éxito y la soledad. Pero su vida da un vuelco cuando su hijo Rodney recibe un diagnóstico que lo coloca en la línea más frágil entre la esperanza y el miedo.",
        "Entre pasillos de hospital, noches sin dormir y decisiones imposibles, Lilian libra una guerra silenciosa: contra la enfermedad, contra la culpa, contra sus propios límites emocionales. Cuando el desenlace la deja sin fuerzas ni rumbo, decide abandonar todo para refugiarse en un rincón remoto frente al mar.",
        "En una cabaña solitaria, el silencio se convierte en su arma de sanación. Allí, cada amanecer abre una grieta diminuta hacia la esperanza.",
        "Un encuentro inesperado con Jack —un hombre marcado por sus propias pérdidas— rompe su reclusión emocional. Entre ambos surge una conexión tan intensa como improbable, donde las miradas dicen lo que las palabras no se atreven.",
        "Esta es una historia sobre la resiliencia que nace en los inviernos más crudos, sobre la fuerza que encontramos incluso en la oscuridad y sobre cómo el amor, en todas sus formas, puede sostenernos cuando la vida parece dejarnos sin aliento.",
        "Con una narrativa profunda y visual, Yael Goldmann combina emociones a flor de piel con una reflexión honesta sobre la pérdida, la esperanza y las segundas oportunidades.",
        "Cuando Todo Calla no es solo una novela: es una experiencia emocional que te invita a sentir cada respiración contenida, cada lágrima no derramada y cada gesto de amor silencioso que cambia el rumbo de una vida.",
        "Una historia para quienes han amado, perdido y, aun así, siguen eligiendo vivir."
      ]
      // stores: { amazon: "https://www.amazon.com/dp/TU_ASIN" }
    },

    "nombre-de-ella": {
      title: "En el Nombre de Ella",
      release: "DISPONIBLE",
      tagline: "Un thriller emocional donde el amor nace en medio del peligro.",
      image: "IMAGES/en el nombre de ella book.png",
      paragraphs: [
        "Un juego. Un reencuentro. Un secreto que podría matar.",
        "Silvina es periodista: inteligente, reservada, acostumbrada a controlar su mundo. Cada mañana rompe la rutina jugando burraco con un desconocido que parece entenderla sin decir una palabra. Miradas cómplices, silencios cargados… hasta que el destino da su jugada maestra.",
        "En Nueva York, como parte de una delegación diplomática, Silvina se reencuentra con él: ya no es solo “el jugador”. Es un médico brillante, vinculado sin saberlo a una trama de corrupción farmacéutica que puede costarle la carrera… y a ella, la vida.",
        "Una compañía internacional ha fraguado ensayos clínicos para lograr la aprobación de un medicamento letal. Silvina está decidida a revelar la verdad, aunque eso implique desafiar gobiernos, estructuras de poder y poner en riesgo lo que comienza a construir con ese hombre que, sin buscarlo, la desarma.",
        "Con ritmo de thriller internacional, carga afectiva de una historia de amor adulta y una protagonista inolvidable, esta novela atrapa desde la primera página y no suelta hasta el final."
      ]
    },

    "amina-defiance": {
      title: "Amina: La Princesa Rebelde",
      release: "DISPONIBLE",
      tagline: "Identidad, coraje y un amor que se atreve a romper todas las reglas.",
      image: "IMAGES/amina book.png",
      paragraphs: [
        "¿Y si el precio de la lealtad fuera tu libertad? ¿Y si tu corazón se negara a obedecer las reglas?",
        "Amina Al-Salem, hija del emir más poderoso de Kuwait, creció tras los muros del palacio, donde la tradición manda y el deber silencia los sueños. Pero Oxford la cambió. En los rincones silenciosos de la biblioteca universitaria y en las bulliciosas calles de Inglaterra, Amina encontró su voz y, con ella, el sabor de una vida que nunca debió vivir.",
        "Ahora, con un matrimonio arreglado con un príncipe del doble de su edad en el horizonte, Amina debe tomar una decisión imposible: volver a una vida de riqueza y sumisión, o arriesgarlo todo por la libertad de forjar su propio destino.",
        "Mientras tanto, en la escarpada costa de Cornualles, Isabel de la Vega, embajadora de Panamá en el Reino Unido, busca un respiro del peso político de su cargo y de la soledad que a menudo trae el poder. Allí conoce a Alexander Fitzwilliam, un abogado británico de derechos humanos igualmente en busca de algo real. Lo que comienza como un encuentro casual se convierte en una conexión inesperada, una que ni la diplomacia ni el deber pueden ignorar.",
        "Ambientada entre embajadas, cortes reales y pasiones prohibidas, Amina – Princesa Rebelde es una novela amplia y emocionalmente rica sobre la identidad, el coraje y el tipo de amor que se atreve a romper todas las reglas.",
        "- Una heroína feroz e inolvidable, atrapada entre la tradición y la libertad",
        "- Un potente retrato de la resiliencia femenina a través de culturas",
        "- Un romance de combustión lenta que cruza fronteras y rompe barreras",
        "- Escenarios vívidos: de Oxford a Kuwait y hasta los acantilados de Cornualles",
        "- Profundidad emocional, suspense y personajes que se sienten dolorosamente reales",
        "No eliges dónde naces. Pero puedes elegir en quién te conviertes. La lucha de Amina es la lucha de toda mujer por ser escuchada, ser vista y ser libre."
      ]
    },

    "destinos-entrelazados": {
      title: "Destinos Entrelazados",
      release: "DISPONIBLE",
      tagline: "Thriller político + romance intenso + una verdad que no se rinde.",
      image: "IMAGES/destinos entrelazados.png",
      paragraphs: [
        "Sumérgete en una saga de amor, intriga y redención que atraviesa continentes y décadas. En la Argentina de los 70, Raquel, joven periodista, arriesga todo al enamorarse de Walter, un fugitivo uruguayo que cruza el río huyendo de la represión. Su romance, marcado por la pasión y el peligro, se quiebra bajo la amenaza de una redada policial.",
        "Años después, en Europa, Raquel se ve envuelta en un secuestro de alto riesgo, donde conoce a Dan, un enigmático médico y espía israelí cuya vida secreta la arrastra a conspiraciones internacionales. Como corresponsal en Italia, enfrenta dilemas que desafían su valentía y su corazón, mientras su pasado con Walter resurge en un inesperado reencuentro.",
        "Desde las orillas del Río de la Plata hasta las calles de Tel Aviv y los callejones de Roma, esta novela combina thriller político, romance intenso y una búsqueda incansable de la verdad. ¿Podrán Raquel y Dan forjar un futuro juntos mientras desentrañan los secretos que los persiguen?",
        "Una montaña rusa emocional para amantes de la ficción histórica, el suspenso y las historias de amor que desafían el tiempo. ¡Embárcate en esta aventura inolvidable!"
      ]
    },

    "jaque-a-la-reina": {
      title: "Jaque a la Reina: Códigos Mortales",
      release: "DISPONIBLE",
      tagline: "Tecnología, amor, traición y alta tensión internacional.",
      image: "IMAGES/jaque reina book.png",
      paragraphs: [
        "Emma Glow es brillante, obstinada y visionaria. Lo único que no previó fue convertirse en el blanco de una red internacional de espionaje que codicia el secreto familiar: una tecnología capaz de alterar no solo imágenes, sino también la percepción humana.",
        "Lo que nació como una plataforma de postproducción para cine revela un potencial inquietante. Su creación alimentada sin saberlo por los avances de sus padres, científicos asesinados en circunstancias turbias despierta el interés de mafias rusas, agencias de inteligencia y gobiernos.",
        "En medio del caos, Emma se aferra a lo único que no puede ser manipulado: el amor. Un romance de alto voltaje con Sam, un aliado inesperado que se convierte en refugio y cómplice. Juntos desafían enemigos, sobreviven a secuestros y sueñan con una vida donde la paz no sea una ilusión.",
        "Un thriller emocional, tecnológico y humano, perfecto para lectores de Daniel Silva, Stieg Larsson o Shari Lapena. Una novela donde el mayor campo de batalla es la mente, el poder… y el corazón."
      ]
    },

    "identidades-ocultas": {
      title: "Identidades Ocultas",
      release: "DISPONIBLE",
      tagline: "En la era de las máscaras digitales, ¿en quién puedes confiar?",
      image: "IMAGES/identidades ocultas book.png",
      paragraphs: [
        "Laura Trend, experta en ciberseguridad y pieza clave en la Global Cyber Defense Alliance, equilibra amenazas globales y la crianza de dos adolescentes brillantes. Tras una década de viudez, está agotada: anhela un respiro, no otra misión.",
        "Un ciberataque masivo sacude simultáneamente Singapur, Europa y Norteamérica. No es un incidente aislado: es una conspiración diseñada para desestabilizar el mundo. Laura lo ve venir y sabe que solo ella puede detenerlo.",
        "Aparece Greg Whitmore, CEO carismático y padre soltero. Entre ellos surge una alianza inesperada donde la tensión profesional se convierte en una conexión tan real como peligrosa.",
        "La situación se complica cuando Laura es interrogada en Scotland Yard, sospechada de suplantación de identidad relacionada con los ataques. ¿Traición interna en la GCDA? ¿Quién es quién cuando cada rostro puede ser una máscara?",
        "Comienza una carrera contrarreloj. Laura y Greg deberán enfrentar secretos enterrados, dilemas morales y verdades que amenazan con destruir todo lo que aman. Más que un thriller: el retrato emocional de una mujer que busca la paz interior, proteger a su familia y hallar refugio en los lazos más inesperados."
      ]
    },

    "encuentros-casuales": {
      title: "Encuentros Casuales",
      release: "DISPONIBLE",
      tagline: "Ciencia, amor y geopolítica en una cuenta regresiva.",
      image: "IMAGES/encuentros casuales book.png",
      paragraphs: [
        "Un thriller emocional y contemporáneo que entrelaza ciencia, amor y geopolítica.",
        "Eliana Barnea, prestigiosa inmunóloga, enfrenta una epidemia devastadora que nace en Sumatra y arrasa silenciosamente la salud de miles de mujeres. La presión internacional la empuja a encontrar respuestas ya.",
        "Cuando la burocracia y los egos frenan el avance, Eliana decide actuar a escondidas: pruebas discretas, reposicionamiento de fármacos, sobres codificados… un atajo ético peligroso que podría costarle la carrera, la libertad y la vida de sus pacientes.",
        "Su hija Lilit, joven oficial de inteligencia que deja el ejército para redescubrirse, aterriza en la costa de Carnon–Montpellier. Allí conoce a Leo, un periodista de carrera global, y comienza una historia luminosa que la reconcilia con sus deseos.",
        "París irrumpe en la trama: durante la cumbre del G7, un ataque terrorista convierte el Palais des Congrès en un tablero de rehenes y negociaciones de alto riesgo. En cuestión de horas, los captores lanzan un ultimátum.",
        "Entre un laboratorio sellado y un cordón policial en París, madre e hija quedan atrapadas en una cuenta regresiva donde la ciencia se vuelve moneda de cambio y el amor, única brújula.",
        "¿Hasta dónde puede llegar una madre para salvar a su hija y, al mismo tiempo, a miles de desconocidas? ¿Qué precio tiene la verdad cuando puede detener una pandemia?",
        "Con escenarios vibrantes, personajes memorables y un crescendo de tensión impecable, la novela combina el vértigo del thriller, la intimidad del drama familiar y la chispa de un romance que se resiste a la oscuridad.",
        "Para lectores de historias potentes, humanas y actuales que buscan pasar página… y no poder parar."
      ]
    },

    "sobrevivir-a-la-vida": {
      title: "Cómo sobrevivir a la vida",
      release: "DISPONIBLE",
      tagline: "Calma en el caos: herramientas prácticas para reconectar contigo.",
      image: "IMAGES/sobrevivir vida book.png",
      paragraphs: [
        "“Cómo sobrevivir a la vida” es una guía clara, cálida y práctica para recuperar la calma en medio del caos cotidiano. A través de reflexiones, ejercicios y ejemplos reales, ofrece herramientas para superar la ansiedad, enfrentar el dolor, transformar el miedo en motivación y encontrar un propósito más profundo en cada día.",
        "En sus páginas descubrirás cómo:",
        "- Abrazar lo ‘suficientemente bueno’ en lugar de perseguir la perfección.",
        "- Convertir tus miedos en aliados que impulsan tu crecimiento.",
        "- Manejar el rechazo y las pérdidas sin perder tu esencia.",
        "- Practicar la gratitud, la meditación y el mindfulness como fuentes de resiliencia.",
        "- Reconectar contigo mismo y con los demás desde la empatía y la autenticidad.",
        "Con un estilo cercano y accesible, invita a soltar el control excesivo, aceptar la vulnerabilidad y cultivar hábitos que fortalecen la mente y el corazón.",
        "Más que un manual, es un compañero de ruta para quienes sienten que la vida a veces pesa demasiado y desean volver a encontrar la alegría en lo cotidiano."
      ]
    }
  };

  // -----------------------------------------
  // 2) UTILIDADES DE ENRUTADO & LINKS TIENDA
  // -----------------------------------------
  function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function norm(s) {
    return (s || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  // Mapa de alt -> key de tienda
  const ALT_TO_STORE_KEY = {
    "amazon": "amazon",
    "google play": "googleplay",
    "barnes & noble": "barnesnoble",
    "rakuten kobo": "kobo",
    "apple books": "applebooks",
    "everand": "everand",
    "tolino": "tolino",
    "overdrive": "overdrive",
    "cloudlibrary": "cloudlibrary",
    "baker & taylor": "bakertaylor",
    "hoopla": "hoopla",
    "odilo": "odilo",
    "vivlio": "vivlio",
    "borrowbox": "borrowbox",
    "smashwords": "smashwords",
    "palace marketplace": "palace",
    "fable": "fable"
  };

  function buildSearch(storeKey, bookTitle) {
    const q = encodeURIComponent(`"${bookTitle}" Yael Goldmann`);
    switch (storeKey) {
      case "amazon":
        return `https://www.amazon.com/s?k=${q}`;
      case "googleplay":
        return `https://play.google.com/store/search?q=${q}&c=books`;
      case "barnesnoble":
        return `https://www.barnesandnoble.com/s/${q}`;
      case "kobo":
        return `https://www.kobo.com/search?query=${q}`;
      case "applebooks":
        return `https://books.apple.com/us/search?term=${q}`;
      case "everand":
        return `https://www.everand.com/search?query=${q}`;
      case "tolino":
        return `https://mytolino.com/search/?s=${q}`;
      case "overdrive":
        return `https://www.overdrive.com/search?q=${q}`;
      case "cloudlibrary":
        return `https://www.yourcloudlibrary.com/?s=${q}`;
      case "bakertaylor":
        return `https://www.baker-taylor.com/Search?keyword=${q}`;
      case "hoopla":
        return `https://www.hoopladigital.com/search?q=${q}`;
      case "odilo":
        return `https://www.odilo.us/?s=${q}`;
      case "vivlio":
        return `https://www.vivlio.com/search?s=${q}`;
      case "borrowbox":
        return `https://www.borrowbox.com/search?q=${q}`;
      case "smashwords":
        return `https://www.smashwords.com/search?query=${q}`;
      case "palace":
        return `https://thepalaceproject.org/marketplace/?s=${q}`;
      case "fable":
        return `https://fable.co/search?q=${q}`;
      default:
        return `https://www.google.com/search?q=${q}`;
    }
  }

  function getStoreLink(book, storeKey) {
    if (book && book.stores && typeof book.stores[storeKey] === "string") {
      return book.stores[storeKey];
    }
    return buildSearch(storeKey, book.title);
  }

  // -----------------------------------------
  // 3) i18n helpers
  // -----------------------------------------
  // Asigna data-i18n y texto por defecto (ES) a un nodo
  function setI18n(el, key, defaultText) {
    if (!el) return;
    el.setAttribute("data-i18n", key);
    // Texto base en español; el loader i18n externo lo sobrescribirá si el idioma es EN
    if (typeof defaultText === "string") {
      el.textContent = defaultText;
    }
  }

  // -----------------------------------------
  // 4) INICIALIZACIÓN DE LA PÁGINA DEL LIBRO
  // -----------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    const slug = getParam("book");
    const all = window.BOOKS_LANDING || {};
    const book = all[slug];

    if (!book) {
      window.location.replace("pagina-libros.html");
      return;
    }

    // Título <title> del documento (base ES)
    document.title = `${book.title} — Yael Goldmann`;

    // Selectores fijos
    const pageTitle = document.getElementById("pageTitle");
    const h1 = document.getElementById("title");
    const tagline = document.getElementById("tagline");
    const release = document.getElementById("release");

    // Aplica data-i18n y valores por defecto ES
    setI18n(pageTitle, `books.${slug}.title`, book.title || "Libro");
    setI18n(h1,        `books.${slug}.title`, book.title || "Libro");
    setI18n(tagline,   `books.${slug}.tagline`, book.tagline || "");
    setI18n(release,   `books.${slug}.release`, book.release || "");

    // Imagen
    const cover = document.getElementById("cover");
    if (cover) {
      cover.src = book.image || "";
      cover.alt = book.title || "Portada del libro";
    }

    // Descripción: crea <p> con data-i18n books.<slug>.p1, p2, ...
    const desc = document.getElementById("description");
    if (desc) {
      desc.innerHTML = "";
      (book.paragraphs || []).forEach((p, idx) => {
        const el = document.createElement("p");
        setI18n(el, `books.${slug}.p${idx + 1}`, p);
        desc.appendChild(el);
      });
    }

    // ❌ NO renderizar CTAs
    const ctaRow = document.getElementById("ctaRow");
    if (ctaRow) ctaRow.innerHTML = "";

    // -----------------------------------------
    // 5) REENLAZAR LA SECCIÓN "DISTRIBUCIÓN"
    // -----------------------------------------
    const grid = document.querySelector("#available .distributors-grid");
    if (grid) {
      const anchors = Array.from(grid.querySelectorAll("a"));
      anchors.forEach((a) => {
        const img = a.querySelector("img");
        const alt = norm(img?.getAttribute("alt"));
        const storeKey = ALT_TO_STORE_KEY[alt];

        if (storeKey) {
          const href = getStoreLink(book, storeKey);
          a.href = href;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        } else {
          const generic = buildSearch("", book.title);
          a.href = generic;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      });
    }
  });

  // -----------------------------------------
  // 6) TIPOGRAFÍA DE TÍTULOS (sin cambios)
  // -----------------------------------------
  (function applyBooksTitleFont() {
    const style = document.createElement("style");
    style.setAttribute("data-books-title-font", "true");
    style.textContent = `
      :root{
        --books-title-font: "Playfair Display", "Merriweather", Georgia, "Times New Roman", serif;
        --books-title-weight: 800;
        --books-title-tracking: 0.2px;
      }
      .book-title,
      [data-book-title],
      .book-card h2,
      .book-card h3,
      .books-grid .book h3 {
        font-family: var(--books-title-font) !important;
        font-weight: var(--books-title-weight) !important;
        letter-spacing: var(--books-title-tracking);
        line-height: 1.15;
      }
    `;
    document.head.appendChild(style);
  })();
})();
