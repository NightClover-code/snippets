import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //just to show the loading spinner
  await new Promise(r => setTimeout(r, 500));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

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
          <Link href={`/snippets/${snippet.id}/delete`}>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-4 flex-col mt-8 bg-black rounded-8 p-4">
        {snippet.code}
      </div>
    </div>
  );
}
