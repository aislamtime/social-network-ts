import { Dispatch } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { changeMessageTextAC, DialogsPageType, sendMessageAC } from '../../redux/reducers/dialogs-reduser'
import { RootStateType } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

type MapStatePropsType = {
	dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
	changeInputValue: (newValue: string) => void
	sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => ({ dialogsPage: state.dialogsPage })
const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeInputValue: (newValue: string) => dispatch(changeMessageTextAC(newValue)),
	sendMessage: () => dispatch(sendMessageAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
