"use client"

import { useState } from "react"

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      
      // Optional: File size/type validation before setting state
      const validFiles = selectedFiles.filter((file) =>
        file.type === "application/pdf" || file.type.startsWith("image/")
      )

      setFiles(validFiles)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (files.length === 0) {
      alert("Please select files to upload.")
      return
    }

    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("Files uploaded successfully!")
        setFiles([]) // Clear the file list after successful upload
      } else {
        alert("File upload failed.")
      }
    } catch (error) {
      console.error("Error uploading files:", error)
      alert("Error occurred while uploading the files.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="files" className="block mb-1">
          Upload Files (PDF, JPEG)
        </label>
        <input
          type="file"
          id="files"
          multiple
          accept=".pdf,.jpg,.jpeg" // Restrict to PDF and JPEG file types
          onChange={handleFileChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Upload Files
      </button>
    </form>
  )
}
