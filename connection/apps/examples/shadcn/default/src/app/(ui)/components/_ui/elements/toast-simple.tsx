'use client';

import { Button } from '@mates/shared-ui-shadcn/server';
import { useToast } from '@mates/shared-ui-shadcn';

export default function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: 'Your message has been sent.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}
