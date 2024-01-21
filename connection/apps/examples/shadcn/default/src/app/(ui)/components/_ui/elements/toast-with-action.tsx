'use client';

import { ToastAction } from '@mates/shared-ui-shadcn';
import { useToast } from '@mates/shared-ui-shadcn';
import { Button } from '@mates/shared-ui-shadcn/server';

export default function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
