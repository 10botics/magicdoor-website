import Layout from '../components/Layout'
import Link from 'next/link'

const sections = [
  {
    title: 'About the Service',
    content: 'Magic Door is a smart gateway service designed to help users in Hong Kong access geo-restricted AI tools without the use of a VPN. The Service is delivered via a Chrome extension. It is available exclusively to Customers and their members holding a valid subscription.',
  },
  {
    title: 'Eligibility',
    content: 'The Service is available only to users with a valid subscription (including any free trials or free plans). Users must sign in with an approved Google account (email address) and must have been added to the member list by a subscription administrator. 10botics reserves the right to refuse or terminate access for any user at its discretion.',
  },
  {
    title: 'Prohibited Activities',
    content: 'Users must not: (1) share their account or active connection with others; (2) use the Service for commercial purposes; (3) attempt to circumvent the Service\'s security measures or usage limits; (4) use the Service for any unlawful activity or in a way that infringes on the rights of others; (5) reverse-engineer or gain unauthorised access to the Service. Violations may result in immediate termination of access without refund.',
  },
  {
    title: 'Privacy Policy',
    content: 'The Service collects only the minimum data required to operate, including the user\'s email address and IP address at the time of connection. This data is used solely for identity verification and session management, and is never sold or shared with third parties. Connection sessions and traffic are end-to-end encrypted. 10botics does not log or review user activity within AI tools.',
  },
  {
    title: 'Service Availability and Disclaimer',
    content: 'The Service is provided "as is". 10botics does not guarantee uninterrupted or error-free availability. The Service may be temporarily unavailable due to maintenance, technical issues, or changes made by third-party AI platforms. Use of the Service may involve accessing third-party platforms (e.g., Google, OpenAI) in ways that may conflict with their respective Terms of Service. The Customer and its users acknowledge that they use Magic Door at their own risk. 10botics accepts no liability for any direct or indirect loss, including but not limited to the suspension, termination, or banning of any third-party accounts, arising from the use of or inability to use the Service.',
  },
  {
    title: 'Subscription and Fees',
    content: 'Subscription fees, billing cycles, and payment terms are governed by the specific subscription agreement signed between 10botics and the Customer. 10botics reserves the right to adjust pricing and will notify subscription administrators in advance of any changes.',
  },
  {
    title: 'Refund Policy',
    content: 'In the event that a third-party AI tool previously supported by the Service becomes permanently incompatible or inaccessible through Magic Door (defined as a continuous service failure exceeding 7 consecutive business days, excluding weekends and HK public holidays), Customers holding a paid annual subscription may request a partial refund. Refunds are calculated on a pro-rata basis from the date of written request. Free trials and free plans are not eligible for refunds. No administrative fees will be charged for such refunds.',
  },
  {
    title: 'Changes to These Terms',
    content: '10botics reserves the right to update these Terms at any time. Subscription administrators will be notified by email when changes are made. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.',
  },
  {
    title: 'Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Both parties agree to submit to the exclusive jurisdiction of the courts of Hong Kong.',
  },
]

export default function Terms() {
  return (
    <Layout
      title="Terms of Service — Magic Door"
      description="Magic Door Terms of Service and Privacy Policy."
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Terms of Service</span>
        </nav>

        <div className="mb-14">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {index + 1}. {section.title}
              </h2>
              <p className="text-gray-500 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            For any enquiries, please{' '}
            <a href="mailto:info@magicdoor.cc" className="text-indigo-600 hover:underline">
              contact us by email
            </a>
            .
          </p>
        </div>

      </div>
    </Layout>
  )
}
