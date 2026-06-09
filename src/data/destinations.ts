import { Destination } from "../types/destination";

export const destinations: Destination[] = [
  {
    id: "paris",
    name: "Paris",
    country: "Franca",
    region: "Europa",
    nights: 7,
    price: 4299,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 1254,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Aereo + Hotel", "Cafe da manha", "Seguro viagem"],
    description:
      "Paris combina arte, historia, gastronomia e passeios classicos em uma viagem elegante e facil de aproveitar.",
    includes: ["Passagens de ida e volta", "Hospedagem com cafe da manha", "City tour panoramico", "Seguro viagem"],
    itinerary: ["Chegada e passeio pela Torre Eiffel", "City tour pelo centro historico", "Museu do Louvre", "Cruzeiro pelo Rio Sena"]
  },
  {
    id: "maldivas",
    name: "Maldivas",
    country: "Maldivas",
    region: "Oceania",
    nights: 5,
    price: 7899,
    rating: 4.9,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["All inclusive", "Praia", "Resort"],
    description:
      "Um destino perfeito para descanso, aguas cristalinas e dias tranquilos em resorts sobre o mar.",
    includes: ["Transfer ate o resort", "Hospedagem all inclusive", "Passeio de barco", "Assistencia 24h"],
    itinerary: ["Chegada ao resort", "Dia livre na praia", "Passeio de barco", "Jantar especial a beira-mar"]
  },
  {
    id: "nova-york",
    name: "Nova York",
    country: "Estados Unidos",
    region: "America do Norte",
    nights: 6,
    price: 5499,
    rating: 4.7,
    reviews: 1752,
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Urbano", "Compras", "Museus"],
    description:
      "Nova York tem energia unica, com arranha-ceus, parques, espetaculos, lojas e muita cultura.",
    includes: ["Hospedagem central", "Roteiro de compras", "Ingresso para observatorio", "Seguro viagem"],
    itinerary: ["Times Square e Broadway", "Central Park", "Museu e observatorio", "Dia livre para compras"]
  },
  {
    id: "roma",
    name: "Roma",
    country: "Italia",
    region: "Europa",
    nights: 7,
    price: 4199,
    oldPrice: 4899,
    rating: 4.7,
    reviews: 1033,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Historico", "Cultural", "Gastronomia"],
    description:
      "Roma mistura ruinas, igrejas, fontes, massas e gelatos em uma experiencia cheia de historia.",
    includes: ["Hotel proximo ao centro", "Tour pelo Coliseu", "Passeio pelo Vaticano", "Cafe da manha"],
    itinerary: ["Coliseu e Forum Romano", "Vaticano", "Fontana di Trevi", "Praças historicas"]
  },
  {
    id: "toquio",
    name: "Toquio",
    country: "Japao",
    region: "Asia",
    nights: 6,
    price: 6699,
    rating: 4.9,
    reviews: 907,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505069190533-da1c9af13346?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Tecnologia", "Cultura", "Gastronomia"],
    description:
      "Toquio une tradicao e tecnologia, com templos, luzes, comida incrivel e bairros muito diferentes entre si.",
    includes: ["Hotel bem localizado", "Passeio por Shibuya", "Tour cultural", "Seguro viagem"],
    itinerary: ["Shibuya e Harajuku", "Templos tradicionais", "Akihabara", "Dia livre"]
  },
  {
    id: "rio",
    name: "Rio de Janeiro",
    country: "Brasil",
    region: "America do Sul",
    nights: 5,
    price: 1299,
    oldPrice: 1599,
    rating: 4.6,
    reviews: 814,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Praia", "Nacional", "Natureza"],
    description:
      "O Rio e perfeito para quem quer praia, paisagens marcantes, cultura brasileira e passeios famosos.",
    includes: ["Hotel em area turistica", "Passeio ao Cristo Redentor", "City tour", "Seguro viagem"],
    itinerary: ["Cristo Redentor", "Pao de Acucar", "Praias da Zona Sul", "Centro historico"]
  },
  {
    id: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    region: "Europa",
    nights: 6,
    price: 3899,
    oldPrice: 4499,
    rating: 4.8,
    reviews: 642,
    image: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Historico", "Gastronomia", "Hotel central"],
    description:
      "Lisboa e uma viagem leve e charmosa, com miradouros, bondinhos, bairros antigos e comida muito marcante.",
    includes: ["Hospedagem com cafe da manha", "Passeio por Belem", "Tour por Alfama", "Seguro viagem"],
    itinerary: ["Baixa e Chiado", "Belem e Pasteis de Nata", "Alfama e miradouros", "Dia livre para Sintra"]
  },
  {
    id: "seul",
    name: "Seul",
    country: "Coreia do Sul",
    region: "Asia",
    nights: 6,
    price: 6299,
    rating: 4.8,
    reviews: 731,
    image: "https://images.unsplash.com/photo-1538485399081-7c8e8b1a5e33?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538485399081-7c8e8b1a5e33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617541086271-4d43983704bd?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Cultura pop", "Tecnologia", "Gastronomia"],
    description:
      "Seul mistura palacios, mercados, cafes modernos e bairros vibrantes em uma experiencia urbana cheia de personalidade.",
    includes: ["Hotel bem localizado", "Tour por palacios", "Passeio por Myeongdong", "Seguro viagem"],
    itinerary: ["Palacio Gyeongbokgung", "Bukchon Hanok Village", "Myeongdong e Hongdae", "Dia livre para compras"]
  },
  {
    id: "cancun",
    name: "Cancun",
    country: "Mexico",
    region: "America do Norte",
    nights: 5,
    price: 4599,
    oldPrice: 5299,
    rating: 4.7,
    reviews: 1180,
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Praia", "All inclusive", "Resort"],
    description:
      "Cancun e ideal para quem quer mar azul, resorts completos e passeios para conhecer a cultura mexicana.",
    includes: ["Hospedagem all inclusive", "Transfer aeroporto hotel", "Passeio opcional a Tulum", "Assistencia 24h"],
    itinerary: ["Chegada ao resort", "Praia e estrutura all inclusive", "Passeio a Tulum", "Dia livre"]
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    region: "America do Sul",
    nights: 4,
    price: 1899,
    rating: 4.6,
    reviews: 923,
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616445770126-569244e6bde0?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Cultural", "Gastronomia", "Curta duracao"],
    description:
      "Buenos Aires e uma opcao pratica e bonita, com arquitetura, tango, cafes, livrarias e bons restaurantes.",
    includes: ["Hotel no centro", "City tour", "Show de tango opcional", "Seguro viagem"],
    itinerary: ["Recoleta e Palermo", "Centro historico", "La Boca", "Dia livre"]
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    region: "Oceania",
    nights: 7,
    price: 8299,
    rating: 4.8,
    reviews: 546,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548565495-a13c4c42c5c2?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Urbano", "Praia", "Natureza"],
    description:
      "Sydney combina praias, vida urbana, parques e pontos turisticos famosos em uma viagem bem completa.",
    includes: ["Hospedagem central", "City tour", "Passeio pela Opera House", "Seguro viagem"],
    itinerary: ["Opera House e porto", "Bondi Beach", "The Rocks", "Dia livre"]
  }
];

export const featuredDestinations = destinations.slice(0, 4);
export const offerDestinations = [destinations[3], destinations[4], destinations[5]];
