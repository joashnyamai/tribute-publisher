
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { validateObituaryForm, ObituaryFormData } from '@/utils/validation';
import { addObituary } from '@/data/obituaries';
import { toast } from 'sonner';

const ObituaryForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ObituaryFormData>({
    name: '',
    dateOfBirth: '',
    dateOfDeath: '',
    content: '',
    author: '',
    image: null
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateObituaryForm(formData);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // In a real app, you'd upload the image and get a URL back
      // For now, we'll simulate this with a timeout
      
      setTimeout(() => {
        // Add the obituary
        const { image, ...obituaryData } = formData;
        const newObituary = addObituary(obituaryData);
        
        toast.success("Obituary submitted successfully");
        
        // Redirect to the new obituary page
        navigate(`/obituary/${newObituary.slug}`);
      }, 1500);
      
    } catch (error) {
      console.error("Error submitting obituary:", error);
      toast.error("There was an error submitting the obituary. Please try again.");
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name"
          name="name"
          placeholder="Enter the full name of the departed"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-red-300" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input 
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={errors.dateOfBirth ? "border-red-300" : ""}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dateOfDeath">Date of Death</Label>
          <Input 
            id="dateOfDeath"
            name="dateOfDeath"
            type="date"
            value={formData.dateOfDeath}
            onChange={handleChange}
            className={errors.dateOfDeath ? "border-red-300" : ""}
          />
          {errors.dateOfDeath && <p className="text-red-500 text-sm">{errors.dateOfDeath}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Obituary Text</Label>
        <Textarea 
          id="content"
          name="content"
          placeholder="Share memories, accomplishments, and details about the life of your loved one"
          rows={8}
          value={formData.content}
          onChange={handleChange}
          className={errors.content ? "border-red-300" : ""}
        />
        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="author">Submitted By</Label>
        <Input 
          id="author"
          name="author"
          placeholder="Family name or your name"
          value={formData.author}
          onChange={handleChange}
          className={errors.author ? "border-red-300" : ""}
        />
        {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Photo (Optional)</Label>
        <Input 
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <p className="text-memorial-500 text-xs">
          Upload a photo to accompany the obituary. Recommended size: 800x600 pixels.
        </p>
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-memorial-800 hover:bg-memorial-900 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Obituary"}
        </Button>
      </div>
    </form>
  );
};

export default ObituaryForm;
