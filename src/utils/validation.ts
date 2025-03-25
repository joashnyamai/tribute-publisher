
interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface ObituaryFormData {
  name: string;
  dateOfBirth: string;
  dateOfDeath: string;
  content: string;
  author: string;
  image?: File | null;
}

export const validateObituaryForm = (data: ObituaryFormData): ValidationResult => {
  const errors: Record<string, string> = {};
  
  // Validate name
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  
  // Validate dates
  if (!data.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required";
  }
  
  if (!data.dateOfDeath) {
    errors.dateOfDeath = "Date of death is required";
  }
  
  // Check that date of death is after date of birth
  if (data.dateOfBirth && data.dateOfDeath) {
    const birthDate = new Date(data.dateOfBirth);
    const deathDate = new Date(data.dateOfDeath);
    
    if (deathDate < birthDate) {
      errors.dateOfDeath = "Date of death cannot be before date of birth";
    }
    
    // Check that dates are not in the future
    const today = new Date();
    if (deathDate > today) {
      errors.dateOfDeath = "Date of death cannot be in the future";
    }
  }
  
  // Validate content
  if (!data.content.trim()) {
    errors.content = "Obituary content is required";
  } else if (data.content.length < 50) {
    errors.content = "Content must be at least 50 characters";
  }
  
  // Validate author
  if (!data.author.trim()) {
    errors.author = "Author is required";
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
