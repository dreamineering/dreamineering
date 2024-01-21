import { Switch } from '@mates/shared-ui-shadcn';
import { Label } from '@mates/shared-ui-shadcn';

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
