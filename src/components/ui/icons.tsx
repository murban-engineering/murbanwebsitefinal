import { forwardRef } from "react";
import type {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export type IconComponent = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

const formatSize = (size: IconProps["size"]) => {
  if (typeof size === "number") {
    return `${size}px`;
  }

  return size ?? "24px";
};

const createIcon = (paths: ReactNode, viewBox = "0 0 24 24") => {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    (
      { size = 24, className, style, strokeWidth = 1.8, children, ...props },
      ref,
    ) => (
      <svg
        ref={ref}
        viewBox={viewBox}
        width={formatSize(size)}
        height={formatSize(size)}
        className={cn("modern-icon", className)}
        style={style}
        stroke="currentColor"
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={props["aria-label"] ? undefined : true}
        {...props}
      >
        {paths}
        {children}
      </svg>
    ),
  );

  Icon.displayName = "Icon";

  return Icon;
};

export const MenuIcon = createIcon(
  <>
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </>,
);

export const CloseIcon = createIcon(
  <>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </>,
);

export const ChevronLeftIcon = createIcon(
  <polyline points="14 6 8 12 14 18" />,
);

export const ChevronRightIcon = createIcon(
  <polyline points="10 6 16 12 10 18" />,
);

export const ChevronDownIcon = createIcon(
  <polyline points="6 9 12 15 18 9" />,
);

export const ChevronUpIcon = createIcon(
  <polyline points="6 15 12 9 18 15" />,
);

export const MoreHorizontalIcon = createIcon(
  <>
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
  </>,
);

export const CheckIcon = createIcon(
  <polyline points="5 13 10 18 19 7" />,
);

export const CheckCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <polyline points="9 12.5 11 14.5 15 10" />
  </>,
);

export const CircleIcon = createIcon(<circle cx="12" cy="12" r="7" />);

export const DotIcon = createIcon(<circle cx="12" cy="12" r="2.5" />);

export const GripVerticalIcon = createIcon(
  <>
    <circle cx="9" cy="6" r="1" />
    <circle cx="15" cy="6" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="9" cy="18" r="1" />
    <circle cx="15" cy="18" r="1" />
  </>,
);

export const QuoteIcon = createIcon(
  <>
    <path d="M9 9.5c0-2 1.4-3.5 3.5-3.5" />
    <path d="M6 9.5c0-2 1.4-3.5 3.5-3.5V18" />
    <path d="M18 9.5c0-2-1.4-3.5-3.5-3.5" />
    <path d="M15 9.5c0-2-1.4-3.5-3.5-3.5V18" />
  </>,
);

export const MapPinIcon = createIcon(
  <>
    <path d="M12 21s-6-6.2-6-10a6 6 0 1 1 12 0c0 3.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </>,
);

export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="5" />
    <line x1="16.5" y1="16.5" x2="20" y2="20" />
  </>,
);

export const SunIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="3.5" />
    <line x1="12" y1="3" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="21" />
    <line x1="5" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="19" y2="12" />
    <line x1="6.8" y1="6.8" x2="5.4" y2="5.4" />
    <line x1="17.2" y1="17.2" x2="18.6" y2="18.6" />
    <line x1="6.8" y1="17.2" x2="5.4" y2="18.6" />
    <line x1="17.2" y1="6.8" x2="18.6" y2="5.4" />
  </>,
);

export const MoonIcon = createIcon(
  <path d="M17.5 15a6.5 6.5 0 1 1-8.5-8.5 6 6 0 0 0 8.5 8.5Z" />,
);

export const PanelLeftIcon = createIcon(
  <>
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <line x1="10" y1="5" x2="10" y2="19" />
  </>,
);

export const ArrowLeftIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="11 6 5 12 11 18" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </>,
);

export const ArrowUpIcon = createIcon(
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="6 11 12 5 18 11" />
  </>,
);

export const ShieldIcon = createIcon(
  <path d="M12 21c-3.5-1.7-6-4.7-6-8.8V6l6-3 6 3v6.2c0 4.1-2.5 7.1-6 8.8Z" />,
);

export const ShieldCheckIcon = createIcon(
  <>
    <path d="M12 21c-3.5-1.7-6-4.7-6-8.8V6l6-3 6 3v6.2c0 4.1-2.5 7.1-6 8.8Z" />
    <polyline points="9 12.5 11.5 15 15 10.5" />
  </>,
);

export const GaugeIcon = createIcon(
  <>
    <path d="M5 14a7 7 0 0 1 14 0v3H5Z" />
    <line x1="12" y1="13" x2="15.5" y2="9.5" />
  </>,
);

export const GitBranchIcon = createIcon(
  <>
    <circle cx="7" cy="6" r="2" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="17" cy="6" r="2" />
    <path d="M7 8v6a4 4 0 0 0 4 4h2" />
    <line x1="17" y1="8" x2="17" y2="16" />
  </>,
);

export const DatabaseIcon = createIcon(
  <>
    <ellipse cx="12" cy="6" rx="6.5" ry="3" />
    <path d="M5.5 6v6c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3V6" />
    <path d="M5.5 12v6c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-6" />
  </>,
);

export const DiscIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2.2" />
  </>,
);

export const ScanLineIcon = createIcon(
  <>
    <rect x="5" y="8" width="14" height="8" rx="1.5" />
    <line x1="2" y1="5" x2="7" y2="5" />
    <line x1="2" y1="19" x2="7" y2="19" />
    <line x1="17" y1="5" x2="22" y2="5" />
    <line x1="17" y1="19" x2="22" y2="19" />
  </>,
);

export const ActivityIcon = createIcon(
  <polyline points="3 13 7.5 13 10 8 14 18 16.5 13 21 13" />,
);

export const MagnetIcon = createIcon(
  <>
    <path d="M6 13v-3a6 6 0 0 1 12 0v3" />
    <path d="M6 13v2a6 6 0 0 0 12 0v-2" />
    <line x1="6" y1="6" x2="9" y2="6" />
    <line x1="15" y1="6" x2="18" y2="6" />
  </>,
);

export const LightbulbIcon = createIcon(
  <>
    <path d="M12 4a6 6 0 0 0-3 11.3V18h6v-2.7A6 6 0 0 0 12 4Z" />
    <line x1="9" y1="21" x2="15" y2="21" />
  </>,
);

export const DropletIcon = createIcon(
  <path d="M12 3c3.5 3.9 5.5 7 5.5 9.5a5.5 5.5 0 0 1-11 0C6.5 10 8.5 6.9 12 3Z" />,
);

export const RadioIcon = createIcon(
  <>
    <rect x="4" y="9" width="16" height="11" rx="2" />
    <circle cx="9" cy="14.5" r="1.8" />
    <line x1="4" y1="9" x2="20" y2="5" />
    <line x1="14" y1="13" x2="18" y2="13" />
  </>,
);

export const PaintbrushIcon = createIcon(
  <>
    <path d="M17 3.5 10 10l4 4 7-7c.5-.5.5-1.3 0-1.8l-2.2-2.2c-.5-.5-1.3-.5-1.8 0Z" />
    <path d="M6 14c-1.5 0-3 1.2-3 3.2C3 19.7 4.5 21 6 21s3-1.3 3-3.8c0-2-1.5-3.2-3-3.2Zm0 0 4-4" />
  </>,
);

export const TestTubeIcon = createIcon(
  <>
    <path d="M15 3v9.6a4.5 4.5 0 1 1-6 0V3h6Z" />
    <line x1="9" y1="7" x2="15" y2="7" />
  </>,
);

export const GridIcon = createIcon(
  <>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </>,
);

export const ScanIcon = createIcon(
  <>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <line x1="2" y1="9" x2="2" y2="6" />
    <line x1="2" y1="18" x2="2" y2="15" />
    <line x1="22" y1="9" x2="22" y2="6" />
    <line x1="22" y1="18" x2="22" y2="15" />
  </>,
);

export const ThermometerIcon = createIcon(
  <>
    <path d="M14 13.5V5.5a2 2 0 1 0-4 0v8a3.5 3.5 0 1 0 4 0Z" />
    <line x1="10" y1="9" x2="14" y2="9" />
  </>,
);

export const CpuIcon = createIcon(
  <>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </>,
);

export const TrendingUpIcon = createIcon(
  <polyline points="4 16 9 11 12 14 20 6" />,
);

export const FlameIcon = createIcon(
  <path d="M12 3s3.5 3 3.5 6.5c0 1.8-1.1 3.1-2.4 4.2-.8.7-1.1 1.6-.1 3.3A5 5 0 0 1 7 14.5C7 9.5 12 3 12 3Z" />,
);

export const WindIcon = createIcon(
  <>
    <path d="M4 9h8a2 2 0 1 0-2-2" />
    <path d="M4 15h12a2 2 0 1 1-2 2" />
    <path d="M4 12h10" />
  </>,
);

export const GaugeCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 12 16 8" />
  </>,
);

export const MapIcon = createIcon(
  <>
    <polyline points="3 7 9 4 15 7 21 4" />
    <polyline points="3 7 3 20 9 23 15 20 21 23 21 10" />
    <line x1="9" y1="4" x2="9" y2="23" />
    <line x1="15" y1="7" x2="15" y2="20" />
  </>,
);

export const GlobeIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <path d="M12 4a10 10 0 0 0 0 16" />
    <path d="M12 4a10 10 0 0 1 0 16" />
  </>,
);

export const HammerIcon = createIcon(
  <>
    <path d="M5 9 13 3l3 3-2 2 5 5-3 3-5-5-2 2Z" />
    <line x1="7" y1="11" x2="3" y2="15" />
  </>,
);

export const WrenchIcon = createIcon(
  <>
    <path d="M14 3a4 4 0 0 0 2.9 6.8l-2.4 2.4-4-4-4.6 4.6a2.6 2.6 0 0 0 3.7 3.7l4.6-4.6 4 4 2.4-2.4A4 4 0 0 0 21 10l-3 3-7-7 3-3Z" />
  </>,
);

export const PlaneIcon = createIcon(
  <>
    <path d="M3 12l18-7-4 7 4 7-18-7Z" />
    <line x1="3" y1="12" x2="9" y2="12" />
  </>,
);

export const RulerIcon = createIcon(
  <>
    <rect x="3" y="8" width="18" height="8" rx="2" />
    <line x1="7" y1="8" x2="7" y2="12" />
    <line x1="11" y1="8" x2="11" y2="12" />
    <line x1="15" y1="8" x2="15" y2="12" />
    <line x1="19" y1="8" x2="19" y2="12" />
  </>,
);

export const ShoppingCartIcon = createIcon(
  <>
    <path d="M4 6h2l2 11h10" />
    <path d="M8 6h12l-1.2 6.4a2 2 0 0 1-2 1.6H9" />
    <circle cx="10" cy="20" r="1.6" />
    <circle cx="18" cy="20" r="1.6" />
  </>,
);

export const SettingsIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.5 12a7.5 7.5 0 0 0-.2-1.7l2.1-1.6-2-3.4-2.5 1A7.5 7.5 0 0 0 15 4.7L14.6 2h-5.2L9 4.7a7.5 7.5 0 0 0-1.9 1.6l-2.5-1-2 3.4 2.1 1.6A7.5 7.5 0 0 0 4.5 12c0 .6.1 1.1.2 1.7L2.6 15.3l2 3.4 2.5-1a7.5 7.5 0 0 0 1.9 1.6l.4 2.7h5.2l.4-2.7a7.5 7.5 0 0 0 1.9-1.6l2.5 1 2-3.4-2.1-1.6c.1-.6.2-1.1.2-1.7Z" />
  </>,
);

export const BuildingIcon = createIcon(
  <>
    <rect x="5" y="3" width="8" height="18" rx="1.2" />
    <path d="M13 7h6v14" />
    <line x1="9" y1="7" x2="9" y2="7" />
    <line x1="9" y1="11" x2="9" y2="11" />
    <line x1="9" y1="15" x2="9" y2="15" />
    <line x1="17" y1="11" x2="17" y2="11" />
    <line x1="17" y1="15" x2="17" y2="15" />
  </>,
);

export const ZapIcon = createIcon(
  <polygon points="13 2 5 14 12 14 11 22 19 10 12 10 13 2" />,
);

export const SparklesIcon = createIcon(
  <>
    <path d="M12 3l1.3 3.5L17 7.5l-3.7 1 1.2 3.5L12 9.8l-2.5 2.2 1.2-3.5L7 7.5l3.7-.9Z" />
    <path d="M6 14l.9 2.4 2.4.6-2.4.6L6 20l-.9-2.4L2.8 17l2.3-.6Z" />
    <path d="M18 13l.7 1.8 1.8.4-1.8.4L18 17l-.7-1.8-1.8-.4 1.8-.4Z" />
  </>,
);

export const DropletsIcon = createIcon(
  <>
    <path d="M8.5 4C11 6.8 12.5 9 12.5 11a4 4 0 0 1-8 0C4.5 9 6 6.8 8.5 4Z" />
    <path d="M15.5 6.5c2 2.3 3.2 4 3.2 5.5a3.2 3.2 0 0 1-6.4 0c0-1.5 1.2-3.2 3.2-5.5Z" />
  </>,
);

export const FactoryIcon = createIcon(
  <>
    <path d="M3 20V9l6 4V9l6 4V6l6 4v10Z" />
    <rect x="5" y="16" width="2" height="2" />
    <rect x="9" y="16" width="2" height="2" />
    <rect x="13" y="16" width="2" height="2" />
    <rect x="17" y="16" width="2" height="2" />
    <line x1="3" y1="20" x2="21" y2="20" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2" />
  </>,
);

export const TruckIcon = createIcon(
  <>
    <path d="M3 7h11v8H3Z" />
    <path d="M14 11h3l2 2.5V15h-5" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </>,
);

export const ShipIcon = createIcon(
  <>
    <path d="M4 10h16l-2 7H6Z" />
    <path d="M12 3v7" />
    <path d="M8 3h8l1 4H7Z" />
    <path d="M4 17s2 2 8 2 8-2 8-2" />
  </>,
);

export const FuelIcon = createIcon(
  <>
    <rect x="6" y="3" width="8" height="18" rx="2" />
    <path d="M14 7h2l3 3v7a2 2 0 0 1-2 2h-1" />
    <circle cx="10" cy="9.5" r="1.8" />
  </>,
);

export const AwardIcon = createIcon(
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M9.5 12 8 21l4-2 4 2-1.5-9" />
  </>,
);

export const TargetIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.2" />
  </>,
);

export const EyeIcon = createIcon(
  <>
    <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
    <circle cx="12" cy="12" r="2.5" />
  </>,
);

export const HeartIcon = createIcon(
  <path d="M12 20.5 5.5 14a4.5 4.5 0 0 1 6.4-6.3L12 8l.1-.3a4.5 4.5 0 0 1 6.4 6.3Z" />,
);

export const UsersIcon = createIcon(
  <>
    <circle cx="8.5" cy="10" r="3" />
    <circle cx="16.5" cy="10" r="3" />
    <path d="M3 19v-.5a5 5 0 0 1 5-5h1" />
    <path d="M21 19v-.5a5 5 0 0 0-5-5h-1" />
  </>,
);

export const BarChartIcon = createIcon(
  <>
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="6" y="12" width="3" height="7" rx="1" />
    <rect x="11" y="9" width="3" height="10" rx="1" />
    <rect x="16" y="6" width="3" height="13" rx="1" />
  </>,
);

export const CompassIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <polygon points="12 7.5 15.5 15.5 8.5 15.5 12 7.5" />
    <circle cx="12" cy="12" r="1.2" />
  </>,
);

export const LeafIcon = createIcon(
  <>
    <path d="M5 15c0-5.5 4.5-10 10-10h4v4c0 5.5-4.5 10-10 10H5Z" />
    <path d="M9 13c1.5 0 3.5-1 4.5-2" />
  </>,
);

export const LayersIcon = createIcon(
  <>
    <polygon points="12 4 3 9 12 14 21 9 12 4" />
    <path d="M5 12.5 12 17l7-4.5" />
    <path d="M5 16 12 20.5 19 16" />
  </>,
);

export const SplineIcon = createIcon(
  <>
    <path d="M4 18c2-5 4-8 7-8s5 3 9 3" />
    <circle cx="4" cy="18" r="1.5" />
    <circle cx="11" cy="10" r="1.5" />
    <circle cx="20" cy="13" r="1.5" />
  </>,
);

export const GlobeAltIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4a16 16 0 0 0 0 16" />
    <path d="M12 4a16 16 0 0 1 0 16" />
    <path d="M4 12h16" />
    <path d="M6 7c2 1.5 4 2 6 2s4-.5 6-2" />
    <path d="M6 17c2-1.5 4-2 6-2s4 .5 6 2" />
  </>,
);

export const MailIcon = createIcon(
  <>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <polyline points="3 8 12 13 21 8" />
  </>,
);

export const PhoneIcon = createIcon(
  <>
    <path d="M7 3h3l1.5 4-2.5 1c1.2 2.5 3.5 4.8 6 6l1-2.5 4 1.5v3a2 2 0 0 1-2.2 2 17 17 0 0 1-11.8-11.8A2 2 0 0 1 7 3Z" />
  </>,
);

export const SendIcon = createIcon(
  <polygon points="3 4 21 12 3 20 6 13 12 12 6 11 3 4" />,
);

export const FacebookIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M13 8h1.5V5.5H13a3 3 0 0 0-3 3V10H8v2.5h2V19h3v-6.5h2.3L16 10H13V8Z" />
  </>,
);

export const TwitterIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M16.5 9.4a3.3 3.3 0 0 1-1.6.4 1.9 1.9 0 0 0 1.4-1.6 3.3 3.3 0 0 1-1.8.7 1.8 1.8 0 0 0-3.1 1.2c0 .2 0 .5.1.7a5 5 0 0 1-3.7-1.9 1.8 1.8 0 0 0 .6 2.4 1.7 1.7 0 0 1-.8-.2 1.8 1.8 0 0 0 1.4 1.8 1.7 1.7 0 0 1-.8 0 1.8 1.8 0 0 0 1.7 1.3A3.6 3.6 0 0 1 7.5 15a5 5 0 0 0 7.7-4.2v-.2a3.4 3.4 0 0 0 1.3-.7Z" />
  </>,
);

export const InstagramIcon = createIcon(
  <>
    <rect x="5" y="5" width="14" height="14" rx="4" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="16.5" cy="7.5" r="1" />
  </>,
);

export const LinkedinIcon = createIcon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <rect x="7" y="9" width="2.5" height="7" />
    <rect x="7" y="7" width="2.5" height="2.5" rx="1.2" />
    <path d="M13 9c1.9 0 3 1.3 3 3.4V16h-2.5v-2.6c0-.9-.3-1.5-1.1-1.5-.9 0-1.4.7-1.4 1.6V16H8.5V9H11v1.1A2.6 2.6 0 0 1 13 9Z" />
  </>,
);

// Custom service icons
export const IntegrityShieldIcon = createIcon(
  <>
    <path d="M12 21c-3.6-1.8-6-5-6-9.2V6.5L12 4l6 2.5v5.3c0 4.2-2.4 7.4-6 9.2Z" />
    <path d="M9 12.2 11.4 14.6 15 10.5" />
    <path d="M8.2 8.5h7.6" />
  </>,
);

export const CalibrationGaugeIcon = createIcon(
  <>
    <path d="M5 15.5a7 7 0 0 1 14 0V19H5Z" />
    <path d="M12 14l3.3-3.3" />
    <path d="M7 12h3" />
    <path d="M9 19v1.5" />
    <path d="M15 19v1.5" />
  </>,
);

export const PipelineInspectionIcon = createIcon(
  <>
    <path d="M4 8h16v8H4Z" />
    <path d="M4 12h16" />
    <path d="M8 4v4" />
    <path d="M16 16v4" />
    <path d="M6 10.5 9 13.5" />
    <path d="M15 10.5 18 13.5" />
  </>,
);

export const StorageTankIcon = createIcon(
  <>
    <ellipse cx="12" cy="7" rx="6.5" ry="3.2" />
    <path d="M5.5 7v6.5c0 1.9 2.9 3.3 6.5 3.3s6.5-1.4 6.5-3.3V7" />
    <path d="M5.5 13.5v3c0 1.9 2.9 3.3 6.5 3.3s6.5-1.4 6.5-3.3v-3" />
    <path d="M8 7V4h8v3" />
  </>,
);

export const VesselComplianceIcon = createIcon(
  <>
    <path d="M8 5.5h8l2 3.5-2 3.5H8l-2-3.5Z" />
    <path d="M8 12.5h8l2 3.5-2 3.5H8l-2-3.5Z" />
    <path d="M9.5 15.5 12 18l2.5-2.5" />
  </>,
);

export const UltrasonicMatrixIcon = createIcon(
  <>
    <rect x="4" y="6" width="16" height="12" rx="2" />
    <path d="M7 9h3M7 12h3M7 15h3" />
    <path d="M12.5 9.5 17 7" />
    <path d="M12.5 12 18 9.5" />
    <path d="M12.5 14.5 18 12" />
  </>,
);

export const UltrasonicSliceIcon = createIcon(
  <>
    <rect x="4.5" y="5" width="15" height="14" rx="2" />
    <path d="M7 9c2.5 0 3.5 2 5 2s2.5-2 5-2" />
    <path d="M7 13c2.5 0 3.5 2 5 2s2.5-2 5-2" />
    <path d="M12 5v14" />
  </>,
);

export const MagneticFieldIcon = createIcon(
  <>
    <path d="M7 13V9a5 5 0 0 1 10 0v4" />
    <path d="M7 13v2a5 5 0 0 0 10 0v-2" />
    <path d="M5 7h3" />
    <path d="M16 7h3" />
    <path d="M8 11h2" />
    <path d="M14 11h2" />
  </>,
);

export const MagneticLumenIcon = createIcon(
  <>
    <path d="M6 12a6 6 0 0 1 12 0v3.5" />
    <path d="M6 12v2a6 6 0 0 0 12 0v-2" />
    <circle cx="12" cy="12" r="2.3" />
    <path d="M9.5 3.5 8 6" />
    <path d="M14.5 3.5 16 6" />
  </>,
);

export const CapillarySearchIcon = createIcon(
  <>
    <path d="M11 3c2 2.3 4 5.1 4 7.2a3.8 3.8 0 0 1-7.6 0C7.4 8.1 9 5.3 11 3Z" />
    <path d="M11 14.5v6" />
    <path d="M8.5 17.5 11 20l2.5-2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
    <path d="M18.3 18.3 20 20" />
  </>,
);

export const RadiographicImagingIcon = createIcon(
  <>
    <rect x="4" y="6" width="16" height="12" rx="2.5" />
    <path d="M7 9h3l1.5 3L13 9h3" />
    <circle cx="12" cy="15" r="1.5" />
    <path d="M4 12h16" />
  </>,
);

export const CoatingShieldIcon = createIcon(
  <>
    <path d="M6 7.5 12 4l6 3.5v4.5c0 3.1-1.9 5.8-6 7.5-4.1-1.7-6-4.4-6-7.5Z" />
    <path d="M9 12h6" />
    <path d="M8 9.5h8" />
    <path d="M9 14.5h6" />
  </>,
);

export const MaterialSpectrumIcon = createIcon(
  <>
    <rect x="5" y="5" width="14" height="14" rx="3" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 8.5V6" />
    <path d="M12 18v-2.5" />
    <path d="M8.5 12H6" />
    <path d="M18 12h-2.5" />
  </>,
);

export const PhasedArrayIcon = createIcon(
  <>
    <rect x="5" y="6" width="14" height="12" rx="2.5" />
    <path d="M8 9h8" />
    <path d="M9 12h6" />
    <path d="M10 15h4" />
    <path d="M6 6 12 3l6 3" />
  </>,
);

export const LaserCubeIcon = createIcon(
  <>
    <path d="M7 8.5 12 6l5 2.5v5l-5 2.5-5-2.5Z" />
    <path d="M7 8.5v5l5 2.5" />
    <path d="M17 8.5v5l-5 2.5" />
    <path d="M12 6v-2" />
    <path d="M12 19.5V18" />
  </>,
);

export const ThermalScannerIcon = createIcon(
  <>
    <rect x="5" y="4.5" width="14" height="15" rx="3" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M9.5 12a2.5 2.5 0 0 1 5 0" />
    <path d="M8 7.5h8" />
    <path d="M10 19.5h4" />
  </>,
);

export const ElectromagneticFieldIcon = createIcon(
  <>
    <path d="M5 12c0-4.4 3.1-8 7-8s7 3.6 7 8" />
    <path d="M5 12c0 4.4 3.1 8 7 8s7-3.6 7-8" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 4V2" />
    <path d="M12 22v-2" />
  </>,
);

export const FitnessAssessmentIcon = createIcon(
  <>
    <path d="M6 7.5 12 4l6 3.5v4.5c0 3.2-1.9 6-6 7.7-4.1-1.7-6-4.5-6-7.7Z" />
    <path d="M9 12.5 12 15l3-2.5" />
    <path d="M9 9.5h6" />
  </>,
);

export const RiskGaugeIcon = createIcon(
  <>
    <path d="M5 15.5a7 7 0 0 1 14 0V19H5Z" />
    <path d="M12 15.5 16 10" />
    <circle cx="12" cy="15.5" r="1.5" />
    <path d="M8 11h2" />
    <path d="M14 11h2" />
  </>,
);

export const BoilerGuardIcon = createIcon(
  <>
    <rect x="6" y="5" width="12" height="14" rx="3" />
    <path d="M9 5V3h6v2" />
    <path d="M9 13h6" />
    <path d="M9 9h6" />
    <path d="M12 13v6" />
  </>,
);

export const LiftingHookIcon = createIcon(
  <>
    <path d="M12 3a3 3 0 0 1 3 3v3.5a3 3 0 1 1-6 0V6a3 3 0 0 1 3-3Z" />
    <path d="M12 12v4c0 1.6 1.3 3 3 3h2" />
    <path d="M7 21h6" />
    <path d="M9 16h2" />
  </>,
);

export const GasMonitorIcon = createIcon(
  <>
    <rect x="6" y="4" width="12" height="16" rx="3" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M9 15h6" />
    <path d="M11 7h2" />
    <path d="M10 20h4" />
  </>,
);

export const PressureSealIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5v14" />
    <path d="M5 12h14" />
    <path d="M9 9l3 3 3-3" />
    <path d="M9 15l3-3 3 3" />
  </>,
);

export const TankFloorScanIcon = createIcon(
  <>
    <rect x="4" y="6.5" width="16" height="11" rx="2.5" />
    <path d="M4 12h16" />
    <path d="M8 16l4-4 4 4" />
    <path d="M8 9l4 4 4-4" />
  </>,
);

export const SphereInspectionIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5a7 7 0 0 0 0 14" />
    <path d="M12 5a7 7 0 0 1 0 14" />
    <path d="M7 12h10" />
    <path d="M12 7v10" />
  </>,
);

export const HardnessMeterIcon = createIcon(
  <>
    <rect x="6" y="4" width="12" height="16" rx="3" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
    <path d="M12 16v4" />
    <circle cx="12" cy="12" r="2" />
  </>,
);

export const UavSurveyIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M4 8h4l2 3" />
    <path d="M20 8h-4l-2 3" />
    <path d="M4 16h4l2-3" />
    <path d="M20 16h-4l-2-3" />
    <path d="M8 5l4-2 4 2" />
    <path d="M8 19l4 2 4-2" />
  </>,
);

export const BlueprintCompassIcon = createIcon(
  <>
    <rect x="4" y="5" width="16" height="14" rx="2.5" />
    <path d="M8 5v14" />
    <path d="M16 5v14" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 9v6" />
    <path d="M6 9h2" />
    <path d="M16 9h2" />
  </>,
);

export const ProcurementFlowIcon = createIcon(
  <>
    <rect x="4.5" y="6" width="15" height="12" rx="2.5" />
    <path d="M7.5 9h4.5l1.5 2-1.5 2H7.5Z" />
    <path d="M15.5 9.5a2.5 2.5 0 1 1 0 5" />
    <path d="M15.5 9.5v5" />
  </>,
);

export const FabricationBeamIcon = createIcon(
  <>
    <rect x="4" y="7" width="16" height="10" rx="2" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
    <path d="M8 19v2" />
    <path d="M16 19v2" />
  </>,
);

export const StructureLiftIcon = createIcon(
  <>
    <path d="M5 18h14" />
    <path d="M7 18V9l5-4 5 4v9" />
    <path d="M7 13h10" />
    <path d="M12 5V3" />
    <path d="M9 21h6" />
  </>,
);

export const WeldingArcIcon = createIcon(
  <>
    <path d="M5 15c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    <path d="M5 15c0 3.9 3.1 7 7 7s7-3.1 7-7" />
    <path d="M7 12h10" />
    <path d="M9 9 12 6l3 3" />
    <path d="M9 18l3 3 3-3" />
  </>,
);

export const SurfaceTreatmentIcon = createIcon(
  <>
    <rect x="4" y="6" width="16" height="12" rx="3" />
    <path d="M7 10h10" />
    <path d="M7 14h6" />
    <path d="M11 6V4h2v2" />
    <path d="M11 18v2h2v-2" />
  </>,
);

// Custom industry icons
export const EnergyReservoirIcon = createIcon(
  <>
    <path d="M6 7.5 12 4l6 3.5v4.5c0 3.2-2 6-6 7.7-4-1.7-6-4.5-6-7.7Z" />
    <path d="M12 8.5v7" />
    <path d="M9.5 13.5 12 11l2.5 2.5" />
    <path d="M9 6h6" />
  </>,
);

export const TerminalLogisticsIcon = createIcon(
  <>
    <rect x="5" y="6" width="14" height="12" rx="3" />
    <path d="M5 12h14" />
    <path d="M8 9h4l1.5 3L15 9h4" />
    <path d="M8 15h2" />
    <path d="M14 15h2" />
  </>,
);

export const FoodProcessIcon = createIcon(
  <>
    <circle cx="9" cy="12" r="3" />
    <path d="M11 9 16 5" />
    <path d="M13 11 19 7" />
    <path d="M13 15h6" />
    <path d="M5 14a4 4 0 0 0 4 4h10" />
  </>,
);

export const RenewableCycleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 5.5V3" />
    <path d="M12 21v-2.5" />
    <path d="M18.5 12H21" />
    <path d="M3 12h2.5" />
    <path d="M9 9l3-4 3 4" />
    <path d="M9 15l3 4 3-4" />
  </>,
);

export const RailNetworkIcon = createIcon(
  <>
    <path d="M5 18h14" />
    <rect x="7" y="5" width="10" height="10" rx="2.5" />
    <path d="M9 9h6" />
    <path d="M9 12h6" />
    <path d="M7 15l-2 3" />
    <path d="M17 15l2 3" />
  </>,
);

export const MarineLogisticsIcon = createIcon(
  <>
    <path d="M4 6h16l-2 6a6 6 0 0 1-12 0Z" />
    <path d="M6 18s2 2 6 2 6-2 6-2" />
    <path d="M9 10h6" />
    <path d="M12 6V3" />
    <path d="M8 14h8" />
  </>,
);

