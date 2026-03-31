"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ExternalLink, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently fail for now — will add proper error handling with email service
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 sm:px-6 text-center">
        <CheckCircle size={48} className="mx-auto text-green-600" />
        <h1 className="mt-6 text-3xl font-bold">Message sent!</h1>
        <p className="mt-3 text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Want a free AI Audit? Or just curious about
            what AI can do for your business? Send me a message.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:hello@runai4.me"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={20} />
              hello@runai4.me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project, your pain points, or what you'd like to automate..."
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={loading}>
            <Send size={16} />
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
