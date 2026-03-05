"use client";

import { useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

type TextEditorProps = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  isSubmitting: boolean;
};

export default function TextEditor({
  content,
  setContent,
  isSubmitting,
}: TextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content || "<p></p>",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  if (!editor) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      editor
        .chain()
        .focus() // restore cursor position
        .setImage({ src: reader.result as string })
        .createParagraphNear() // allow typing after image
        .run();
    };

    reader.readAsDataURL(file);

    // reset input so same file can be selected again if needed
    e.target.value = "";
  };

  return (
    <div className="border text-gray-200 rounded-xl p-4 bg-secondary-background">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageUpload}
      />

      {/* Toolbar */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("bold") ? "bg-indigo-500" : "bg-gray-700 text-white"
          }`}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive("italic")
              ? "bg-indigo-500"
              : "bg-gray-700 text-white"
          }`}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Insert Image
        </button>
      </div>

      {/* Editor */}
      <div className="rounded-2xl overflow-hidden border border-white/10 mb-10">
        <EditorContent editor={editor} />
      </div>

      <div className="flex justify-end">
        <button className="px-8 py-3 rounded-full bg-primary cursor-pointer text-white font-semibold transition-colors">
          {isSubmitting ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
}
