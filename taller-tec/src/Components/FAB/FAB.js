import React from 'react'

const FAB = () => {
  return (
    <div className='FAB' style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px'
    }}>
        <button type="button" className="btn btn-primary">Add</button>
    </div>
  )
}

export default FAB