import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

function DocumentRow({ id, filename, date }) {

    const router = useRouter()


    return (
        <div onClick={() => router.push(`/doc/${id}`)} className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
            <Icon name="article" size="3xl" color='blue' />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
            <Button
                color="black"
                buttonType="link"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                size="regular"
            >
                <Icon name="more_vert" size="3xl" />
            </Button>

        </div>
    )
}

export default DocumentRow