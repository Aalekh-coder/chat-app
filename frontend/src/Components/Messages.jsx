import React from 'react'
import Message from './Message'
import UseGetMessage from '../hooks/UseGetMessage'
import { useSelector } from 'react-redux';

const Messages = () => {
  UseGetMessage();

  const { messages } = useSelector(store => store.message);

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {
        messages?.map((message) => {
          return (
            <Message key={message._id} message={message} />

          )
        })
      }
    </div>
  )
}

export default Messages