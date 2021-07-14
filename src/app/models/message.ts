export interface Message {
    message: string;
    type: TypeMessage;
}

export enum TypeMessage{
    ERROR= 'error',
    SUCCESS= 'success'
}
