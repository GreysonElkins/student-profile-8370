import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import StudentProfile from '.'
import { response } from 'components/Student/test.data'
import Student from 'types/Student'

describe('StudentProfile', () => {
  const student = new Student(response.students[0])

  beforeEach(() => {
    act(() => { render(<StudentProfile student={student} />) })
  })

  // each of these tests could be expanded for when a property was not provided

  it("should display the student's name if the student has one", () => {
    const name = screen.getByText('Greyson Elkins')
    expect(name).toBeInTheDocument()
  })

  it("should display the student's profile picture if the student has one", () => {
    const picture = screen.getByAltText("Greyson's picture")
    expect(picture).toBeInTheDocument()
  })

  it("should display the student's email if the student has one", () => {
    const email = screen.getByText('Email: greysonelkins@gmail.com')
    expect(email).toBeInTheDocument()
  })

  it("should display the student's company if the student has one", () => {
    const company = screen.getByText('Company: Feral Suits')
    expect(company).toBeInTheDocument()
  })

  it("should display the student's skill if the student has one", () => {
    const skill = screen.getByText('Skill: Development')
    expect(skill).toBeInTheDocument()
  })

  it("should display the student's average if the student has one", () => {
    const average = screen.getByText('Average: 102%')
    expect(average).toBeInTheDocument()
  })

  // it should provide an extension button if the user has grades

  it("should toggle visibility of the users grades when the extension button is clicked", () => {
    const button = screen.getByRole('button')
    // this button should be more specific than the role 
    const firstCheck = screen.queryByText('Test 1: 100%')
    expect(firstCheck).not.toBeInTheDocument()
    act(() => {
        fireEvent.click(button)
    })
    const secondCheck = screen.queryByText('Test 1: 100%')
    expect(secondCheck).toBeInTheDocument()
    act(() => {
        fireEvent.click(button)
    })
    const thirdCheck = screen.queryByText('Test 1: 100%')
    expect(thirdCheck).not.toBeInTheDocument()
    // expect(average).toBeInTheDocument()
  })

  it("should allow a user to add tags and display them", () => {
    const firstCheck = screen.queryByText("Teacher's Pet")
    expect(firstCheck).not.toBeInTheDocument()
    const tagInput = screen.getByPlaceholderText('Add a tag')
    // this input should be more specific than the class
    expect(tagInput).toBeInTheDocument()
    if (tagInput) {
      act(() => {
        userEvent.type(tagInput, "Teacher's Pet")
        fireEvent.keyDown(tagInput, { key: 'Enter' })
      })
      setTimeout(() => {
        // need to review how to wait for setState to occur
        // I thought `act()` was supposed to cover this
        const secondCheck = screen.queryByText("Teacher's Pet")
        expect(secondCheck).toBeInTheDocument()
      }, 100)
    }
  })
})