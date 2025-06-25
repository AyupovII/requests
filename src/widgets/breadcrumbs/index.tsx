import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

export const Breadcrumbs: FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === 'requests')) {
    return (
      <nav className={styles.breadcrumbs}>
        <span className={styles.current}>Главная</span>
      </nav>
    );
  }

  return (
    <nav className={styles.breadcrumbs}>
      <Link className={styles.link} to="/requests">Главная</Link>
      {pathnames.slice(1).map((segment, index) => {
        const path = `/requests/${pathnames.slice(1, index + 2).join('/')}`;
        const isLast = index === pathnames.length - 2;

        const label = segment

        return (
          <span key={path}>
            <span className={styles.separator}> / </span>
            {isLast ? (
              <span className={styles.current}>{label}</span>
            ) : (
              <Link className={styles.link} to={path}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};