'use client';

import { useToast } from '@mates/shared-ui-shadcn';
import { ToastAction } from '@mates/shared-ui-shadcn';
import { Button } from '@mates/shared-ui-shadcn/server';

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
