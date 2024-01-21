import { Label } from '@mates/shared-ui-shadcn';
import { Textarea } from '@mates/shared-ui-shadcn';

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
