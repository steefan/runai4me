"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Not sure if AI can help your business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take the free 2-minute quiz and find out where your biggest
            automation opportunities are.
          </p>
          <Link
            href="/quiz"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2")}
          >
            Take the AI Readiness Quiz
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
