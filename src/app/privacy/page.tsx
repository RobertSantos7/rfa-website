export const metadata = { title: "Privacy Notice | RFA Data Insights" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl prose">
        <h1>Privacy Notice</h1>
        <p>Last Update: {new Date().toLocaleDateString()}</p>
        <p>
          At RFA Data Insights (“RFA”, “we”) we protect your personal information.
          This notice describes what data we collect, for what purpose, and how you can
          exercise your rights.
        </p>
        <h2>Data we collect</h2>
        <ul>
          <li>Contact details: name, email, phone number company and location.</li>
          <li>Operational files: sales, costs, and inventories for analysis.</li>
        </ul>
        <h2>Purposes</h2>
        <ul>
          <li>To provide our analysis services and generate reports.</li>
          <li>Operational files: sales, costs, and inventories for your bussines analisys.</li>
        </ul>
        <h2>Legal basis</h2>
        <p>Your consent and the performance of the contracted service.</p>
        <h2>Retention and security</h2>
        <p>
          We retain data only for as long as necessary. We implement technical
          and organizational measures and sign NDAs upon request.
        </p>
        <h2>Rigths</h2>
        <p>
          You can request access, rectification, or deletion by writing to{" "}
          <a href="mailto:robert@rfadatainsights.com">robert@rfadatainsights.com</a>.
        </p>
        <h2>Transfers</h2>
        <p>We do not sell your data. We share the minimum amount of information with suppliers in order to operate (p.ej. mail/hosting).</p>
      </div>
    </main>
  );
}
