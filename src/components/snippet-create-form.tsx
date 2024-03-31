'use client';

import * as actions from '@/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function SnippetCreateForm() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const createSnippetAction = async (title: string, code: string) => {
    await actions.createSnippet(title, code);

    try {
      toast.success('Snippet Created successfully!');
    } catch (error: any) {
      toast.error(
        error.message || 'An error occurred while creating the snippet.'
      );
    }
  };

  const createSnippetActionBound = createSnippetAction.bind(null, title, code);

  return (
    <form action={createSnippetActionBound} className="flex flex-col gap-4">
      <h1 className="font-bold text-xl my-3">Create a Snippet</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4">
          <Label htmlFor="code">Code</Label>
          <Textarea
            name="code"
            id="code"
            placeholder="Code"
            onChange={e => setCode(e.target.value)}
            required
          />
        </div>

        <Button className="mt-3" variant="default" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
