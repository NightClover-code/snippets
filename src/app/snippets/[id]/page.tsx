import * as actions from '@/actions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';
import SnippetDeleteForm from '@/components/snippet-delete-form';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //just to show the loading spinner
  await new Promise(r => setTimeout(r, 500));

  const snippetId = parseInt(props.params.id);

  const snippet = await actions.getSnippet(snippetId);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${snippet.id}/edit`}>
            <Button variant="default" type="submit">
              Edit
            </Button>
          </Link>
          <SnippetDeleteForm snippetId={snippet.id} />
        </div>
      </div>
      <div className="mt-8 rounded-8 overflow-hidden">
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {snippet.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
