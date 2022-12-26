import { connect } from 'react-redux'
import { changeMessageTextAC, sendMessageAC } from '../../redux/reducers/dialogs-reduser'
import { StateType } from '../../redux/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: StateType) => ({ dialogsPage: state.dialogsPage })
const mapDispatchToProps = (dispatch: any) => ({
	changeInputValue: (newValue: string) => dispatch(changeMessageTextAC(newValue)),
	sendMessage: () => dispatch(sendMessageAC()),
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
