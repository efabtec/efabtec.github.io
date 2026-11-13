import type { App } from "../tipos";

export const farmacinha: App = {
  slug: "farmacinha",
  nome: "Farmacinha",
  simbolo: "farmacinha-simbolo.svg",
  selo: "Android · em breve",
  slogan: "Os remédios de casa organizados: saiba o que você tem, onde está guardado, quando vence e o que precisa repor.",
  resumo:
    "Os remédios de casa organizados: o que você tem, onde está guardado, quando vence e o que precisa repor. A lista fica só no seu aparelho.",
  descricao: "Farmacinha: os remédios de casa organizados, com validade, local de guarda e lista de reposição, no Android.",
  status: "em-breve",
  links: {},
  recursos: [
    "Cadastra a caixa pelo código de barras ou pelo nome, com validade, lote, quantidade e local de guarda.",
    "Avisa quando um remédio está perto de vencer ou já venceu.",
    "Monta a lista de reposição com o que acabou ou venceu.",
    "Explica como descartar remédio vencido do jeito certo.",
    "Funciona sem cadastro: a lista dos seus remédios fica só no seu aparelho, a não ser que você escolha compartilhar a farmácia com a família.",
  ],
  ressalva: "A Farmacinha não indica remédio, dose nem tratamento. Siga a orientação do seu médico ou farmacêutico.",
  tituloLegais: "Privacidade e termos",
  // Os caminhos estão no app (tela Configurações): não mude.
  legais: [
    { rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" },
    { rotulo: "Termos de uso", curto: "Termos", href: "termos.html" },
    { rotulo: "Como apagar seus dados", curto: "Apagar dados", href: "excluir-dados.html" },
  ],
};
