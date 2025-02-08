import { type NextRequest, NextResponse } from "next/server"
import AWS from "aws-sdk"

// Initialize S3
const s3 = new AWS.S3()

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const files = formData.getAll("files") as File[]

  // Upload files to S3
  const promises = files.map(async (file) => {
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = file.name.replace(/\s/g, "-")

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // Make sure to add your bucket name to the .env
      Key: `uploads/${filename}`,
      Body: buffer,
      ContentType: file.type,
    }

    return s3.upload(params).promise()
  })

  await Promise.all(promises)

  return NextResponse.json({ message: "Files uploaded successfully" })
}
