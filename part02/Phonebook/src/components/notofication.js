import React from 'react'

const Notification = ({ msg, err }) => {
  if (!msg) {
    return null
  }

  const msgStyle = {
    background: 'lightgrey',
    fontSize: '20px',
    borderColor: err ? 'red' : 'green',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '12px 15px',
    marginBottom: '10px'
  }

  return (
    <div style={msgStyle} >
      {msg}
    </div>
  )
}

export default Notification