import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  const headerRoutes = [
    { route: '/', title: 'home', id: 1 },
    { route: '/about', title: 'about', id: 2 },
  ];

  return (
    <header className="layout-header">
      <nav>
        <ul className="layout-header__links">
          {headerRoutes.map(({ route, title, id }) => (
            <li className="layout-header__links-item" key={id}>
              <Link to={route}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
