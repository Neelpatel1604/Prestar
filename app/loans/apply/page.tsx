import { Layout } from '@/components/Layout'
import { LoanApplicationForm } from '@/components/loans/LoanApplicationForm'

export default function LoanApplicationPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <LoanApplicationForm />
      </div>
    </Layout>
  )
} 