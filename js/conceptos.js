const concepts = {
    "www": "Sistema global de información que utiliza hipervínculos para acceder a documentos y recursos en Internet.",
    "internet": "Red mundial que conecta dispositivos y redes para el intercambio de datos.",
    "servidor": "Computadora o software que proporciona servicios o recursos a otros dispositivos (clientes).",
    "centro de datos": "Instalación que aloja servidores y equipos para procesar y almacenar grandes cantidades de datos.",
    "pagina web": "Documento digital accesible a través de un navegador web, escrito en HTML.",
    "sitio web": "Conjunto de páginas web interconectadas bajo un dominio único.",
    "ip": "Dirección numérica única que identifica un dispositivo en una red.",
    "icann": "Organización responsable de gestionar nombres de dominio y direcciones IP en Internet.",
    "http": "Protocolo que permite la transferencia de información en la web.",
    "html": "Lenguaje de marcado utilizado para estructurar contenido en páginas web.",
    "tcp": "Protocolo que garantiza la entrega fiable de datos entre dispositivos en redes.",
    "navegador web": "Software que permite acceder, mostrar y navegar contenido en la web.",
    "css": "Lenguaje utilizado para definir el estilo y diseño de páginas web.",
    "java-script": "Lenguaje de programación que agrega interactividad y dinamismo a páginas web.",
    "front end": "Parte visible de un sitio web con la que interactúan los usuarios.",
    "back end": "Parte del sistema que procesa datos y gestiona la lógica del servidor.",
    "url": "Dirección completa que localiza un recurso en la web.",
    "dns": "Sistema que traduce nombres de dominio en direcciones IP.",
    "web 1.0": "Primera versión de la web, caracterizada por páginas estáticas y contenido unidireccional.",
    "web 2.0": "Evolución de la web con contenido dinámico, colaboración y redes sociales.",
    "web 3.0": "Web semántica, que conecta datos de manera más inteligente y automatizada.",
    "web 4.0": "Web basada en inteligencia artificial y personalización avanzada.",
    "web 5.0": "Web emocional que utiliza tecnologías para interpretar y responder a emociones humanas."
};

const relationships = [
    ["www", "internet"],
    ["servidor", "centro de datos"],
    ["pagina web", "sitio web"],
    ["ip", "dns",'icann'],
    ["http", "html"],
    ["css", "java-script"],
    ["front end", "back end"],
    ["web 1.0", "web 2.0"],
    ["web 2.0", "web 3.0"],
    ["web 3.0", "web 4.0"],
    ["web 4.0", "web 5.0"]
];

const container = document.getElementById("concept-cards");

// Crear tarjetas con relaciones
Object.keys(concepts).forEach(concept => {
    const related = relationships
        .filter(pair => pair.includes(concept))
        .flatMap(pair => pair.filter(item => item !== concept));

    const card = document.createElement("div");
    card.className = "card text-bg-light shadow-sm";
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${concept}</h5>
            <p class="card-text">${concepts[concept]}</p>
            ${related.length > 0 ? `<div class='related-cards'><strong>Relacionado con:</strong> ${related.map(r => `<span class='badge bg-primary'>${r}</span>`).join(' ')}</div>` : ""}
        </div>
    `;
    container.appendChild(card);
});
