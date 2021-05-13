import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/home-page-styles.module.css'
import axios from 'axios'

export default function Home() {
    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])

    const axiosCall = (searchValue) => {
        console.log('im getting pressed')
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Qw6uBYghF2x75L38wfAiCJILoVIaVIuO&limit=25&offset=0&rating=g&lang=en&q=${searchValue}`, {
        }).then(({ data }) => {
            setResults(data.data)
        })
    }

    const onValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className={styles.homeSectionContainer}>
            <div className={styles.subContainer}>
                <input type="text" value={searchValue} onChange={onValueChange} />
                <button onClick={axiosCall}>Search</button>
            </div>
            <div>
                {results.map((item, i) => {
                    return (
                        <div>
                            <img src={item.images.downsized.url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}