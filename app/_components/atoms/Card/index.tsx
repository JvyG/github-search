import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  id?: string
  className?: string
  type: 'raised' | 'rest' | 'raisable'
}

const shadowType = {
  raised: 'shadow-md',
  rest: 'shadow-sm',
  raisable: 'hover:shadow-lg hover:translate-y-[1px] cursor-pointer'
}

export default function Card(props: CardProps) {
  const { children, id, className, type } = props
  return (
    <div
      id={id}
      className={`p-[16px] ${shadowType[type]} bg-white rounded-md${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}