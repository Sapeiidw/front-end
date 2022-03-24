import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Input } from '../../components'
import Form from '../../components/Forms/Form'
import style from '../../styles/Auth.module.css'

type Props = {}

const ForgotPassword: React.FC<Props> = (props) => {
    return (
        <>
            <div className={style.forgotPassword}>
                <div className={style.forgotPasswordWrapper}>
                    <div className={style.img}>
                        <Image src="/images/Currency Crush Security.svg" layout='fill' />
                    </div>
                    <div className="text">
                        <h1 className='title'>Forgot your password?</h1>
                        <p className='subtitle'>No worries, we’ll send you reset instruction</p>
                    </div>
                    <form action="" className={style.forgotPasswordForm}>
                        <Input type='text' name='email' placeholder='Email' />
                        <Button type="btn-primary" text="Send me an email" />
                    </form>
                    <Link href="/auth/signin"><a>Back to Login</a></Link>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword