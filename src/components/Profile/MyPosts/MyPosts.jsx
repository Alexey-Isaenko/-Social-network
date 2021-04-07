import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Elements} from "../../common/FormsControls/FormsControl";
const maxLength10 = maxLengthCreator(10);
const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);



    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
const Textarea = Elements("textarea");

const AddNewPostForm =(props)=>{
    return    <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength10]} component={Textarea} name="newPostText" placeholder ="Enter new post"/>

        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;