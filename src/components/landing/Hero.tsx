"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles size={14} />
            AI integrations for real businesses
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI solutions that actually work{" "}
            <span className="text-muted-foreground">for your business</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            I build AI integrations, automations, and intelligent agents that
            replace spreadsheets, eliminate manual work, and save you money.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quiz"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Take the AI Readiness Quiz
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See Services
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>
    </section>
  );
}
