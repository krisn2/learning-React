import { Editor } from "@monaco-editor/react";
import { useRef} from "react";
const CodeEditor = () => {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor){
        editorRef.current = editor;
    }
    function showValue(){
        console.log(editorRef.current.getValue());
        alert(editorRef.current.getValue());
    }
  return (
    <div className="min-h-screen">
      <div className="">
        <Editor
          height="90vh"
          width="50vw"
          options={{
            fontSize: 16,
            padding: {
              top: 10,
              bottom: 10,
            },
            lineHeight: 1.5,
          }}
          theme="vs-dark"
          defaultLanguage="javascript"
          onChange={(value) => console.log(value)}
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
