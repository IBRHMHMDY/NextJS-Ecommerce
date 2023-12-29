import Link from 'next/link'
import {links} from './navbar.js';
import styles from './header.module.css'
import Button from '@/elements/button/Button.jsx';
import Logo from '@/elements/logo/logo.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <div className={styles.links}>
          {links.map((link)=> 
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          )}
        <Button />
        </div>
    </header>
  )
}
