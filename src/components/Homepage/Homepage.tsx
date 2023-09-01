import Navbar from '../Navbar/Navbar';
import BottomSection from './BottomSection';
import TopSection from './TopSection';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className="h-screen w-full">
        <TopSection />
        <BottomSection />
      </main>
    </>
  );
}
