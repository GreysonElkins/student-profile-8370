import { useState } from 'react'
import type Student from 'types/Student'
import PlusMinus from 'components/style/Button/PlusMinus'

import './StudentProfile.scss'
import StudentGrades from '../StudentGrades'

type Props = {
  student: Student
}

const StudentProfile: React.FC<Props> = ({ student }) => {
  const { company, email, firstName, grades, id, lastName, pic, skill } = student
  const [showGrades, setShowGrades] = useState<boolean>(false)

  const getAverage = () => {
    // I could see this function being used in other parts of the app, 
    // in which case I would store it in `src/scripts`
    // or place it as a method on a Student class (which I'd use in place of the type)
    if (!grades || grades.length === 0) return `No grades have been taken for this student`
    const avg = grades.reduce((avg, grade, i) => {
      const num = Number(grade)
      if (isNaN(num)) {
        console.warn(`Student ${id}'s grade at index ${i} is not a number'`)
      } else {
        avg += num
      } 
      return avg
    }, 0) / grades.length
    return `${avg}%`
  }

  return (
    <div className="StudentProfile">
      {pic && <img src={pic} alt={`${firstName ? firstName : 'unnamed student'}'s picture'`} />}
      <div className="profileExtendButton">
        <PlusMinus onClick={(isOpen) => setShowGrades(isOpen)}/>
      </div>
      <div className="studentInfo">
        {(firstName || lastName) && (
          <h3>
            {firstName} {lastName}
          </h3>
        )}
        {email && <div>Email: {email}</div>}
        {company && <div>Company: {company}</div>}
        {skill && <div>Skill: {skill}</div>}
        <div>Average: {getAverage()}</div>
        {showGrades && <StudentGrades student={student} />}
      </div>
    </div>
  )
}

export default StudentProfile
