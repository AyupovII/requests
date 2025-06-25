import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { requestStore } from '@/entities/request/store';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/ui/button';
import { Table } from '@/shared/ui/table';
import { TRequest } from '@/types';
export const Requests: React.FC = observer(() => {
  const navigate = useNavigate();

  const handleRowClick = (row: TRequest) => {
    navigate(`/requests/${row.id}`);
  };


  return (
    <div className={styles.requests}>
      <h1>Заявки</h1>
      {
        requestStore.requests.length ?
          <Table data={requestStore.requests} onRowClick={handleRowClick} /> :
          <p>Нет данных</p>
      }
      <Link to="/requests/new"><Button variant="primary">Создать заявку</Button></Link>

    </div>
  )
})
