import React from 'react'

function Container({children}) {
  return (
    <div>
      <div>Container component is successfully</div>
      {children}
    </div>
  )
}

export default Container
