import styles from './styles.module.scss';
import { formatValue } from '@/shared/utils';

type TableProps<T> = {
  data: T[];
  onRowClick?: (row: T) => void;
};

export const Table = <T extends Record<string, any>>({
  data,
  onRowClick,
}: TableProps<T>) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} onClick={() => onRowClick?.(row)}>
              {headers.map((key) => (
                <td key={key}>{formatValue(row[key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};