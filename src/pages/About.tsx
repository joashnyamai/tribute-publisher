
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-memorial-900 mb-6">About Memento</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-xl mb-6 text-memorial-600">
              Memento is a thoughtfully designed platform dedicated to preserving the memories and legacies of loved ones who have passed.
            </p>
            
            <h2 className="font-serif text-2xl text-memorial-800 mt-8 mb-4">Our Mission</h2>
            <p className="text-memorial-600 mb-4">
              We believe that every life tells a unique story worth remembering. Our mission is to provide a dignified and accessible space where families can honor their loved ones and share their life stories with future generations.
            </p>
            
            <h2 className="font-serif text-2xl text-memorial-800 mt-8 mb-4">How We Started</h2>
            <p className="text-memorial-600 mb-4">
              Memento was founded in 2023 by a group of individuals who experienced firsthand the difficulties of preserving and sharing memories during times of loss. We created this platform to make the process of commemorating loved ones more meaningful and accessible.
            </p>
            
            <h2 className="font-serif text-2xl text-memorial-800 mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-5 text-memorial-600 mb-4 space-y-2">
              <li><span className="font-medium">Dignity:</span> We approach each memorial with the utmost respect and care.</li>
              <li><span className="font-medium">Accessibility:</span> We believe everyone deserves a space to be remembered.</li>
              <li><span className="font-medium">Preservation:</span> We are committed to safeguarding memories for future generations.</li>
              <li><span className="font-medium">Community:</span> We foster a supportive environment for those navigating loss.</li>
            </ul>
            
            <h2 className="font-serif text-2xl text-memorial-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-memorial-600">
              If you have any questions or need assistance, please don't hesitate to reach out to our team at <a href="mailto:support@memento.example.com" className="text-memorial-800 hover:underline">support@memento.example.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
