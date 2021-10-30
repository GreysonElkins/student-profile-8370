import { useState, useEffect } from 'react'
import { getStudents } from 'scripts/API'

import type Student from 'types/Student'
import StudentProfile from '../StudentProfile'
import './StudentProfiles.scss'

const StudentProfiles: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([])
  
  useEffect(() => {
   getStudents().then(result => {
    if (result?.students) setStudents(result.students)
   })
  }, [])

  const printStudentProfiles = () =>
    students.map((student, i) => <StudentProfile student={student} key={`${student}-${i}`} />)
  

  return <div className="StudentProfiles">{printStudentProfiles()}</div>
}

export default StudentProfiles
