export const metadata = {
  title: "About Us | RFA Data Insights",
  description: "Actionable financial analysis for food and retail businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-[#082A49]">About RFA Data Insights</h1>
        <p className="text-gray-700">
          We turn your data into clear decisions. We help businesses understand their 
          cash flow, profiability per product, and inventory turnover to
          improve margings and grow sustainably
        </p>
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="text-gray-700">
          Democratize practical financial analysis so that any business can
          make decisions with confidence.
        </p>
        <h2 className="text-2xl font-semibold">Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Accuracy and clarity</li>
          <li>Data privacy and security</li>
          <li>Actionable impact</li>
        </ul>
        <h2 className="text-2xl font-semibold">Privacy</h2>
        <p className="text-gray-700">
          We sign NDAs upon request. Your data is stored encrypted and you can request its
          deletion at any time.
        </p>
      </div>
    </main>
  );
}
