import { useState, useEffect, PropsWithChildren, ReactNode } from 'react'
import UnderlinedTextField, { ChangeProps } from 'components/style/Field/UnderlinedTextField'
import Student from 'types/Student'
import './SearchEngine.scss'

type Example = {
  [key: string]: any
  name: string
  age: number
  member: boolean
}

type SearchData = Student | Example
// other Data types would be allowed for here with `Student | Example | OtherData`
// but I don't feel like this quite hits the mark
  // I'd rather Props<D> and check that D is
  // an Array<{ [key: string]: any, hasMatchingProps: (query: string) => boolean }
// eliminating the need for `matchRule`
// Since D is used to type results anyway, 
// We don't actually need to specify what types can be passed in as SearchData 
// this was originally for the sake of the child components 

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
      <div className="engineHeader">
        <UnderlinedTextField {...props} className="trimmedTextField" onChange={value => setQuery(value)} />
        {query && results.length === 0 && <div className="noResults">No result were found</div>}
      </div>
      {children(results)}
    </>
  )
}

export default SearchEngine
