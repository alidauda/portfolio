export default function Page() {
  return (
    <div className='px-10 '>
      <div className='p-5 h-[100dvh]'>
        <nav className='flex justify-between '>
          <ul>
            <li>AliBiu</li>
          </ul>
          <ul className='flex gap-3'>
            <li>works</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
        <main className='h-full py-8'>
          <div className='flex flex-col  '>
            <h1 className='font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent '>
              I&apos;M ALI <br />
              DAUDA
              <br /> BIU.
            </h1>
            <p>I a,</p>
          </div>
          <div></div>
        </main>
      </div>
    </div>
  );
}
