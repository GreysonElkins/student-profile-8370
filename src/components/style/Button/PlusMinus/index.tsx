import { useState } from 'react'
import './PlusMinus.scss'

type Props = {
  onClick: () => void
}

const PlusMinus: React.FC<Props> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <button 
      className="PlusMinus"
      onClick={() => {
        setIsOpen(prev => !prev)
        onClick() 
    }}>
      <div className={`vertical bar ${isOpen ? 'open' : 'closed' }`} />
      <div className="horizontal bar" />
    </button> 
    )
}

export default PlusMinus