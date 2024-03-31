import * as actions from '@/actions';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

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

  const deleteSnippetAction = async (snippetId: number) => {
    'use server';
    await actions.deleteSnippet(snippetId);

    try {
      toast.success('Snippet deleted successfully!');
    } catch (error: any) {
      toast.error(
        error.message || 'An error occurred while deleting the snippet.'
      );
    }
  };

  const deleteSnippetActionBound = deleteSnippetAction.bind(null, snippet.id);

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
      <div className="flex gap-4 flex-col mt-8 bg-black rounded-8 p-4">
        {snippet.code}
      </div>
    </div>
  );
}
