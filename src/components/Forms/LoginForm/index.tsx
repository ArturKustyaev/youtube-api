import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo.svg'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Label from '../../UI/Label'
import './styles.sass'

const LoginForm: FC = () => {
	let navigate = useNavigate()
	const [userAuthData, setuserAuthData] = useState<any>({ login: '', password: '' })

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setuserAuthData({ ...userAuthData, [e.target.name]: e.target.value })
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate('/main')
	}

	return (
		<div className='form-wrapper'>
			<form className='login-form' onSubmit={submitHandler}>
				<div className='login-form__inner'>
					<img className='login-form__logo' src={logo} alt='logo' />
					<h2 className='login-form__title'>Вход</h2>
					<div className='login-form__inputs-group'>
						<div className='login-form__input'>
							<Label>Логин</Label>
							<Input type='text' name='login' value={userAuthData.login} onChange={changeHandler} />
						</div>
						<div className='login-form__input'>
							<Label>Пароль</Label>
							<Input
								type='password'
								name='password'
								value={userAuthData.password}
								onChange={changeHandler}
							/>
						</div>
					</div>
					<Button type='submit'>Вход</Button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
