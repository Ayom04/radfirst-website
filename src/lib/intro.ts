// Launch reveal: shared between the first-visit intro on the home page and /unveil.
export const INTRO_KEY = "rf-intro-seen";

// Runs before the intro overlay is parsed, so returning visitors (and anyone who prefers
// reduced motion) never see a flash of it before React hydrates.
export const INTRO_SCRIPT = `try{if(localStorage.getItem("${INTRO_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="off"}catch(e){}`;
