import type { Metadata } from "next";
import Link from "next/link";
import { Background } from "@/components/Background";
import { RootRedirect } from "@/components/RootRedirect";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("en", "", "root");

export default function RootPage() {
  return (
    <>
      <RootRedirect />
      <Background />
      <main className="root-redirect-page" aria-label="Metis language redirect">
        <div className="container root-redirect-inner">
          <p className="root-redirect-kicker">METIS</p>
          <h1>Redirecting to Metis</h1>
          <p>Redirecting to the English homepage. If the redirect does not start, continue manually.</p>
          <Link className="btn btn--primary" href="/en/">
            Continue to /en/ →
          </Link>
        </div>
      </main>
    </>
  );
}
