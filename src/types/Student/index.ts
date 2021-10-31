import { splitQuery } from 'scripts/search'

export type ApiStudent = {
  city?: string
  company?: string
  email?: string
  firstName?: string
  grades?: string[]
  id: string
  lastName?: string
  pic?: string
  skill?: string
  tags?: string[] // thinking ahead
}

const parseGrades = (id: string, grades?: string[]) =>
  grades?.reduce((nums, grade, i) => {
    const num = Number(grade)
    isNaN(num)
      ? console.warn(`Student ${id}'s grade at index ${i} was not a number'`)
      : nums.push(num)
    return nums
  }, [] as number[]) || []

  const getAverage = (grades: number[]) => {
    if (grades.length === 0) return "This student hasn't been graded"
    const avg =
      grades.reduce((avg, grade) => {
        avg += grade
        return avg
      }, 0) / grades.length
    return avg
  }

class Student {
  average: number | "This student hasn't been graded"
  city?: string
  company?: string
  email?: string
  firstName?: string
  grades: number[]
  id: string
  lastName?: string
  pic?: string
  skill?: string
  tags: string[]
  constructor({ city, company, email, firstName, grades, id, lastName, pic, skill, tags }: ApiStudent) {
    this.city = city
    this.company = company
    this.email = email
    this.firstName = firstName
    this.grades = parseGrades(id, grades)
    this.average = getAverage(this.grades)
    this.id = id
    this.lastName = lastName
    this.pic = pic
    this.skill = skill
    this.tags = tags || []
  }

  hasMatchingProps = (query: string) => {
    const values = Object.values(this).map(value => `${value}`.toLowerCase())
    const queries = splitQuery(query)
    return queries.every(query => values.some(value => value.includes(query)))
  }
}

export default Student
