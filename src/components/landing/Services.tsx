"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Search, Code, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Search,
    title: "AI Audit",
    description:
      "Free 1-hour assessment of your workflows. I find the automation opportunities you're missing.",
    cta: "Book a Call",
    href: "/contact",
  },
  {
    icon: Code,
    title: "Implementation",
    description:
      "Custom AI solutions built for your business. Dashboards, automations, agents, integrations.",
    cta: "Learn More",
    href: "/services",
  },
  {
    icon: Handshake,
    title: "AI Partner",
    description:
      "Ongoing monthly partnership. I build, maintain, and expand your AI capabilities every month.",
    cta: "Learn More",
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What I Do</h2>
          <p className="mt-3 text-muted-foreground">
            From a free audit to a full AI partnership, pick the level that fits.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon size={20} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "mt-4 w-fit px-0"
                  )}
                >
                  {service.cta} &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
