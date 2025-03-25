
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { Obituary, deleteObituary } from '@/data/obituaries';
import { formatDate } from '@/utils/validation';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ObituaryCardProps {
  obituary: Obituary;
  featured?: boolean;
  onDelete?: () => void;
}

const ObituaryCard = ({ obituary, featured = false, onDelete }: ObituaryCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();
  
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
  
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    const success = deleteObituary(obituary.slug);
    if (success) {
      toast.success(`Obituary for ${obituary.name} deleted successfully`);
      if (onDelete) {
        onDelete();
      }
    } else {
      toast.error("Failed to delete obituary");
    }
    setDeleteDialogOpen(false);
  };
  
  return (
    <>
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
            
            <div className="absolute top-3 right-3" onClick={handleDelete}>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-white/90 backdrop-blur-sm text-red-500 hover:text-red-700 hover:bg-red-50 border-red-200 rounded-full h-8 w-8"
              >
                <Trash2 size={14} />
              </Button>
            </div>
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
      
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this obituary?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the obituary
              for {obituary.name} and remove the data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700 text-white">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ObituaryCard;
