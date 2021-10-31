import { createContext, useState, useContext, useEffect } from 'react'
import UnderlinedTextField, { ChangeProps } from 'components/style/Field/UnderlinedTextField'

type Value = {
  data: Array<{
    [key: string]: any
  }>
}

interface Props extends Omit<ChangeProps, 'onChange'> {
  dataSet: Array<{
    [key: string]: any
  }>
  matchRule: string
  children: (data: any[]) => JSX.Element[]
}

const SearchContext = createContext({} as Value)

export const SearchProvider: React.FC<Props> = ({ children, matchRule, dataSet, ...props }) => {
  const [query, setQuery] = useState<string>('')  
  const [results, setResults] = useState<any[]>(dataSet)

  useEffect(() => {
    if (!query) return setResults(dataSet)
    const matches = dataSet.filter(data => data[matchRule](query) === true)
    setResults(matches)
  }, [query, dataSet])

  return (
    <SearchContext.Provider
      value={{
        data: results
      }}
    >
      <UnderlinedTextField {...props} onChange={({ target }) => setQuery(target.value)} />
      {query && results.length === 0 && <div>No students were found</div>}
      {children(results)}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
