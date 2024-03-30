import Link from 'next/link';
import { db } from '@/db';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(({ id, code, title }) => (
    <Link
      href={`/snippets/${id}`}
      key={id}
      className="flex justify-between items-center p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out"
    >
      <div>{title}</div>
    </Link>
  ));

  return (
    <div className="min-w-[500px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={`/snippets/new`}>
          <Button className="mt-3" variant="default" type="submit">
            New
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 flex-col mt-8">{renderedSnippets}</div>
    </div>
  );
}
