import styles from './styles.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  theme: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  testId?: string
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    disabled,
    testId,
    theme,
    ...otherProps
  } = props

  return (
    <button
      className={`${styles.button} ${styles[`button-${theme}`]}`}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
