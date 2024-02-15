import { INotify } from "./INotify";
import { IProjeto } from "./IProjeto";

export interface IEstado {
    projetos: IProjeto[];
    notification: INotify[];
}