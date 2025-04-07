
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentServices from "./pages/StudentServices";
import LearningTechnologies from "./pages/student-services/LearningTechnologies";
import ExperientialLearning from "./pages/student-services/ExperientialLearning";
import SelfLearning from "./pages/student-services/SelfLearning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/student-services/learning-technologies" element={<LearningTechnologies />} />
          <Route path="/student-services/experiential-learning" element={<ExperientialLearning />} />
          <Route path="/student-services/self-learning" element={<SelfLearning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
