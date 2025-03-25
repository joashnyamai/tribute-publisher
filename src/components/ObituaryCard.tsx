
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Obituary } from '@/data/obituaries';
import { formatDate } from '@/utils/validation';
import { cn } from "@/lib/utils";

interface ObituaryCardProps {
  obituary: Obituary;
  featured?: boolean;
}

const ObituaryCard = ({ obituary, featured = false }: ObituaryCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);
  
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };
  
  return (
    <div 
      className={cn(
        "group transition-all duration-500 ease-in-out bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transform hover:-translate-y-1",
        isLoaded ? "opacity-100" : "opacity-0 translate-y-4",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      <Link to={`/obituary/${obituary.slug}`} className="block h-full">
        <div className="relative h-48 w-full overflow-hidden">
          {obituary.image ? (
            <>
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <img 
                src={obituary.image} 
                alt={obituary.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                onLoad={() => {}} 
              />
            </>
          ) : (
            <div className="w-full h-full bg-memorial-100 flex items-center justify-center">
              <span className="font-serif text-memorial-400">In Memoriam</span>
            </div>
          )}
          
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full font-medium text-memorial-800">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="text-xs text-memorial-500 mb-2">
            {formatDate(obituary.dateOfBirth)} — {formatDate(obituary.dateOfDeath)}
          </div>
          
          <h3 className="font-serif text-xl text-memorial-900 mb-2 group-hover:text-memorial-700 transition-colors">
            {obituary.name}
          </h3>
          
          <p className="text-memorial-600 text-sm mb-4">
            {truncateContent(obituary.content)}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-memorial-500 text-xs">{obituary.author}</span>
            <span className="text-memorial-400 text-xs italic">
              Submitted on {new Date(obituary.submissionDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ObituaryCard;
