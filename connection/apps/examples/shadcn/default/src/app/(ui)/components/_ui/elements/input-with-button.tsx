import { Button } from '@mates/shared-ui-shadcn/server';
import { Input } from '@mates/shared-ui-shadcn';

export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
}
