import { ModeToggle } from '@/components/ui/mode-toggle';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => (
    <div key={snippet.id}>
      <h1>{snippet.title}</h1>
      <pre>{snippet.code}</pre>
    </div>
  ));

  return <div>{renderedSnippets}</div>;
}
