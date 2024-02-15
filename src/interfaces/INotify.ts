export enum ETypeNotification { SUCESSO, WARNING, ERROR };

export interface INotify {
    id: string;
    message: string;
    type: ETypeNotification,
};