import FileUpload from "./FileUpload"
import DesignConceptSelector from "./DesignConceptSelector"

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Client Dashboard</h2>
      <DesignConceptSelector />
      <FileUpload />
      {/* Add more client-specific features here */}
    </div>
  )
}

