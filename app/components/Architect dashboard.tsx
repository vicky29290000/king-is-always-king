import FileUpload from "./FileUpload"
import DesignConceptSelector from "./DesignConceptSelector"

export default function ArchitectDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Architect Dashboard</h2>
      <DesignConceptSelector />
      <FileUpload />
      {/* Add architect-specific features here */}
    </div>
  )
}

