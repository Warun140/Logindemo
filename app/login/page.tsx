'use client';
import { useForm } from 'react-hook-form';
import style from './login.module.css'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
	email: z.email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginPage() {
	const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(loginSchema) });
	const onSubmit = (data:LoginForm)=>{
		console.log(data);
	}
  return (
    <div className={style.container}>
        <div className={style.card}>
            <div className={style.title}>Login to your account</div>
            <div className={style.subtitle}>Enter your email below to login to your account</div>
            <form className={style.form} onSubmit = {handleSubmit(onSubmit)}>
                <div className={style.fieldGroup}>
                    <label htmlFor="Email" className={style.label}>Email</label>
                    <input placeholder="m@example.com" className={style.input} {...register("email",{required:'true'})}/>
										{errors.email && <p className={style.errorMsg}>{errors.email.message}</p>}
                </div>
                <div className={style.fieldGroup}>
                    <div className={style.passwordRow}>
                        <label htmlFor="password" className={style.label}>Password:</label>
                        <button type="button" className={style.linkBtn}>Forget your password?</button>
                    </div>
                    <input className={style.input} {...register("password",{required:'true', min : 6 })}/>
										{errors.password && <p className={style.errorMsg}>{errors.password.message}</p>}
                </div>
                <button type="submit" className={style.primaryButton}>Login</button>
                <button type="button" className={style.outlineButton}>Login with Google</button>
                <div className={style.footer}>
                    <div>Don't have an account?</div>
                    <button type="button" className={style.signupBtn}>Sign up</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;