import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const files = formData.getAll("files") as File[]

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = file.name.replace(/\s/g, "-")
    const filepath = path.join(process.cwd(), "public", "uploads", filename)
    await writeFile(filepath, buffer)
  }

  return NextResponse.json({ message: "Files uploaded successfully" })
}

