import Layout from '../components/Layout'
import Link from 'next/link'

const sections = [
  {
    title: 'About the Service',
    content: 'Magic Door is a smart gateway service provided by 10Botics Ltd. It is designed to help users access geo-restricted AI tools without the use of a VPN. The Service is delivered via a Chrome extension. It is available exclusively to Customers and their members holding a valid subscription. Approved Tools means the third-party AI tools expressly listed in the applicable order form, quotation, statement of work, or other written confirmation between 10Botics Ltd and the Customer for that subscription term. Only Approved Tools are within the compatibility scope of the Service for that Customer. 10Botics Ltd does not publish a universal list of supported third-party tools, and tool compatibility may vary by Customer configuration, environment, and subscription scope.',
  },
  {
    title: 'Eligibility',
    content: 'The Service is available only to users with a valid subscription, free trial, or approved free access. Users must sign in with an approved Google account (email address) and must have been added to the member list by a subscription administrator or 10Botics Ltd. 10Botics Ltd reserves the right to refuse or terminate access for any user at its discretion.',
  },
  {
    title: 'Concurrent Connection Policy',
    content: 'Each account may only be connected on one device at a time under the Basic and Plus plans. Simultaneous connections from multiple devices are only permitted under the MAX plan, subject to the concurrent connection limits specified in the applicable plan description or order form. Logging in on a new device beyond the permitted limit will automatically terminate the oldest existing active connection.',
  },
  {
    title: 'Prohibited Activities',
    content: 'Users must not share their account or active connection with others; use the Service for commercial purposes; attempt to circumvent the Service\'s security measures or usage limits; use the Service for any unlawful activity or in a way that infringes on the rights of others; or reverse-engineer or gain unauthorised access to the Service. Violations may result in immediate termination of access without refund.',
  },
  {
    title: 'Privacy Policy',
    content: 'The Service collects only the minimum data required to operate, including the user\'s email address and IP address at the time of connection. Connection sessions are encrypted using industry-standard protocols. 10Botics Ltd preserves basic traffic logs (such as timestamps, data volume, and domains accessed) for security purposes and to ensure compliance with local laws and regulations. However, 10Botics Ltd does not log, store, or have the technical ability to review the specific content of your interactions (such as prompts or responses) within the AI tools. 10Botics Ltd will never sell or share your data with third parties.',
  },
  {
    title: 'Service Availability and Disclaimer',
    content: 'The Service is provided "as is". 10Botics Ltd does not guarantee uninterrupted or error-free availability. The Service may be temporarily unavailable due to maintenance, technical issues, or changes made by third-party AI platforms. Use of the Service may involve accessing third-party platforms (e.g., Google, OpenAI) in ways that may conflict with their respective Terms of Service. The Customer and its users acknowledge that they use Magic Door at their own risk. 10Botics Ltd accepts no liability for any direct or indirect loss, including but not limited to the suspension, termination, or banning of any third-party accounts, arising from the use of or inability to use the Service. It is the Customer\'s responsibility to ensure their use of the Service complies with the policies of any third-party tools they access.',
  },
  {
    title: 'Subscription and Fees',
    content: 'Subscription fees, billing cycles, and payment terms are governed by the specific subscription agreement signed between 10Botics Ltd and the Customer. 10Botics Ltd reserves the right to adjust pricing and will notify subscription administrators in advance of any changes.',
  },
  {
    title: 'Refund Policy',
    content: '8.1 Service Incompatibility (Approved Tools Only): In the event that an Approved Tool becomes permanently incompatible or inaccessible through Magic Door during an active paid annual subscription term, the Customer may request termination of the affected subscription and a partial refund. Free trials and free plans are not eligible for refunds. 8.2 Definition of Incompatibility: "Permanently incompatible" is defined as a continuous service failure exceeding 7 consecutive business days (excluding Saturdays, Sundays, and Hong Kong public holidays), provided the issue is not caused by Customer-side configuration, network restrictions, endpoint policies, account restrictions, or misuse. 8.3 Pro-rata Calculation: Refunds are calculated on a pro-rata basis based on the number of full days remaining in the annual subscription period, starting from the date a formal written refund request is received by 10Botics Ltd. Formula: (Remaining Days / 365) × Annual Subscription Fee. 8.4 No Administrative Fees: 10Botics Ltd will not charge administrative or processing fees for refunds issued under Section 8.1. 8.5 Tools Outside Scope: Any third-party AI tool not included in the Customer\'s Approved Tools is outside the Service compatibility commitment and is not eligible for remedies under this Section 8. 8.6 Geo-restriction Removal: In the event that a third-party AI tool removes or lifts its geo-restriction such that the tool becomes directly accessible without Magic Door, this does not constitute service incompatibility within the meaning of Section 8.2. No refund shall be payable in such circumstances. Magic Door\'s service obligation is limited to providing a gateway for accessing geo-restricted tools; the continuation or removal of any third-party platform\'s geo-restriction policy is beyond the control of 10Botics Ltd and does not affect the validity of the subscription.',
  },
  {
    title: 'Changes to These Terms',
    content: '10Botics Ltd reserves the right to update these Terms at any time. Subscription administrators will be notified by email when changes are made. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.',
  },
  {
    title: 'Governing Law and Jurisdiction',
    content: 'These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Both parties agree to submit to the exclusive jurisdiction of the courts of Hong Kong.',
  },
  {
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, 10Botics Ltd\'s total aggregate liability arising out of or in connection with these Terms or the Service shall not exceed the total amount of fees actually paid by the Customer to 10Botics Ltd under the applicable subscription term giving rise to the claim. 10Botics Ltd shall not be liable for any indirect, special, consequential, incidental, exemplary, or punitive loss or damage, including loss of business, revenue, profit, contracts, anticipated savings, goodwill, data, or use, even if advised of the possibility of such loss. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.',
  },
  {
    title: 'Force Majeure',
    content: '10Botics Ltd shall not be liable for any delay or failure to perform its obligations under these Terms to the extent caused by events beyond its reasonable control, including acts of God, natural disasters, fire, flood, storm, earthquake, war, terrorism, civil unrest, labour disputes, failure of utilities or telecommunications, government action, or changes imposed by third-party platforms.',
  },
  {
    title: 'Confidentiality',
    content: 'Each party shall keep confidential and not disclose to any third party any non-public information received from the other party in connection with these Terms, except to its employees, professional advisers, contractors, or affiliates who need to know such information for performance of obligations. This does not apply to information that is or becomes publicly available through no breach of these Terms, was lawfully known before disclosure, is lawfully received from a third party, or is independently developed. If disclosure is required by law, the receiving party may disclose only to the extent required and shall promptly notify the disclosing party where legally permitted. These obligations survive termination or expiry of these Terms.',
  },
  {
    title: 'Intellectual Property Rights',
    content: 'All intellectual property rights in and to the Service, including software, documentation, branding, and related materials, are and remain the exclusive property of 10Botics Ltd and its licensors. Except for the limited right to use the Service during an active subscription, no rights are assigned, transferred, or licensed to the Customer. Where the Service includes third-party components, any rights granted are subject to the applicable third-party terms.',
  },
  {
    title: 'Indemnity',
    content: 'The Customer shall indemnify, defend, and hold harmless 10Botics Ltd and its officers, directors, employees, agents, and subcontractors from and against any claims, liabilities, losses, damages, costs, and expenses arising out of or in connection with: (a) the Customer\'s or its users\' breach of these Terms; (b) negligence, wilful misconduct, or unlawful acts by the Customer or its users; or (c) the Customer\'s use of the Service in violation of applicable law or third-party terms.',
  },
  {
    title: 'Contact Us',
    content: 'If you have any questions about these Terms, please contact us at info@10botics.com.',
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
            <a href="mailto:info@10botics.com" className="text-indigo-600 hover:underline">
              contact us by email
            </a>
            .
          </p>
        </div>

      </div>
    </Layout>
  )
}
