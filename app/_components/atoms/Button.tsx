import styles from './Button.module.scss';

export type LooseString<T extends string> = T | (string & {});
export interface ButtonProps {
  children: string;
  backgroundColor?:
    | 'buttonPrimaryBg'
    | 'buttonPrimaryText'
    | 'buttonSecondaryBg'
    | 'buttonSecondaryText'
    | 'buttonSuccessBg'
    | 'buttonSuccessText'
    | 'buttonDangerBg'
    | 'buttonDangerText';
  size?: LooseString<'buttonFit' | 'buttonFull'>;
  fsize?: LooseString<
    | 'buttonFontXXSmall'
    | 'buttonFontXSmall'
    | 'buttonFontSmall'
    | 'buttonFontMedium'
    | 'buttonFontLarge'
    | 'buttonFontXLarge'
    | 'buttonFontXXLarge'
    | 'buttonFontXXXLarge'
  >;
  onClick?: () => void;
  type?: 'submit' | 'button';
  padding: LooseString<
    | 'buttonPaddingXsmall'
    | 'buttonPaddingSmall'
    | 'buttonPaddingMedium'
    | 'buttonPaddingLarge'
    | 'buttonPaddingXlarge'
  >;
  disabled?: boolean;
  border?: 'buttonBorderLarge' | 'buttonBorderMedium' | 'buttonBorderSmall';
}
const Button: React.FC<ButtonProps> = ({
  size = 'buttonFull',
  backgroundColor,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  const { fsize = 'buttonFontMedium', padding = 'buttonPaddingXsmall' } = props;
  const buttonStyle = {
    width: styles[size],
    backgroundColor: backgroundColor
      ? styles[backgroundColor]
      : 'buttonPrimaryBg',
    color: styles.buttonPrimaryText,
    borderRadius: styles.buttonBorderRadius,
    padding:
      styles[padding] !== undefined ? styles.buttonPaddingMedium : padding,
    fontSize: styles[fsize] !== undefined ? styles[fsize] : fsize
  };
  return (
    <button
      type={type}
      disabled={disabled}
      style={buttonStyle}
      className={[
        styles.button,
        disabled ? styles.disabled : null,
        props.border !== undefined && styles[props.border],
        styles[size]
      ].join(' ')}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default Button;
