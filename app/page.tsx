import Image from 'next/image'
import styles from './page.module.css'
import Button from './_components/atoms/Button'

export default function Home() {
  return (
  <>
   <Button padding='10px 20px' fsize="buttonFontMedium" size="buttonFull" backgroundColor="buttonPrimaryBg">
    W-Full
   </Button>
    <Button padding='buttonPaddingMedium' type='submit' size='buttonFit' backgroundColor='buttonSuccessBg'>
    Custom 
    </Button>
</>
  )
}
