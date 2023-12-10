import Link from 'next/link';
import { ChefHat } from 'lucide-react';

export default function NavBar() {
  return (
    <div className='flex justify-between py-5'>
      <ul className='flex space-x-5  '>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
      <div>
        {' '}
        <Link href='/'>
          <ChefHat />
        </Link>
      </div>
    </div>
  );
}
