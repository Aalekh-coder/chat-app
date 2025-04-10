import React from 'react'
import Message from './Message'
import UseGetMessage from '../hooks/UseGetMessage'
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
  UseGetMessage();
  useGetRealTimeMessage()

  const { messages } = useSelector(store => store.message);

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {
        messages &&  messages?.map((message) => {
          return (
            <Message key={message._id} message={message} />

          )
        })
      }
    </div>
  )
}

export default Messages