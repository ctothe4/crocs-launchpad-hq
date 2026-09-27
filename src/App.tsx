import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/ca/Layout";
import Home from "./pages/Home";
import Academy from "./pages/Academy";
import Learning from "./pages/Learning";
import SportLife from "./pages/SportLife";
import Character from "./pages/Character";
import Admissions from "./pages/Admissions";
import FoundingClass from "./pages/FoundingClass";
import Visit from "./pages/Visit";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/the-academy" element={<Academy />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/sport-life" element={<SportLife />} />
            <Route path="/character-leadership" element={<Character />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/founding-class-2027" element={<FoundingClass />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            {/* Future: /leadership /news /calendar /policies /parents /student-life /clubs /fixtures /careers */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
