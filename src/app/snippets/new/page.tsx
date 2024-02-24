import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SnippetCreatePage() {
  return (
    <div className="min-w-96">
      <form className="flex flex-col gap-4">
        <h1 className="font-bold text-xl my-3">Create a Snippet</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Label htmlFor="title">Title</Label>
            <Input name="title" type="text" placeholder="Title" />
          </div>
          <div className="flex gap-4">
            <Label htmlFor="code">Code</Label>
            <Textarea name="code" id="code" placeholder="Code" />
          </div>

          <Button className="mt-3" variant="default" type="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
