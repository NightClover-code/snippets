import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as actions from '@/actions';
import SnippetList from '@/components/snippet-list';

export default async function Home() {
  const snippets = await actions.getSnippets();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={`/snippets/new`}>
          <Button className="mt-3" variant="default" type="submit">
            New
          </Button>
        </Link>
      </div>
      <SnippetList snippets={snippets} />
    </div>
  );
}
