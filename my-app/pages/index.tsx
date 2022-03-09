import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-ts-lib'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button type="primary" text='help' onClick={() => true}/>
    </div>
  )
}

export default Home
