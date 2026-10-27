import {
  Search, ArrowRight, Check, Bookmark, Menu, X, ChevronRight,
  Download, ShieldCheck, Code2, BriefcaseBusiness, ChartNoAxesColumn,
  BookOpen, TrendingUp, Grid2X2, Leaf, Users, Activity, PenLine
} from "lucide-react";

const iconMap = {
  search: Search,
  arrow: ArrowRight,
  check: Check,
  bookmark: Bookmark,
  menu: Menu,
  close: X,
  chevron: ChevronRight,
  download: Download,
  shield: ShieldCheck,
  Code: Code2,
  Briefcase: BriefcaseBusiness,
  Chart: ChartNoAxesColumn,
  Book: BookOpen,
  Trend: TrendingUp,
  Grid: Grid2X2,
  Leaf,
  People: Users,
  Pulse: Activity,
  Pen: PenLine,
};

export default function Icon({ name, size = 20, className = "" }) {
  const LucideIcon = iconMap[name] || ArrowRight;
  return <LucideIcon aria-hidden="true" size={size} strokeWidth={1.8} className={className} />;
}
