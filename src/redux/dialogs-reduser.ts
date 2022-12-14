import { AllActionsType, DialogsPageType } from "./store";


const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';
const SEDN_MESSAGE = 'SEND-MESSAGE';

const dialogsReduser = (state: DialogsPageType, action: AllActionsType): DialogsPageType => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case SEDN_MESSAGE: 
            const message = {id: 5, message: state.newMessageText};
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        default: return state;
    }
}

export type ChangeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export type SendMessageACType = ReturnType<typeof sendMessageAC>

export const changeMessageTextAC = (newMessageText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const;
};
export const sendMessageAC = () => {
    return {
        type: SEDN_MESSAGE,
    } as const;
};

export default dialogsReduser