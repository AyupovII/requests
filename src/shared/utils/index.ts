import { RequestStatus } from "@/types";

export const statusOptions = [
  { value: RequestStatus.New, label: 'Новая' },
  { value: RequestStatus.InProgress, label: 'В работе' },
  { value: RequestStatus.Closed, label: 'Закрыта' },
  { value: RequestStatus.Pending, label: 'Отложена' },
  { value: RequestStatus.AwaitingConfirmation, label: 'Ожидает подтверждения' },
];

export const formatValue = (value: any) => {
  // формат 25.06.2025, 10:36:02
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
  if (typeof value === 'string' && isoRegex.test(value)) {
    return new Date(value).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
  return String(value);
};