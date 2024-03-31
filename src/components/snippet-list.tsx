'use client';

import { Snippet } from '@prisma/client';
import Link from 'next/link';

interface SnippetListProps {
  snippets: Snippet[];
}

export default function SnippetList({ snippets }: SnippetListProps) {
  return (
    <div className="flex gap-4 flex-col mt-8">
      {snippets.map(({ id, title }) => (
        <Link
          href={`/snippets/${id}`}
          key={id}
          className="flex justify-between items-center p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-200 ease-in-out"
        >
          <div>{title}</div>
        </Link>
      ))}
    </div>
  );
}
