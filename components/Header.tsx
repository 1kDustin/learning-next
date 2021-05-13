import Link from 'next/link'
import React from 'react'
import styles from '../styles/header-styles.module.css'

export default function Header() {
    return (
        <div className={styles.mainContainer}>
            <div>
                <h1 className={styles.headerTitle}>Software Company</h1>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.buttonContainerGreen}>
                    <h2>
                        <Link href="/">
                            <a className={styles.buttonTitle}>Home</a>
                        </Link>
                    </h2>
                </div>
                <div className={styles.buttonContainerBlue}>
                    <h2>
                        <Link href="/">
                            <a className={styles.buttonTitle}>About</a>
                        </Link>
                    </h2>
                </div>
                <div className={styles.buttonContainerOrange}>
                    <h2>
                        <Link href="/">
                            <a className={styles.buttonTitle}>Projects</a>
                        </Link>
                    </h2>
                </div>
                <div className={styles.buttonContainerPink}>
                    <h2>
                        <Link href="/">
                            <a className={styles.buttonTitle}>Contact</a>
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}