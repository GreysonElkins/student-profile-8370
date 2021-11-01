import { useEffect, useState } from 'react'
import './PlusMinus.scss'

type Props = {
  onClick: (trigger: boolean) => void
  name: string
}

const PlusMinus: React.FC<Props> = ({ onClick, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    onClick(isOpen)
  }, [isOpen])

  return (
    <button 
      className="PlusMinus"
      aria-label={name}
      onClick={() => {
        setIsOpen(prev => !prev) 
    }}>
      <div className={`vertical bar ${isOpen ? 'open' : 'closed' }`} />
      <div className="horizontal bar" />
    </button> 
    )
}

export default PlusMinus