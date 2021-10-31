import { useState, useEffect } from 'react'
import { getStudents } from 'scripts/API'

import Student from 'types/Student'
import SearchEngine from 'components/SearchEngine'
import StudentProfiles from '../StudentProfiles'
import SingleWrapper from 'components/style/Card/SingleWrapper'
import './SearchStudents.scss'

const SearchStudents: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
   getStudents().then(result => {
    if (result?.students) {
      const parsedStudents = result.students.map(student => new Student(student))
      setStudents(parsedStudents)
    }
    setLoading(false)
   })
  }, [])

  if (!loading && students.length === 0) return <div className="noStudents">No students were found</div>

  return (
    <SingleWrapper>
      <SearchEngine
          data={students}
          // we'll pass students through the search engine before they hit profiles
          // in "data" => filtered by search => out "data" on line 35
          matchRule="hasMatchingProps"
          placeholder="Search by student and/or tags"
      > 
        {(data) => <StudentProfiles students={data} />}
      </SearchEngine>
    </SingleWrapper>
)
}

export default SearchStudents
