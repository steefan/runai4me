import { ClipboardCheck, Wrench, Zap } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Take the quiz or book a call",
    description: "We assess your current workflows and find what's costing you time and money.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "I build the solution",
    description: "Custom-built for your specific needs, not a template. Delivered in weeks, not months.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Your business runs smarter",
    description: "Less manual work, fewer errors, more time for what matters. Ongoing support included.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
        <p className="mt-3 text-muted-foreground">
          Three steps from manual chaos to AI-powered operations.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {steps.map((item) => (
          <div key={item.step} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <item.icon size={24} className="text-foreground" />
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Step {item.step}
            </p>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
