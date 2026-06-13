import Link from "next/link";
import { FaLeaf, FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Privacy Policy — O-Jain",
  description: "Privacy Policy for O-Jain — Pure Jain & Satvik premix products.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: When you register or place an order, we collect your name, email address, phone number, and delivery address.",
      "Usage Data: We automatically collect information about how you interact with our website, including pages visited, time spent, and device information.",
      "Payment Information: Payment details are processed securely through our payment partners. We do not store your card details on our servers.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To process and fulfil your orders, including sending confirmation and delivery updates.",
      "To communicate with you about your account, orders, and customer support.",
      "To improve our website, products, and services based on your feedback and usage patterns.",
      "To send you promotional offers and updates about O-Jain products (you may opt out at any time).",
    ],
  },
  {
    title: "3. Sharing of Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share your information with trusted delivery partners and payment processors solely to fulfil your orders.",
      "We may disclose information when required by law or to protect the rights and safety of O-Jain and its users.",
    ],
  },
  {
    title: "4. Cookies",
    content: [
      "Our website uses cookies to enhance your browsing experience and remember your preferences.",
      "You can choose to disable cookies through your browser settings; however, some features of the website may not function properly.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.",
      "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your personal information for as long as necessary to provide our services and comply with legal obligations.",
      "You may request deletion of your account and associated data by contacting us at support@ojain.com.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information held by us.",
      "You may opt out of marketing communications at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
      "To exercise any of these rights, please contact us at support@ojain.com.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
      "We encourage you to review this page periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy, please contact us:",
      "Email: support@ojain.com",
      "Phone: +91 7021833244",
      "Address: Harihar Complex D-108, Mankoli, Bhiwandi 421311, Maharashtra, India",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-bg">

      {/* Header */}
      <div className="bg-brand-green">
        <div className="sec-container py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-8 transition"
          >
            <FaArrowLeft size={12} /> Back to Home
          </Link>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                <FaLeaf className="text-white text-sm" />
              </div>
              <span className="text-white font-black text-2xl tracking-tight">O-Jain</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="sec-container py-12 md:py-16">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">

          <p className="text-slate-600 leading-8 text-[15px] mb-10 pb-8 border-b border-gray-100">
            At <span className="font-bold text-brand-green">O-Jain</span>, your privacy matters to us. This Privacy Policy explains what information we collect, how we use it, and how we keep it safe when you use our website and services. By accessing or using our platform, you agree to the terms described in this policy.
          </p>

          <div className="space-y-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="text-xl font-black text-gray-900 mb-4">{sec.title}</h2>
                <ul className="space-y-3">
                  {sec.content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px] leading-7">
                      <span className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-2.5"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-green font-bold hover:underline text-sm">
            <FaArrowLeft size={11} /> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
