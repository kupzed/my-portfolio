import type { TechIcon } from "@/lib/types";

export type IconColorGetter = (tech: TechIcon) => string;

interface TechListProps {
  tech: TechIcon[];
  getIconColor: IconColorGetter;
  limit?: number;
  size?: number;
  showLabels?: boolean;
}

export function TechList({
  tech,
  getIconColor,
  limit,
  size = 18,
  showLabels = false,
}: TechListProps) {
  const visibleTech = limit ? tech.slice(0, limit) : tech;
  const hiddenCount = limit ? Math.max(tech.length - limit, 0) : 0;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {visibleTech.map((item) => (
        <span
          key={item.id}
          className={
            showLabels
              ? "inline-flex items-center gap-1.5 rounded-full border border-border-light px-2.5 py-1 text-xs text-gray-600 dark:border-border dark:text-gray-300"
              : "inline-flex items-center"
          }
          title={item.label}
        >
          <item.icon
            size={size}
            style={{ color: getIconColor(item) }}
            aria-hidden="true"
            className="dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.1)]"
          />
          {showLabels && <span>{item.label}</span>}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="rounded-full border border-border-light px-2.5 py-1 text-xs font-medium text-gray-500 dark:border-border dark:text-gray-400">
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}
