import NavBar from './ui/NavBar/nav';
import Heading from './ui/Heading/Heading';
import Tools from './ui/Tools';
import Project from './ui/project';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <Heading />
      <div className='  py-4  space-y-3'>
        <h1>Projects</h1>
        <Project />
        <div className='py-3 border-t-2'>
          <h1 className='text-xl'>Tools</h1>
        </div>
        <Tools />
      </div>
      <Footer />
    </div>
  );
}
