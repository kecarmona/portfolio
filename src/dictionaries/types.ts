// `typeof en` derives Dictionary from the EN JSON shape. Compile-time checks catch
// missing keys against EN, but ES-only structural drift is not detected here —
// keep ES additions in lockstep when editing en.json.
import en from './en.json';

export type Dictionary = typeof en;

// Slice exports for component props
export type NavbarDict = Dictionary['navbar'];
export type HeroDict = Dictionary['hero'];
export type CompaniesDict = Dictionary['companies'];
export type AboutDict = Dictionary['about'];
export type TechDict = Dictionary['tech'];
export type ProjectsDict = Dictionary['projects'];
export type LandingsDict = Dictionary['landings'];
export type DiffDict = Dictionary['diff'];
export type ContactDict = Dictionary['contact'];
export type FooterDict = Dictionary['footer'];
