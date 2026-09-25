import { Bell, MessageCircle, User } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5" />
        <MessageCircle className="h-5 w-5" />
        <User className="h-5 w-5" />
      </div>
      <div className="text-right">
        <span className="text-sm">Welcome, Admin</span>
      </div>
    </header>
  );
}