"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import ClientDashboard from "../components/Client Dashboard"
import ProjectManagerDashboard from "../components/Project manager Dashboard"
import ArchitectDashboard from "../components/Architect dashboard"
import EmployeeDashboard from "../components/Employee Dashboard"
import SuperAdminDashboard from "../components/Super admin Dashboard"

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
        return <Client Dashboard />
      case "project Manager":
        return <Project manager Dashboard />
      case "architect":
        return <Architect dashboard />
      case "employee":
        return <Employee Dashboard />
      case "superAdmin":
        return <Super admin Dashboard />
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
