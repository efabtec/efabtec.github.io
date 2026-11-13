import type { App } from "../tipos";

export const smartdespensa: App = {
  slug: "smartdespensa",
  nome: "SmartDespensa",
  selo: "Android",
  slogan: "Sua despensa organizada: saiba o que tem em casa, o que está perto de vencer e o que precisa comprar.",
  resumo:
    "Controle da despensa, validades, listas de compras e notas fiscais em um só lugar. O app avisa o que está perto de vencer e sugere receitas para aproveitar os itens.",
  descricao: "SmartDespensa: controle da despensa, validades, listas de compras e notas fiscais no Android.",
  status: "em-breve",
  links: {},
  recursos: [
    "Cadastra itens pelo código de barras ou lendo o QR Code e a foto da nota fiscal.",
    "Avisa quando um item está perto de vencer.",
    "Monta listas de compras e guarda o histórico de preços.",
    "Sugere receitas com os itens que estão vencendo.",
    "Compartilha a despensa com as pessoas da sua casa.",
    "Funciona sem conta, no modo convidado, ou com login Google para sincronizar entre aparelhos.",
  ],
  tituloLegais: "Privacidade",
  legais: [
    { rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" },
    { rotulo: "Como excluir sua conta e seus dados", curto: "Excluir conta", href: "excluir-conta.html" },
  ],
};
