import { useState } from 'react'
import type Student from 'types/Student'
import PlusMinus from 'components/style/Button/PlusMinus'

import StudentGrades from '../StudentGrades'
import UnderlinedTextField from 'components/style/Field/UnderlinedTextField'
import './StudentProfile.scss'

type Props = {
  student: Student
}

const StudentProfile: React.FC<Props> = ({ student }) => {
  const { average, company, email, firstName, lastName, pic, skill } = student
  const [showGrades, setShowGrades] = useState<boolean>(false)

  return (
    <div className="StudentProfile">
      {pic && <img src={pic} alt={`${firstName ? firstName : 'unnamed student'}'s picture'`} />}
      <div className="profileExtendButton">
        <PlusMinus onClick={(isOpen) => setShowGrades(isOpen)} />
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
        <div>Average: {average}%</div>
        <UnderlinedTextField
          placeholder="Add a tag"
          onSubmit={() => console.log('success')}
          className="tagInput"
        />
        {showGrades && <StudentGrades student={student} />}
      </div>
    </div>
  )
}

export default StudentProfile
