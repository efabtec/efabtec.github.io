import type { App } from "../tipos";

// Fonte dos textos: docs/loja/ficha-da-loja.md e docs/BILLING.md no repo do app (SD-121, SD-120,
// SD-111). O que é Premium segue o que o código trava para quem não assina. Mudou o app? Revise aqui.
export const smartdespensa: App = {
  slug: "smartdespensa",
  nome: "SmartDespensa",
  simbolo: "smartdespensa-simbolo.svg",
  selo: "Android",
  chamada: "Saiba o que tem em casa antes de ir ao mercado",
  slogan: "Sua despensa organizada: saiba o que tem em casa, o que está perto de vencer e o que precisa comprar.",
  resumo:
    "Controle da despensa, validades, listas de compras e notas fiscais em um só lugar. O app avisa o que está perto de vencer e sugere receitas para aproveitar os itens.",
  descricao:
    "SmartDespensa: controle da despensa, validades, listas de compras e notas fiscais no Android. Avisos antes de vencer e a casa toda na mesma lista.",
  // Em teste fechado com testadores. Quando houver o link de opt-in da Play, preencha links.teste.
  status: "teste",
  links: {},
  recursos: [
    "Cadastra itens pelo código de barras ou lendo o QR Code e a foto da nota fiscal.",
    "Avisa quando um item está perto de vencer.",
    "Monta listas de compras e guarda o histórico de preços.",
    "Sugere receitas com os itens que estão vencendo.",
    "Compartilha a despensa com as pessoas da sua casa.",
    "Funciona sem conta, no modo convidado, ou com login Google para sincronizar entre aparelhos.",
  ],
  grupos: [
    {
      titulo: "Estoque e validades",
      itens: [
        "Cadastre itens pelo código de barras ou digitando.",
        "Leia a validade direto da embalagem com a câmera.",
        "Receba um aviso quando um item estiver perto de vencer.",
        "Organize por local: despensa, geladeira ou freezer.",
      ],
    },
    {
      titulo: "Nota fiscal",
      itens: [
        "Importe a compra inteira pelo QR Code da nota (NFC-e) ou por uma foto do cupom.",
        "Revise os itens antes de entrarem no estoque.",
        "Acompanhe o gasto do mês e o histórico de preço de cada produto.",
      ],
    },
    {
      titulo: "Lista de compras",
      itens: [
        "Monte listas e marque os itens no mercado, no modo compra.",
        "Ao finalizar a compra, os itens entram no estoque.",
      ],
    },
    {
      titulo: "Casa compartilhada",
      itens: [
        "Convide as pessoas da sua casa por código ou link.",
        "Todos veem o mesmo estoque e as mesmas listas, atualizados entre os aparelhos.",
      ],
    },
  ],
  fraseFinal: "Menos desperdício, mais tranquilidade na hora das compras",
  passos: [
    {
      titulo: "Cadastre o que tem em casa",
      texto: "Pelo código de barras, pela foto da validade ou importando a nota fiscal inteira de uma vez.",
    },
    {
      titulo: "Receba o aviso antes de vencer",
      texto: "O app lembra do que está perto da validade, para você usar antes de perder.",
    },
    {
      titulo: "Compre só o que falta",
      texto: "Monte a lista, marque os itens no mercado e, ao finalizar, eles entram direto no estoque.",
    },
  ],
  planos: {
    linhas: [
      { recurso: "Estoque, validades e avisos", gratis: true, premium: true },
      { recurso: "Importar a nota fiscal (QR Code ou foto)", gratis: true, premium: true },
      { recurso: "Listas de compras e modo compra", gratis: true, premium: true },
      { recurso: "Gasto do mês e histórico de preço", gratis: true, premium: true },
      { recurso: "Casa compartilhada", gratis: true, premium: true },
      { recurso: "Lista da semana montada para você", gratis: false, premium: true },
      { recurso: "Receitas com o que está perto de vencer", gratis: false, premium: true },
      { recurso: "Cole uma receita e veja os ingredientes que já tem", gratis: false, premium: true },
      { recurso: "Plano alimentar da nutricionista vira lista de compras", gratis: false, premium: true },
      { recurso: "Comparar o preço entre mercados", gratis: false, premium: true },
      { recurso: "Anúncios", gratis: "Nenhum", premium: "Nenhum" },
    ],
    // Preço de referência decidido pelo Eduardo em 2026-11-13 (o mesmo dos três apps).
    precoMensal: "R$ 9,90",
    precoAnual: "R$ 79,90",
    notas: [
      "A assinatura de quem criou a casa vale para todos os membros.",
      "A leitura da foto do cupom e os recursos de receitas e de plano alimentar usam inteligência artificial e precisam de internet. A foto do cupom tem um limite diário de uso.",
    ],
  },
  faq: [
    {
      pergunta: "Preciso criar uma conta?",
      resposta:
        "Não. Você pode usar como convidado, com os dados só no aparelho. Se quiser sincronizar entre aparelhos ou dividir a despensa, entre com sua conta Google.",
      destaque: true,
    },
    {
      pergunta: "O SmartDespensa é gratuito?",
      resposta:
        "Sim. Estoque, validades, avisos, nota fiscal, listas e casa compartilhada são gratuitos. O Premium é uma assinatura opcional, de R$ 9,90 por mês ou R$ 79,90 por ano (preço de referência; o valor final aparece na Google Play), para quem quer a lista da semana, as receitas, o plano alimentar e a comparação de preços.",
      destaque: true,
    },
    {
      pergunta: "Como divido a despensa com a minha família?",
      resposta:
        "Entre com sua conta Google e convide as pessoas da sua casa por código ou link. Todos passam a ver o mesmo estoque e as mesmas listas. Se quem criou a casa assina o Premium, ele vale para todos.",
      destaque: true,
    },
    {
      pergunta: "O que acontece com os meus dados?",
      resposta:
        'O SmartDespensa não exibe anúncios e não vende seus dados. No modo convidado, tudo fica no aparelho. Os detalhes estão na <a href="privacidade.html">política de privacidade</a>.',
      destaque: true,
    },
    {
      pergunta: "O app funciona sem internet?",
      resposta:
        "O estoque, as listas e os avisos funcionam sem internet. A consulta da nota fiscal, a leitura da foto do cupom e os recursos de receitas e de plano alimentar precisam de conexão.",
    },
    {
      pergunta: "Como cancelo o Premium?",
      resposta:
        "Pela Google Play, em <strong>Pagamentos e assinaturas → Assinaturas</strong>. O Premium continua até o fim do período já pago. Excluir a conta ou desinstalar o app não cancela a cobrança.",
    },
    {
      pergunta: "Como excluo minha conta e meus dados?",
      resposta:
        'No app, em <strong>Conta → Excluir minha conta</strong>, ou por e-mail. O passo a passo e o que é apagado estão em <a href="excluir-conta.html">Excluir conta</a>.',
    },
  ],
  ajuda: [
    {
      id: "comecar",
      titulo: "Começar a usar",
      texto: [
        "Na primeira abertura, escolha entre usar como <strong>convidado</strong>, com os dados só no aparelho, ou entrar com sua <strong>conta Google</strong>, que sincroniza entre aparelhos e permite dividir a despensa.",
        "Dá para começar como convidado e entrar com a conta Google depois.",
      ],
    },
    {
      id: "cadastrar",
      titulo: "Cadastrar itens",
      passos: [
        "Leia o código de barras do produto ou digite o nome.",
        "Aponte a câmera para a validade impressa na embalagem, ou informe a data.",
        "Escolha o local: despensa, geladeira ou freezer.",
      ],
    },
    {
      id: "nota-fiscal",
      titulo: "Importar a nota fiscal",
      passos: [
        "Leia o QR Code da nota (NFC-e) ou tire uma foto do cupom.",
        "Revise a lista de itens: ajuste nomes e quantidades e tire o que não for para o estoque.",
        "Confirme: os itens entram no estoque e o valor entra no gasto do mês e no histórico de preço.",
      ],
      texto: ["A consulta da nota e a leitura da foto precisam de internet. A foto do cupom tem um limite diário de uso."],
    },
    {
      id: "avisos",
      titulo: "Avisos de validade",
      texto: [
        "O app avisa quando um item está perto de vencer. Para receber os avisos, permita as notificações do SmartDespensa nas configurações do Android.",
      ],
    },
    {
      id: "lista",
      titulo: "Lista de compras",
      passos: [
        "Monte a lista com o que precisa comprar.",
        "No mercado, use o modo compra e marque os itens conforme coloca no carrinho.",
        "Ao finalizar a compra, os itens marcados entram no estoque.",
      ],
    },
    {
      id: "casa",
      titulo: "Dividir a despensa com a sua casa",
      passos: [
        "Entre com sua conta Google.",
        "Crie a casa e convide as pessoas por código ou link.",
        "Quem aceita passa a ver o mesmo estoque e as mesmas listas, atualizados entre os aparelhos.",
      ],
      texto: ["A assinatura Premium de quem criou a casa vale para todos os membros."],
    },
    {
      id: "premium",
      titulo: "Assinar, cancelar e trocar de plano",
      texto: [
        "O Premium é cobrado pela Google Play, nos planos mensal e anual. Assine pela tela do Premium no app.",
        "Para cancelar ou trocar de plano, abra a Google Play e vá em <strong>Pagamentos e assinaturas → Assinaturas</strong>. O Premium continua até o fim do período já pago.",
        "Excluir a conta ou desinstalar o app não cancela a cobrança.",
      ],
    },
    {
      id: "excluir",
      titulo: "Excluir sua conta e seus dados",
      texto: [
        'Com conta Google, vá em <strong>Conta → Excluir minha conta</strong>. No modo convidado, em <strong>Conta → Apagar meus dados deste aparelho</strong>. Sem acesso ao app, peça por e-mail. Detalhes em <a href="excluir-conta.html">Excluir conta</a>.',
      ],
    },
  ],
  tituloLegais: "Privacidade",
  legais: [
    { rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" },
    { rotulo: "Como excluir sua conta e seus dados", curto: "Excluir conta", href: "excluir-conta.html" },
  ],
};
