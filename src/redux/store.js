import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi Hi, how are you? are you?', likeCount: 12},
                {id: 2, message: 'It my first post',  likeCount: 5}

            ],
            newPostText: ['']

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi you pidor ebanu'},
                {id: 2, message: 'Where are you from?'},
                {id: 3, message: 'This is look?'},
                {id: 4, message: 'Do you find'},
                {id: 5, message: 'Do you find?'},
                {id: 6, message: 'Are you know?'}
            ],
            dialogs: [
                {id: 1, name: 'Dima', avatar: 'https://f1.upet.com/A_r2u6uZhnxA_x.jpg'},
                {id: 2, name: 'Sveta', avatar: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png'},
                {id: 3, name: 'Alex', avatar: 'https://drasler.ru/wp-content/uploads/2019/09/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-014.jpg'},
                {id: 4, name: 'Vasy', avatar: 'https://tipik.ru/wp-content/uploads/2019/08/%D0%A1%D0%BE%D0%B1%D0%B0%D1%87%D0%BA%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-015.jpg'},
                {id: 5, name: 'Pety', avatar: 'https://bipbap.ru/wp-content/uploads/2019/09/kartinki-sobak_11.jpg'},
                {id: 6, name: 'Vova', avatar: 'https://i.pinimg.com/originals/71/b7/28/71b728e04bbb061909ab4cdc00405729.jpg'}
            ],
            newMessage: ['']

        }
    },
    _callSubscriber()  {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}
window.store = store;
export default store;