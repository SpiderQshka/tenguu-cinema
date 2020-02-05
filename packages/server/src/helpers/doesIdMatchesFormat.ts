import { _IDREGEXP } from "../keys/keys";

export const doesIdMatchesFormat = (id: string): boolean =>
  id.match(_IDREGEXP) ? true : false;
