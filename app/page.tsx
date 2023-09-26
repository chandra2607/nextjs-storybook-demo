import Image from 'next/image'
import styles from './page.module.css'
import Button from './_components/atoms/Button'

export default function Home() {
  return (
   <Button type='submit' label="hello">
    Hello
   </Button>
  )
}
