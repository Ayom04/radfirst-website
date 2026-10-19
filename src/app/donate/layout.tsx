import { DonateChooser } from "@/components/donate-chooser";
import { INVOLVED, PageHead } from "@/components/page-head";

// Shared by /donate and /donate/[option], so the chooser stays put while the form below changes.
export default function DonateLayout({ children }: LayoutProps<"/donate">) {
  return (
    <>
      <PageHead
        crumbs={[INVOLVED]}
        current="Donate"
        title={<>Help someone take the next step <span className="lt">toward a diagnosis.</span></>}
        lead="For many people, the barrier isn’t knowing they need a scan. It’s being able to afford it. Your support helps RADFIRST fund diagnostic scans, urgent cases, screening activities and other early-detection work."
      />
      <section className="wrap" style={{ paddingBottom: 96 }}>
        <div className="form-wrap donate-wrap">
          <aside>
            <div className="side-card" style={{ marginTop: 0 }}>
              <b>What scans cost</b>
              <span>Mammogram: about ₦30,000–₦40,000</span>
              <span>Breast ultrasound: about ₦15,000–₦20,000</span>
              <span className="mono">Estimates from RADFIRST’s 2026 proposal</span>
            </div>
            <div className="side-card"><b>How payment works</b><span>We don’t take payments on the website. After you submit, our team contacts you to confirm the details and share account information.</span></div>
          </aside>
          <div className="stack" style={{ gap: 28, minWidth: 0 }}>
            <div className="stack" style={{ gap: 16 }}>
              <h2 className="d3">How would you like to support RADFIRST?</h2>
              <DonateChooser />
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
