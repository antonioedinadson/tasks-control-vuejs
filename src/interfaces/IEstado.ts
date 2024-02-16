import { INotify } from "./INotify";
import { IProjeto } from "./IProjeto";
import { ITask } from "./ITask";

export interface IEstado {
    projetos: IProjeto[];
    notification: INotify[];
    tarefas: ITask[]
}