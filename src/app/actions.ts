"use server";

export type Submission = {
  form: string;
  values: Record<string, string | string[]>;
};

// Receives every form on the site. Delivery (email to the team, a spreadsheet or a CRM)
// is not wired up yet, so submissions are only logged on the server for now.
export async function submitForm({ form, values }: Submission) {
  console.log(`[radfirst] ${form} submission`, JSON.stringify(values));
  return { ok: true };
}
