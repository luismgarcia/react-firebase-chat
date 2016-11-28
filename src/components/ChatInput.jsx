import React from 'react'

function MessageInput ({ onSendMessage }) {
  return (
    <form className='page-footer blue lighten-4' onSubmit={onSendMessage}>
      <div className='container row'>
        <div className='col s9'>
          <input name='text' type='text' />
        </div>
        <div className='col s3'>
          <button className='btn waves-effect waves-light blue darken-1' type='submit'>
            Enviar
            <i className='material-icons right'>send</i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default MessageInput