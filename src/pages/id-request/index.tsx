import { RequestName, TRequest } from '@/types';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { requestStore } from '@/entities/request/store';
import { Button } from '@/shared/ui/button';
import { formatValue } from '@/shared/utils';
import { Modal } from '@/shared/ui/modal';
import { useState } from 'react';
import { RequestForm } from '@/features/request-form';

export const IdRequest: React.FC = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentRequest = requestStore.getRequest(id!);
  const [isOpen, setIsOpen] = useState(false);
  const onDelete = () => {
    requestStore.removeRequest(id!);
    navigate('/');
  }

  const onSubmit = (data: TRequest) => {
    requestStore.changeRequest(data);
    setIsOpen(false);
  }

  if (!currentRequest) {
    return null;
  }
  return (
    <div className={styles.idRequest}>
      <h2>Детальная страница заявки</h2>
      <div className={styles.content}>
        <div className={styles.column}>
          {Object.keys(currentRequest).map((key) => (
            <div key={key}>
              {RequestName[key as keyof typeof RequestName]}:
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {Object.values(currentRequest).map((value, index) => (
            <div key={index}>
              {value ? formatValue(value) : '-' }
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant="primary" onClick={onDelete}>Удалить заявку</Button>
        <Button variant="secondary" onClick={() => { setIsOpen(true) }}>Редактировать заявку</Button>
      </div>
      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
        <RequestForm data={currentRequest} onSubmit={onSubmit} />
      </Modal>
    </div>
  )

})