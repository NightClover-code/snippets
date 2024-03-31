import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const snippetId = parseInt(props.params.id);

  const snippet = await db.snippet.findUnique({
    where: {
      id: snippetId,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Editing snippet #{snippet.id}</h1>
      <div className="mt-4">
        <SnippetEditForm snippet={snippet} />
      </div>
    </div>
  );
}
