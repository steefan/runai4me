export interface QuizOption {
  label: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How does your team track customer or client data?",
    options: [
      { label: "Spreadsheets or paper", score: 1 },
      { label: "Basic software like a simple CRM", score: 2 },
      { label: "Integrated digital system", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How much time does your team spend on repetitive tasks daily?",
    options: [
      { label: "More than 3 hours", score: 1 },
      { label: "1-3 hours", score: 2 },
      { label: "Less than 1 hour", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How do you handle customer inquiries outside business hours?",
    options: [
      { label: "We don't — they wait until morning", score: 1 },
      { label: "Email auto-reply", score: 2 },
      { label: "Automated chat or AI assistant", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How do you generate reports or invoices?",
    options: [
      { label: "Manually in Excel or Word", score: 1 },
      { label: "Semi-automated templates", score: 2 },
      { label: "Fully automated system", score: 3 },
    ],
  },
  {
    id: 5,
    question: "How do you onboard new clients or employees?",
    options: [
      { label: "Ad-hoc, different every time", score: 1 },
      { label: "Documented process, manual steps", score: 2 },
      { label: "Automated workflow", score: 3 },
    ],
  },
  {
    id: 6,
    question: "How do you handle data entry across different systems?",
    options: [
      { label: "Copy-paste between tools", score: 1 },
      { label: "Some integrations exist", score: 2 },
      { label: "Fully connected systems", score: 3 },
    ],
  },
  {
    id: 7,
    question:
      "Has a manual error ever cost your business money or reputation?",
    options: [
      { label: "Yes, significant impact", score: 1 },
      { label: "Yes, minor issues", score: 2 },
      { label: "No", score: 3 },
    ],
  },
  {
    id: 8,
    question: "How do you make decisions based on business data?",
    options: [
      { label: "Gut feeling mostly", score: 1 },
      { label: "Spreadsheet analysis", score: 2 },
      { label: "Dashboards with real-time data", score: 3 },
    ],
  },
  {
    id: 9,
    question: "How many different software tools does your team use daily?",
    options: [
      { label: "1-2 tools, not connected", score: 1 },
      { label: "3-5 tools, partially connected", score: 2 },
      { label: "5+ tools, well integrated", score: 3 },
    ],
  },
  {
    id: 10,
    question: "What's your team's comfort level with new technology?",
    options: [
      { label: "Resistant to change", score: 1 },
      { label: "Open but cautious", score: 2 },
      { label: "Eager to adopt", score: 3 },
    ],
  },
];

export interface QuizResult {
  tier: "high-opportunity" | "growing" | "advanced";
  title: string;
  description: string;
  recommendation: string;
  service: string;
  serviceHref: string;
}

export function getQuizResult(score: number): QuizResult {
  if (score <= 15) {
    return {
      tier: "high-opportunity",
      title: "High Opportunity",
      description:
        "Your business has major untapped AI potential. Manual processes are costing you time, money, and risk. The good news? This means the ROI of automation will be immediate and significant.",
      recommendation:
        "Start with a free AI Audit. In one hour, I'll identify your top 3-5 automation opportunities ranked by impact.",
      service: "Book a Free AI Audit",
      serviceHref: "/contact",
    };
  }
  if (score <= 22) {
    return {
      tier: "growing",
      title: "Growing",
      description:
        "You have some systems in place but significant room to automate and optimize. You're past the basics but still spending too much time on things that could run themselves.",
      recommendation:
        "An Implementation project targeting your biggest bottleneck will deliver the highest ROI. Let's find it together.",
      service: "Discuss an Implementation Project",
      serviceHref: "/contact",
    };
  }
  return {
    tier: "advanced",
    title: "Advanced",
    description:
      "Your operations are well-digitized. AI can take you to the next level with intelligent automation, predictive insights, and AI agents that handle complex workflows.",
    recommendation:
      "An AI Partner retainer gives you continuous monthly improvements. Each month, we identify and build the next high-impact automation.",
    service: "Become an AI Partner",
    serviceHref: "/contact",
  };
}
