'use client';

import { useToast } from '@mates/shared-ui-shadcn';
import { Button } from '@mates/shared-ui-shadcn/server';

export default function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}
