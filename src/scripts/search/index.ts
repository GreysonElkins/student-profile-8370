export const splitQuery = (query: string) => {
  let queries = [] as string[]
  if (query.includes(', ')) {
    queries = query.split(', ') 
  } else if (query.includes(' ')) {
    queries = query.split(' ')
  } else {
    queries = [query]
  }
  checkForHangingComma(queries)
  queries = queries.map(query => query.toLowerCase())
  return queries
}

const checkForHangingComma = (queries: string[]) => {
  const i = queries.length - 1
  if (queries[i][queries[i].length - 1] === ',') {
    queries[i] = queries[i].slice(0, queries[i].length - 1)
  }
}
