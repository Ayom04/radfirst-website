import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DonateForm } from "@/components/donate-chooser";
import { DONATE, getDonateOption } from "@/lib/forms";

export function generateStaticParams() {
  return DONATE.map((o) => ({ option: o.key }));
}

export async function generateMetadata({ params }: PageProps<"/donate/[option]">): Promise<Metadata> {
  const o = getDonateOption((await params).option);
  return { title: o ? `Donate: ${o.title}` : "Donate" };
}

export default async function DonateOption({ params }: PageProps<"/donate/[option]">) {
  const { option } = await params;
  if (!getDonateOption(option)) notFound();
  return <DonateForm option={option} />;
}
