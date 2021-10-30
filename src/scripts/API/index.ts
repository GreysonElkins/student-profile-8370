import { toast } from 'react-toastify'
import type { ApiStudent } from 'types/Student'

export const getStudents = async (): Promise<{students: ApiStudent[]} | undefined> => {
  try {
    const response = await fetch('https://api.hatchways.io/assessment/students')
    const reader = response.body?.getReader()
    const stream = await new ReadableStream({
      start(controller) {
        function push () {
          reader?.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return
            } 
            controller.enqueue(value)
            push()
          })
        }
        push()
      }
    })
    const text = await new Response(stream, { headers: { "Content-Type": "text/html" } }).text()
    return JSON.parse(text)
} catch (error) {
    toast.success('Something went wrong getting student profiles, please try again.', {
      toastId: 'getStudents_error',
    })
    console.error(error)
  }
}
