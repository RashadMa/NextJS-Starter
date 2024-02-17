import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.scss"
import Link from 'next/link'

const Navbar = () => {
      return (
            <div className={styles.container}>
                  <Link href="/" className={styles.logo}>Logo</Link>
                  <div className='links'>
                        <Links />
                  </div>
            </div>
      )
}

export default Navbar