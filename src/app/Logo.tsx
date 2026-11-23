import logoUrl from '../assets/query-truck-logo.webp';

/**
 * The official Query Truck logo (the owner's artwork, src/assets/query-truck-logo.webp). The
 * picture has empty space round it; the frame shows only the logo itself (LOGO_CROP).
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <h1 className={`logo ${className}`.trim()}>
      <img src={logoUrl} alt="Query Truck" draggable={false} />
    </h1>
  );
}
