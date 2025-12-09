import Image from "next/image";
import LeadForm from "../components/LeadForm";

const metrics = [
  { label: "Average ROAS Lift", value: "4.3x" },
  { label: "Annual Revenue Unlocked", value: "$82M+" },
  { label: "Ad Dollars Wasted", value: "0.0%" },
  { label: "Client Retention", value: "93%" }
];

const painPoints = [
  {
    title: "Performance accountability, not excuses",
    description:
      "Your board does not care about impressions. Neither do we. Every campaign is tied to revenue KPIs, with dashboards that make spend vs. return obvious."
  },
  {
    title: "Media buying that scales, not experiments",
    description:
      "Our senior buyers actively optimize across Meta, Google, TikTok, and programmatic daily. No interns. No 'set-and-forget' automations burning cash."
  },
  {
    title: "Conversion-ready creative on demand",
    description:
      "In-house CRO specialists and performance designers test new hooks weekly, keeping your funnel fresh and conversion focused."
  }
];

const services = [
  {
    title: "Full-Funnel Media Buying",
    points: ["Meta, Google, TikTok, Amazon", "Hyper-granular dayparting & bid controls", "Daily optimization cadences"]
  },
  {
    title: "Performance Creative Lab",
    points: ["High-velocity ad iteration", "Storyboards, scripting, UGC sourcing", "Conversion-driven landing pages"]
  },
  {
    title: "Analytics & Attribution",
    points: ["Custom dashboards by business model", "First-party data + MMM insights", "ROAS targets tracked in real time"]
  }
];

const processSteps = [
  {
    title: "Audit & Alignment",
    description:
      "We audit your performance in 7 days, surface wasted spend, and build a playbook for immediate wins and 90-day scale."
  },
  {
    title: "Launch & Ramp",
    description:
      "Creative sprint, tracking overhaul, and channel expansion. Your revenue targets become our marching orders."
  },
  {
    title: "Scale & Report",
    description:
      "Daily optimization, weekly growth sprints, and crystal-clear reporting that connects every dollar to outcomes."
  }
];

const testimonials = [
  {
    quote:
      "Adcraze unlocked 5.2x ROAS in 60 days and finally made our CAC predictable. They feel like an internal team with skin in the game.",
    name: "Maya Chen",
    role: "Founder, Fluxwear"
  },
  {
    quote:
      "We were hemorrhaging $40k a month before Adcraze took over. Now paid drives 62% of our net-new revenue, and the reporting is bulletproof.",
    name: "Jordan Reyes",
    role: "CMO, NorthRiver Home"
  },
  {
    quote:
      "Every strategy call ends with clear next steps, owners, and revenue goals. They proactively flag risks before they cost us money.",
    name: "Sasha Patel",
    role: "VP Marketing, BrightCart"
  }
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-navy via-navy to-[#020b1b] text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-blaze/20 blur-3xl" />
        </div>
        <div className="section">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Adcraze" width={160} height={40} className="h-10 w-auto" priority />
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                  Performance-first partners
                </span>
              </div>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
                We only win when you win. Profit-focused ads that scale your revenue—not your costs.
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                Adcraze helps growth-minded brands turn wasted ad dollars into predictable revenue. Transparent, accountable,
                and built on performance-based partnerships.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="rounded-full bg-electric px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:translate-y-0.5 hover:bg-electric/90"
                >
                  Book a strategy consult
                </a>
                <a
                  href="#audit"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                >
                  Request ad spend audit
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="font-heading text-2xl font-bold text-electric">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-12 bottom-0 h-24 w-24 rounded-full bg-blaze/30 blur-3xl" />
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="section bg-white/5">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-navy/60 p-6 shadow-lg shadow-black/20">
                <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="rounded-full bg-blaze/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blaze">
              Why brands pick Adcraze
            </span>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Performance partnerships that eliminate wasted ad spend
            </h2>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                <span>
                  <strong className="text-white">Pay-for-performance engagements</strong>{" "}
                  that tie retainers to agreed-upon KPIs so incentives stay aligned.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                <span>
                  <strong className="text-white">24/7 live dashboards & Slack updates</strong>{" "}
                  that show exactly how every campaign is pacing against goals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                <span>
                  <strong className="text-white">Senior strategists on every account</strong>{" "}
                  who have scaled 7- and 8-figure ad budgets across ecommerce, SaaS, and local services.
                </span>
              </li>
            </ul>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:translate-y-0.5 hover:bg-electric/90"
            >
              Lock in a 30-minute growth session
            </a>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl">
            <h3 className="font-heading text-2xl font-semibold text-white">The Adcraze promise</h3>
            <p className="text-sm text-white/70">
              We cut channels that do not produce profitable growth. We reallocate spend daily to proven winners. We
              communicate before issues compound. If we miss agreed targets, your next month&apos;s retainer is on us.
            </p>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Average partner results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-bold text-electric">-31%</p>
                  <p className="text-xs uppercase tracking-wider text-white/60">Reduced CAC in 90 days</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-electric">+212%</p>
                  <p className="text-xs uppercase tracking-wider text-white/60">Increase in qualified pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white text-navy">
        <div className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric">
                How we execute
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                A full-funnel team inside your business
              </h2>
            </div>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-electric/90"
            >
              Start your performance plan
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-xl">
                <h3 className="font-heading text-xl font-semibold text-navy">{service.title}</h3>
                <ul className="space-y-3 text-sm text-navy/70">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto text-xs uppercase tracking-wider text-electric/80">Included in every engagement</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              Frictionless process
            </span>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Built to move quickly and keep you in the loop
            </h2>
            <p className="text-white/70">
              Every engagement follows a proven launch framework and is managed inside a shared command center. Expect daily
              channel insights, weekly growth sprints, and monthly board-ready reviews.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="absolute -left-4 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-electric text-lg font-bold text-white shadow-xl">
                  {index + 1}
                </span>
                <h3 className="ml-8 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="ml-8 mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-electric/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-electric">
              Proof from partners
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              What high-growth teams say about Adcraze
            </h2>
            <p className="mt-2 text-white/70">
              From funded startups to established DTC brands, our partners trust us to scale what works and cut the waste.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-navy/80 p-6 shadow-lg">
                <p className="text-sm text-white/80">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-wide text-white/50">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="rounded-full bg-blaze/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blaze">
              Lead with performance
            </span>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Request a strategy consult &amp; 7-day ad spend audit
            </h2>
            <p className="text-white/70">
              Submit the form and choose your consultation slot instantly. We will review your current ad stack, identify
              leaks, and map the first 90 days of scale before we spend a dollar.
            </p>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-heading text-xl font-semibold text-white">What you get:</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                  <span>Channel-by-channel audit with wasted spend and quick wins identified.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                  <span>Performance forecast mapped to your revenue targets and timelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                  <span>Consultation recording and rollout roadmap delivered within 48 hours.</span>
                </li>
              </ul>
              <a
                href="https://cal.com/adcraze/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-electric px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-electric/90"
              >
                Choose your consultation slot
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="section border-t border-white/5 bg-navy/80">
        <div className="container flex flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-white">
            <Image src="/logo.svg" alt="Adcraze" width={160} height={40} className="h-8 w-auto" />
            <span>Performance-driven advertising partners.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>hello@adcraze.com</span>
            <span>+1 (415) 555-1923</span>
            <span>© {new Date().getFullYear()} Adcraze. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
