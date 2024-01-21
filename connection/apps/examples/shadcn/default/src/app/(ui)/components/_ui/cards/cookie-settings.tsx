'use client';

import { Button } from '@mates/shared-ui-shadcn/server';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mates/shared-ui-shadcn/server';
import { Label, Switch } from '@mates/shared-ui-shadcn';

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Strictly Necessary</span>
            <span className="text-muted-foreground text-xs font-normal leading-snug">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Functional Cookies</span>
            <span className="text-muted-foreground text-xs font-normal leading-snug">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional" />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Performance Cookies</span>
            <span className="text-muted-foreground text-xs font-normal leading-snug">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  );
}
