export default async function CheckoutLanding({ searchParams }) {
  const params = await searchParams;
  const vendorId = params?.vendorId ?? null;
  const items = params?.items ?? null;

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-3">Checkout (Placeholder)</h1>
      <p className="text-sm text-black/60 mb-4">
        Replace with Stripe Checkout redirect via backend. Showing debug values for now.
      </p>
      <div className="rounded-md border border-black/[.08] p-4 text-sm">
        <div><span className="font-medium">vendorId:</span> {vendorId}</div>
        <div className="mt-2">
          <div className="font-medium mb-1">items (json):</div>
          <pre className="whitespace-pre-wrap break-all text-xs bg-black/[.03] p-2 rounded">{items}</pre>
        </div>
      </div>
    </div>
  );
}


