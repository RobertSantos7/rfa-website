"use client";

import { Briefcase, BarChart, DollarSign, FileText, RefreshCcw, TrendingUp } from "lucide-react";
import { useState } from "react";
import PlanModal from "./components/PlanModal";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";


type PlanName = "Basic" | "Standard" | "Premium";

const services =
 [
  { icon: <BarChart className="w-8 h-8 text-green-700" />, title: "Financial Statement Analysis", description: "In-depth analysis of your business income, expenses, and profit." },
  { icon: <DollarSign className="w-8 h-8 text-green-700" />, title: "Cash Flow Tracking", description: "Visual and tabular reports on monthly and weekly cash flow." },
  { icon: <TrendingUp className="w-8 h-8 text-green-700" />, title: "Product Profitability", description: "Analysis by product, category, and subcategory." },
  { icon: <RefreshCcw className="w-8 h-8 text-green-700" />, title: "Inventory Turnover", description: "Detect stock rotation urgency and performance." },
  { icon: <Briefcase className="w-8 h-8 text-green-700" />, title: "3-6 Month Financial Projections", description: "Plan for future growth with data-backed projections." },
  { icon: <FileText className="w-8 h-8 text-green-700" />, title: "Customized Reports (PDF/Excel)", description: "Tailored reports in multiple formats for decision-making." },
];

const pricingPlans: { name: PlanName; price: number; features: string[] }[] = [
  {
    name: "Basic",
    price: 249.99,
    features: [
      "Analysis of income and expenses.",
      "Categorization of expenses.",
      "Monthly and weekly balance sheet.",
      "Visual report in PDF format.",
      "Support via email.",
      "Inventory rotation.",
      "Cash flow analysis.",
      "Monthly consultation (30 min) via Zoom.",
    ],
  },
  {
    name: "Standard",
    price: 299.99,
    features: [
      "Profitability by product line.",
      "Identification of unnecessary expenses.",
      "Access to historical reports.",
      "Price and margin analysis.",
    ],
  },
  {
    name: "Premium",
    price: 349.99,
    features: [
      "Financial projection (3–6 months).",
      "Customer and product segmentation.",
      "Recommendations report.",
      "WhatsApp support.",
      "Extended consultation (60 min).",
      "Detection of hidden patterns.",
    ],
  },
];

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlanClick = (planName: PlanName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };


  return (
    <>
    <Navbar />
   
      {/* Hero */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-[#FAF9F7] text-gray-800">
        <div className="text-center space-y-6">
          <img src="/logo.png" alt="RFA Logo" className="h-80 mx-auto" />
          <h1 className="text-6xl font-bold text-[#082A49]">RFA Data Insights</h1>
          <p className="text-xl text-[#2D732D]">Understand your numbers. Improve your results.</p>

          {/* Contact Us: NO abre modal */}
          <button
            onClick={() => { window.location.href = "/contact"; }}
            className="mt-6 px-8 py-4 bg-[#2ED732] text-white rounded-xl hover:bg-[#1B5E20] transition text-lg"
          >
            Contact Us
          </button>
        </div>
      </main>

      {/* Services */}
      <section className="mt-20 px-6">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F0F7F4] py-20">
        <h2 className="text-3xl font-bold text-center text-[#082A49] mb-2">Compare Our Pricing Plans</h2>
        <p className="text-center text-gray-600 mb-12">Find the perfect fit for your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="relative bg-[#0C123D] text-white rounded-3xl p-8 shadow-lg group hover:scale-[1.03] transition">
              <div className="absolute top-4 left-4 bg-white text-[#0C123D] px-4 py-1 rounded-full font-semibold">
                {plan.name}
              </div>

              <div className="text-center mt-10 mb-6">
                <span className="text-3xl font-bold text-green-400">${plan.price.toFixed(2)}</span>
                <p className="text-sm text-gray-300">per month</p>
              </div>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanClick(plan.name)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl mt-4 w-full"
                aria-label={`Subscribe to ${plan.name}`}
                title={`Subscribe to ${plan.name}`}
              >
                To subscribe to a plan
              </button>
            </div>
          ))}
        </div>

        {/* Modal SOLO para planes (nota: usamos selectedPlan! para satisfacer TS) */}
        {isModalOpen && selectedPlan && (
          <PlanModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            planName={selectedPlan!}
          />
        )}
      </section>
      <section id="services" className="mt-20 px-6">
  {/* ...tu sección de servicios... */}
</section>

<section id="pricing" className="bg-[#F0F7F4] py-20">
  {/* ...tu sección de precios (cards + PlanModal)... */}
</section>
<HowItWorks />
<FAQs />
<Footer />

    </>
  );
}

