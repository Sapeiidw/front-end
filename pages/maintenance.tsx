import Image from 'next/image'
import React from 'react'
import { Button } from '../components'
import style from '../styles/CustomPage.module.css'

const Custom404 = () => {
    return (
        <>
            <div className={style.page}>
                <div className={style.wraper}>
                    <div className={style.img}>
                        <Image src="/images/Humaaans 1 Character.svg" layout="fill" />
                    </div>
                    <div>
                        <div className={style.title}>Under Maintence</div>
                        <div className={style.subtitle}>The pages you currently want is undermaintence and we will back soon</div>
                    </div>
                    <Button type="btn-primary" text='Back' />
                </div>
            </div>
        </>
    )
}

export default Custom404