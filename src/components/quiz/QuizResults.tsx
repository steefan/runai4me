"use client";

import { useState } from "react";
import Link from "next/link";
import type { QuizResult } from "@/lib/quiz-data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, RotateCcw, CheckCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  score: number;
  maxScore: number;
  result: QuizResult;
  onRestart: () => void;
}

const tierColors = {
  "high-opportunity": "text-orange-600",
  growing: "text-blue-600",
  advanced: "text-green-600",
};

export default function QuizResults({
  score,
  maxScore,
  result,
  onRestart,
}: Props) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, score, tier: result.tier }),
      });
      setEmailSent(true);
    } catch {
      // Fail silently for now
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
        {/* Score */}
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Your Score
          </p>
          <p className="mt-1 text-5xl font-bold">
            {score}
            <span className="text-2xl text-muted-foreground">/{maxScore}</span>
          </p>
        </div>

        {/* Result tier */}
        <div className="mt-8">
          <h2
            className={`text-2xl font-bold ${tierColors[result.tier]}`}
          >
            {result.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{result.description}</p>
        </div>

        {/* Recommendation */}
        <div className="mt-6 rounded-lg bg-muted/50 p-4">
          <p className="text-sm font-semibold">My Recommendation:</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {result.recommendation}
          </p>
        </div>

        {/* CTA to service */}
        <Link
          href={result.serviceHref}
          className={cn(buttonVariants(), "mt-6 w-full gap-2")}
        >
          {result.service}
          <ArrowRight size={16} />
        </Link>

        {/* Email capture */}
        <div className="mt-8 border-t border-border/40 pt-6">
          {emailSent ? (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle size={16} />
              Thanks! Check your inbox for your detailed AI roadmap.
            </div>
          ) : (
            <>
              <p className="text-sm font-medium">
                Get your detailed AI roadmap sent to your inbox
              </p>
              <form
                onSubmit={handleEmailSubmit}
                className="mt-3 flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="sm" disabled={loading} className="gap-1">
                  <Mail size={14} />
                  {loading ? "..." : "Send"}
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Restart */}
        <button
          onClick={onRestart}
          className="mt-6 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <RotateCcw size={12} />
          Retake quiz
        </button>
      </div>
    </div>
  );
}
