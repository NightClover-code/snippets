import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SnippetCreatePage() {
  return (
    <form>
      <h3 className="font-bold m-3">Create snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Label className="w-12" htmlFor="title">
            Title
          </Label>
          <Input name="title" type="text" placeholder="Title" />
        </div>
        <div className="flex gap-4">
          <Label className="w-12" htmlFor="code">
            Code
          </Label>
          <Textarea name="code" id="code" placeholder="code" />
        </div>

        <Button variant="destructive" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
