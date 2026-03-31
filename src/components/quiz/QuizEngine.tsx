"use client";

import { useState } from "react";
import { quizQuestions, getQuizResult } from "@/lib/quiz-data";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type QuizState = "intro" | "questions" | "results";

export default function QuizEngine() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function handleAnswer(score: number) {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setState("results");
    }
  }

  function handleRestart() {
    setState("intro");
    setCurrentQ(0);
    setAnswers([]);
  }

  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const result = getQuizResult(totalScore);

  if (state === "intro") {
    return (
      <div className="mx-auto max-w-xl text-center">
        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How AI-Ready Is Your Business?
          </h1>
          <p className="mt-4 text-muted-foreground">
            10 questions. 2 minutes. Get a personalized assessment of where AI
            can save you time and money.
          </p>
          <Button
            size="lg"
            className="mt-8 gap-2"
            onClick={() => setState("questions")}
          >
            Start the Quiz
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    );
  }

  if (state === "questions") {
    return (
      <div className="mx-auto max-w-xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQ + 1} of {quizQuestions.length}
            </span>
            <span>
              {Math.round(((currentQ + 1) / quizQuestions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{
                width: `${((currentQ + 1) / quizQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <QuizQuestion
          question={quizQuestions[currentQ]}
          onAnswer={handleAnswer}
        />
      </div>
    );
  }

  return (
    <QuizResults
      score={totalScore}
      maxScore={quizQuestions.length * 3}
      result={result}
      onRestart={handleRestart}
    />
  );
}
