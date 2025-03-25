
import { useState, useEffect } from 'react';
import { obituaries } from '@/data/obituaries';
import ObituaryCard from '@/components/ObituaryCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Obituaries = () => {
  const [obituaryList, setObituaryList] = useState(obituaries);
  
  // This function will be called after an obituary is deleted
  const handleObituaryDeleted = () => {
    // Update the list to reflect the current state of obituaries
    setObituaryList([...obituaries]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="font-serif text-3xl text-memorial-900 mb-3">Obituaries</h1>
            <p className="text-memorial-600">Remembering those who have touched our lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obituaryList.map((obituary) => (
              <ObituaryCard
                key={obituary.id}
                obituary={obituary}
                onDelete={handleObituaryDeleted}
              />
            ))}
            
            {obituaryList.length === 0 && (
              <div className="col-span-full text-center p-10 bg-memorial-50 rounded-lg">
                <p className="text-memorial-600">No obituaries have been submitted yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Obituaries;
