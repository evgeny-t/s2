import React from 'react'

export default (props) => (
  <div style={{ textAlign: 'center' }}>
    <code>{JSON.stringify(props, null, 2)}</code>
    <h1>Welcome to React-Static</h1>
  </div>
)
