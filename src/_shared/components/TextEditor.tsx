/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor";
import { TextEditorProps } from "./@types";
import { css, styled } from "styled-components";

export default function TextEditor(props: TextEditorProps) {
  const { data, onChange, onFocus, placeholder, big } = props;
  const [editor, setEditor] = useState<DecoupledEditor>();

  useEffect(() => {
    editor && editor.editing.view.focus();
  }, [editor]);

  return (
    <CKEditorWrapper $big={big}>
      <CKEditor
        onReady={(_editor) => {
          // console.log("Editor is ready to use!", editor);

          // Insert the toolbar before the editable area.
          if (!editor)
            _editor?.ui
              ?.getEditableElement()
              ?.parentElement?.insertBefore(
                _editor?.ui?.view?.toolbar?.element as Node,
                _editor?.ui?.getEditableElement() as Node
              );

          setEditor(_editor);
        }}
        onError={(error, { willEditorRestart }) => {
          // If the editor is restarted, the toolbar element will be created once again.
          // The `onReady` callback will be called again and the new toolbar will be added.
          // This is why you need to remove the older toolbar.
          if (willEditorRestart) {
            editor && editor.ui.view.toolbar.element?.remove();
          }
          console.log(error);
        }}
        onChange={(_, editor) => onChange && onChange(editor.getData())}
        onFocus={() => onFocus && onFocus()}
        editor={DecoupledEditor}
        data={data}
        config={{ placeholder }}
      />
    </CKEditorWrapper>
  );
}

const CKEditorWrapper = styled.div<{ $big?: boolean }>`
  ${({ $big }) =>
    $big &&
    css`
      -webkit-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
      .ck.ck-editor__main > .ck-editor__editable,
      .ck.ck-editor__editable_inline[dir="ltr"] {
        height: 600px;
      }
      border: 1px dotted ${({ theme }) => theme.colors.border.primary};
      border-radius: 16px;
    `}
`;
