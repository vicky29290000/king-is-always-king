import FileUpload from "./FileUpload";
import DesignConceptSelector from "./DesignConceptSelector";

export default function ProjectManagerDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Project Manager Dashboard</h2>
      <DesignConceptSelector />
      <FileUpload />
      {/* Add more project manager-specific features here */}
    </div>
  );
}
