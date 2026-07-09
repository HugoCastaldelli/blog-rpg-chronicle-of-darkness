// Como editar: copie um objeto inteiro dentro de const posts para adicionar novo post

const blogPosts = [
  {
    titulo: "Mansão Black, ",
    data: "12/03/2003",
    categoria: "Fantasmas",
    midia: {
      tipo: "imagem",
      src: "content/Casa_Black.png",
      alt: "Hospital abandonado com uma figura ao fundo"
    },
    conteudo: 'Hoje eu e meus amigos vamos explorar a mansão Black. Ela é conhecida na região por ser assombrada, antes de ir reunimos um pouco de informação pela cidade. Aparentemente toda a família morreu ali, filha (Alice Black): morreu enforcada meio do salao, Mica Black teve um mal subito e os pais (n sabemos nome): "engoliram" o revolver por assim dizer. A mansão fica no meio de uma mata preservada, vai ser dificil de chegar, mas achamos um grupo de adolecentes que já foram lá, vamos ver no que vai dar, estou com um mal pressentimento.',
    comentarios: []
  },
  {
    titulo: "Diario",
    data: "12/03/2003",
    categoria: "Diario",
    midia: [
        { tipo: "imagem", src: "content/pag1.png", alt: "Diario Pagina 1" },
        { tipo: "imagem", src: "content/pag2.png", alt: "Diario Pagina 2" }
    ],
    conteudo: "Anotações do nosso primeiro dia aqui em Betshire.",
    comentarios: [
      { autor: "Gabriel", texto: "First" },
      { autor: "Cris", texto: "Esses ai inventam cada uma" },
      { autor: "Sam", texto: "Você quer dizer Berkshire?"},
      { autor: "Yume", texto: "Um espirito da tempestade parece uma coisa interessante de se buscar"},
    ]
  },
  {
    titulo: "Uma fita VHS estranha apareceu na locadora",
    data: "17/04/2003",
    categoria: "Arquivos VHS",
    conteudo: "Hoje cedo, na locadora onde eu trabalho, encontrei uma fita VHS sem rótulo muito bem embalda. Colocamos pra assistir e para meus companheiros era apenas uma mansão antiga em um local isolado, mas para mim era algo a mais. Eles não perceberam, tinha tinha algo a mais ali, uma mensagem. Eu me comuniquei com alguem ou alguma coisa, da até um arrepio só de lembrar. Eu digitei no teclado que estava no pc onde eu via a fica, e a fita respondeu, me disse para não confiar em ninguem e o mais estranho, meus amigos que estavam assistindo comigo não viram nada. Eu não sei o que fazer, mas vou investigar mais sobre essa fita e sobre a mansão que aparece nela.",
    comentarios: [
      { autor: "Beto", texto: "Isso ai deve ser alguem pregando uma peça em vocês" },
      { autor: "Cris", texto: "Você tem mania de achar mistério em tudo. É só uma fita velha." },
      { autor: "Yume", texto: "Acho que aquela caixa estranha realmente tinha um propósito então, parece uma aventura"},
      { autor: "Phobetor", texto: "RSB0dWRvIGNvbWXDp291IGNvbSB1bSDDum5pY28gbGl2cm8uIE1hbGRpdGEgc2VqYSBhIHZlbGhhIEVzcGlyYWwg" },
    ]
  },
  {
    titulo: "The Backrooms (Found Footage)",
    data: "02/04/2003",
    categoria: "OVNIs",
    midia: {
      tipo: "iframe",
      src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H4dGpz6cnHo?si=RIF2XLqOYsH4rt0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      alt: "The Backrooms"
    },
    conteudo: "Um dos nossos seguidores nos enviou esse vídeo, ele disse que é uma gravação dos backrooms, um lugar que ninguém sabe explicar direito. O vídeo mostra um corredor com paredes amarelas e luzes fluorescentes piscando. A câmera parece estar tremendo, como se a pessoa que filmava estivesse com medo. Em certo momento, é possível ouvir passos atrás da câmera, mas quando ela se vira, não há ninguém lá. O vídeo termina com um grito e a imagem ficando preta.",
    comentarios: [
      { autor: "Duda", texto: "Cara, isso é assustador!" },
      { autor: "Renato Boe", texto: "Eu falo, isso deve ser algum aliem" },
      { autor: "José Fitas", texto: "Renato, eu já falei que aliem não existe! Isso claramente é uma criatura sobrenatural." },
      { autor: "Zach", texto: "Alguém andou se divertindo demais no mundo entre mundos" },
      { autor: "Black", texto: "Um espaço infinito né ? Tipo o fim de uma espiral ou a golden ratio. Parece legal" },
    ]
  },
  {
    titulo: "Quem Somos Nós?",
    data: "12/03/2003",
    categoria: "Apresentação",
    midia: {
      tipo: "imagem",
      src: "content/party.png",
      alt: "Nossa galera"
    },
    conteudo: "Olá, pessoal! Este é o nosso blog, onde estaremos postando fotos, vídeos e relatos de encontros paranormais nossos e de seguidores que nos enviarem.",
    comentarios: [
      { autor: "Josó Fitas", texto: "Aqui é o editor e camera man ✌️" },
      { autor: "Renato Boe", texto: "Nossa equipe é Rock and Roll 🤘" },
      { autor: "Fred Jones", texto: "Estarei aqui para defende-los 👊" },
    ]
  }
];

window.posts = blogPosts;
