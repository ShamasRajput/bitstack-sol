"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  emptyInquiry,
  inquirySchema,
  services,
  type Inquiry,
} from "@/lib/inquiry-schema";

const titles = [
  "What can we help with?",
  "Tell us about the idea.",
  "A little project context.",
  "Where can we reach you?",
];
const presets: Record<string, Inquiry["service"]> = {
  automation: "AI automation",
  "web-development": "Web development",
  integrations: "Integrations & systems",
};
const budgets = ["Under $2,500", "$2,500–$5,000", "$5,000–$10,000", "$10,000+"];
const timelines = [
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–6 months",
  "Just exploring",
];

export function ProjectForm() {
  const [brief, setBrief] = useState<Inquiry>({ ...emptyInquiry });
  const [selected, setSelected] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState("Copy project brief ↗");
  const heading = useRef<HTMLHeadingElement>(null);
  const success = useRef<HTMLDivElement>(null);
  const hasNavigated = useRef(false);
  const submitting = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("service");
    if (preset && Object.hasOwn(presets, preset)) {
      setBrief((current) => ({ ...current, service: presets[preset] }));
      setSelected(true);
    }
  }, []);
  useEffect(() => {
    if (hasNavigated.current) heading.current?.focus();
  }, [step]);
  useEffect(() => {
    if (reference) success.current?.focus();
  }, [reference]);

  function update(field: keyof Inquiry, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }
  function invalid(message: string, id?: string) {
    setError(message);
    if (id) document.getElementById(id)?.focus();
  }
  function go(nextStep: number) {
    hasNavigated.current = true;
    setError("");
    setStep(nextStep);
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (step === 0 && !selected)
      return invalid("Choose a service, or select “Not sure yet.”");
    if (step === 1) {
      if (!brief.description.trim())
        return invalid(
          "Please describe the project in a sentence or two.",
          "project-description",
        );
      if (!inquirySchema.shape.website.safeParse(brief.website).success)
        return invalid(
          "Please enter a complete URL, such as https://example.com.",
          "website",
        );
    }
    if (step < 3) return go(step + 1);
    if (!brief.name.trim())
      return invalid("Please enter your name.", "person-name");
    if (!inquirySchema.shape.email.safeParse(brief.email).success)
      return invalid("Please enter a valid email address.", "email");
    const validated = inquirySchema.safeParse(brief);
    if (!validated.success) return invalid(validated.error.issues[0].message);
    submitting.current = true;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
        signal: AbortSignal.timeout(15000),
      });
      const result = (await response.json()) as { id?: string; error?: string };
      if (!response.ok || !result.id)
        throw new Error(
          result.error || "We could not save your brief. Please try again.",
        );
      setReference(result.id);
    } catch (failure) {
      const disconnected =
        failure instanceof Error &&
        ["TypeError", "SyntaxError", "TimeoutError"].includes(failure.name);
      setError(
        disconnected
          ? "We could not reach the server. Your answers are still here. Please try again."
          : failure instanceof Error
            ? failure.message
            : "Unable to save your brief. Please try again.",
      );
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }
  async function copyBrief() {
    const summary =
      "BITSTACK SOLUTIONS — PROJECT BRIEF\n\n" +
      Object.entries({ ...brief, reference })
        .map(
          ([key, value]) =>
            `${key[0].toUpperCase() + key.slice(1)}: ${value || "Not provided"}`,
        )
        .join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      setCopyLabel("Copied ✓");
    } catch {
      const url = URL.createObjectURL(
        new Blob([summary], { type: "text/plain;charset=utf-8" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = "bitstack-project-brief.txt";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setCopyLabel("Downloaded ✓");
    }
  }
  function reset() {
    setBrief({ ...emptyInquiry });
    setSelected(false);
    setReference(null);
    setCopyLabel("Copy project brief ↗");
    go(0);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return (
    <div className="form-shell">
      <div className="form-status flex items-center justify-between gap-3">
        <span id="step-index">STEP 0{step + 1} / 04</span>
        <span>project_brief.config</span>
      </div>
      <div className="form-progress" aria-label={`Step ${step + 1} of 4`}>
        {titles.map((title, index) => (
          <span className={index <= step ? "current" : ""} key={title} />
        ))}
      </div>
      <noscript>
        <p>Please enable JavaScript to complete the guided project brief.</p>
      </noscript>
      {reference ? (
        <motion.div
          id="success-panel"
          className="success-panel"
          ref={success}
          tabIndex={-1}
          role="status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="eyebrow">// brief submitted</span>
          <h3>Your project brief is saved.</h3>
          <p>
            Your details have been saved on this server for review. Keep a copy
            of your brief for your records.
          </p>
          <p className="mt-5 break-all font-mono text-xs text-clay">
            Reference: {reference}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="button"
              id="copy-brief"
              onClick={copyBrief}
            >
              {copyLabel}
            </button>
            <button
              type="button"
              className="button secondary"
              id="reset-form"
              onClick={reset}
            >
              Start again
            </button>
          </div>
        </motion.div>
      ) : (
        <form
          id="project-form"
          onSubmit={submit}
          noValidate
          aria-busy={pending}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => heading.current?.focus()}
          >
            <motion.div
              className="form-step active"
              key={step}
              initial={reduce ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -12 }}
              transition={{ duration: reduce ? 0 : 0.15 }}
            >
              <h3 ref={heading} tabIndex={-1}>
                {titles[step]}
              </h3>
              {step === 0 && (
                <>
                  <p className="small-muted">
                    Pick the closest fit. We can refine it together.
                  </p>
                  <div
                    className="choice-grid"
                    role="group"
                    aria-label="Service selection"
                  >
                    {services.map((service) => (
                      <motion.button
                        whileHover={reduce ? undefined : { y: -2 }}
                        whileTap={reduce ? undefined : { scale: 0.98 }}
                        type="button"
                        className={`choice ${selected && brief.service === service ? "selected" : ""}`}
                        data-service={service}
                        aria-pressed={selected && brief.service === service}
                        key={service}
                        onClick={() => {
                          update("service", service);
                          setSelected(true);
                        }}
                      >
                        {service} ↗
                      </motion.button>
                    ))}
                  </div>
                </>
              )}
              {step === 1 && (
                <div className="mt-6">
                  <div className="field">
                    <label className="form-label" htmlFor="project-description">
                      What would you like to build or improve? *
                    </label>
                    <textarea
                      id="project-description"
                      name="description"
                      required
                      maxLength={5000}
                      rows={5}
                      placeholder="A little about the challenge you're facing..."
                      value={brief.description}
                      onChange={(event) =>
                        update("description", event.target.value)
                      }
                    />
                  </div>
                  <Field
                    id="business-name"
                    label="Business / company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your business name"
                    value={brief.company}
                    maxLength={200}
                    onChange={(value) => update("company", value)}
                  />
                  <Field
                    id="website"
                    label="Website URL"
                    name="website"
                    type="url"
                    placeholder="https://example.com"
                    value={brief.website}
                    maxLength={500}
                    onChange={(value) => update("website", value)}
                  />
                </div>
              )}
              {step === 2 && (
                <div className="mt-6">
                  <Field
                    id="current-tools"
                    label="What tools do you currently use?"
                    name="tools"
                    placeholder="e.g. HubSpot, Google Sheets, Shopify"
                    value={brief.tools}
                    maxLength={1000}
                    onChange={(value) => update("tools", value)}
                  />
                  <div className="field">
                    <label className="form-label" htmlFor="budget">
                      Approximate budget{" "}
                      <span className="small-muted">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={brief.budget}
                      onChange={(event) => update("budget", event.target.value)}
                    >
                      <option value="">Not sure yet</option>
                      {budgets.map((budget) => (
                        <option key={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label className="form-label" htmlFor="timeline">
                      Ideal timeline{" "}
                      <span className="small-muted">(optional)</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={brief.timeline}
                      onChange={(event) =>
                        update("timeline", event.target.value)
                      }
                    >
                      <option value="">Flexible / not sure</option>
                      {timelines.map((timeline) => (
                        <option key={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="mt-6">
                  <Field
                    id="person-name"
                    label="Your name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={brief.name}
                    required
                    maxLength={150}
                    onChange={(value) => update("name", value)}
                  />
                  <Field
                    id="email"
                    label="Email address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={brief.email}
                    required
                    maxLength={254}
                    onChange={(value) => update("email", value)}
                  />
                  <p className="small-muted">
                    By submitting, you agree that Bitstack Solutions may store
                    these details to review your project and contact you about
                    it.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div
            className="form-error"
            id="form-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
          <div className="form-controls">
            <button
              type="button"
              className={`button secondary ${step === 0 ? "invisible" : ""}`}
              id="prev-step"
              disabled={pending}
              onClick={() => go(Math.max(0, step - 1))}
            >
              ← Back
            </button>
            <button
              type="submit"
              className="button"
              id="next-step"
              disabled={pending}
            >
              {pending
                ? "Saving your brief…"
                : step === 3
                  ? "Submit project brief ↗"
                  : "Continue →"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: "text" | "url" | "email";
  required?: boolean;
  autoComplete?: string;
  maxLength: number;
  onChange: (value: string) => void;
};
function Field({ label, onChange, required = false, ...props }: FieldProps) {
  return (
    <div className="field">
      <label className="form-label" htmlFor={props.id}>
        {label}{" "}
        {required ? "*" : <span className="small-muted">(optional)</span>}
      </label>
      <input
        {...props}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
