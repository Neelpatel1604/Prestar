import { PageLoading } from "@/components/ui/loading"
import { Layout } from "@/components/Layout"

export default function Loading() {
  return (
    <Layout>
      <div className="container mx-auto">
        <PageLoading />
      </div>
    </Layout>
  )
} 