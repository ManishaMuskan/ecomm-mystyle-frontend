import { Link } from 'react-router-dom';
import classes from './BreadCrumbs.module.css';

const crumbs = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/clothing',
    text: 'Clothing',
    type: 'mc',
  },
  {
    path: '/shirts',
    text: 'Shirts',
    type: 'cat',
  },
];

const BreadCrumbs = ({ crumbsList = crumbs }) => {
  return (
    <section className={classes['breadcrumbs-base']}>
      <ul className={classes['breadcrumbs-list']}>
        {crumbsList.map(({ path, text }, index) => (
          <li key={text} className={classes['breadcrumbs-item']}>
            {index + 1 !== crumbsList.length ? (
              <Link
                to={`${path}?src=bc`}
                className={classes['breadcrumbs-crumb']}>
                <span>{text}</span>
              </Link>
            ) : (
              <span>{text}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BreadCrumbs;
