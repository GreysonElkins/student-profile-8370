import { useState, useEffect } from 'react'
import { getStudents } from 'scripts/API'
import { SearchProvider } from 'Context/Search'

import Student from 'types/Student'
import StudentProfile from '../StudentProfile'
import './StudentProfiles.scss'

const StudentProfiles: React.FC = () => {
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

  const printStudentProfiles = (data: Student[]) => 
    data.map((student, i) => <StudentProfile student={student} key={`${student}-${i}`} />)
  
  if (!loading && students.length === 0) return <div className="noStudents">No students were found</div>

  return (
    <div className="StudentProfiles">
      <SearchProvider
        dataSet={students}
        matchRule="hasMatchingProps"
        placeholder="Search by student or tags"
      >
        {(data) => printStudentProfiles(data)}
      </SearchProvider>
    </div>
  )
}

export default StudentProfiles
