import React from 'react'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { useSession, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import Login from '../../components/Login'
import { db } from '../../firebase'
import TextEditor from '../../components/TextEditor'
// import { useDocumentOnce } from 'react-firebase-hooks/firestore'



function Doc() {

    const [session] = useSession()


    const router = useRouter()
    const { id } = router.query



    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection("userDocs")
        .doc(session.user.email)
        .collection('docs').doc(id))

    if (!loadingSnapshot && !snapshot?.data()?.filename) {
        router.replace("/")
    }


    return (
        <div>
            <header className="flex justify-between items-center p-1 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">

                    <Icon name="article" size="3xl" color='blue' />

                </span>
                <div className="flex-grow px-2">
                    <h2 className="text-gray-700 font-bold text-lg">{snapshot?.data()?.filename}</h2>
                    <div className="flex items-center text-sm space-x-1 ml-1 h-8 text-gray">
                        <p className="options">File</p>
                        <p className="options">Edit</p>
                        <p className="options">View</p>
                        <p className="options">Insert</p>
                        <p className="options">Format</p>
                        <p className="options">Tools</p>
                    </div>
                </div>
                <Button ripple="light"
                    size="regular"
                    buttonType="filled"
                    iconOnly={false}
                    block={false}>
                    <Icon name="people" size="md"
                        className="hidden md:inline-flex h-10" />SHARE
                </Button>
                <img src={session.user.image} className="cursor-pointer rounded-full h-10 w-10 ml-2" />
            </header>

            <TextEditor />
        </div>
    )
}

export default Doc

export async function getServerSideProps(context) {
    const session = await getSession(context)

    return {
        props: {
            session
        }
    }
}