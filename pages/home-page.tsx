import React from 'react'
import Link from 'next/link'
import styles from '../styles/home-page-styles.module.css'
import Header from '../components/Header'
import Home from '../components/Home'

export default function HomePage() {
    return (
        <>
            <Header />
            <Home />
        </>
    )
}