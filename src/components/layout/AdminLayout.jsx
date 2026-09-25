import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}