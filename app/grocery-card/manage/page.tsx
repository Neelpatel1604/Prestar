import { Layout } from '@/components/Layout'
import { GroceryCardManagement } from '@/components/grocery/GroceryCardManagement'

export default function GroceryCardManagementPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <GroceryCardManagement />
      </div>
    </Layout>
  )
} 