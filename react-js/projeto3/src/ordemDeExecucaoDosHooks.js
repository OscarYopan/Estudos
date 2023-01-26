// Veja o Diagrama no link abaixo
//  https://github.com/donavon/hook-flow/blob/master/hook-flow.png

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const ReactHooks = () => {
  console.log('%cCHILD RENDER STARTING...', 'color: green')

  // Lazy Initializer #1
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString()
    console.log(
      '%cState Lazy initializer - (useState + InitialValue) = ' + state,
      'color: green'
    )
    return state
  })
  const renders = useRef(0)

  useEffect(() => {
    console.log('%cuseEffect (UPDATE state1) ' + state1, 'color: #dbc70f')
  }, [state1])

  useEffect(() => {
    console.log('%cuseEffect -> No Dependencies', 'color: #dbc70f')
    renders.current += 1

    return () => {
      console.log('%cuseEffect (Cleanup) -> No Dependencies', 'color: #dbc70f')
    }
  })