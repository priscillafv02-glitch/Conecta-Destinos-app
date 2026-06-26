export type TravelTip = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const travelTips: TravelTip[] = [
  {
    id: "documents",
    title: "Documentos",
    description: "Itens importantes para evitar problemas no embarque e na hospedagem.",
    items: ["RG ou passaporte", "Comprovante da reserva", "Cartao do seguro viagem", "Copias digitais no celular"]
  },
  {
    id: "bag",
    title: "Mala basica",
    description: "Uma lista simples para montar a mala sem exagerar.",
    items: ["Roupas confortaveis", "Casaco leve", "Calcado para caminhada", "Necessaire pequena"]
  },
  {
    id: "health",
    title: "Saude",
    description: "Cuidados rapidos para viajar com mais tranquilidade.",
    items: ["Remedios de uso pessoal", "Protetor solar", "Garrafa de agua", "Alcool em gel"]
  },
  {
    id: "technology",
    title: "Tecnologia",
    description: "O basico para nao ficar sem bateria ou informacao.",
    items: ["Carregador", "Power bank", "Adaptador de tomada", "Mapas baixados offline"]
  },
  {
    id: "destination",
    title: "No destino",
    description: "Coisas simples que ajudam a aproveitar melhor o lugar.",
    items: ["Ver clima do dia", "Salvar endereco do hotel", "Separar dinheiro local", "Marcar passeios principais"]
  },
  {
    id: "before",
    title: "Antes de sair",
    description: "Checklist final antes de fechar a porta.",
    items: ["Conferir documentos", "Trancar portas e janelas", "Desligar aparelhos", "Checar horario do voo"]
  }
];
