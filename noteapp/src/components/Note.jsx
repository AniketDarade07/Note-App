import React from 'react'

const Note = ({id, text, editHandler, deleteHandler,}) => {
  return (
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className='note_footer' >
        <div style={{justifyContent : "flex-start"}}>
            <span className='timeline' style={{justifyContent : "flex-start"}}>{new Date().toDateString()}</span>
        </div>

        <div style={{justifyContent : "flex-end"}}>
            <button className='note_save' onClick={() => deleteHandler(id)}>Delete</button> &nbsp;
            <button className='note_save' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
        </div>
    </div>
  )
}

export default Note