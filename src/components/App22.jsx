import React from 'react'

export default function App22() {
    const NAME=import.meta.env.REACT_APP_NAME
    const COLOR=import.meta.env.REACT_APP_COLOR
  return (
    <div>
        <h3>This is App22.</h3>
         Hello {NAME}
    </div>
  )
}
