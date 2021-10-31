import { useState } from 'react'
import type Student from 'types/Student'
import PlusMinus from 'components/style/Button/PlusMinus'

import StudentGrades from '../StudentGrades'
import UnderlinedTextField from 'components/style/Field/UnderlinedTextField'
import Pill from 'components/style/Card/Pill'
import './StudentProfile.scss'

type Props = {
  student: Student
}

const StudentProfile: React.FC<Props> = ({ student }) => {
  const { average, company, email, firstName, lastName, pic, skill, tags: existingTags } = student
  const [tags, setTags] = useState<string[]>(existingTags)
  const [showGrades, setShowGrades] = useState<boolean>(false)
  
  const printTags = () => tags.map(tag => <Pill>{tag}</Pill>)

  // useEffect(() => {
    // update in-app data (student.updateTags)
    // determine type of change to tags (create or delete) update API accordingly
  // }, [tags])

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
        {showGrades && <StudentGrades student={student} />}
        <div>{printTags()}</div>
        <UnderlinedTextField
          placeholder="Add a tag"
          onSubmit={value => setTags(prev => [...prev, value])}
          className="tagInput"
        />
      </div>
    </div>
  )
}

export default StudentProfile
