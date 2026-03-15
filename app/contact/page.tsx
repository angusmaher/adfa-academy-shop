export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        For merchandise enquiries, product updates, or academy group requests, use the contact details below.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">General Enquiries</h2>
          <p className="mt-3 text-gray-600">academyshop@adfa.edu.au</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Merchandise Requests</h2>
          <p className="mt-3 text-gray-600">Submit requests for new products, clubs, or squadron ranges.</p>
        </div>
      </div>
    </section>
  );
}