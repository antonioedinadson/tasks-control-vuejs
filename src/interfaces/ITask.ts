import { IProjeto } from "./IProjeto";

export interface ITask {
    description: string;
    time: number;
    projeto: IProjeto
}