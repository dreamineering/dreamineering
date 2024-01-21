import { ChevronRight } from 'lucide-react';

import { Button } from '@mates/shared-ui-shadcn/server';

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}
