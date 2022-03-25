import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
import { EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router'
import { db } from '../firebase';
import { convertFromRaw, convertToRaw } from "draft-js"
import { useDocumentOnce } from 'react-firebase-hooks/firestore'

const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor), {
    ssr: false
})
function TextEditor() {

    const [session] = useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const router = useRouter()
    const { id } = router.query

    const [snapshot] = useDocumentOnce(db.collection("userDocs").doc(session.user.email).collection("docs")
        .doc(id))

    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            );
        }
    }, [snapshot])

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        db.collection('userDocs').doc(session.user.email).collection('docs')
            .doc(id).set({
                editorState: convertToRaw(editorState.getCurrentContent())
            }, { merge: true })
    }

    return (
        <div className="bg-white min-h-screen pb-16">
            <Editor toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 bg-white shadow-lg max-w-4xl mx-auto mb-12 border p-10"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}

export default TextEditor