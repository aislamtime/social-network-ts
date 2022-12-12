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

export type StoreType = {
	_state: RootStateType;
	_onChange: () => void;
	render: (callBack: () => void) => void;
	getState: () => RootStateType;
	addPost: (newPostText: string) => void;
};

export const store: StoreType = {
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
	_onChange() {
		console.log('state changed');
	},
	render(callBack: () => void) {
		this._onChange = callBack;
	},
	getState() {
		return this._state;
	},
	addPost(newPostText: string) {
		const newPost = {
			id: 5,
			message: newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._onChange();
	},
};
