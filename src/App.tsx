
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
import CareerGuidance from "./pages/student-services/CareerGuidance";
import CounsellingSystem from "./pages/student-services/CounsellingSystem";
import MakersSpace from "./pages/student-services/MakersSpace";
import StudentDevelopment from "./pages/student-services/StudentDevelopment";
import Certifications from "./pages/student-services/Certifications";
import Placements from "./pages/Placements";

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
          <Route path="/student-services/career-guidance" element={<CareerGuidance />} />
          <Route path="/student-services/counselling-system" element={<CounsellingSystem />} />
          <Route path="/student-services/makers-space" element={<MakersSpace />} />
          <Route path="/student-services/development-program" element={<StudentDevelopment />} />
          <Route path="/student-services/certifications" element={<Certifications />} />
          <Route path="/placements" element={<Placements />} />
          
          {/* Placeholder routes - these would be implemented in a full project */}
          <Route path="/about-us" element={<NotFound />} />
          <Route path="/study-with-us" element={<NotFound />} />
          <Route path="/approvals" element={<NotFound />} />
          <Route path="/departments" element={<NotFound />} />
          <Route path="/research" element={<NotFound />} />
          <Route path="/campus-life" element={<NotFound />} />
          <Route path="/iqac" element={<NotFound />} />
          <Route path="/naac" element={<NotFound />} />
          <Route path="/student-services/co-curricular" element={<NotFound />} />
          <Route path="/student-services/innovation" element={<NotFound />} />
          <Route path="/student-services/projects" element={<NotFound />} />
          <Route path="/student-services/international" element={<NotFound />} />
          <Route path="/student-services/scholarships" element={<NotFound />} />
          <Route path="/student-services/medical-centre" element={<NotFound />} />
          <Route path="/student-services/employability" element={<NotFound />} />
          <Route path="/student-services/competency" element={<NotFound />} />
          <Route path="/student-services/support-hub" element={<NotFound />} />
          <Route path="/events" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />
          <Route path="/admissions" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/programs" element={<NotFound />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
