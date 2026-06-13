import Link from "next/link";
import { FaLeaf, FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Terms & Conditions — O-Jain",
  description: "Terms and Conditions for O-Jain — Pure Jain & Satvik premix products.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the O-Jain website (ojain.com), you agree to be bound by these Terms & Conditions and our Privacy Policy.",
      "If you do not agree with any part of these terms, please discontinue use of our website immediately.",
      "We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "2. Use of the Website",
    content: [
      "You must be at least 18 years of age to use this website and make purchases.",
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.",
      "You may not use the website to transmit any harmful, offensive, or disruptive content.",
      "We reserve the right to restrict or terminate your access to the website at any time without notice.",
    ],
  },
  {
    title: "3. Product Information",
    content: [
      "All O-Jain products are pure Jain & Satvik — free from onion, garlic, and non-vegetarian ingredients.",
      "We endeavour to keep product descriptions, images, and prices accurate; however, we do not warrant that all information is error-free.",
      "Product availability is subject to change. We reserve the right to discontinue any product at any time.",
    ],
  },
  {
    title: "4. Orders & Payments",
    content: [
      "By placing an order, you confirm that the information you provide is accurate and complete.",
      "All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.",
      "We reserve the right to cancel or refuse any order in cases of pricing errors, suspected fraud, or unavailability.",
      "Payment must be completed at the time of placing the order. Orders will be processed only upon successful payment confirmation.",
    ],
  },
  {
    title: "5. Shipping & Delivery",
    content: [
      "We aim to dispatch orders within 1–3 business days. Delivery timelines depend on the shipping location and carrier.",
      "O-Jain is not responsible for delays caused by courier partners, weather conditions, or other factors beyond our control.",
      "Risk of loss or damage passes to you upon delivery of the product.",
    ],
  },
  {
    title: "6. Returns & Refunds",
    content: [
      "If you receive a damaged or incorrect product, please contact us within 48 hours of delivery at support@ojain.com.",
      "Returns are accepted for products that are unopened, unused, and in their original packaging.",
      "Refunds will be processed within 7–10 business days after the returned product is received and inspected.",
      "We do not accept returns for products that have been opened or used unless they are defective.",
    ],
  },
  {
    title: "7. Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, and branding — is the property of O-Jain and is protected by copyright laws.",
      "You may not reproduce, distribute, or use any content from this website without prior written permission from O-Jain.",
    ],
  },
  {
    title: "8. Vendor Terms",
    content: [
      "Vendors registered on O-Jain must ensure that all listed products are 100% pure Jain & Satvik and accurately described.",
      "O-Jain reserves the right to remove any listing or suspend any vendor account that violates our quality standards or platform policies.",
      "Vendors are responsible for the accuracy of their product information, pricing, and stock availability.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "O-Jain shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.",
      "Our liability is limited to the amount paid for the specific product or service in question.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms & Conditions are governed by the laws of India.",
      "Any disputes shall be subject to the exclusive jurisdiction of the courts located in Bhiwandi, Maharashtra, India.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "For any questions regarding these Terms & Conditions, please reach out to us:",
      "Email: support@ojain.com",
      "Phone: +91 7021833244",
      "Address: Harihar Complex D-108, Mankoli, Bhiwandi 421311, Maharashtra, India",
    ],
  },
];

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>     
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="sec-container py-12 md:py-16">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">

          <p className="text-slate-600 leading-8 text-[15px] mb-10 pb-8 border-b border-gray-100">
            Welcome to <span className="font-bold text-brand-green">O-Jain</span>. These Terms & Conditions govern your use of our website and the purchase of our products. Please read them carefully before using our services. By using our platform, you agree to these terms in full.
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
