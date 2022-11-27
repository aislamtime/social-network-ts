let store = {
    //_subscribe: function(observer) {
        
    //},
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'I am from Mars', likesCount: 13 },
				{ id: 2, message: 'My name is Alesha', likesCount: 18 },
				{ id: 3, message: 'Hi, how are you?', likesCount: 16 },
				{ id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
			],
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Andrey' },
				{ id: 2, name: 'Nikita' },
				{ id: 3, name: 'Sasha' },
				{ id: 4, name: 'Nika' },
				{ id: 5, name: 'Tima' },
				{ id: 6, name: 'Nastya' },
			],
			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Yo! Wats up? ' },
				{ id: 4, message: 'Yo' },
			],
		},
	},
	getState: function () {
		return this._state;
	},
	addPost: function (newMessage: string) {
		const newPost = {
			id: 5,
			message: newMessage,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		rerenderEntireTree();
	},
};

let rerenderEntireTree = () => {};

export type MessageType = {
	id: number;
	message: string;
};
export type DialogType = {
	id: number;
	name: string;
};
export type PostType = {
	id: number;
	message: string;
	likesCount: number;
};
export type DialogsPageType = {
	dialogs: Array<DialogType>;
	messages: Array<MessageType>;
};
export type ProfilePageType = {
	posts: Array<PostType>;
};
export type RootStateType = {
	profilePage: ProfilePageType;
	dialogsPage: DialogsPageType;
};

export const state: RootStateType = {
	profilePage: {
		posts: [
			{ id: 1, message: 'I am from Mars', likesCount: 13 },
			{ id: 2, message: 'My name is Alesha', likesCount: 18 },
			{ id: 3, message: 'Hi, how are you?', likesCount: 16 },
			{ id: 4, message: "Hey, it's my first app! ", likesCount: 32 },
		],
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Andrey' },
			{ id: 2, name: 'Nikita' },
			{ id: 3, name: 'Sasha' },
			{ id: 4, name: 'Nika' },
			{ id: 5, name: 'Tima' },
			{ id: 6, name: 'Nastya' },
		],
		messages: [
			{ id: 1, message: 'Hi!' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'Yo! Wats up? ' },
			{ id: 4, message: 'Yo' },
		],
	},
};

export const addPost = (newMessage: string) => {
	const newPost = {
		id: 5,
		message: newMessage,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree();
};

export const subscribe = (observer: any) => {
	rerenderEntireTree = observer;
};
