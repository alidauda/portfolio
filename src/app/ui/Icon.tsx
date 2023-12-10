'use client';
import { LucideIcon } from 'lucide-react';
import Boop from './animations/boop';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function LinKwIconAnimation({
  icon,
  href,
}: {
  icon: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} target='_blank'>
      <Boop rotation={20} timing={200}>
        {icon}
      </Boop>
    </Link>
  );
}
