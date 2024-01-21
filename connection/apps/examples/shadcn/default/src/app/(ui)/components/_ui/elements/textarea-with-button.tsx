import { Button } from '@mates/shared-ui-shadcn/server';
import { Textarea } from '@mates/shared-ui-shadcn';

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
