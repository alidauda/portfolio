import { Youtube, Twitter, Linkedin, Github } from 'lucide-react';
import LinKwIconAnimation from './Icon';

export default function Footer() {
  return (
    <div className='mt-auto py-5 flex justify-between'>
      <p>Copyright © 2023 | All rights reserved.</p>
      <div className='flex gap-5'>
        <LinKwIconAnimation
          icon={<Youtube />}
          href='https://www.youtube.com/channel/UCpqUkJx5Hfw0TSRhbypAQRA'
        />
        <LinKwIconAnimation
          icon={<Twitter />}
          href='https://twitter.com/BiuAli_'
        />

        <LinKwIconAnimation
          icon={<Linkedin />}
          href='https://www.linkedin.com/in/ali-dauda-7880b616b/'
        />
        <LinKwIconAnimation
          icon={<Github />}
          href='https://github.com/alidauda'
        />
      </div>
    </div>
  );
}
