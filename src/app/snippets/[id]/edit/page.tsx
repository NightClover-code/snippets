interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
  const snippetId = parseInt(props.params.id);

  return <div>Editing snippet {snippetId}</div>;
}
