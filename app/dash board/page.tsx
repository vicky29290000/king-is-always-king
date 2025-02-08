"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import ClientDashboard from "../components/ClientDashboard"
import ProjectManagerDashboard from "../components/ProjectManagerDashboard"
import ArchitectDashboard from "../components/ArchitectDashboard"
import EmployeeDashboard from "../components/EmployeeDashboard"
import SuperAdminDashboard from "../components/SuperAdminDashboard"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div>Loading...</div> // You can replace this with a spinner or animation for a better UX
  }

  if (!session?.user) {
    return <div>Please log in to access your dashboard.</div> // Display a message if no session is available
  }

  const renderDashboard = () => {
    switch (session.user.role) {
      case "client":
        return <ClientDashboard />
      case "projectManager":
        return <ProjectManagerDashboard />
      case "architect":
        return <ArchitectDashboard />
      case "employee":
        return <EmployeeDashboard />
      case "superAdmin":
        return <SuperAdminDashboard />
      default:
        return <div>Unknown role</div> // You can enhance this to show a 404 page or a more detailed error message
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>Hello, {session.user.name}!</p>
      <p>Your role is: {session.user.role}</p>
      {renderDashboard()}
    </div>
  )
}
