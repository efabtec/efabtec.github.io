export type Tema = "efab" | "smartdespensa" | "daisy" | "farmacinha";

/** Onde o app está: decide a chamada principal da página (entrar no teste, em breve ou o selo da Play). */
export type Status = "em-breve" | "teste" | "publicado";

export interface Link {
  rotulo: string;
  href: string;
}

export interface App {
  slug: Exclude<Tema, "efab">;
  nome: string;
  /** Gênero do nome, para a concordância ("a Farmacinha"). Padrão: masculino. */
  genero?: "m" | "f";
  /** Arquivo do símbolo em public/logos/<slug>/, usado no cabeçalho e como favicon. */
  simbolo?: string;
  /** Selo curto acima do título, como "Android" ou "Android · em breve". */
  selo: string;
  /** Uma frase: o que o app resolve. */
  slogan: string;
  /** Resumo para o cartão do hub. */
  resumo: string;
  /** Meta description da página do app. */
  descricao: string;
  status: Status;
  links: { teste?: string; play?: string };
  recursos: string[];
  /** Ressalva que acompanha a lista de recursos (o que o app não faz). */
  ressalva?: string;
  /** Título grande do hero da landing. Sem ele, o hero usa o nome do app. */
  chamada?: string;
  /** Título da faixa de chamada no fim da landing. */
  fraseFinal?: string;
  /** Recursos agrupados por tema, para a seção "Recursos". Sem eles, a landing usa `recursos`. */
  grupos?: GrupoDeRecursos[];
  /** "Como funciona", em 3 ou 4 passos. */
  passos?: Passo[];
  planos?: Planos;
  /** Perguntas frequentes. A landing mostra as marcadas com `destaque`; a página de ajuda, todas. */
  faq?: Pergunta[];
  /** Guia de uso por tarefa, na página de ajuda (`ajuda.html`). */
  ajuda?: TopicoDeAjuda[];
  /** Páginas legais, na ordem do menu. */
  legais: (Link & { curto: string })[];
  /** Título da seção de links legais na página do app. */
  tituloLegais: string;
}

export interface GrupoDeRecursos {
  titulo: string;
  itens: string[];
}

export interface Passo {
  titulo: string;
  texto: string;
}

/** Valor de uma linha da tabela de planos: true (incluído), false (não incluído) ou um texto curto. */
export type ValorDoPlano = boolean | string;

export interface Planos {
  linhas: { recurso: string; gratis: ValorDoPlano; premium: ValorDoPlano }[];
  /** Preço de referência, como "R$ 9,90". Sem ele, a página diz que o valor aparece na Google Play. */
  precoMensal?: string;
  precoAnual?: string;
  /** Observações abaixo da tabela (limites, Premium da casa...). */
  notas?: string[];
}

export interface Pergunta {
  pergunta: string;
  /** HTML curto: pode ter links (relativos à pasta do app) e <strong>. */
  resposta: string;
  destaque?: boolean;
}

export interface TopicoDeAjuda {
  id: string;
  titulo: string;
  /** Passos numerados. */
  passos?: string[];
  /** Parágrafos (HTML curto). */
  texto?: string[];
}
