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
    <form action={createSnippet} className="flex flex-col gap-4">
      <h1 className="font-bold text-xl my-3">Create a Snippet</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Label htmlFor="title">Title</Label>
          <Input name="title" type="text" placeholder="Title" required />
        </div>
        <div className="flex gap-4">
          <Label htmlFor="code">Code</Label>
          <Textarea name="code" id="code" placeholder="Code" required />
        </div>

        <Button className="mt-3" variant="default" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
