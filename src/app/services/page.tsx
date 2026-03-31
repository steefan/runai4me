"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "AI Audit",
    badge: "Free",
    price: "Free",
    description:
      "1-hour video call assessing your workflows, data, and processes.",
    deliverable:
      "Written report with 3-5 specific automation opportunities ranked by impact.",
    features: [
      "1-hour deep-dive call",
      "Workflow and data assessment",
      "Automation opportunity report",
      "Priority ranking by ROI",
      "No commitment required",
    ],
    cta: "Book Your AI Audit",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Implementation",
    badge: "Most Popular",
    price: "From 1,500 EUR",
    description:
      "Custom AI solutions — dashboards, data migration, workflow automation, AI agents, integrations.",
    deliverable: "Most projects delivered in 2-4 weeks.",
    features: [
      "Custom-built for your business",
      "Dashboards and data systems",
      "Workflow automation",
      "AI agents and integrations",
      "Training for your team",
      "30-day support after delivery",
    ],
    cta: "Let's Discuss Your Project",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "AI Partner",
    badge: "Ongoing",
    price: "From 500 EUR/mo",
    description:
      "Ongoing AI development partnership with a structured monthly cadence.",
    deliverable: "Continuous improvement, every month.",
    features: [
      "Week 1: Alignment — review KPIs, adjust priorities",
      "Week 2: Discovery — identify new opportunities",
      "Week 3: Build — implement the highest-impact solution",
      "Week 4: Training + Report — train your team, deliver results",
      "Priority support",
      "Up to 2 feature builds per month",
    ],
    cta: "Become an AI Partner",
    href: "/contact",
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From a free audit to a full AI partnership. Pick the level that fits.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${
              tier.highlighted
                ? "border-primary/50 shadow-lg ring-1 ring-primary/20"
                : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <Badge variant={tier.highlighted ? "default" : "secondary"}>
                  {tier.badge}
                </Badge>
              </div>
              <p className="mt-2 text-3xl font-bold">{tier.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground/70">
                {tier.deliverable}
              </p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <ul className="flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={cn(
                  buttonVariants({
                    variant: tier.highlighted ? "default" : "outline",
                  }),
                  "mt-8 w-full gap-2"
                )}
              >
                {tier.cta}
                <ArrowRight size={16} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold">Not sure which to pick?</h2>
        <p className="mt-3 text-muted-foreground">
          Start with the free AI Audit. In one hour, I&apos;ll show you exactly
          where AI can save you time and money. No commitment, no pitch.
        </p>
        <Link
          href="/quiz"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-6 gap-2"
          )}
        >
          Or take the 2-minute AI Readiness Quiz
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
