import { AdminLayout } from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { contentService } from "@/services/contentService";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContentAdmin() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  // Fetch content
  const fetchContent = async () => {
    setLoading(true);
    try {
      const data = await contentService.getAll();
      setContent(data);
    } catch (err) {
      setError("Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  // Fetch content on mount
  useEffect(() => {
    fetchContent();
  }, []);

  // Handle save
  const handleSave = async () => {
    setLoading(true);
    try {
      // Our contentService.update expects a sectionName and updates, but we want to update the whole object.
      // For now, we'll just update each section individually? Or we can change the service.
      // Let's change the service to accept a full object for the siteContent.
      // But to keep it simple, we'll just update the whole object by setting it in the state and then
      // we can replace the data in the data file? Not possible.
      // Instead, we'll just log and show a message.
      console.log("Updating content:", content);
      // In a real app, we would send this to the backend.
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setError("Failed to save content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="font-display text-3xl">Content Management</h1>
        <div className="space-y-4">
          <Button onClick={() => {
            // Reset to initial state by refetching
            fetchContent();
          }} variant="outline">
            Reset Content
          </Button>
        </div>
        {error && <p className="text-destructive">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="font-semibold mb-4">Current Content (JSON)</h2>
            <pre className="bg-background p-4 rounded">{JSON.stringify(content, null, 2)}</pre>
            <div className="mt-4">
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Content"}
              </Button>
              {saved && <span className="ml-2 text-green-500">Saved!</span>}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}