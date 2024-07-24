import styles from './styles.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
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
    theme
  } = props

  return (
    <button
      className={`rounded-md py-3 px-2 ${styles[`button-${theme}`]}`}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </button>
  )
}