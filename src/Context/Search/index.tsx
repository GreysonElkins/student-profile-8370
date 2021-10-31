import { useState, useEffect, PropsWithChildren, ReactNode } from 'react'
import UnderlinedTextField, { ChangeProps } from 'components/style/Field/UnderlinedTextField'
import Student from 'types/Student'

type SearchData = Student
// other Data types would be allowed for here with `Student | Example | OtherData`

interface Props<D extends SearchData> extends Omit<ChangeProps, 'onChange'> {
  data: D[]
  matchRule: string
  children: (data: D[]) => ReactNode
}

const SearchEngine = <D extends SearchData>({ children, matchRule, data, ...props }: PropsWithChildren<Props<D>>) => {
  const [query, setQuery] = useState<string>('')  
  const [results, setResults] = useState<D[]>(data)

  useEffect(() => {
    if (!query) return setResults(data)
    const matches = data.filter(data => data[matchRule](query) === true)
    setResults(matches)
  }, [query, data])

  return (
    <>
      <UnderlinedTextField {...props} onChange={({ target }) => setQuery(target.value)} />
      {query && results.length === 0 && <div>No result were found</div>}
      {children(results)}
    </>
  )
}

export default SearchEngine
