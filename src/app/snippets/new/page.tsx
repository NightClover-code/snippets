import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {
  const createSnippet = async (formData: FormData) => {
    //this needs to be a server action
    'use server';

    //check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // create new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log('Snippet created:', snippet);

    //redirect user to home page
    redirect('/');
  };

  return (
    <div>
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
    </div>
  );
}
