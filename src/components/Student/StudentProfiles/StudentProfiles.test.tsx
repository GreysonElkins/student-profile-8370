import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import StudentProfiles from '.'
import { response } from 'components/Student/test.data'
import Student from 'types/Student'

describe('StudentProfiles', () => {
  const students = response.students.map(student => new Student(student))

  beforeEach(() => {
    act(() => {
      render(<StudentProfiles students={students} />)
    })  
  })

  it('should render a StudentProfile for each student provided to it', () => {
    const profiles = document.querySelectorAll('.StudentProfile')
    expect(profiles).toHaveLength(students.length)
  })
})
