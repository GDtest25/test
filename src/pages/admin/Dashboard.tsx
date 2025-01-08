import { useState } from 'react';
import { AdminNav } from '../../components/admin/navigation/AdminNav';
import { ProjectManagement } from '../../components/admin/projects/ProjectManagement';
import { ReviewManagement } from '../../components/admin/ReviewManagement';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'projects'>('projects');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Add vertical spacing between header and navigation */}
          <div className="py-8">
            <AdminNav activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="mt-8">
              {activeTab === 'projects' ? (
                <ProjectManagement />
              ) : (
                <ReviewManagement />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}