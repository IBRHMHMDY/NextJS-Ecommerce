import Link from 'next/link'
import {links} from './navbar_data.js';
import styles from './header.module.css'
import Button from '@/elements/button/Button.jsx';
import Logo from '@/elements/logo/logo.jsx';
import ThemesToggle from '../ThemesToggle/ThemesToggle.jsx';
export default function Header() {
  return (
    <header className={styles.header}>
        <Logo />
        <ThemesToggle />
        <div className={styles.links}>
          {links.map((link)=> 
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          )}
        <Button />
        </div>
    </header>
  )
}
