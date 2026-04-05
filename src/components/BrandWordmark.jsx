/**
 * “Mock” + “Lab” split: primary text + accent gold, aligned with the logo mark.
 */
export default function BrandWordmark({ className = "" }) {
  return (
    <span className={`logo-wordmark ${className}`.trim()}>
      <span className="logo-wordmark-mock">Mock</span>
      <span className="logo-wordmark-lab">Lab</span>
    </span>
  );
}
