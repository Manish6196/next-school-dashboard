'use client';

import { role } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function HomePage() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push(`/${role}`);
  }, [router]);

  return null;
}
