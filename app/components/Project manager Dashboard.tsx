import FileUpload from "./FileUpload"

export default function ProjectManagerDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Project Manager Dashboard</h2>
      <FileUpload />
      {/* Add project management features here */}
    </div>
  )
}

