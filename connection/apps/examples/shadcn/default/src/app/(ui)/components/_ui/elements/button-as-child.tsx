import Link from 'next/link';

import { Button } from '@mates/shared-ui-shadcn/server';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
