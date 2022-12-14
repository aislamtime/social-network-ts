import { AllActionsType, ProfilePageType } from "./store";

const ADD_POST = 'ADD-POST';

const profileReduser = (state: ProfilePageType, action: AllActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            return state;
        default: return state;
    }
}

export type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const;
};

export default profileReduser;