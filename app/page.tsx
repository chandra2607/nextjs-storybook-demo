import Image from 'next/image';
import styles from './page.module.css';
import Button from './_components/atoms/Button';
import Card from './_components/atoms/Card1/Card';
import VariantButton, {
  buttonSizes,
  buttonVariants
} from './_components/atoms/ButtonVariations/Button';
import { getAllCombinations } from './logic'
import { IconDemo } from './_components/atoms/IconDemo';
export default function Home() {
  const data = getAllCombinations(
    Object.keys(buttonSizes),
    Object.keys(buttonVariants),
    [false, true],
    [true, false]
  );
  return (
    <>
      <h1>Button Variations</h1>
      <div className="flex">
        {data.map((item:any, id:any) => (
          <VariantButton
            key={id}
            size={item[0]}
            variants={item[1]}
            disabled={item[2]}
          >
            <div className="flex">
              {item[3] && <IconDemo />}{' '}
              <p>{`${item[0]} - ${item[1]} -disabled-${item[2]}`}</p>
            </div>
          </VariantButton>
        ))}
      </div>
      {/* <h1>Old Button</h1>
      <Button
        padding="10px 20px"
        fsize="buttonFontMedium"
        size="buttonFull"
        backgroundColor="buttonPrimaryBg"
      >
        W-Full
      </Button>
      <Button
        border="buttonBorderMedium"
        padding="buttonPaddingMedium"
        type="submit"
        size="buttonFit"
        backgroundColor="buttonSuccessBg"
      >
        Custom
      </Button>
      <Button
        padding="buttonPaddingLarge"
        backgroundColor="buttonPrimaryBg"
        size="buttonFull"
      >
        Full Width
      </Button> */}
    </>
  );
}
