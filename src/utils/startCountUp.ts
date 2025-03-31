import { CountUp } from 'countup.js'

function startCountUp(element: HTMLElement, content: string, options: any) {
  if (element) {
    const countUp = new CountUp(element, parseFloat(content), options)
    countUp.start()
  }
}

export default startCountUp
