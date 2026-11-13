import type { App } from "../tipos";

// Fonte: docs/loja/ficha-da-loja.md (FARM-56) e docs/BILLING.md (FARM-30) no repo do app, e os
// ADRs 0048 e 0049. A leitura da caixa por foto fica fora até as Functions subirem (FARM-29).
// Preço de referência do FARM-30, confirmado pelo Eduardo em 2026-11-13. Se o grátis ganhar anúncios,
// revise `planos` e a home.
export const farmacinha: App = {
  slug: "farmacinha",
  nome: "Farmacinha",
  genero: "f",
  simbolo: "farmacinha-simbolo.svg",
  selo: "Android",
  chamada: "Os remédios de casa, organizados",
  slogan: "Saiba o que você tem, onde está guardado e quando vence. E seja avisado antes de um remédio vencer ou acabar.",
  resumo:
    "Os remédios de casa organizados: o que você tem, onde está guardado, quando vence e o que precisa repor. A lista fica só no seu aparelho.",
  descricao:
    "Farmacinha: os remédios de casa organizados no Android, com validade, local de guarda, avisos antes de vencer e lista de reposição.",
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
  grupos: [
    {
      titulo: "Cadastre em segundos",
      itens: [
        "Aponte a câmera para o código de barras: o app preenche nome, princípio ativo, apresentação e laboratório.",
        "A base de remédios fica no aparelho e funciona sem internet.",
        "Fotografe a data impressa na caixa para preencher a validade, com leitura no próprio aparelho.",
      ],
    },
    {
      titulo: "Saiba o que você tem",
      itens: [
        "Cada caixa com a sua validade, o seu lote e o seu local.",
        "Busque pelo nome comercial ou pelo princípio ativo.",
        "Filtre por vencidos, pelos que vencem em breve e pelo local de guarda: gaveta do banheiro, bolsa, casa da mãe.",
      ],
    },
    {
      titulo: "Seja avisado a tempo",
      itens: [
        "Avisos 90, 30 e 7 dias antes do vencimento.",
        "Aviso quando a caixa está quase no fim e não há outra em casa.",
      ],
    },
    {
      titulo: "Reponha e descarte",
      itens: [
        "A lista de reposição se monta sozinha com o que venceu ou está acabando.",
        "Envie a lista por mensagem para quem vai à farmácia.",
        "Veja como descartar remédio vencido do jeito certo.",
      ],
    },
  ],
  fraseFinal: "Chega de procurar remédio na gaveta",
  passos: [
    {
      titulo: "Leia o código de barras",
      texto: "O app reconhece a caixa e preenche os dados. Você confere a validade e escolhe onde ela fica guardada.",
    },
    {
      titulo: "Receba o aviso",
      texto: "A Farmacinha avisa 90, 30 e 7 dias antes de vencer e quando a caixa está acabando.",
    },
    {
      titulo: "Reponha sem esquecer nada",
      texto: "A lista de reposição já vem pronta. É só mandar para quem vai à farmácia.",
    },
  ],
  planos: {
    linhas: [
      { recurso: "Cadastro por código de barras e validade pela foto", gratis: true, premium: true },
      { recurso: "Avisos de validade e de caixa acabando", gratis: true, premium: true },
      { recurso: "Lista de reposição e guia de descarte", gratis: true, premium: true },
      { recurso: "Farmácia compartilhada com a família", gratis: true, premium: true },
      { recurso: "Cópia de segurança em arquivo", gratis: true, premium: true },
      { recurso: "Caixas de remédio", gratis: "Até 30", premium: "Sem limite" },
      { recurso: "Locais de guarda", gratis: "1", premium: "Sem limite" },
      { recurso: "Anúncios", gratis: "Nenhum", premium: "Nenhum" },
    ],
    precoMensal: "R$ 9,90",
    precoAnual: "R$ 79,90",
    notas: [
      "O Premium de quem criou a farmácia compartilhada vale para toda a família.",
      "Quem já tiver passado do limite quando ele entrar em vigor não perde nada: só não cadastra mais.",
    ],
  },
  faq: [
    {
      pergunta: "Preciso criar uma conta?",
      resposta:
        "Não. A Farmacinha funciona sem cadastro. A conta Google só é pedida se você quiser compartilhar a farmácia com a família.",
      destaque: true,
    },
    {
      pergunta: "Meus remédios vão para a internet?",
      resposta:
        'Não, a não ser que você escolha compartilhar a farmácia. A lista fica no seu aparelho e fora do backup do Android. Quem compartilha tem uma cópia nos servidores para a família ver a mesma lista. Detalhes na <a href="privacidade.html">política de privacidade</a>.',
      destaque: true,
    },
    {
      pergunta: "A Farmacinha diz qual remédio tomar?",
      resposta:
        "Não. Ela organiza os remédios que você tem em casa e não indica remédio, dose nem tratamento. Siga a orientação do seu médico ou farmacêutico.",
      destaque: true,
    },
    {
      pergunta: "Quanto custa?",
      resposta:
        "O plano grátis cobre até 30 caixas em um local de guarda. O Premium, opcional, tira os limites. O preço de referência é R$ 9,90 por mês ou R$ 79,90 por ano, e o valor final aparece na Google Play.",
      destaque: true,
    },
    {
      pergunta: "Como compartilho a farmácia com a família?",
      resposta:
        "Entre com sua conta Google, aceite o compartilhamento e convide até 5 pessoas. Todos passam a ver e editar a mesma farmácia.",
    },
    {
      pergunta: "Troquei de celular. Como levo meus remédios?",
      resposta:
        "Em Configurações, exporte a farmácia para um arquivo e importe no aparelho novo. Quem compartilha a farmácia recebe tudo de volta ao entrar com a mesma conta Google.",
    },
    {
      pergunta: "Como apago meus dados?",
      resposta:
        'Em <strong>Configurações → Apagar meus dados</strong>. Se você compartilha a farmácia, faça isso com internet. Veja <a href="excluir-dados.html">como apagar seus dados</a>.',
    },
  ],
  ajuda: [
    {
      id: "cadastrar",
      titulo: "Cadastrar uma caixa",
      passos: [
        "Aponte a câmera para o código de barras da caixa. O app preenche nome, princípio ativo, apresentação e laboratório.",
        "Se o código não for reconhecido, digite o nome do remédio.",
        "Fotografe a data impressa na caixa para preencher a validade, ou digite a data.",
        "Informe o lote, a quantidade e o local de guarda.",
      ],
      texto: ["Duas caixas do mesmo remédio são cadastradas separadas, porque cada uma tem a sua validade."],
    },
    {
      id: "locais",
      titulo: "Locais de guarda",
      texto: [
        "Crie os lugares onde você guarda remédios, como a gaveta do banheiro, a bolsa ou a casa da mãe, e filtre a lista por eles.",
      ],
    },
    {
      id: "avisos",
      titulo: "Avisos de validade e de caixa acabando",
      texto: [
        "O app avisa 90, 30 e 7 dias antes do vencimento e quando uma caixa está quase no fim sem outra em casa. Para receber os avisos, permita as notificações da Farmacinha nas configurações do Android.",
      ],
    },
    {
      id: "reposicao",
      titulo: "Lista de reposição e descarte",
      texto: [
        "A lista de reposição se monta sozinha com o que venceu ou está acabando. Envie por mensagem para quem vai à farmácia.",
        "Remédio vencido não vai para o lixo comum nem para a pia. O app explica como e onde descartar.",
      ],
    },
    {
      id: "familia",
      titulo: "Compartilhar a farmácia com a família",
      passos: [
        "Entre com sua conta Google.",
        "Leia e aceite o compartilhamento: a partir daí, a farmácia passa a ter uma cópia nos servidores.",
        "Convide as pessoas. A farmácia compartilhada tem até 6 pessoas, contando com você.",
      ],
      texto: ["O Premium de quem criou a farmácia vale para todos os membros."],
    },
    {
      id: "copia",
      titulo: "Cópia de segurança e troca de celular",
      texto: [
        "Em <strong>Configurações</strong>, exporte a farmácia para um arquivo e guarde onde preferir. No aparelho novo, importe o arquivo: o app junta as caixas sem duplicar.",
      ],
    },
    {
      id: "premium",
      titulo: "Assinar e cancelar o Premium",
      texto: [
        "O Premium é cobrado pela Google Play, nos planos mensal e anual. Para cancelar ou trocar de plano, abra a Google Play e vá em <strong>Pagamentos e assinaturas → Assinaturas</strong>. O Premium continua até o fim do período já pago.",
      ],
    },
    {
      id: "apagar",
      titulo: "Apagar seus dados",
      texto: [
        'No menu do Início, abra <strong>Configurações → Apagar meus dados</strong> e confirme. Se você compartilha a farmácia, faça isso com internet, antes de desinstalar. Detalhes em <a href="excluir-dados.html">Apagar seus dados</a>.',
      ],
    },
  ],
  tituloLegais: "Privacidade e termos",
  // Os caminhos estão no app (tela Configurações): não mude.
  legais: [
    { rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" },
    { rotulo: "Termos de uso", curto: "Termos", href: "termos.html" },
    { rotulo: "Como apagar seus dados", curto: "Apagar dados", href: "excluir-dados.html" },
  ],
};
