import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about AI in business, automation, and real-world case studies.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Articles about AI in business, automation, and real-world case studies.
      </p>

      <div className="mt-16 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <FileText size={28} className="text-muted-foreground" />
        </div>
        <h2 className="mt-4 text-xl font-semibold">Coming soon</h2>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          First articles are on the way. In the meantime, take the{" "}
          <a href="/quiz" className="underline hover:text-foreground">
            AI Readiness Quiz
          </a>{" "}
          to see where AI can help your business.
        </p>
      </div>
    </div>
  );
}
