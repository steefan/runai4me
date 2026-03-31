"use client";

import type { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";

interface Props {
  question: QuizQuestionType;
  onAnswer: (score: number) => void;
}

export default function QuizQuestion({ question, onAnswer }: Props) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
      <h2 className="text-xl font-semibold leading-relaxed">
        {question.question}
      </h2>

      <div className="mt-6 space-y-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => onAnswer(option.score)}
            className="w-full rounded-lg border border-border bg-background px-5 py-4 text-left text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted/50 active:bg-muted"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
