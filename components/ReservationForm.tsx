"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitReservation, type ReservationState } from "@/app/actions";

const initialReservationState: ReservationState = {
  status: "idle",
  message: "",
};

const inputClass =
  "w-full border-b border-line bg-transparent py-3 text-cream placeholder:text-stone/60 focus:border-ember focus:outline-none transition-colors";
const labelClass = "font-accent text-[11px] uppercase tracking-[0.2em] text-stone";

export function ReservationForm() {
  const [state, formAction, pending] = useActionState(submitReservation, initialReservationState);

  return (
    <form action={formAction} className="flex flex-col gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="+255 ..."
          />
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className={labelClass}>
            Date *
          </label>
          <input id="date" name="date" type="date" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className={labelClass}>
            Time *
          </label>
          <input id="time" name="time" type="time" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className={labelClass}>
            Guests *
          </label>
          <select id="guests" name="guests" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select
            </option>
            {Array.from({ length: 11 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={`${n}`}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
            <option value="12+">12+ (Private Dining)</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="occasion" className={labelClass}>
          Occasion
        </label>
        <select id="occasion" name="occasion" defaultValue="" className={inputClass}>
          <option value="">None in particular</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business Dinner</option>
          <option value="celebration">Celebration</option>
          <option value="date">Date Night</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className={labelClass}>
          Special Requests
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={inputClass}
          placeholder="Dietary needs, seating preference, anything we should know"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-crimson px-8 py-4 font-accent text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-crimson-2 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Request Reservation"}
      </button>

      {state.status !== "idle" ? (
        <div
          className={`flex items-start gap-3 border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-ember/40 text-cream"
              : "border-crimson-2/60 text-cream"
          }`}
          role="status"
        >
          {state.status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-crimson-2" />
          )}
          <p>{state.message}</p>
        </div>
      ) : null}

      <p className="text-xs leading-relaxed text-stone/70">
        This form sends your request to our team for confirmation — it does not guarantee a
        table. For same-day or urgent bookings, please call or WhatsApp us directly.
      </p>
    </form>
  );
}
