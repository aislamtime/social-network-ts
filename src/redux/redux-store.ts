import {configureStore} from "@reduxjs/toolkit"
import dialogsReduser from "./reducers/dialogs-reduser";
import profileReduser from "./reducers/profile-reduser";
import sidebarReduser from "./reducers/sidebar-reduser";

export const store = configureStore({
    reducer: {
        profilePage: profileReduser,
        dialogsPage: dialogsReduser,
        sidebar: sidebarReduser
    }
})