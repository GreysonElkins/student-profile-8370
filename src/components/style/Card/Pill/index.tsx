import './Pill.scss'

const Pill: React.FC<{ onClick?: void }> = ({ onClick, children }) => {
  if (onClick) return <button className="Pill button">{children}</button>
  return <button className="Pill button">{children}</button>
}

export default Pill
