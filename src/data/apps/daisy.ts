import type { App } from "../tipos";

// Fonte: handbook/projetos/daisy.md (decisões dos PET-16 a PET-28) e a política de privacidade.
// Os limites do grátis (PET-28) são hipótese a validar no teste fechado: mudou, revise `planos`.
export const daisy: App = {
  slug: "daisy",
  nome: "Daisy",
  simbolo: "daisy-simbolo.svg",
  selo: "Android",
  chamada: "A carteirinha do seu pet, sempre no bolso",
  slogan:
    "A carteirinha do seu pet no celular: vacinas, vermífugos, antiparasitários, peso e remédios, com aviso antes de cada reforço.",
  resumo:
    "A carteirinha do pet no celular: vacinas, vermífugos, peso e remédios, com aviso antes de cada reforço. O cadastro é feito fotografando a carteirinha de papel.",
  descricao:
    "Daisy: a carteirinha do seu pet no Android, com vacinas, vermífugos, peso, remédios e aviso da próxima dose. Cadastro pela foto da carteirinha de papel.",
  status: "em-breve",
  links: {},
  recursos: [
    "Cadastra os registros fotografando a carteirinha de papel, com revisão antes de salvar.",
    "Avisa quando a próxima dose definida pelo veterinário está chegando.",
    "Lembra o horário dos remédios em uso.",
    "Mostra a curva de peso e guarda exames, receitas e laudos.",
    "Exporta o histórico do pet em PDF.",
    "Funciona sem conta: seus dados ficam no aparelho.",
  ],
  ressalva: "O Daisy registra o que o veterinário aplicou; ele não sugere vacina, dose, protocolo ou diagnóstico.",
  grupos: [
    {
      titulo: "Carteirinha",
      itens: [
        "Fotografe a carteirinha de papel: o app lê vacinas, vermífugos e antiparasitários.",
        "Revise cada registro antes de salvar. Repetidos chegam desmarcados.",
        "Ou cadastre à mão, com produto, data e próxima dose.",
      ],
    },
    {
      titulo: "Avisos",
      itens: [
        "Aviso antes da próxima dose: 15, 7, 3 ou 1 dia antes, e no dia.",
        "Lembrete no horário de cada remédio, até o último dia do tratamento.",
        "Lista dos próximos avisos de todos os pets numa tela só.",
      ],
    },
    {
      titulo: "Saúde e documentos",
      itens: [
        "Curva de peso a partir das pesagens que você registra.",
        "Exames, receitas e laudos guardados como foto ou PDF.",
        "Cães, gatos e outros pets, cada um com perfil e foto.",
      ],
    },
    {
      titulo: "Histórico em PDF",
      itens: [
        "Exporte carteirinha, remédios e pesos num PDF para levar ao veterinário ou ao hotel.",
        "Compartilhe pelo app que preferir.",
      ],
    },
  ],
  fraseFinal: "Nunca mais perca a data do reforço",
  passos: [
    {
      titulo: "Cadastre o pet",
      texto: "Nome, espécie e foto. Cão, gato ou outro bicho da casa.",
    },
    {
      titulo: "Fotografe a carteirinha",
      texto: "O app lê os registros da foto e você confere tudo antes de salvar.",
    },
    {
      titulo: "Receba o aviso",
      texto: "O Daisy avisa antes da próxima dose e no horário de cada remédio.",
    },
  ],
  planos: {
    linhas: [
      { recurso: "Carteirinha, avisos de dose e lembretes de remédio", gratis: true, premium: true },
      { recurso: "Leitura da carteirinha por foto", gratis: true, premium: true },
      { recurso: "Curva de peso", gratis: true, premium: true },
      { recurso: "Pets", gratis: "1", premium: "Sem limite" },
      { recurso: "Exames, receitas e laudos anexados", gratis: "Até 5", premium: "Sem limite" },
      { recurso: "Histórico em PDF", gratis: "Com a marca Daisy", premium: "Sem marca" },
      { recurso: "Anúncios", gratis: "Nenhum", premium: "Nenhum" },
    ],
    // Preço de referência decidido pelo Eduardo em 2026-11-13 (o mesmo dos três apps).
    precoMensal: "R$ 9,90",
    precoAnual: "R$ 79,90",
    notas: [
      "A leitura por foto usa inteligência artificial, precisa de internet e tem um limite de uso.",
      "Os limites do plano grátis podem mudar até o lançamento.",
    ],
  },
  faq: [
    {
      pergunta: "Preciso criar uma conta?",
      resposta:
        "Não. O Daisy não pede conta nem login. Os pets, os registros, os pesos, os remédios e os anexos ficam no seu aparelho.",
      destaque: true,
    },
    {
      pergunta: "O app substitui a carteirinha assinada pelo veterinário?",
      resposta:
        "Não. O Daisy é um espelho do que você registrou: ajuda a acompanhar as datas, mas a carteirinha assinada continua sendo o documento oficial. O PDF exportado traz esse aviso.",
      destaque: true,
    },
    {
      pergunta: "O Daisy diz qual vacina ou remédio dar?",
      resposta:
        "Não. Ele registra o que o veterinário aplicou e receitou e avisa nas datas que você informou. Siga sempre a orientação do seu veterinário.",
      destaque: true,
    },
    {
      pergunta: "O que acontece com a foto da carteirinha?",
      resposta:
        'A foto é enviada para a leitura e não é guardada: só os registros que você confirma entram no histórico, no seu aparelho. Antes da primeira foto, o app explica isso. Detalhes na <a href="privacidade.html">política de privacidade</a>.',
      destaque: true,
    },
    {
      pergunta: "O Daisy é gratuito?",
      resposta:
        "Sim. O plano grátis cobre um pet com carteirinha, avisos, lembretes e curva de peso. O Premium, opcional, libera mais pets, anexos sem limite e o PDF sem marca, por R$ 9,90 por mês ou R$ 79,90 por ano (preço de referência; o valor final aparece na Google Play).",
    },
    {
      pergunta: "Não estou recebendo os avisos. O que faço?",
      resposta:
        "Confira se as notificações do Daisy estão permitidas nas configurações do Android. Para os lembretes de remédio no horário exato, permita também os alarmes: o perfil do pet mostra um aviso quando falta essa permissão.",
    },
    {
      pergunta: "Como apago os dados do Daisy?",
      resposta:
        "Como os dados ficam no aparelho, excluir um pet apaga os registros e os anexos dele, e desinstalar o app apaga tudo. Não há conta para excluir.",
    },
  ],
  ajuda: [
    {
      id: "comecar",
      titulo: "Começar a usar",
      texto: [
        "Na primeira abertura, o app explica como trata seus dados e pergunta se você quer enviar estatísticas de uso e relatórios de erro. Elas começam desligadas, e você muda quando quiser em <strong>Privacidade</strong>.",
        "Depois, cadastre o primeiro pet: nome, espécie (cão, gato ou outro) e, se quiser, uma foto.",
      ],
    },
    {
      id: "carteirinha",
      titulo: "Cadastrar pela foto da carteirinha",
      passos: [
        "No perfil do pet, escolha cadastrar pela carteirinha.",
        "Leia o aviso sobre a leitura por foto (aparece só na primeira vez) e permita a câmera.",
        "Fotografe a página. Dá para somar mais páginas antes de revisar.",
        "Revise os registros: corrija o que for preciso e desmarque o que não quiser salvar. Datas ilegíveis ficam em branco para você completar.",
        "Salve. Os registros entram no histórico e os avisos de próxima dose são agendados.",
      ],
      texto: ["A leitura precisa de internet e tem limite de uso."],
    },
    {
      id: "avisos",
      titulo: "Avisos da próxima dose",
      texto: [
        "Escolha em <strong>Alertas</strong> com quanta antecedência quer ser avisado: 15, 7, 3 ou 1 dia antes, e no dia. O padrão é 7 dias antes e no dia, sempre às 9h.",
        "A mesma tela lista os próximos avisos de todos os pets.",
      ],
    },
    {
      id: "remedios",
      titulo: "Lembretes de remédio",
      passos: [
        "No perfil do pet, cadastre o remédio com o intervalo da receita e o último dia do tratamento.",
        "Permita as notificações e, se o app pedir, os alarmes, para o lembrete tocar no horário exato.",
      ],
    },
    {
      id: "peso-anexos",
      titulo: "Peso, exames e receitas",
      texto: [
        "Registre as pesagens no perfil do pet: a curva aparece a partir da segunda.",
        "Anexe exames, receitas e laudos como foto ou PDF (até 20 MB). Os anexos ficam só no aparelho.",
      ],
    },
    {
      id: "pdf",
      titulo: "Exportar o histórico em PDF",
      texto: [
        "Gere um PDF com a carteirinha, os remédios e os pesos do pet e compartilhe pelo app que preferir. O PDF é um resumo do que você registrou e não substitui a carteirinha assinada pelo veterinário.",
      ],
    },
    {
      id: "dados",
      titulo: "Onde ficam seus dados",
      texto: [
        'Tudo fica no seu aparelho, fora do backup automático do Android. Desinstalar o app apaga os dados. Veja a <a href="privacidade.html">política de privacidade</a>.',
      ],
    },
  ],
  tituloLegais: "Privacidade e termos",
  // O caminho da política está no app (URL_POLITICA_PRIVACIDADE): não mude.
  legais: [
    { rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" },
    { rotulo: "Termos de uso (rascunho)", curto: "Termos", href: "termos.html" },
  ],
};
