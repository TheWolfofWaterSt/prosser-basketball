"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  athleteAge: string;
  sessionInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  athleteAge: "",
  sessionInterest: "not-sure",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Please include a brief message";
  }

  return errors;
}

function buildMailtoBody(data: FormData): string {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.athleteAge ? `Athlete Age/Grade: ${data.athleteAge}` : null,
    `Session Interest: ${formatSessionInterest(data.sessionInterest)}`,
    "",
    "Message:",
    data.message,
  ].filter(Boolean);

  return lines.join("\n");
}

function formatSessionInterest(value: string): string {
  switch (value) {
    case "individual":
      return "1-on-1 Individual Training";
    case "group":
      return "Group Training";
    default:
      return "Not sure yet";
  }
}

const inputClasses =
  "w-full rounded-sm border border-white/15 bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 min-h-[44px]";

const labelClasses =
  "block font-display text-xs font-semibold uppercase tracking-widest text-text-secondary";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Log submission for development; replace with form backend when ready.
    console.log("Contact form submission:", formData);

    const subject = encodeURIComponent(
      `Training Inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(buildMailtoBody(formData));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-sm border border-accent/30 bg-accent/10 p-8 text-center md:p-10"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
          Message Ready to Send
        </h3>
        <p className="mt-4 text-base text-text-secondary">
          Thanks! Your email client should open with your message pre-filled.
          Rayce will be in touch within 24 hours.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <p className="text-sm text-text-secondary">
        No commitment required — just reach out and we&apos;ll figure out what
        works for your athlete.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={cn(inputClasses, "mt-2", errors.name && "border-red-500")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={cn(
              inputClasses,
              "mt-2",
              errors.email && "border-red-500",
            )}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={cn(inputClasses, "mt-2")}
          />
        </div>

        <div>
          <label htmlFor="athleteAge" className={labelClasses}>
            Athlete&apos;s Age / Grade
          </label>
          <input
            id="athleteAge"
            name="athleteAge"
            type="text"
            placeholder="e.g. 12 years old, 7th grade"
            value={formData.athleteAge}
            onChange={handleChange}
            className={cn(inputClasses, "mt-2")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="sessionInterest" className={labelClasses}>
          Session Interest
        </label>
        <select
          id="sessionInterest"
          name="sessionInterest"
          value={formData.sessionInterest}
          onChange={handleChange}
          className={cn(inputClasses, "mt-2")}
        >
          <option value="individual">1-on-1 Individual Training</option>
          <option value="group">Group Training</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell Rayce about your athlete's goals, experience level, and availability..."
          className={cn(
            inputClasses,
            "mt-2 min-h-[120px] resize-y",
            errors.message && "border-red-500",
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
