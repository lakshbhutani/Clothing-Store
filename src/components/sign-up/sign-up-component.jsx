import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange = (event) => {
        const { name, value } =  event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('Passwords don"t match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">
                    I do not have a account
                </h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        required
                        label='Display Name'
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        label='Confirm Password'
                    />
                    <CustomButton type="submit">
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;