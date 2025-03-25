
export interface Obituary {
  id: string;
  name: string;
  dateOfBirth: string;
  dateOfDeath: string;
  content: string;
  author: string;
  submissionDate: string;
  slug: string;
  image?: string;
}

// Sample obituaries data
export const obituaries: Obituary[] = [
  {
    id: '1',
    name: 'Eleanor Rigby',
    dateOfBirth: '1942-06-18',
    dateOfDeath: '2023-01-15',
    content: 'Eleanor Rigby, beloved mother, grandmother, and friend, passed away peacefully surrounded by her family. Eleanor dedicated her life to teaching and touched countless lives through her 40-year career as a high school English teacher. She had a passion for literature, gardening, and classical music. Her kindness, wisdom, and gentle spirit will be deeply missed by all who knew her.',
    author: 'The Rigby Family',
    submissionDate: '2023-01-17T10:30:00',
    slug: 'eleanor-rigby',
    image: 'https://images.unsplash.com/photo-1551728958-2bd5268b9aec?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Thomas Anderson',
    dateOfBirth: '1936-03-12',
    dateOfDeath: '2023-02-28',
    content: 'Thomas "Tom" Anderson, devoted husband, father, and grandfather, passed away at the age of 87. Tom served in the military before starting his own construction company, building not just structures but relationships that lasted a lifetime. He was known for his strong work ethic, integrity, and willingness to help others. Tom enjoyed fishing, woodworking, and spending time with his seven grandchildren who were the light of his life.',
    author: 'The Anderson Family',
    submissionDate: '2023-03-02T14:15:00',
    slug: 'thomas-anderson',
    image: 'https://images.unsplash.com/photo-1564979045531-fa386a275b27?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Maria Gonzalez',
    dateOfBirth: '1958-09-24',
    dateOfDeath: '2023-04-10',
    content: 'Maria Gonzalez, cherished wife, mother, sister, and friend, passed away after a courageous battle with cancer. Maria was the heart of her family and community, known for her warm hospitality and incredible cooking that brought people together. Born in Mexico City, she moved to the United States at age 20 and built a beautiful life filled with love, laughter, and service to others. She founded a local charity providing meals to those in need, a legacy that will continue in her honor.',
    author: 'The Gonzalez Family',
    submissionDate: '2023-04-12T09:45:00',
    slug: 'maria-gonzalez',
    image: 'https://images.unsplash.com/photo-1600801400885-1ebedcce8b9a?q=80&w=2070&auto=format&fit=crop'
  }
];

export const getObituaryBySlug = (slug: string): Obituary | undefined => {
  return obituaries.find(obituary => obituary.slug === slug);
};

export const addObituary = (obituary: Omit<Obituary, 'id' | 'submissionDate' | 'slug'>): Obituary => {
  const id = (obituaries.length + 1).toString();
  const submissionDate = new Date().toISOString();
  const slug = obituary.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const newObituary: Obituary = {
    ...obituary,
    id,
    submissionDate,
    slug
  };
  
  // In a real app, this would save to a database
  obituaries.push(newObituary);
  
  return newObituary;
};
