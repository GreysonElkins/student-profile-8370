import type Student from 'types/Student'

type Props = {
  student: Student
}

// I started out with just passing `id` and `grades`
// but thinking about reusability I could see cases where we'd 
// want to know more about the student in other contexts
// (their name, maybe a link to click to their full Profiler, etc.)

const StudentGrades:React.FC<Props> = ({ student: { id, grades = [] }}) => {
  const gradeList = grades.map((grade, i) => (
    <li key={`${id}-grade-${i + 1}`}>
      Test {i + 1}: {grade}%
    </li>
  ))
  return <ul style={{ marginTop: '15px' }}>{gradeList}</ul>
  // this one style rule didn't seem worth a whole stylesheet...
}

export default StudentGrades
