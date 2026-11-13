import type { App } from "./tipos";

// Concordância com o nome do app: "o SmartDespensa", "o Daisy", "a Farmacinha".
type ComGenero = Pick<App, "nome" | "genero">;

const fem = (app: ComGenero) => app.genero === "f";

/** "o SmartDespensa" / "a Farmacinha" */
export const oNome = (app: ComGenero) => `${fem(app) ? "a" : "o"} ${app.nome}`;
/** "O SmartDespensa" / "A Farmacinha", para início de frase. */
export const ONome = (app: ComGenero) => `${fem(app) ? "A" : "O"} ${app.nome}`;
/** "do SmartDespensa" / "da Farmacinha" */
export const doNome = (app: ComGenero) => `${fem(app) ? "da" : "do"} ${app.nome}`;
/** "lançado" / "lançada" */
export const lancado = (app: ComGenero) => (fem(app) ? "lançada" : "lançado");
