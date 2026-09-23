"use server";

export interface ReservationState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitReservation(
  _prevState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const date = formData.get("date")?.toString().trim();
  const time = formData.get("time")?.toString().trim();
  const guests = formData.get("guests")?.toString().trim();

  if (!name || !phone || !date || !time || !guests) {
    return { status: "error", message: "Please fill in every required field before sending." };
  }

  // Booking system integration point: wire this up to email/CRM once the backend is live.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    status: "success",
    message: `Thank you, ${name}. We've received your request for ${guests} guest(s) on ${date} at ${time}. Our team will call ${phone} shortly to confirm.`,
  };
}
