import Image from 'next/image'
import styles from './page.module.css'
import Tutorial from '@/components/tutorial'
import Tutorial2 from '@/components/tutorial-2'

export default function Home() {
  return (
    <main className={styles.main}>
      <Tutorial />
      <Tutorial2 />
    </main>
  )
}
