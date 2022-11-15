const dispatchConainer = {
  ADD_POST: 'ADD-POST',
  LOOK_CHANGE: 'LOOK-CHANGE',
  ADD_MESSAGE: 'ADD-MESSAGE',
  LOOK_CHANGE_MESSAGE: 'LOOK-CHANGE-MESSAGE'
}

let store = {
  _state: {
    postItem: [
      { id: 1, text: "Hello" },
      { id: 2, text: "My Name is Daniel" },
      { id: 3, text: "Its my first page" },
      {id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus ultricies ex, vitae rutrum elit volutpat vitae. Fusce molestie id nunc at semper. Curabitur consequat arcu nisl, nec fringilla est commodo eget.",},
    ],
    newPostText: '',
    newMessageText: '',
    dialogItem: [
      { id: 1, name: "Peter" },
      { id: 2, name: "Daniil" },
      { id: 3, name: "Dasha" },
      { id: 4, name: "Oleg" },
      { id: 5, name: "Vova" },
      { id: 6, name: "Vlad" },
      { id: 7, name: "xSnakkes" },
    ],
    dialogMessage: [
      { id: 1, message: "Hello, my name is Daniel" },
      { id: 2, message: "I love react" },
      { id: 3, message: "Hey" },
      { id: 4, message: "How do u do" },
    ],
    
  },
  rerenderEntireTree (){
    console.log("state changed");
  },
  subscribe (observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action){
    if (action.type === dispatchConainer.ADD_POST){
      let newPost = {
        id: this._state.postItem.length,
        text: this._state.newPostText,
      };
      this._state.postItem.push(newPost);
      this._state.newPostText = '';
      this.rerenderEntireTree(this._state);
    }
    else if(action.type === dispatchConainer.LOOK_CHANGE){
      let updateNewPostText = (newText) =>{
        this._state.newPostText = action.newText;
        this.rerenderEntireTree(this._state)
      }
      updateNewPostText()
    }
    else if (action.type === dispatchConainer.ADD_MESSAGE){
      let newMessage = {
        id: this._state.dialogMessage.length + 1,
        message: this._state.newMessageText,
      };
      this._state.dialogMessage.push(newMessage);
      this._state.newMessageText = '';
      this.rerenderEntireTree(this._state);
      console.log(this._state.dialogMessage)
    }
    else if(action.type === dispatchConainer.LOOK_CHANGE_MESSAGE){
      let updateMessageText = (newMessage) =>{
        this._state.newMessageText = action.newMessage;
        this.rerenderEntireTree(this._state)
      }
      
      updateMessageText()
    }
  }
}

export const addPostActionCreator = () =>{
  return {
      type: dispatchConainer.ADD_POST
  }
}

export const lookChangeActionCreator = (text) =>{
  return {
      type: dispatchConainer.LOOK_CHANGE,
      newText: text,
  }
}

export const addMessageActionCreator = () =>{
  return {
      type: dispatchConainer.ADD_MESSAGE
  }
  
}

export const changeMessageActionCreator = (text) =>{
  return {
      type: dispatchConainer.LOOK_CHANGE_MESSAGE,
      newMessage: text,
  }
}

export default store;

window.store = store;
