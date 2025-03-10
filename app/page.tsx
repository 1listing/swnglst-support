'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>We&apos;re here to help</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              If you require any assistance in using the swnglst app, please
              drop us an email:
            </p>
            <Button
              className="mt-4"
              onClick={() =>
                (window.location.href = 'mailto:1listing.engineering@gmail.com')
              }
            >
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
