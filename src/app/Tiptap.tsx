'use client'

import UniqueID from '@tiptap-pro/extension-unique-id'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'outline-none h-full',
      },
    },
    extensions: [
      StarterKit,
      UniqueID.configure({
        types: ['paragraph'],
      }),
    ],
    content: '<p>a</p><p></p><p>b</p>',
  })

  return (
    <EditorContent
      id="tiptap-content"
      className="h-full"
      suppressContentEditableWarning
      editor={editor}
    />
  )
}

export default Tiptap
