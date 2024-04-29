export const CLOUDINARY_URL = "http://res.cloudinary.com/stadio/image/upload"

export function cloudinaryFileUrl(uploadId: string): string {
  return `${CLOUDINARY_URL}/${uploadId}`
}
