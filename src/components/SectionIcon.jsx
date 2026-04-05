import {
  FaBoxOpen,
  FaBuilding,
  FaCalendarDays,
  FaChevronDown,
  FaCircleCheck,
  FaClipboardList,
  FaClapperboard,
  FaCode,
  FaCommentDots,
  FaComments,
  FaEnvelope,
  FaLayerGroup,
  FaListCheck,
  FaMicrophone,
  FaMoneyBillWave,
  FaPhone,
  FaQuoteLeft,
  FaRoute,
  FaServer,
  FaTableColumns,
  FaUser,
  FaVideo,
  FaWallet,
  FaWandMagicSparkles
} from "react-icons/fa6";

const MAP = {
  mic: FaMicrophone,
  wallet: FaWallet,
  listChecks: FaListCheck,
  messageMore: FaComments,
  calendarClock: FaCalendarDays,
  route: FaRoute,
  banknote: FaMoneyBillWave,
  badgeCheck: FaCircleCheck,
  building: FaBuilding,
  clapperboard: FaClapperboard,
  clipboardPen: FaClipboardList,
  layout: FaTableColumns,
  server: FaServer,
  layers: FaLayerGroup,
  binary: FaCode,
  video: FaVideo,
  userRound: FaUser,
  calendarRange: FaCalendarDays,
  packageOpen: FaBoxOpen,
  mail: FaEnvelope,
  phone: FaPhone,
  messageCircle: FaCommentDots,
  chevronDown: FaChevronDown,
  quote: FaQuoteLeft,
  sparkles: FaWandMagicSparkles
};

/**
 * @param {object} props
 * @param {keyof typeof MAP | string} props.name
 * @param {number} [props.size]
 * @param {number} [props.strokeWidth] Ignored; kept for compatibility with existing call sites.
 * @param {string} [props.className]
 */
export default function SectionIcon({ name, size = 22, strokeWidth: _ignored, className = "" }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp className={`section-icon ${className}`.trim()} size={size} aria-hidden />;
}
