import { Loader2 } from "lucide-react"

export function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeMap = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  }

  return (
    <div className="flex justify-center items-center p-4">
      <Loader2 className={`${sizeMap[size]} animate-spin text-blue-600`} />
    </div>
  )
}

export function PageLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <LoadingSpinner size="large" />
      <p className="mt-4 text-gray-600">We're getting everything ready...</p>
    </div>
  )
} 