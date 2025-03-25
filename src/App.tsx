
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SubmitObituary from "./pages/SubmitObituary";
import ViewObituary from "./pages/ViewObituary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Memento | Honor, Remember, Celebrate</title>
        <meta name="description" content="A thoughtfully designed space to celebrate and commemorate the lives of loved ones who have passed. Share their stories, honor their memory." />
        <meta property="og:title" content="Memento | Honor, Remember, Celebrate" />
        <meta property="og:description" content="A thoughtfully designed space to celebrate and commemorate the lives of loved ones who have passed." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/submit" element={<SubmitObituary />} />
          <Route path="/obituary/:slug" element={<ViewObituary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
