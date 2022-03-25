import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/client'
import Button from '@material-tailwind/react/Button'
import Imag from '../assets/doc.png'

function Login() {
    return (
        <div className="flex items-center flex-col">
            <Image
                src={Imag}
                height="300"
                width="600"
                objectFit='contain'
            />
            <Button
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}

export default Login