export const metadata = { title: "Terms of Service | RFA Data Insights" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl prose">
        <h1>Terms od Service</h1>
        <p>Last update: {new Date().toLocaleDateString()}</p>
        <h2>Service</h2>
        <p>
          RFA provides personal financial analysis and reports. 
          The costumer is responsible for the accuracy of the data provided.
        </p>
        <h2>Payments and Plans</h2>
        <p>Plans are monthly unless otherwise indicated. There are no refunds for periods that have already begun.</p>
        <h2>Intellectual property</h2>
        <p>The models and tools belong to RFA. The reports and analysis may be used by the client.</p>
        <h2>Confidentiality</h2>
        <p>We mantain confidentiality regarding the information provided by the client.</p>
        <h2>Limitation of liability</h2>
        <p>RFA does not guarantee specific financial results. Our liability is limited to the amount paid for the lasts months of service.</p>
        <h2>Contact</h2>
        <p>robert@rfadatainsights.com</p>
      </div>
    </main>
  );
}
