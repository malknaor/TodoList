import React from 'react';
import './SignUpPage.css';

class SignUpForm extends React.Component {
    state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: []
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.validateFormInput()) {
            this.setState({ ...this.state, 'error': [] });
            this.props.firebase.createUserWithEmailAndPassword(this.state.email, this.state.passwordOne);
        }
    };

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    validateFormInput = () => {
        let isFormValid = true;
        const errors = [];

        if (!this.state.username) {
            console.log(this.state);
            errors.push('Username is empty');
            isFormValid = false;
        }

        if (this.state.username && !this.validateUserName()) {
            errors.push(`Username "${this.state.username}" is already taken, try different username.`);
            // this.setState({ ...this.state, 'error': [...this.state.error, `"${this.state.username}" is already taken, try different username.`] });
            isFormValid = false;
        }

        if (!this.state.email) {
            errors.push('Email must be filled');
            // this.setState({ ...this.state, 'error': [...this.state.error, 'email must be filled'] });
            isFormValid = false;
        }

        if (!this.state.passwordOne) {
            errors.push('Password is empty');
            // this.setState({ ...this.state, 'error': [...this.state.error, 'password is empty'] });
            isFormValid = false;
        }

        if (!(this.state.passwordOne === this.state.passwordTwo)) {
            errors.push("Passwords don't match");
            // this.setState({ ...this.state, 'error': [...this.state.error, "passwords don't match"] });
            isFormValid = false;
        }

        if (errors.length > 0) {
            this.setState({ ...this.state, 'error': errors });
        }

        return isFormValid;
    }

    validateUserName() {
        //TODO - check if the username exist

        return true;
    }

    renderError = () => {
        return (
            <ul className="form-error-list">
                {this.state.error.map((current, index) => {
                    return (
                        <li className="form-error-list-item" key={index}>
                            {current}
                        </li>
                    );
                })}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-page">
                <h1 className="form-title">{this.props.title}</h1> 
                <form className="general-form" onSubmit={this.onSubmit}>
                    <div className="form-field">
                        <label className="form-field-label">User Name: </label>
                        <input className="form-field-input" type="text" name="username" onChange={this.onChange} />
                    </div>

                    <div className="form-field">
                        <label className="form-field-label">Email: </label>
                        <input className="form-field-input" type="email" name="email" onChange={this.onChange} />
                    </div>
                    
                    <div className="form-field">
                        <label className="form-field-label">Password: </label>
                        <input className="form-field-input" type="text" name="passwordOne" onChange={this.onChange} />
                        <input className="form-field-input" type="text" name="passwordTwo" onChange={this.onChange} />
                    </div>

                    <div className="form-field">
                        {this.renderError()}
                        <input className="form-btn-submit" type="submit" value="Submit" />    
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;