import Sidebar from '@/components/Sidebar';
import Chat from '@/components/Chat';
export default function MainPage() {

  return (
    // <div className="flex h-screen bg-gray-200">
    <div className="flex ">
      <Sidebar />
      <Chat />
    </div>
  );
}
