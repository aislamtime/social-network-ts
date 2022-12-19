import { AllActionsType, ProfilePageType } from "../store";

const ADD_POST = 'ADD-POST';

const initialState = {
    posts: [
        { id: 1, message: 'I am from Mars', likesCount: 13 },
        { id: 2, message: 'My name is Alesha', likesCount: 18 },
        { id: 3, message: 'Hi, how are you?', likesCount: 16 },
        { id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
    ],
};

const profileReduser = (state: ProfilePageType = initialState, action: AllActionsType) => {
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