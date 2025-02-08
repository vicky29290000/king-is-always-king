import FileUpload from "./FileUpload";  // Ensure FileUpload exists in the same directory
import DesignConceptSelector from "./DesignConceptSelector";  // Ensure DesignConceptSelector exists in the same directory

export default function ArchitectDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Architect Dashboard</h2>
      
      {/* Render DesignConceptSelector */}
      <DesignConceptSelector />
      
      {/* Render FileUpload */}
      <FileUpload />
      
      {/* You can add architect-specific features here */}
    </div>
  );
}
