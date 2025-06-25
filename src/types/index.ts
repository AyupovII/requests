export enum RequestStatus {
  New = 'Новая',
  InProgress = 'В работе',
  Closed = 'Закрыта',
  Pending = 'Отложена',
  AwaitingConfirmation = 'Ожидает подтверждения',
}

export interface TRequest {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  date: string;
}

export enum RequestName{
  id = 'id',
  title = 'Название',
  description = 'Описание',
  status = 'Статус заявки',
  date = 'Дата создания',
}