import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";

export function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="font-display text-3xl">Dashboard</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Total Massages</h3>
            <p className="text-2xl">12</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Gallery Images</h3>
            <p className="text-2xl">5</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Testimonials</h3>
            <p className="text-2xl">3</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Website Sections</h3>
            <p className="text-2xl">8</p>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}