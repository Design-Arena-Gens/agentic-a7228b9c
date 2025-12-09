"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  adSpend: string;
  goals: string;
  budget: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  adSpend: "",
  goals: "",
  budget: ""
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Submission failed");
      }

      setStatus("success");
      setMessage(result.message);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl bg-white/10 p-6 shadow-2xl backdrop-blur"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white/80">
          Full Name *
        </label>
        <input
          required
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Alex Carter"
          className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white/80">
          Work Email *
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="alex@brand.com"
          className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-white/80">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Brand Name"
            className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-white/80">
            Target Monthly Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
          >
            <option value="" className="bg-navy text-white">
              Choose an option
            </option>
            <option value="10-25k" className="bg-navy text-white">
              $10k - $25k
            </option>
            <option value="25-50k" className="bg-navy text-white">
              $25k - $50k
            </option>
            <option value="50-100k" className="bg-navy text-white">
              $50k - $100k
            </option>
            <option value="100kplus" className="bg-navy text-white">
              $100k+ per month
            </option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="adSpend" className="block text-sm font-semibold text-white/80">
          Current Ad Spend
        </label>
        <input
          id="adSpend"
          name="adSpend"
          value={form.adSpend}
          onChange={handleChange}
          placeholder="Average monthly spend"
          className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
        />
      </div>
      <div>
        <label htmlFor="goals" className="block text-sm font-semibold text-white/80">
          Growth Goals *
        </label>
        <textarea
          required
          id="goals"
          name="goals"
          value={form.goals}
          onChange={handleChange}
          placeholder="Tell us where you need accountability and scale..."
          rows={4}
          className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-lg bg-electric px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-electric/90 disabled:cursor-not-allowed disabled:bg-electric/70"
      >
        {status === "loading" ? "Submitting..." : "Request a Strategy Call"}
      </button>
      {status !== "idle" && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-blaze"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
