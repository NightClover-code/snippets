'use server';

import { db } from '@/db';
import { notFound, redirect } from 'next/navigation';

export async function getSnippets() {
  return await db.snippet.findMany();
}

export async function createSnippet(title: string, code: string) {
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect('/');
}

export async function getSnippet(id: number) {
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return snippet;
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: {
      code,
    },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect(`/`);
}
