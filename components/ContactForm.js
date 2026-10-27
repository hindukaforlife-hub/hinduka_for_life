'use client';

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { contact } from "@/lib/content";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [urlInterest, setUrlInterest] = useState(() => {
    const interest = searchParams.get("interest");
    const valid = contact.interestOptions.map((o) => o.value);
    return interest && valid.includes(interest) ? interest : "";
  });
  const [values, setValues] = useState(() => {
    const interest = searchParams.get("interest");
    const valid = contact.interestOptions.map((o) => o.value);
    return {
      name: "",
      email: "",
      phone: "",
      interest: interest && valid.includes(interest) ? interest : "",
      message: "",
    };
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [notConnected, setNotConnected] = useState(() =>
    !process.env.NEXT_PUBLIC_FORM_ENDPOINT
  );

  const handleChange = (name) => (e) => {
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address";
    }
    if (!values.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      console.log("Contact form data (not connected):", values);
      setStatus("error");
      setErrorMessage("The form is not connected yet");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        setValues({ name: "", email: "", phone: "", interest: urlInterest, message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <>
      {status === "success" ? (
        <div className="rounded-lg bg-light-green p-8 text-center border border-gira-tint">
          <p className="text-brand-green text-sm font-medium">
            {contact.successMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="mb-4">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              We use the information you submit to respond to your inquiry and
              to communicate about our programs. Submissions are processed
              through Formspree, a third-party form service. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-green hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          {notConnected && (
            <div className="rounded-lg bg-amber-50 p-4 text-amber-800 text-sm font-medium border border-amber-200">
              The form is not connected yet
            </div>
          )}
          {status === "error" && !notConnected && errorMessage && (
            <div className="rounded-lg bg-red-50 p-4 text-red-700 text-sm font-medium border border-red-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span>{errorMessage}</span>
                <button
                  type="button"
                  onClick={handleRetry}
                  className="underline underline-offset-4 hover:text-red-900 text-sm font-medium"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-charcoal">
              {contact.fields.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={handleChange("name")}
              className={`w-full px-3 py-2 text-sm border rounded-lg text-charcoal placeholder:text-charcoal/[0.5] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:border-brand-green outline-none ${
                errors.name ? "border-red-500" : "border-charcoal/[0.3]"
              }`}
              placeholder={contact.fields.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
              {contact.fields.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange("email")}
              className={`w-full px-3 py-2 text-sm border rounded-lg text-charcoal placeholder:text-charcoal/[0.5] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:border-brand-green outline-none ${
                errors.email ? "border-red-500" : "border-charcoal/[0.3]"
              }`}
              placeholder={contact.fields.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
              {contact.fields.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              className="w-full px-3 py-2 text-sm border rounded-lg text-charcoal placeholder:text-charcoal/[0.5] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:border-brand-green outline-none border-charcoal/[0.3]"
              placeholder={contact.fields.phone}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interest" className="block text-sm font-medium text-charcoal">
              {contact.fields.interest}
            </label>
            <select
              id="interest"
              name="interest"
              value={values.interest}
              onChange={handleChange("interest")}
              className="w-full px-3 py-2 text-sm border rounded-lg text-charcoal focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:border-brand-green outline-none border-charcoal/[0.3]"
            >
              <option value="">Select an option</option>
              {contact.interestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-charcoal">
              {contact.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={values.message}
              onChange={handleChange("message")}
              className={`w-full px-3 py-2 text-sm border rounded-lg text-charcoal placeholder:text-charcoal/[0.5] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:border-brand-green outline-none ${
                errors.message ? "border-red-500" : "border-charcoal/[0.3]"
              }`}
              placeholder={contact.fields.message}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-brand-gold text-charcoal rounded-full px-4 py-2 text-sm font-semibold hover:bg-brand-gold/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
          >
            {status === "sending" ? "Sending..." : contact.submitButton}
          </button>
        </form>
      )}
    </>
  );
}
