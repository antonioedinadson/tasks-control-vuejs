import { IProjeto } from "./IProjeto";

export interface ITask {
    id: string;
    description: string;
    time: number;
    projeto_id: String
}