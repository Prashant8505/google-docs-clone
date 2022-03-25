import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { getSession, useSession } from 'next-auth/client'
import { signOut } from 'next-auth/client'

function Header() {

    const [session] = useSession()

    return (
        <div className=' sticky top-0 w-full p-5 flex items-center shadow-md '>
            <div className="h-10 w-20 mx-10">
                <Button
                    color="blue"
                    buttonType="link"
                    rounded={true}
                    iconOnly={true}
                    ripple="dark"

                >
                    <Icon name="menu" size="3xl" />
                </Button>
            </div>
            <Icon name="description" size="3xl" className="b-10 blue-500 m-5" />
            <h1 className='text-2xl text-gray-700'>Docs</h1>

            {/*-------------------------------------- Search bar ------------------------------------- */}
            <div className=' mx-5 flex flex-grow sm:mx-10 md:mx-20 items-center px-5 py-2 bg-gray-100 rounded-lg
                            focus-within:text-gray-600 focus-within:shadow-md '>
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="search"
                    className='px-5 flex-grow text-base bg-transparent outline-none' />
            </div>

            {/* --------------------------------------Apps Icon ---------------------------------------- */}
            <Button
                color="blue"
                buttonType="link"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                size="regular"
            >
                <Icon name="apps" size="3xl" />
            </Button>
            {/* -------------------------------------------Profile icon---------------------------------- */}
            <img
                onClick={signOut}
                loading='lazy'
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src={session?.user?.image}
                alt=''
            />

        </div>
    )
}

export default Header