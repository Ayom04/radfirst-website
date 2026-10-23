// Launch reveal: runs before the home-page intro overlay is parsed, so visitors who prefer
// reduced motion never see a flash of it before React hydrates.
export const INTRO_SCRIPT = `try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="off"}catch(e){}`;
