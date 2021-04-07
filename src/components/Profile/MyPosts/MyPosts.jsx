import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

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

const AddNewPostForm =(props)=>{
    return    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText" placeholder ="Enter new post"/>

        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;