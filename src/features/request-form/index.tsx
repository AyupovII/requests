import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Select } from '@/shared/ui/select';
import { statusOptions } from '@/shared/utils';
import { Button } from '@/shared/ui/button';
import { RequestStatus, TRequest } from '@/types';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

type RequestFormProps = {
  title?: string;
  textButton?: string;
  onSubmit: (data: TRequest) => void;
  data?: TRequest
};

export const RequestForm: FC<RequestFormProps> = ({ onSubmit, data }) => {
  // const generatedId = useId();
  const [formData, setFormData] = useState<TRequest>(
    data ?? {
      id: '',
      title: '',
      description: '',
      status: RequestStatus.New,
      date: '',
    }
  );

  const isNew = !data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (status: string) => {
    setFormData({ ...formData, status: status as RequestStatus });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: !isNew ? formData.id : Date.now().toString(),
      date: !isNew ? formData.date : new Date().toISOString()
    });
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>{isNew ? 'Создание заявки' : 'Редактирование заявки'}</h1>
      <div className={styles.fields}>
        <Input id="title" required name="title" type="text" placeholder="Введите название заявки" value={formData.title} onChange={handleChange} label="Название" />
        <Textarea id="description" required name="description" placeholder="Введите описание заявки" value={formData.description ?? ''} onChange={handleChange} label="Описание" />
        <Select
          label='Статус'
          value={formData.status}
          options={statusOptions}
          onChange={handleStatusChange}
          id="status"
          name="status" />
        <Button type="submit" variant="primary" size="large">{isNew ? 'Создать' : 'Cохранить изменения'}</Button>
      </div>
    </form>
  );
};