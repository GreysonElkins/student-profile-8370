import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import SearchStudents from '.'
import { response } from 'components/Student/test.data'
import mockStudentFetch from 'scripts/test/mockStudentFetch'
import userEvent from '@testing-library/user-event'

jest.mock('scripts/API')

describe('SearchStudents', () => {
  test('should notify the user if no students are fetched', async () => {
    await act(async () => {
      await mockStudentFetch(undefined)
      render(<SearchStudents />)
    })
    const notification = document.querySelector('.noStudents')
    expect(notification).toBeInTheDocument()
  })

  beforeEach(async () => {
   await act(async () => {
     await mockStudentFetch(response)
     render(<SearchStudents />)
   })   
  })

  test('should render StudentProfiles when students exist', () => {
    const students = document.querySelector('.StudentProfiles')
    expect(students).toBeInTheDocument()
  })


  describe('Search results', () => {
    let searchBar = null as null | HTMLElement

    beforeEach(() => {
      searchBar = screen.getByPlaceholderText('Search by student and/or tags')  
    })

    const search = (query: string) => {
      act(() => {
        if (searchBar)
        userEvent.type(searchBar, query)
      })
    }

    test('should allow a user to search for students by city', () => {
      search("Denver")
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        // need to review how to wait for setState to occur
        // I thought `act()` was supposed to cover this
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should allow a user to search for students by company', () => {
      search("Feral Suits")
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should allow a user to search for students by email', () => {
      search("greysonelkins@gmail.com")
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should allow a user to search for students by name', () => {
      search('Greyson Elkins')
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })
    
    test('should allow a user to search for students by skill', () => {
      search('Development')
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should allow a user to search for students by tags', () => {
      search('Snack')
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(2)
      }, 500)
    })

    test('should allow a user to search for students with multiple properties (tags, email, etc.)', () => {
      search('Snack Greyson')
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should be insensitive to case', () => {
      search('deVelopment')
      const result = document.querySelectorAll('.StudentProfile')
      setTimeout(() => {
        expect(result).toHaveLength(1)
      }, 500)
    })

    test('should show a message and no results if no students are found', () => {
      // this could be better as a unit test on SearchEngine
      search('Just some total random nonsense')
      setTimeout(() => {
        const result = document.querySelectorAll('.StudentProfile')
        const message = screen.getByText('No results were found')
        expect(result).toHaveLength(0)
        expect(message).toBeInTheDocument()
      }, 500)
    })
  })
})
