'use client';

import * as actions from '@/actions';
import { Resizable } from 're-resizable';
import Editor from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';
import { Button } from './ui/button';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = '') {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="rounded-lg overflow-hidden">
      <Resizable
        defaultSize={{
          width: '100%',
          height: '30vh',
        }}
        minHeight={'30vh'}
      >
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={snippet.code}
          options={{
            minimap: { enabled: false },
            fontSize: 20,
          }}
          onChange={handleEditorChange}
        />
      </Resizable>
      <form action={editSnippetAction}>
        <Button className="mt-3 w-full" variant="default" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
