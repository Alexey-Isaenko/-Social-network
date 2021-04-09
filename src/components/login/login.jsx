import React from "react"
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {Elements} from "../common/FormsControls/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControl.module.css"

const Input = Elements("input");

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={required}
                   placeholder={"Email"}
                   name={"email"}
                   component={Input}/>
        </div>
        <div>
            <Field validate={required} placeholder={"Password"} name={"password"} type={"password"} component={Input}/>

        </div>
        <div>
            <Field type={"Checkbox"} name={"rememberMe"} component={Input}/>remember me
        </div>
        {props.error && <div className={style.formsummoryerror}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);