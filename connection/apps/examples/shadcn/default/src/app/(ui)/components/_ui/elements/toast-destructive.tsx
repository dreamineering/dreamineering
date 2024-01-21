'use client';

import { Button } from '@mates/shared-ui-shadcn/server';
import { ToastAction } from '@mates/shared-ui-shadcn';
import { useToast } from '@mates/shared-ui-shadcn';

export default function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: 'destructive',
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
