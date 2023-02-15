import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { DialogType, MessageType } from '../../redux/reducers/dialogs-reduser'
import { dialogsSelector } from '../../redux/slices/dialogs/selectors'
import { changeMessageText, sendMessage } from '../../redux/slices/dialogs/slice'
import { useAppDispatch } from '../../redux/store'
import s from './Dialogs.module.css'

export const Dialogs: React.FC = () => {
  const dialogsPage = useSelector(dialogsSelector)
  const dispatch = useAppDispatch()

  const onChangeInputValue = (value: string) => dispatch(changeMessageText(value))
  const onSendMessage = () => {
    dispatch(sendMessage())
  }

  const dialogsElements = dialogsPage.dialogs.map((el) => <DialogsItem name={el.name} id={el.id} />)
  const messagesElements = dialogsPage.messages.map((el) => (
    <Message id={el.id} message={el.message} />
  ))
  return (
    <div className={s.dialogs}>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.addMessageBlock}>
          <input
            className={s.addMessageInput}
            placeholder={'Send your message..'}
            value={dialogsPage.newMessageText}
            onChange={(e) => onChangeInputValue(e.currentTarget.value)}
            onKeyDown={({ code }) => (code === 'Enter' ? onSendMessage() : '')}
          />
          <button className={s.addMessageButton} onClick={onSendMessage}>
            Send
          </button>
        </div>
      </div>
      <div className={s.dialogsItems}>{dialogsElements}</div>
    </div>
  )
}

function DialogsItem(props: DialogType) {
  const path = '/dialogs/' + props.id

  return (
    <div className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

function Message(props: MessageType) {
  return (
    <div className={s.message}>
      <img
        src='https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
        alt=''
        className={s.avatar}
      />
      <div className={s.messageBlock}>
        <div className={s.name}>Nikitos</div>
        <div className={s.text}>{props.message}</div>
        <div className={s.time}>12:30</div>
      </div>
    </div>
  )
}
