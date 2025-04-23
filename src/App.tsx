
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Eventos from "./pages/Eventos";
import EventoDetalhe from "./pages/EventoDetalhe";
import Devocional from "./pages/Devocional";
import DevocionalDetalhe from "./pages/DevocionalDetalhe";
import Sinodal from "./pages/Sinodal";
import Federacoes from "./pages/Federacoes";
import FederacaoDetalhe from "./pages/FederacaoDetalhe";
import UpasLocais from "./pages/UpasLocais";
import UpaLocalDetalhe from "./pages/UpaLocalDetalhe";
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
            <Route path="/" element={<Index />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/:id" element={<EventoDetalhe />} />
            <Route path="/devocional" element={<Devocional />} />
            <Route path="/devocional/:id" element={<DevocionalDetalhe />} />
            <Route path="/sinodal" element={<Sinodal />} />
            <Route path="/federacoes" element={<Federacoes />} />
            <Route path="/federacoes/:id" element={<FederacaoDetalhe />} />
            <Route path="/upas-locais" element={<UpasLocais />} />
            <Route path="/upas-locais/:id" element={<UpaLocalDetalhe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
