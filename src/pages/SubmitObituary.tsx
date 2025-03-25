
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObituaryForm from '@/components/ObituaryForm';

const SubmitObituary = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Submit an Obituary | Memento</title>
        <meta name="description" content="Honor your loved one by creating a digital memorial that celebrates their life and legacy." />
        <meta property="og:title" content="Submit an Obituary | Memento" />
        <meta property="og:description" content="Honor your loved one by creating a digital memorial that celebrates their life and legacy." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 bg-memorial-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl text-memorial-900 mb-4">Submit an Obituary</h1>
            <p className="text-memorial-600 max-w-xl mx-auto">
              Honor your loved one by creating a digital memorial that celebrates their life and legacy.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm">
            <ObituaryForm />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-memorial-500 text-sm">
              Need assistance? Contact our support team at{' '}
              <a href="mailto:support@memento.com" className="text-memorial-700 hover:text-memorial-900 transition-colors">
                support@memento.com
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitObituary;
