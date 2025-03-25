
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Share2, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getObituaryBySlug, Obituary } from '@/data/obituaries';
import { formatDate } from '@/utils/validation';

const ViewObituary = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [obituary, setObituary] = useState<Obituary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      // Simulate API call
      setTimeout(() => {
        const foundObituary = getObituaryBySlug(slug);
        if (foundObituary) {
          setObituary(foundObituary);
        }
        setIsLoading(false);
      }, 500);
    }
  }, [slug]);
  
  const handleShare = () => {
    if (navigator.share && obituary) {
      navigator
        .share({
          title: `In Memory of ${obituary.name}`,
          text: `Remembering the life of ${obituary.name}`,
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-memorial-100 rounded mb-4"></div>
            <div className="h-4 w-40 bg-memorial-100 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!obituary) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl text-memorial-900 mb-4">Obituary Not Found</h1>
            <p className="text-memorial-600 mb-8">
              We couldn't find the obituary you're looking for. It may have been removed or the link might be incorrect.
            </p>
            <Button onClick={() => navigate('/obituaries')}>
              Browse Obituaries
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>In Memory of {obituary.name} | Memento</title>
        <meta name="description" content={`Remembering the life of ${obituary.name} (${new Date(obituary.dateOfBirth).getFullYear()} - ${new Date(obituary.dateOfDeath).getFullYear()})`} />
        <meta property="og:title" content={`In Memory of ${obituary.name} | Memento`} />
        <meta property="og:description" content={`Remembering the life of ${obituary.name} (${new Date(obituary.dateOfBirth).getFullYear()} - ${new Date(obituary.dateOfDeath).getFullYear()})`} />
        <meta property="og:type" content="article" />
        {obituary.image && <meta property="og:image" content={obituary.image} />}
        <meta property="article:published_time" content={obituary.submissionDate} />
        <meta property="article:author" content={obituary.author} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        {/* Hero section with image */}
        {obituary.image && (
          <div className="relative h-[40vh] md:h-[50vh] w-full bg-memorial-100 mb-10">
            <img 
              src={obituary.image} 
              alt={obituary.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        )}
        
        <div className="px-6">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-memorial-600 hover:text-memorial-800 transition-colors mb-6"
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </button>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-memorial-500 text-sm">
                <Calendar size={16} />
                <span>{formatDate(obituary.dateOfBirth)} — {formatDate(obituary.dateOfDeath)}</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleShare}
                className="text-memorial-600 hover:text-memorial-800 hover:bg-memorial-50"
              >
                <Share2 size={16} className="mr-2" /> Share
              </Button>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl text-memorial-900 mb-6">
              In Memory of {obituary.name}
            </h1>
            
            <div className="prose prose-memorial max-w-none">
              {obituary.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-memorial-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-memorial-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <p className="text-memorial-500 text-sm">
                    Submitted by <span className="font-medium text-memorial-700">{obituary.author}</span>
                  </p>
                  <p className="text-memorial-400 text-xs mt-1">
                    Published on {new Date(obituary.submissionDate).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="border-memorial-200 text-memorial-700"
                  >
                    <Share2 size={16} className="mr-2" /> Share this Memorial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ViewObituary;
