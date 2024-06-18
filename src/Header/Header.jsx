import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(){

  return(
    <header className={styles.header}>
        <h1>My website</h1>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <hr></hr>
    </header>
  );
}

export default Header