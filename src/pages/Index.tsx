
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ObituaryCard from '@/components/ObituaryCard';
import { obituaries } from '@/data/obituaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-memorial-50 to-white">
        <div 
          className={`max-w-6xl mx-auto text-center transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <span className="bg-memorial-100 text-memorial-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            Honor • Remember • Celebrate
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-memorial-900 mb-6 leading-tight">
            Preserving Legacies with <br />Dignity and Grace
          </h1>
          
          <p className="text-memorial-600 max-w-2xl mx-auto mb-10 text-lg">
            A thoughtfully designed space to celebrate and commemorate the lives of loved ones who have passed. Share their stories, honor their memory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-memorial-800 hover:bg-memorial-900 text-white px-8 py-6 rounded-md"
            >
              <Link to="/submit">
                Submit an Obituary
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-memorial-300 hover:bg-memorial-50 text-memorial-800 px-8 py-6 rounded-md"
            >
              <Link to="/obituaries">
                Browse Memorials
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Obituaries */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl text-memorial-900 mb-2">Recent Memorials</h2>
              <p className="text-memorial-600">Honoring lives and preserving memories</p>
            </div>
            
            <Link 
              to="/obituaries"
              className="text-memorial-800 hover:text-memorial-600 transition-colors flex items-center gap-1 text-sm font-medium"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {obituaries.map((obituary, index) => (
              <ObituaryCard 
                key={obituary.id} 
                obituary={obituary} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-6 bg-memorial-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-memorial-900 mb-3">How It Works</h2>
            <p className="text-memorial-600 max-w-xl mx-auto">
              Creating and sharing a memorial is a simple and thoughtful process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-memorial-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-memorial-800">1</span>
              </div>
              <h3 className="font-serif text-xl text-memorial-900 mb-3">Submit Information</h3>
              <p className="text-memorial-600 text-sm">
                Fill out our simple form with details about your loved one, add a photo, and share memories that honor their life.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-memorial-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-memorial-800">2</span>
              </div>
              <h3 className="font-serif text-xl text-memorial-900 mb-3">Review & Publish</h3>
              <p className="text-memorial-600 text-sm">
                Preview your memorial before it goes live. Make any necessary edits to ensure it perfectly captures their legacy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-memorial-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-memorial-800">3</span>
              </div>
              <h3 className="font-serif text-xl text-memorial-900 mb-3">Share & Remember</h3>
              <p className="text-memorial-600 text-sm">
                Share the memorial with family and friends through social media or direct link, allowing everyone to commemorate together.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-memorial-800 hover:bg-memorial-900 text-white px-6"
            >
              <Link to="/submit">
                Create a Memorial
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block w-16 h-1 bg-memorial-300 mb-6"></span>
            <h2 className="font-serif text-3xl text-memorial-900 mb-10">What Families Say</h2>
          </div>
          
          <blockquote className="text-xl text-memorial-700 italic font-serif mb-6">
            "Creating a memorial for my father was a healing experience. The process was simple yet meaningful, and having a dedicated space to share his story has brought comfort to our entire family."
          </blockquote>
          
          <cite className="text-memorial-600 not-italic block">
            — Sarah Johnson, daughter
          </cite>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
