import React from 'react';

import '../SignUp/SignUpPage.css';

class SignInForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: []
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.validateFormInput()) {
            this.setState({ ...this.state, 'error': [] });
            this.props.firebase.signInWithEmailAndPassword(this.state.email, this.state.password);
        }
    };

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    validateFormInput = () => {
        let isFormValid = true;
        const errors = [];

        if (!this.state.email) {
            errors.push('Email must be filled');
            // this.setState({ ...this.state, 'error': [...this.state.error, 'email must be filled'] });
            isFormValid = false;
        }

        if (!this.state.password) {
            errors.push('Password is empty');
            // this.setState({ ...this.state, 'error': [...this.state.error, 'password is empty'] });
            isFormValid = false;
        }

        if (errors.length > 0) {
            this.setState({ ...this.state, 'error': errors });
        }

        return isFormValid;
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
            <div className="signin-page">
                <h1 className="form-title">{this.props.title}</h1> 
                <form className="general-form" onSubmit={this.onSubmit}>
                    <div className="form-field">
                        <label className="form-field-label">Email: </label>
                        <input className="form-field-input" type="email" name="email" onChange={this.onChange} />
                    </div>
                    
                    <div className="form-field">
                        <label className="form-field-label">Password: </label>
                        <input className="form-field-input" type="text" name="password" onChange={this.onChange} />
                    </div>

                    <div className="form-field">
                        {this.renderError()}
                        <input className="form-btn-submit" type="submit" value="Log In" />    
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;