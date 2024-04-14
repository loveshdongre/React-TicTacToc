import React from 'react'

interface MessageBoxProps {
    msg: string
    enabled: boolean
}

const MessageBox = (props: MessageBoxProps) => {
  return (
    <div>
        {props.enabled ? (
        <div className='msg-box'>
            {props.msg}
        </div>
        ) : ""}
    </div>
  )
}

export default MessageBox
