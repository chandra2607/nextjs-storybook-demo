import styles from './Button.module.css'
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  children:React.ReactElement | string,
  type:'submit'| 'button'
}
const Button : React.FC<ButtonProps>= ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type='button',
  ...props
}: ButtonProps) =>(
    <button type={type}>
      {props.children}
    </button >
  )

export default Button