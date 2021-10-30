import type Student from 'types/Student'
import PlusMinus from 'components/style/Button/PlusMinus'

import './StudentProfile.scss'

type Props = {
  student: Student
}

const StudentProfile: React.FC<Props> = ({ student: { city, company, email, firstName, grades, id, lastName, pic, skill } }) => {
  const getAverage = () => {
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
        <PlusMinus onClick={() => console.log('hi')}/>
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
      </div>
    </div>
  )
}

export default StudentProfile
