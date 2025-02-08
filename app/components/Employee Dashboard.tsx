import FileUpload from "./FileUpload"

export default function EmployeeDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Employee Dashboard</h2>
      <FileUpload />
      {/* Add employee-specific features here */}
    </div>
  )
}

