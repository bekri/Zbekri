
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import ThreeDModelingPage from "./pages/ThreeDModelingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import GameDevelopmentPage from "./pages/GameDevelopmentPage";
import DigitalArtPage from "./pages/DigitalArtPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/3d-modeling" element={<ThreeDModelingPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/game-development" element={<GameDevelopmentPage />} />
            <Route path="/digital-art" element={<DigitalArtPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
