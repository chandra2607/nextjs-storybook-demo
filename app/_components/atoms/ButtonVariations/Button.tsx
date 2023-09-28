import styles from './Button.module.scss';
export enum buttonSizes {
  buttonSmall = 'buttonSmall',
  buttonMedium = 'buttonMedium',
  buttonLarge = 'buttonLarge'
}
export enum buttonVariants {
  buttonPrimary = 'buttonPrimary',
  buttonSecondary = 'buttonSecondary',
  buttonDanger = 'buttonDanger'
}

export interface ButtonProps {
  children: React.ReactElement;
  size?: keyof typeof buttonSizes;
  variants?: keyof typeof buttonVariants;
  onClick?: () => void;
  disabled?: boolean;
}
const VariantButton: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={[
        styles.button,
        props.size && styles[props.size],
        props.variants && styles[props.variants],
        props.disabled && styles.buttonDisabled
      ].join(' ')}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default VariantButton;
