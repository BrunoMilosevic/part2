import React from 'react'

const Form = ({addName, newName, handleNumChange, handleNameChange, newNum }) => {
  return (
    <div>
       <form onSubmit={addName}>
       <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      
       </form>
    </div>
  )
}

export default Form
