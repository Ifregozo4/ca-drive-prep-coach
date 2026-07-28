import type { SVGProps } from "react";

type Props = {
  signId: string;
  className?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export function TrafficSign({ signId, className = "", title, ...rest }: Props) {
  const common = {
    viewBox: "0 0 100 100",
    className: `shrink-0 ${className}`,
    role: "img" as const,
    "aria-label": title ?? signId,
    ...rest,
  };

  switch (signId) {
    case "stop":
      return (
        <svg {...common}>
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="#c8102e"
            stroke="#111"
            strokeWidth="2"
          />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            STOP
          </text>
        </svg>
      );
    case "yield":
      return (
        <svg {...common}>
          <polygon points="50,92 8,12 92,12" fill="#fff" stroke="#c8102e" strokeWidth="8" />
          <text
            x="50"
            y="48"
            textAnchor="middle"
            fill="#c8102e"
            fontSize="12"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            YIELD
          </text>
        </svg>
      );
    case "do-not-enter":
      return (
        <svg {...common}>
          <circle cx="50" cy="50" r="42" fill="#c8102e" stroke="#111" strokeWidth="2" />
          <rect x="18" y="44" width="64" height="12" fill="#fff" rx="1" />
        </svg>
      );
    case "wrong-way":
      return (
        <svg {...common}>
          <rect x="8" y="28" width="84" height="44" rx="4" fill="#c8102e" stroke="#111" strokeWidth="2" />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            WRONG WAY
          </text>
        </svg>
      );
    case "no-u-turn":
      return (
        <svg {...common}>
          <circle cx="50" cy="50" r="40" fill="#fff" stroke="#111" strokeWidth="3" />
          <path
            d="M38 62 V40 a12 12 0 0 1 24 0 v8"
            fill="none"
            stroke="#111"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <polygon points="62,55 72,48 62,41" fill="#111" />
          <line x1="22" y1="22" x2="78" y2="78" stroke="#c8102e" strokeWidth="6" />
        </svg>
      );
    case "speed-limit":
      return (
        <svg {...common}>
          <rect x="22" y="8" width="56" height="84" rx="4" fill="#fff" stroke="#111" strokeWidth="3" />
          <text x="50" y="32" textAnchor="middle" fill="#111" fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">
            SPEED
          </text>
          <text x="50" y="44" textAnchor="middle" fill="#111" fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">
            LIMIT
          </text>
          <text x="50" y="72" textAnchor="middle" fill="#111" fontSize="28" fontWeight="700" fontFamily="system-ui,sans-serif">
            65
          </text>
        </svg>
      );
    case "railroad-advance":
      return (
        <svg {...common}>
          <circle cx="50" cy="50" r="40" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <text x="50" y="42" textAnchor="middle" fill="#111" fontSize="22" fontWeight="700" fontFamily="system-ui,sans-serif">
            X
          </text>
          <text x="28" y="70" textAnchor="middle" fill="#111" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">
            R
          </text>
          <text x="72" y="70" textAnchor="middle" fill="#111" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">
            R
          </text>
        </svg>
      );
    case "crossbuck":
      return (
        <svg {...common}>
          <rect x="46" y="10" width="8" height="80" fill="#666" />
          <g transform="translate(50,45) rotate(-35)">
            <rect x="-40" y="-8" width="80" height="16" fill="#fff" stroke="#111" strokeWidth="2" />
          </g>
          <g transform="translate(50,45) rotate(35)">
            <rect x="-40" y="-8" width="80" height="16" fill="#fff" stroke="#111" strokeWidth="2" />
          </g>
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <polygon points="50,8 90,30 90,70 50,92 10,70 10,30" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <circle cx="40" cy="42" r="5" fill="#111" />
          <circle cx="60" cy="42" r="5" fill="#111" />
          <path d="M32 70 q18 -20 36 0" fill="none" stroke="#111" strokeWidth="4" />
        </svg>
      );
    case "pedestrian":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <circle cx="50" cy="34" r="6" fill="#111" />
          <path d="M50 42 v18 l-10 16 m10 -16 l10 16 m-10 -28 l-12 8 m12 -8 l12 8" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "merge":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <path d="M35 72 V40 l20 -12" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          <path d="M65 72 V48" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          <path d="M55 32 l12 4 -4 12" fill="none" stroke="#111" strokeWidth="3" />
        </svg>
      );
    case "lane-ends":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <path d="M32 70 V35 M68 70 V50 L48 35" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "slippery":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <path d="M30 60 q10 -20 20 0 t20 0 t15 -5" fill="none" stroke="#111" strokeWidth="3" />
          <circle cx="38" cy="42" r="4" fill="#111" />
          <circle cx="58" cy="38" r="4" fill="#111" />
        </svg>
      );
    case "construction":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#ff8c00" stroke="#111" strokeWidth="3" />
          <path d="M40 65 V40 h8 l10 14 V40 h8 v25" fill="none" stroke="#111" strokeWidth="3" />
        </svg>
      );
    case "warning-diamond":
      return (
        <svg {...common}>
          <polygon points="50,8 92,50 50,92 8,50" fill="#f7d117" stroke="#111" strokeWidth="3" />
          <text x="50" y="58" textAnchor="middle" fill="#111" fontSize="28" fontWeight="700" fontFamily="system-ui,sans-serif">
            !
          </text>
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="15" y="15" width="70" height="70" rx="6" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
          <text x="50" y="55" textAnchor="middle" fill="#374151" fontSize="10" fontFamily="system-ui,sans-serif">
            Sign
          </text>
        </svg>
      );
  }
}
