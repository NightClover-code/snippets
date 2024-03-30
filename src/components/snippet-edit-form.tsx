'use client';

import { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>Client component rendered on the server. Title: {snippet.title}</div>
  );
}
