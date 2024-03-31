'use client';

import * as actions from '@/actions';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

interface SnippetDeleteFormProps {
  snippetId: number;
}

export default function SnippetDeleteForm({
  snippetId,
}: SnippetDeleteFormProps) {
  const deleteSnippetAction = async (snippetId: number) => {
    await actions.deleteSnippet(snippetId);

    try {
      toast.success('Snippet deleted successfully!');
    } catch (error: any) {
      toast.error(
        error.message || 'An error occurred while deleting the snippet.'
      );
    }
  };

  const deleteSnippetActionBound = deleteSnippetAction.bind(null, snippetId);

  return (
    <form action={deleteSnippetActionBound}>
      <Button variant="destructive" type="submit">
        Delete
      </Button>
    </form>
  );
}
