// ===== Layout =====
export { default as Background } from "./pageElements/background";
export { default as Header } from "./header/componentHeader";
export { default as GlobalHeader } from "./header/globalHeader";
export { default as LocalHeader } from "./header/localHeader";

// ===== Information =====
export { DevPDV, DevHl } from "./information/devCard";
export { default as DevCard } from "./information/devCard";
export { default as LeftDeliver } from "./information/leftDeliver";
export { default as UccurrenceCard } from "./information/uccurrenceCard";
export { default as TRCard } from "./information/trCard";

// ===== Navegação =====
export { default as NavActions } from "./navLinks/navActions";
export { GestaoPages } from "./navLinks/navList";
export { default as Navlist } from "./navLinks/navList";

// ===== Estrutura de Página =====
export { default as GlobalElements } from "./pageElements/layout";
export { default as Wrapper } from "./pageElements/wrapper";

// ===== Elementos Visuais =====
export { default as SideMenuBar } from "./elements/sideMenuBar";
export { default as UserSideBar } from "./elements/userSideBar";
export { default as UccurenceBar } from "./elements/uccurrenceBar";

// ==== UI Blocks =====

import { BlockFull } from "./ui/ui-blocks/block";
export const Block = {
  Full: BlockFull,
};

// ===== Tipografia (Textos) =====
import {
  Title_Xs,
  Title_Xs_Left,
  Title_Sm,
  Title_Sm_Left,
  Title_Md,
  Title_Md_Left,
  Title_Lg,
  Title_Lg_Left,
  Title_Xl,
  Title_Xl_Left,
} from "./ui/ui-typography/text";

export const Title = {
  Xs: Title_Xs,
  Xs_L: Title_Xs_Left,

  Sm: Title_Sm,
  Sm_L: Title_Sm_Left,

  Md: Title_Md,
  Md_L: Title_Md_Left,

  Lg: Title_Lg,
  Lg_L: Title_Lg_Left,

  Xl: Title_Xl,
  Xl_L: Title_Xl_Left,
};
