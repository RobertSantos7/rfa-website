export default function HowItWorks() {
  const steps = [
    { t: "1) Diagnosis", d: "15-30 min call to understand your business and objectives." },
    { t: "2) Data", d: "We receive your files (Excel/CSV) or connect to your systems." },
    { t: "3) Análysis", d: "Cleaning, categorization, and profitability and cash flow models." },
    { t: "4) Delivery", d: "Clear report (PDF/Excel) and personalized session on actionable findings and specific customer questions." },
    { t: "5) Support", d: "Monthly follow-up and continuous improvements to increase profits and reduce costs." },
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#082A49] mb-10">
          How it works
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-xl font-semibold mb-2">{s.t}</div>
              <p className="text-gray-600 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
