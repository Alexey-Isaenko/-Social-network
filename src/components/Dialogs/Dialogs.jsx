import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Elements} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100)

const Textarea = Elements("textarea");

const AddMessageForm = (props) => {
    return    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[required, maxLength100]} name="newMessageBody" placeholder ="Enter your message"/>
           </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;