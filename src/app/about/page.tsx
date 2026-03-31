import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI is not a solution — it's a tool. When tools become mature, they become infrastructure. Infrastructure needs integrators.",
};

const tools = [
  "Claude AI",
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Make.com",
  "n8n",
  "Tailwind CSS",
  "Vercel",
  "Node.js",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>

      <div className="mt-10 space-y-6 text-muted-foreground">
        <p className="text-lg">
          I build AI solutions for businesses that are tired of spreadsheets,
          manual processes, and tools that don&apos;t talk to each other.
        </p>

        <p>
          My work is simple: I look at how your business operates, find the
          parts that waste your time or risk errors, and build systems that fix
          them. Dashboards that replace Excel files. Automations that eliminate
          copy-paste. AI agents that handle repetitive work so your team can
          focus on what matters.
        </p>

        <p>
          Every solution I build is custom. Not a template, not a plugin, not a
          SaaS you have to bend your workflow around. I build for your specific
          processes, your specific data, your specific needs.
        </p>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl font-bold">Philosophy</h2>
        <blockquote className="mt-6 border-l-4 border-primary/30 pl-6 text-lg italic text-muted-foreground">
          &ldquo;AI is not a solution — it&apos;s a tool. When tools become
          mature, they become infrastructure. Infrastructure needs
          integrators.&rdquo;
        </blockquote>
        <p className="mt-4 text-muted-foreground">
          I believe AI should serve your business, not the other way around. The
          goal is never &ldquo;use more AI&rdquo; — it&apos;s to make your
          operations faster, cheaper, and more reliable. Sometimes that means a
          simple database replacing a broken spreadsheet. Sometimes it means an
          AI agent handling customer inquiries at 3 AM. The right tool depends
          on the problem.
        </p>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <p className="mt-3 text-muted-foreground">
          Tools I use to build solutions:
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
