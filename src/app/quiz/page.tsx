import type { Metadata } from "next";
import QuizEngine from "@/components/quiz/QuizEngine";

export const metadata: Metadata = {
  title: "AI Readiness Quiz",
  description:
    "Find out how AI-ready your business is. 10 questions, 2 minutes, personalized recommendations.",
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <QuizEngine />
    </div>
  );
}
