import { useState } from "react"

import './sign-up-form-styles.scss'

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils"

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('passwords do not match')
			return
		} 

		try {
			const {user} = await createAuthUserWithEmailAndPassword(email, password)
			await createUserDocumentFromAuth(user, {displayName})

			resetFormFields()
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Unable to create an account with this email, there is already a user with such email adress')
			} 
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target

		setFormFields( { ...formFields, [name]: value } )
	}

	return (
		<div className="sign-up-container">
			<h2>I do not have an account</h2>
			<span>Create profile</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Name' type='text' required onChange={handleChange} name="displayName" value={displayName} />
				<FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email} />
				<FormInput label='Password'  type='password' required onChange={handleChange} name="password" value={password} />
				<FormInput label='Confirm password'  type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
				<Button type="submit">Submit</Button>
			</form>
		</div>
	)
}

export default SignUpForm