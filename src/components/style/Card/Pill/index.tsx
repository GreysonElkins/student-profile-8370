import { MouseEvent } from 'react'
import './Pill.scss'

const Pill: React.FC<{
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}> = ({ onClick, children }) => {
  if (onClick)
    return (
      <button onClick={(event) => onClick(event)} className="Pill button">
        {children}
      </button>
    )
  return <div className="Pill">{children}</div>
}

export default Pill
