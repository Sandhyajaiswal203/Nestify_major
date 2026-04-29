import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Connect from "./pages/Connect";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HostLayout from "./components/host/HostLayout";
import HostOverview from "./pages/host/HostOverview";
import HostProperties from "./pages/host/HostProperties";
import HostBookings from "./pages/host/HostBookings";
import HostAvailability from "./pages/host/HostAvailability";
import HostSettings from "./pages/host/HostSettings";
import AdminLayout from "./components/admin/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminListings from "./pages/admin/AdminListings";
import AdminReported from "./pages/admin/AdminReported";
import AdminBookings from "./pages/admin/AdminBookings";
import UserLayout from "./components/user/UserLayout";
import UserBookings from "./pages/user/UserBookings";
import UserWishlist from "./pages/user/UserWishlist";
import UserProfile from "./pages/user/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <WishlistProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<HostOverview />} />
              <Route path="properties" element={<HostProperties />} />
              <Route path="bookings" element={<HostBookings />} />
              <Route path="availability" element={<HostAvailability />} />
              <Route path="settings" element={<HostSettings />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminOverview />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="listings" element={<AdminListings />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="reported" element={<AdminReported />} />
            </Route>
            <Route path="/dashboard" element={<UserLayout />}>
              <Route index element={<UserBookings />} />
              <Route path="wishlist" element={<UserWishlist />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </WishlistProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
