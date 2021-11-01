import { waitFor } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { getStudents } from 'scripts/API'
import { ApiStudent } from 'types/Student'

const mockStudentFetch = async (data: { students: ApiStudent[] } | undefined) =>
  await waitFor(mocked(getStudents).mockImplementation(() => Promise.resolve(data)))

export default mockStudentFetch
