(() => {
  // =========================
  // 1) Datos de libros
  // =========================
  const BOOKS = {
    "amina": {
      title: "Amina: La Princesa Rebelde",
      title_en: "Amina: Princess of Defiance",
      cover: "IMAGES/amina book.png",
      cover_en: "IMAGES/amina book EN.png",
      date: "", // opcional
      isbn: "", // opcional
      description: [
        "Amina, hija de una poderosa familia real kuwaití, siempre supo que su destino no le pertenecía. Prometida en matrimonio con un hombre al que no ama y atrapada en una jaula de oro tejida por la tradición y las expectativas, decide arriesgarlo todo: escapar. Buscando asilo en la embajada de Panamá en Londres, Amina encuentra aliados inesperados en Isabel, la embajadora, y Alex Fitzwilliam, un brillante abogado británico.",
        "Pero lo que comienza como una batalla legal por la libertad pronto se convierte en una red de intrigas internacionales, donde los derechos humanos, los intereses políticos y los deseos personales se entrelazan. Y detrás de todo, una sombra acecha: el servicio de inteligencia británico, el MI6, con sus propios intereses ocultos en el caso de Amina.",
        "Desde los palacios de Kuwait hasta los pasillos del poder en Europa, desde el deber impuesto hasta un amor prohibido, Amina, la Princesa Rebelde es una historia de coraje, identidad y del alto precio de elegir tu propio camino."
      ],
  description_en: [
    "Amina, daughter of a powerful Kuwaiti royal family, always knew her destiny didn't belong to her. Promised in marriage to a man she doesn't love and trapped in a golden cage woven by tradition and expectations, she decides to risk it all: escape. Seeking asylum at the Panamanian embassy in London, Amina finds unexpected allies in Isabel, the ambassador, and Alex Fitzwilliam, a brilliant British lawyer.",
    "But what begins as a legal battle for freedom soon turns into a web of international intrigue, where human rights, political interests and personal desires intertwine. And behind it all, a shadow looms: Britain's intelligence service, MI6, with its own hidden interests in Amina's case.",
    "From the palaces of Kuwait to the corridors of power in Europe, from imposed duty to forbidden love, Amina: The Rebel Princess is a story of courage, identity and the high price of choosing your own path."
  ]
    },

    "cuando-todo-calla": {
      title: "Cuando Todo Calla",
      title_en: "When Silence Falls",
      cover: "IMAGES/cuando todo calla book.png",
      cover_en: "IMAGES/cuando todo calla book EN.png",
      date: "",
      isbn: "",
      description: [
        "Una historia de amor, pérdidas, resiliencia y segundas oportunidades...cuando el escándalo mediático lo cambia todo.",
        "La vida de Lilian Mann se derrumba tras una pérdida devastadora. Decidida a reconstruirse, se enfrenta a la soledad, al juicio público y a las heridas que no se ven. En su camino, conoce a Jack Bremm, un hombre marcado por el dolor, perseguido por los medios y atrapado en una lucha por limpiar su nombre. Juntos, deberán aprender a confiar cuando todo parece perdido, a amar en medio del caos, y a encontrar sentido en lo que no tiene explicación.",
        "En un mundo donde el silencio puede ser condena o refugio, Lilian y Jack descubren que a veces, el verdadero poder está en volver a empezar. Cuando todo calla es una novela profunda y emotiva que entrelaza romance, drama contemporáneo y una poderosa mirada sobre la fuerza interior que emerge tras el colapso."

       ],
  description_en: [
    "A story of love, loss, resilience and second chances... when a media scandal changes everything.",
    "Lilian Mann's life crumbles after a devastating loss. Determined to rebuild, she faces loneliness, public scrutiny and invisible wounds. On her journey, she meets Jack Bremm, a man marked by pain, pursued by the media and trapped in a fight to clear his name. Together, they must learn to trust when everything seems lost, to love in the midst of chaos, and to find meaning in what has no explanation.",
    "In a world where silence can be condemnation or refuge, Lilian and Jack discover that sometimes the true power lies in starting over again. When Silence Falls is a profound and emotional novel that weaves romance, contemporary drama and a powerful look at the inner strength that emerges after collapse."
  ]
    },

    "destinos-entrelazados": {
      title: "Destinos Entrelazados",
      title_en: "Entwined Fates",
      cover: "IMAGES/destinos entrelazados.png",
      cover_en: "IMAGES/destinos entrelazados EN.png",
      date: "",
      isbn: "",
      description: [
        "Experimenta la intensidad de una historia cargada de amor, peligro y dilemas éticos. Raquel, una periodista argentina audaz, y Walter, un joven en busca de libertad, se encuentran en un peligroso cruce de caminos. Desafiando todo y enfrentándose a fuerzas que superan la comprensión humana.",
        "Cuando la vida de Raquel toma un giro inesperado al descubrir que espera un hijo de Walter, su destino se entrelaza aún más con el tejido complejo de la historia. Obligada a distanciarse de su familia conservadora, emprende un emocionante viaje hacia Italia con su amiga Silvia, solo para verse envuelta en el caos de los años de terrorismo que sacuden Europa y Medio Oriente.",
        "En Roma, Raquel se encuentra con un enigmático médico estadounidense que introduce un nuevo capítulo de amor y misterio en su vida. Sin embargo, la trama se intensifica cuando Raquel se convierte en el objetivo de las Brigadas Rojas y en una pieza clave para desmantelar la red terrorista detrás de la masacre de Múnich."

      ],
  description_en: [
    "Experience the intensity of a story filled with love, danger and ethical dilemmas. Raquel, a bold Argentine journalist, and Walter, a young man seeking freedom, find themselves at a dangerous crossroads. Defying everything and facing forces beyond human understanding.",
    "When Raquel's life takes an unexpected turn upon discovering she is expecting a child from Walter, her destiny becomes even more intertwined with the complex fabric of history. Forced to distance herself from her conservative family, she embarks on an exciting journey to Italy with her friend Silvia, only to become embroiled in the chaos of the years of terrorism that shake Europe and the Middle East.",
    "In Rome, Raquel meets an enigmatic American doctor who introduces a new chapter of love and mystery into her life. However, the plot thickens when Raquel becomes the target of the Red Brigades and a key piece in dismantling the terrorist network behind the Munich massacre."
    
  ]
  },
    
    "nombre-de-ella": {
      title: "En el Nombre de Ella",
      title_en: "In Her Name",
      cover: "IMAGES/en el nombre de ella book.png",
      cover_en: "IMAGES/en el nombre de ella book EN.png",
      date: "",
      isbn: "",
      description: [
        "Un inocente juego virtual conecta a Silvina Stern, una periodista de investigación decidida, con Alessandro De Luca, un cirujano de renombre internacional. Sin verse, sin siquiera conocerse, sus almas se encuentran mucho antes que sus cuerpos. Lo que comienza como un intercambio de palabras y miradas veladas termina arrastrándolos a Roma, a un torbellino donde secretos letales, corrupción farmacéutica y poder sin escrúpulos amenazan con destruirlo todo.",
        "Entre conspiraciones, traiciones y batallas invisibles, Silvina y Alessandro se ven forzados a confiar el uno en el otro en una carrera contra el tiempo. Pero en un mundo donde la mentira se oculta tras sonrisas amables y contratos brillantes, amar puede ser el mayor riesgo de todos.",
        "En el Nombre de Ella es un thriller vibrante que fusiona pasión, peligro y verdad en una historia donde la emoción nunca da tregua y el amor puede ser la única salida."
      ],
  description_en: [
    "An innocent virtual game connects Silvina Stern, a determined investigative journalist, with Alessandro De Luca, a renowned international surgeon. Without seeing each other, without even knowing each other, their souls meet long before their bodies. What begins as an exchange of words and veiled glances ends up dragging them to Rome, into a whirlwind where deadly secrets, pharmaceutical corruption and unscrupulous power threaten to destroy everything.",
    "Amid conspiracies, betrayals and invisible battles, Silvina and Alessandro are forced to trust each other in a race against time. But in a world where lies hide behind friendly smiles and shiny contracts, loving can be the greatest risk of all.",
    "In Her Name is a vibrant thriller that blends passion, danger and truth in a story where excitement never gives respite and love may be the only way out."
  ]
    },

    "encuentros-casuales": {
      title: "Encuentros Casuales",
      title_en: "Casual Encounters",
      cover: "IMAGES/encuentros casuales book.png",
      cover_en: "IMAGES/encuentros casuales book EN.png",
      date: "",
      isbn: "",
      description: [
        "La brillante científica Eliana se encuentra con un descubrimiento revolucionario que tiene la capacidad de detener una epidemia devastadora en el sudeste asiático. Su decisión de actuar furtivamente desencadena una serie de eventos que desafían no solo su carrera, sino también su vida y la de su hija. Por otro lado, Lilit, buscando claridad y propósito en un viaje a Francia, conoce a Leo, un reconocido periodista y escritor. Su conexión es inmediata, pero su romance se ve interrumpido cuando Lilit se encuentra atrapada en una situación inusual en una cumbre internacional en París.",
        "La atención del mundo está en Francia, mientras en Asia claman por la salvación de sus seres queridos del virus mortal. Eliana lucha contra el tiempo y las complejidades de la diplomacia global, planteando un dilema profundo: la batalla entre ideología y humanidad.",
        "En un mundo donde las divisiones políticas y religiosas pueden costar vidas, Encuentros Casuales desafía a sus personajes y lectores a considerar lo que realmente importa. ¿Puede un solo acto de valentía y compasión cambiar el curso de los acontecimientos?"
      ],
  description_en: [
    "The brilliant scientist Eliana stumbles upon a groundbreaking discovery that has the potential to halt a devastating epidemic in Southeast Asia. Her decision to act covertly sets off a series of events that challenge not only her career but also her life and that of her daughter. Meanwhile, Lilit, seeking clarity and purpose on a trip to France, meets Leo, a renowned journalist and writer. Their connection is immediate, but their romance is interrupted when Lilit finds herself caught in an unusual situation at an international summit in Paris.",
    "The world's attention is on France, while in Asia they cry out for the salvation of their loved ones from the deadly virus. Eliana races against time and the complexities of global diplomacy, posing a profound dilemma: the battle between ideology and humanity.",
    "In a world where political and religious divisions can cost lives, Casual Encounters challenges its characters and readers to consider what truly matters. Can a single act of courage and compassion change the course of events?"
  ]
    },

    "identidades-ocultas": {
      title: "Identidades Ocultas",
      title_en: "Concealed Identities",
      cover: "IMAGES/identidades ocultas book.png",
      cover_en: "IMAGES/identidades ocultas book EN.png",
      date: "",
      isbn: "",
      description: [
        "Sumérgete en Identidades Ocultas, una novela que combina la emoción del thriller tecnológico con una conmovedora historia de amor. Sigue a Laura Trend, una mujer fuerte y determinada, mientras enfrenta una peligrosa trama de cibercrimen que amenaza con desestabilizar la economía mundial y poner en riesgo la seguridad global.",
        "En el centro de esta trepidante historia, Laura, una experta en seguridad informática, lucha por detener a un grupo de hackers decididos a tomar el control de los centros financieros y de una central atómica. Pero su lucha no es solo contra los criminales; Laura también enfrenta sus propios desafíos personales, incluyendo una nueva relación que podría cambiar su vida para siempre. Greg, también viudo y padre de dos adolescentes, entra en la vida de Laura, y aunque los separa un océano, la conexión entre ellos es innegable.",
        "A medida que enfrentan juntos las amenazas globales, también sueñan con ensamblar sus familias y construir una vida en común. Su historia de amor, marcada por la pérdida, la esperanza y el deseo de un nuevo comienzo, añade una dimensión emocional única a este thriller electrizante."
      ],
  description_en: [
    "Dive into Concealed Identities, a novel that combines the excitement of a technological thriller with a moving love story. Follow Laura Trend, a strong and determined woman, as she faces a dangerous cybercrime plot that threatens to destabilize the global economy and jeopardize global security.",
    "At the heart of this thrilling story, Laura, an expert in computer security, fights to stop a group of hackers determined to take control of financial centers and a nuclear power plant. But her struggle is not only against criminals; Laura also faces her own personal challenges, including a new relationship that could change her life forever. Greg, also a widower and father of two teenagers, enters Laura's life, and although an ocean separates them, the connection between them is undeniable.",
    "As they face global threats together, they also dream of assembling their families and building a life together. Their love story, marked by loss, hope and the desire for a new beginning, adds a unique emotional dimension to this electrifying thriller."
  ]
    },

    "jaque-a-la-reina": {
      title: "Jaque a la Reina: Códigos Mortales",
      title_en: "Queen of Secrets: Deadly Codes",
      cover: "IMAGES/jaque reina book.png",
      cover_en: "IMAGES/jaque reina book EN.png",
      date: "",
      isbn: "",
      description: [
        "Emma Glow, una joven marcada por el destino, retorna a Estados Unidos tras la trágica pérdida de sus padres en Caracas. Su corazón, aún envuelto en sombras, encuentra un rayo de luz en su pasión por el ajedrez, que la lleva a un encuentro fortuito con un enigmático jugador que cambiará el rumbo de su existencia para siempre. Incapaz de apartar de su mente al misterioso hombre, Emma se embarca en un viaje repleto de intriga, pero también de romance y esperanza. Su brillantez y creatividad han dado forma a una plataforma innovadora que revolucionará la post-producción cinematográfica.",
        "Al llegar a Los Ángeles para presentar su invención al mundo de Hollywood, Emma se sumerge en un torbellino de emociones donde se entrelazan el amor y la lucha por el poder."
      ],
  description_en: [
    "Emma Glow, a young woman marked by fate, returns to the United States after the tragic loss of her parents in Caracas. Her heart, still shrouded in shadows, finds a ray of light in her passion for chess, leading her to a chance encounter with an enigmatic player who will change the course of her existence forever. Unable to get the mysterious man out of her mind, Emma embarks on a journey filled with intrigue, but also romance and hope. Her brilliance and creativity have shaped an innovative platform that will revolutionize film post-production.",
    "Upon arriving in Los Angeles to present her invention to the world of Hollywood, Emma immerses herself in a whirlwind of emotions where love and the struggle for power intertwine."
  ]
    },

    "sobrevivir-a-la-vida": {
      title: "Como Sobrevivir a la Vida: Simples Consejos para Lograrlo",
      cover: "IMAGES/sobrevivir vida book.png",
      date: "",
      isbn: "",
      description: [
        "¡Descubre cómo superar los obstáculos de la vida y encontrar la plenitud con Cómo Sobrevivir a la Vida de Yael Goldmann!.",
        "Cómo Sobrevivir a la Vida no solo te ofrece una mirada honesta a los desafíos comunes de la vida, sino que también te brinda herramientas prácticas respaldadas por evidencia para superar la adversidad. Con la sabiduría de autores y pensadores de todo el mundo, este libro te guiará hacia el significado y la plenitud en tu propia vida.",
        "Ya sea que estés buscando superar la adversidad, encontrar propósito o alcanzar tu máximo potencial, este libro te proporcionará la inspiración y la esperanza que necesitas para seguir adelante."
      ]
    },

    "hasta-que-vida-me-encuentre": {
      title: "Hasta que la Vida me Encuentre",
      title_en: "Until Life Finds me Again",
      cover: "IMAGES/vida-encuentre-book.png",
      cover_en: "IMAGES/vida-encuentre-book EN.png",
      date: "",
      isbn: "",
      description: [
        "Perder al amor de tu vida no siempre significa dejar de amarlo.",
        "Mina Suárez, mediadora internacional, puede reconciliar naciones enteras… pero no logra hacer las paces con su propio corazón. Se prometió no volver a sentir, hasta que la vida —y un hombre llamado Pierre Durand— la enfrentan al riesgo más humano de todos: volver a amar.",
"Entre Ginebra y los recuerdos de Buenos Aires, Mina descubrirá que la paz no se firma, se construye. Que el deseo de una vida normal —un hogar, una familia, un hijo— puede volver irracional incluso a la mente más racional.",
"Y que a veces, para encontrarse con la vida, hay que perder el control.",

"Una historia intensa y profundamente emotiva sobre la pérdida, la esperanza y la segunda oportunidad de sentir."
      ],
  description_en: [
    "Losing the love of your life doesn't always mean stopping loving them.",
    "Mina Suárez, an international mediator, can reconcile entire nations... but she can't make peace with her own heart. She vowed never to feel again, until life—and a man named Pierre Durand—confronts her with the most human risk of all: falling in love again.",
    "Between Geneva and the memories of Buenos Aires, Mina will discover that peace is not signed, it is built. That the desire for a normal life—a home, a family, a child—can make even the most rational mind irrational.",
    "And that sometimes, to find life, you have to lose control.",
    "An intense and deeply emotional story about loss, hope, and the second chance to feel."
  ]
    },

  };

  // =========================
  // 2) Alias para tus links actuales
  // =========================
  const ALIASES = {
  "libro-1": "amina",
  "libro-2": "cuando-todo-calla",
  "libro-3": "destinos-entrelazados",
  "libro-4": "nombre-de-ella",
  "libro-5": "encuentros-casuales",
  "libro-6": "identidades-ocultas",
  "libro-7": "jaque-a-la-reina",
  "libro-8": "sobrevivir-a-la-vida",
  "libro-9": "hasta-que-vida-me-encuentre",
};


  // =========================
  // 3) Leer query param y render
  // =========================
  const params = new URLSearchParams(window.location.search);
  const rawKey = (params.get("book") || "").trim();
  const key = (ALIASES[rawKey] || rawKey || "").toLowerCase();

  const book = BOOKS[key];

  const $cover = document.getElementById("bdCover");
  const $title = document.getElementById("bdTitle");
  const $date = document.getElementById("bdDate");
  const $isbn = document.getElementById("bdIsbn");
  const $desc = document.getElementById("bdDesc");

  function setMetaLine(el, label, value) {
    if (!value) {
      el.textContent = "";
      el.style.display = "none";
      return;
    }
    el.style.display = "";
    el.innerHTML = `<span class="bdLabel">${label}</span> ${value}`;
  }

  if (!book) {
    document.title = "Libro no encontrado | Yael Goldmann";
    $title.textContent = "Libro no encontrado";
    $cover.src = "IMAGES/amina book.png"; // placeholder (o crea uno genérico)
    $cover.alt = "Portada";
    $desc.innerHTML = `
      <p>No se encontró el libro solicitado.</p>
      <p>Vuelve al catálogo y entra nuevamente desde la portada correcta.</p>
    `;
    $date.style.display = "none";
    $isbn.style.display = "none";
    return;
  }

    // =========================
  // 4) Render + toggle idiomas
  // =========================
  const $btnEs = document.getElementById("bdLangEs");
  const $btnEn = document.getElementById("bdLangEn");

  function renderLang(lang){
    const isEN = (lang === "en");

    const title = isEN && book.title_en ? book.title_en : book.title;
    const cover = isEN && book.cover_en ? book.cover_en : book.cover;
    const descArr = isEN && book.description_en ? book.description_en : book.description;

    document.title = `${title} | Yael Goldmann`;

    $cover.src = cover;
    $cover.alt = `Portada ${title}`;
    $title.textContent = title;

    $desc.innerHTML = (descArr || [])
      .map(txt => `<p>${txt}</p>`)
      .join("");
  }

  function setActive(lang){
    const isEN = (lang === "en");
    $btnEs?.classList.toggle("is-active", !isEN);
    $btnEn?.classList.toggle("is-active", isEN);
  }

  // Si el libro NO tiene versión EN, ocultamos o deshabilitamos EN
  const hasEN = !!(book.title_en || book.cover_en || book.description_en);

  if(!hasEN){
    // solo español
    if($btnEn){
      $btnEn.style.display = "none"; // o $btnEn.disabled = true;
    }
  }

  // Default SIEMPRE: español
  setActive("es");
  renderLang("es");

  // Clicks
  $btnEs?.addEventListener("click", () => {
    setActive("es");
    renderLang("es");
  });

  $btnEn?.addEventListener("click", () => {
    if(!hasEN) return;
    setActive("en");
    renderLang("en");
  });

  // Meta (igual que tenías)
  setMetaLine($date, "", book.date);
  setMetaLine($isbn, "ISBN", book.isbn);
})();

