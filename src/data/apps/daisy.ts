import type { App } from "../tipos";

export const daisy: App = {
  slug: "daisy",
  nome: "Daisy",
  simbolo: "daisy-simbolo.svg",
  selo: "Android",
  slogan:
    "A carteirinha do seu pet no celular: vacinas, vermífugos, antiparasitários, peso e remédios, com aviso antes de cada reforço.",
  resumo:
    "A carteirinha do pet no celular: vacinas, vermífugos, peso e remédios, com aviso antes de cada reforço. O cadastro é feito fotografando a carteirinha de papel.",
  descricao: "Daisy: a carteirinha do seu pet no Android, com vacinas, vermífugos, peso, remédios e aviso da próxima dose.",
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
  tituloLegais: "Privacidade",
  // O caminho da política está no app (URL_POLITICA_PRIVACIDADE): não mude.
  legais: [{ rotulo: "Política de privacidade", curto: "Privacidade", href: "privacidade.html" }],
};
