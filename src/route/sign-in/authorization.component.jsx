import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authorization.styles.scss'

const Authorization = () => {
	return (
		<div className="authorization-container">
			<SignInForm />
			<SignUpForm />
		</div>
	)
}

export default Authorization