(() => {
  // =========================
  // 1) Datos de libros
  // =========================
  const BOOKS = {
    "amina": {
      title: "Amina: La Princesa Rebelde",
      cover: "IMAGES/amina book.png",
      date: "", // opcional
      isbn: "", // opcional
      description: [
        "Amina, hija de una poderosa familia real kuwaití, siempre supo que su destino no le pertenecía. Prometida en matrimonio con un hombre al que no ama y atrapada en una jaula de oro tejida por la tradición y las expectativas, decide arriesgarlo todo: escapar. Buscando asilo en la embajada de Panamá en Londres, Amina encuentra aliados inesperados en Isabel, la embajadora, y Alex Fitzwilliam, un brillante abogado británico.",
        "Pero lo que comienza como una batalla legal por la libertad pronto se convierte en una red de intrigas internacionales, donde los derechos humanos, los intereses políticos y los deseos personales se entrelazan. Y detrás de todo, una sombra acecha: el servicio de inteligencia británico, el MI6, con sus propios intereses ocultos en el caso de Amina.",
        "Desde los palacios de Kuwait hasta los pasillos del poder en Europa, desde el deber impuesto hasta un amor prohibido, Amina, la Princesa Rebelde es una historia de coraje, identidad y del alto precio de elegir tu propio camino."
      ]
    },

    "cuando-todo-calla": {
      title: "Cuando Todo Calla",
      cover: "IMAGES/cuando todo calla book.png",
      date: "",
      isbn: "",
      description: [
        "Una historia de amor, pérdidas, resiliencia y segundas oportunidades...cuando el escándalo mediático lo cambia todo.",
        "La vida de Lilian Mann se derrumba tras una pérdida devastadora. Decidida a reconstruirse, se enfrenta a la soledad, al juicio público y a las heridas que no se ven. En su camino, conoce a Jack Bremm, un hombre marcado por el dolor, perseguido por los medios y atrapado en una lucha por limpiar su nombre. Juntos, deberán aprender a confiar cuando todo parece perdido, a amar en medio del caos, y a encontrar sentido en lo que no tiene explicación.",
        "En un mundo donde el silencio puede ser condena o refugio, Lilian y Jack descubren que a veces, el verdadero poder está en volver a empezar. Cuando todo calla es una novela profunda y emotiva que entrelaza romance, drama contemporáneo y una poderosa mirada sobre la fuerza interior que emerge tras el colapso."

      ]
    },

    "destinos-entrelazados": {
      title: "Destinos Entrelazados",
      cover: "IMAGES/destinos entrelazados.png",
      date: "",
      isbn: "",
      description: [
        "Experimenta la intensidad de una historia cargada de amor, peligro y dilemas éticos. Raquel, una periodista argentina audaz, y Walter, un joven en busca de libertad, se encuentran en un peligroso cruce de caminos. Desafiando todo y enfrentándose a fuerzas que superan la comprensión humana.",
        "Cuando la vida de Raquel toma un giro inesperado al descubrir que espera un hijo de Walter, su destino se entrelaza aún más con el tejido complejo de la historia. Obligada a distanciarse de su familia conservadora, emprende un emocionante viaje hacia Italia con su amiga Silvia, solo para verse envuelta en el caos de los años de terrorismo que sacuden Europa y Medio Oriente.",
        "En Roma, Raquel se encuentra con un enigmático médico estadounidense que introduce un nuevo capítulo de amor y misterio en su vida. Sin embargo, la trama se intensifica cuando Raquel se convierte en el objetivo de las Brigadas Rojas y en una pieza clave para desmantelar la red terrorista detrás de la masacre de Múnich."

      ]
    },

    "nombre-de-ella": {
      title: "En el Nombre de Ella",
      cover: "IMAGES/en el nombre de ella book.png",
      date: "",
      isbn: "",
      description: [
        "Un inocente juego virtual conecta a Silvina Stern, una periodista de investigación decidida, con Alessandro De Luca, un cirujano de renombre internacional. Sin verse, sin siquiera conocerse, sus almas se encuentran mucho antes que sus cuerpos. Lo que comienza como un intercambio de palabras y miradas veladas termina arrastrándolos a Roma, a un torbellino donde secretos letales, corrupción farmacéutica y poder sin escrúpulos amenazan con destruirlo todo.",
        "Entre conspiraciones, traiciones y batallas invisibles, Silvina y Alessandro se ven forzados a confiar el uno en el otro en una carrera contra el tiempo. Pero en un mundo donde la mentira se oculta tras sonrisas amables y contratos brillantes, amar puede ser el mayor riesgo de todos.",
        "En el Nombre de Ella es un thriller vibrante que fusiona pasión, peligro y verdad en una historia donde la emoción nunca da tregua y el amor puede ser la única salida."
      ]
    },

    "encuentros-casuales": {
      title: "Encuentros Casuales",
      cover: "IMAGES/encuentros casuales book.png",
      date: "",
      isbn: "",
      description: [
        "La brillante científica Eliana se encuentra con un descubrimiento revolucionario que tiene la capacidad de detener una epidemia devastadora en el sudeste asiático. Su decisión de actuar furtivamente desencadena una serie de eventos que desafían no solo su carrera, sino también su vida y la de su hija. Por otro lado, Lilit, buscando claridad y propósito en un viaje a Francia, conoce a Leo, un reconocido periodista y escritor. Su conexión es inmediata, pero su romance se ve interrumpido cuando Lilit se encuentra atrapada en una situación inusual en una cumbre internacional en París.",
        "La atención del mundo está en Francia, mientras en Asia claman por la salvación de sus seres queridos del virus mortal. Eliana lucha contra el tiempo y las complejidades de la diplomacia global, planteando un dilema profundo: la batalla entre ideología y humanidad.",
        "En un mundo donde las divisiones políticas y religiosas pueden costar vidas, Encuentros Casuales desafía a sus personajes y lectores a considerar lo que realmente importa. ¿Puede un solo acto de valentía y compasión cambiar el curso de los acontecimientos?"
      ]
    },

    "identidades-ocultas": {
      title: "Identidades Ocultas",
      cover: "IMAGES/identidades ocultas book.png",
      date: "",
      isbn: "",
      description: [
        "Sumérgete en Identidades Ocultas, una novela que combina la emoción del thriller tecnológico con una conmovedora historia de amor. Sigue a Laura Trend, una mujer fuerte y determinada, mientras enfrenta una peligrosa trama de cibercrimen que amenaza con desestabilizar la economía mundial y poner en riesgo la seguridad global.",
        "En el centro de esta trepidante historia, Laura, una experta en seguridad informática, lucha por detener a un grupo de hackers decididos a tomar el control de los centros financieros y de una central atómica. Pero su lucha no es solo contra los criminales; Laura también enfrenta sus propios desafíos personales, incluyendo una nueva relación que podría cambiar su vida para siempre. Greg, también viudo y padre de dos adolescentes, entra en la vida de Laura, y aunque los separa un océano, la conexión entre ellos es innegable.",
        "A medida que enfrentan juntos las amenazas globales, también sueñan con ensamblar sus familias y construir una vida en común. Su historia de amor, marcada por la pérdida, la esperanza y el deseo de un nuevo comienzo, añade una dimensión emocional única a este thriller electrizante."
      ]
    },

    "jaque-a-la-reina": {
      title: "Jaque a la Reina: Códigos Mortales",
      cover: "IMAGES/jaque reina book.png",
      date: "",
      isbn: "",
      description: [
        "Emma Glow, una joven marcada por el destino, retorna a Estados Unidos tras la trágica pérdida de sus padres en Caracas. Su corazón, aún envuelto en sombras, encuentra un rayo de luz en su pasión por el ajedrez, que la lleva a un encuentro fortuito con un enigmático jugador que cambiará el rumbo de su existencia para siempre. Incapaz de apartar de su mente al misterioso hombre, Emma se embarca en un viaje repleto de intriga, pero también de romance y esperanza. Su brillantez y creatividad han dado forma a una plataforma innovadora que revolucionará la post-producción cinematográfica.",
        "Al llegar a Los Ángeles para presentar su invención al mundo de Hollywood, Emma se sumerge en un torbellino de emociones donde se entrelazan el amor y la lucha por el poder."
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
      cover: "IMAGES/vida-encuentre-book.png",
      date: "",
      isbn: "",
      description: [
        "Perder al amor de tu vida no siempre significa dejar de amarlo.",
        "Mina Suárez, mediadora internacional, puede reconciliar naciones enteras… pero no logra hacer las paces con su propio corazón. Se prometió no volver a sentir, hasta que la vida —y un hombre llamado Pierre Durand— la enfrentan al riesgo más humano de todos: volver a amar.",
"Entre Ginebra y los recuerdos de Buenos Aires, Mina descubrirá que la paz no se firma, se construye. Que el deseo de una vida normal —un hogar, una familia, un hijo— puede volver irracional incluso a la mente más racional.",
"Y que a veces, para encontrarse con la vida, hay que perder el control.",

"Una historia intensa y profundamente emotiva sobre la pérdida, la esperanza y la segunda oportunidad de sentir."
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

  // Pintar contenido
  document.title = `${book.title} | Yael Goldmann`;

  $cover.src = book.cover;
  $cover.alt = `Portada ${book.title}`;

  $title.textContent = book.title;

  setMetaLine($date, "", book.date); // si quieres que solo se vea la fecha sin etiqueta
  setMetaLine($isbn, "ISBN", book.isbn);

  // descripción en párrafos (como tu imagen)
  $desc.innerHTML = (book.description || [])
    .map(txt => `<p>${txt}</p>`)
    .join("");
})();
