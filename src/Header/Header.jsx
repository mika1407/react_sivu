import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(){

  return(
    <header className={styles.header}>
        <h1>My website</h1>
        <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <hr></hr>
    </header>
  );
}

export default Header