import { useState, useEffect } from 'react'
import './UnderlinedTextField.scss'

type Props = {
  placeholder: string
  className?: string
}

export interface ChangeProps extends Props {
  onChange: (value: string) => void
  onSubmit?: (value: string) => void
}

interface SubmitProps extends Props {
  onChange?: (value: string) => void
  onSubmit: (value: string) => void
}

const UnderlinedTextField: React.FC<ChangeProps | SubmitProps> = ({
  placeholder,
  onChange,
  onSubmit,
  className = '',
}) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    onChange && onChange(value)
  }, [value])

  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault()
        onSubmit && onSubmit(value)
        setValue('')
      }}
    >
      <input
        value={value}
        className={`UnderlinedTextField ${className}`}
        type="text"
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  )
}

export default UnderlinedTextField
