import {
  BadgeCheck,
  Banknote,
  Binary,
  CalendarRange,
  Building2,
  CalendarClock,
  ChevronDown,
  Clapperboard,
  ClipboardPen,
  FileDown,
  FileText,
  LayoutTemplate,
  Layers,
  ListChecks,
  Mail,
  MessageCircle,
  MessageSquareMore,
  Mic2,
  PackageOpen,
  Phone,
  Quote,
  Route,
  Server,
  Sparkles,
  UserRound,
  Video,
  Wallet
} from "lucide-react";

const MAP = {
  mic: Mic2,
  fileText: FileText,
  fileDown: FileDown,
  wallet: Wallet,
  listChecks: ListChecks,
  messageMore: MessageSquareMore,
  calendarClock: CalendarClock,
  route: Route,
  banknote: Banknote,
  badgeCheck: BadgeCheck,
  building: Building2,
  clapperboard: Clapperboard,
  clipboardPen: ClipboardPen,
  layout: LayoutTemplate,
  server: Server,
  layers: Layers,
  binary: Binary,
  video: Video,
  userRound: UserRound,
  calendarRange: CalendarRange,
  packageOpen: PackageOpen,
  mail: Mail,
  phone: Phone,
  messageCircle: MessageCircle,
  chevronDown: ChevronDown,
  quote: Quote,
  sparkles: Sparkles
};

/**
 * @param {object} props
 * @param {keyof typeof MAP | string} props.name
 * @param {number} [props.size]
 * @param {number} [props.strokeWidth]
 * @param {string} [props.className]
 */
export default function SectionIcon({ name, size = 22, strokeWidth = 1.65, className = "" }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp className={`section-icon ${className}`.trim()} size={size} strokeWidth={strokeWidth} aria-hidden />;
}
