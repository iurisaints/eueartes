export const pages = [
  { id: "capa", label: "Capa" },
  { id: "sobre", label: "Quem somos" },
  { id: "historia", label: "História" },
  { id: "pecas", label: "Peças" },
  { id: "materiais", label: "Materiais" },
  { id: "parceiros", label: "Parceiros" },
  { id: "contato", label: "Contato" },
] as const;

export const timeline = [
  {
    year: "1969",
    place: "Monte Alegre, PA",
    text: "Rainerio nasce às margens do Rio Amazonas, cercado pela natureza e pelos saberes de sua família. Desde cedo, revela sua habilidade para o trabalho manual.",
  },
  {
    year: "1980",
    place: "Os caminhos pelo Brasil",
    text: "Aos 14 anos, parte de casa. Anos depois, como artesão viajante, conheceu Raimunda em São Luís, no Maranhão. Juntos, escolhem construir uma família em Imperatriz.",
  },
  {
    year: "1998",
    place: "O ofício dos móveis",
    text: "Rainerio é recrutado para aprender o ofício de artesão de móveis no Paraná. É o começo de uma trajetória que transformaria seu trabalho manual em profissão.",
  },
  {
    year: "2006",
    place: "Londrina, PR",
    text: "Depois de anos de experiência no setor, Rainerio e Raimunda abrem a Reflexo das Artes. Começam, juntos, um novo capítulo como empreendedores.",
  },
  {
    year: "2014",
    place: "Imperatriz, MA",
    text: "Depois de um período de grandes desafios, a família retorna ao Maranhão e recomeça com a Eco Brasil Design.",
  },
  {
    year: "2016",
    place: "Santo Augusto, RS",
    text: "Os sonhos dos filhos levam a família novamente para longe. Em uma pequena cidade do Sul, recomeçam do zero com fábrica, showroom e muito trabalho.",
  },
  {
    year: "2021",
    place: "Santa Rosa, RS",
    text: "A família se muda novamente, levando a empresa consigo. É também o momento em que a marca passa a se chamar Eu & Artes.",
  },
  {
    year: "2026",
    place: "Um novo capítulo",
    text: "Depois de muitos caminhos, aprendizados e recomeços, a família abre novamente uma loja. Hoje, Rainerio e Raimunda seguem ao lado da filha, arquiteta, construindo a próxima etapa dessa história.",
  },
];

export const products = [
  {
    title: "Conjuntos",
    image: "/media/interno.jpg",
    tall: false,
    position: "center 70%",
  },
  {
    title: "Balanços",
    image: "/media/projetos.jpg",
    tall: false,
    position: "center",
  },
  {
    title: "Artefatos",
    image: "/media/luminarias.jpg",
    tall: true,
    position: "center",
  },
  {
    title: "Espreguiçadeira",
    image: "/media/aluminio.jpg",
    tall: false,
    position: "center",
  },
  {
    title: "Exclusivos",
    image: "/media/externo.jpg",
    tall: false,
    position: "center 62%",
  },
];

export const materials = [
  { name: "Fibra sintética", image: "/media/fibra.jpg", position: "center", tall: false },
  { name: "Corda náutica", image: "/media/corda.jpg", position: "center", tall: false },
  { name: "Tecido impermeável", image: "/media/tecido.jpg", position: "center", tall: true },
  { name: "Juta", image: "/media/juta.jpg", position: "center", tall: false },
  { name: "Ferro e Alumínio", image: "/media/ferro.jpg", position: "center", tall: false },
];

export const audiences = [
  "Arquitetos",
  "Designers",
  "Hotéis",
  "Restaurantes",
  "Comércio",
  "Residências",
];

export const partners = [
  {
    src: "/media/parc-swing.jpg",
    alt: "Balanço artesanal com almofadas em um interior claro",
  },
  {
    src: "/media/parc-campo.jpg",
    alt: "Cadeira artesanal em um campo ao fim da tarde",
  },
  {
    src: "/media/parc-rocha.jpg",
    alt: "Poltronas pretas com assento terracota diante de uma parede de rocha",
  },
  {
    src: "/media/parc-acapulco.jpg",
    alt: "Poltrona de corda terracota entre plantas, em um interior iluminado",
  },
];

// Links assumem DDD 55 (Santa Rosa) e código do país 55.
export const contacts = [
  {
    name: "Safira Norame",
    phone: "55 9 9627 8761",
    wa: "5555996278761",
  },
  {
    name: "Rainerio Santos",
    phone: "55 9 8446 2731",
    wa: "5555984462731",
  },
];

export const email = "eueartesmoveis@gmail.com";
export const instagram = "eu.e.artes";
export const catalogUrl =
  "https://drive.google.com/drive/folders/10Qfk4e8o33dwfIrhrnKrOMukYDKwHPEX?usp=sharing";
