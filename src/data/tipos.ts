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
  /** Páginas legais, na ordem do menu. */
  legais: (Link & { curto: string })[];
  /** Título da seção de links legais na página do app. */
  tituloLegais: string;
}
