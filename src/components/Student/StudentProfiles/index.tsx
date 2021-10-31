import Student from 'types/Student'
import StudentProfile from '../StudentProfile'

const StudentProfiles: React.FC<{ students: Student[] }> = ({ students }) => {
  const printStudentProfiles = () => 
    students.map((student, i) => <StudentProfile student={student} key={`${student}-${i}`} />)

  return (
    <div>
      {printStudentProfiles()}
    </div>
  )
}

export default StudentProfiles
