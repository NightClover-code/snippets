import * as actions from '@/actions';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //just to show the loading spinner
  await new Promise(r => setTimeout(r, 500));

  const snippetId = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id: snippetId,
    },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetActionBound = actions.deleteSnippet.bind(null, snippet.id);

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
          <form action={deleteSnippetActionBound}>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
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
