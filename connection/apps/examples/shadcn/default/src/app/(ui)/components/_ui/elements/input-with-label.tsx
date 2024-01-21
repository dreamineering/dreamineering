import { Input } from '@mates/shared-ui-shadcn';
import { Label } from '@mates/shared-ui-shadcn';

export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}
