import { requestStore } from '@/entities/request/store';
import { RequestForm } from '@/features/request-form';
import { TRequest } from '@/types';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

export const NewRequest: React.FC = observer(() => {
  const navigate = useNavigate();
  const onSubmit = (data: TRequest) => {
    requestStore.addRequest(data);
    navigate('/');
  }

  return (
    <div >
      <RequestForm onSubmit={onSubmit} />
    </div>
  )
})