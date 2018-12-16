import { val, drv } from 'rval'
import { useVal } from 'rval/react'
import * as React from 'react'
import { render, waitForElement } from 'react-testing-library'

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

test('useVal - 1 ', async () => {
  const counter = val(0)
  const Comp = () => {
    const c = useVal(counter)
    return <h1>{c}</h1>
  }

  const re = render(<Comp />)
  expect(re.container.innerHTML).toEqual('<h1>0</h1>')

  counter(counter() + 1)
  await waitForElement(() => re.container.innerHTML === '<h1>1</h1>')

  counter(counter() + 1)
  await waitForElement(() => re.container.innerHTML === '<h1>2</h1>')
})

test('useVal - mimimum computations - 1', async () => {
  const counter = val(0)
  let called = 0
  const doubler = drv(() => {
    called++
    return counter() * 2
  })

  const Comp = () => {
    const c = useVal(doubler)
    return <h1>{c}</h1>
  }

  const re = render(<Comp />)
  expect(re.container.innerHTML).toEqual('<h1>0</h1>')
  expect(called).toBe(1)

  counter(counter() + 1)
  await waitForElement(() => re.container.innerHTML === '<h1>2</h1>')
  expect(called).toBe(2)

  counter(counter() + 1)
  await waitForElement(() => re.container.innerHTML === '<h1>4</h1>')
  expect(called).toBe(3)
})

test('useVal - mimimum computations - 1', async () => {
  const counter = val(0)
  let called = 0
  const doubler = drv(() => {
    called++
    return counter() * 2
  })

  const Comp = () => {
    const c = useVal(doubler)
    return <h1>{c}</h1>
  }

  const re = render(<Comp />)
  expect(re.container.innerHTML).toEqual('<h1>0</h1>')

  await delay(100)
  expect(called).toBe(1) // and not 2!
})
