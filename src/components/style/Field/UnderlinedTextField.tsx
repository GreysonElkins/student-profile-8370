import { ChangeEvent, FormEvent } from 'react'
import './UnderlinedTextField.scss'

type Props = {
  placeholder: string
  className?: string
}

interface ChangeProps extends Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

interface SubmitProps extends Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const UnderlinedTextField: React.FC<ChangeProps | SubmitProps> = ({
  placeholder,
  onChange,
  onSubmit,
  className = '',
}) => {
  return (
    <form onSubmit={(event) => onSubmit && onSubmit(event)}>
      <input
        className={`UnderlinedTextField ${className}`}
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange && onChange(event)}
      />
    </form>
  )
}

export default UnderlinedTextField
