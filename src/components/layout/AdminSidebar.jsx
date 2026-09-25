import { Link } from "react-router-dom";
import { Home, Calendar, Image, Quote, Settings, LogOut } from "lucide-react";

export function AdminSidebar() {
  return (
    <aside className="fixed inset-0 flex w-64 bg-primary text-primary-foreground">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex items-center space-x-3 mb-6">
          <Home className="h-5 w-5" />
          <span className="font-display text-xl">Mara Admin</span>
        </div>
        <nav className="mt-2 space-y-2 flex-1">
          <Link to="/admin" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", true && "bg-primary/90")} activeClassName="bg-primary/90">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link to="/admin/massages" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", false && "bg-primary/90")}>
            <Calendar className="h-4 w-4" />
            Massages
          </Link>
          <Link to="/admin/gallery" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", false && "bg-primary/90")}>
            <Image className="h-4 w-4" />
            Gallery
          </Link>
          <Link to="/admin/testimonials" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", false && "bg-primary/90")}>
            <Quote className="h-4 w-4" />
            Testimonials
          </Link>
          <Link to="/admin/content" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", false && "bg-primary/90")}>
            <Settings className="h-4 w-4" />
            Content
          </Link>
          <Link to="/admin/settings" className={cn("flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium", false && "bg-primary/90")}>
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="mt-6">
          <Link to="/admin/login" onClick={() => {
            // Implement logout logic here, for now just redirect
            // We'll handle logout in the Login component or via a context
          }} className="flex items-center space-x-3 w-full px-3 py-2 rounded-md text-sm font-medium">
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
}

// Helper function for conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}