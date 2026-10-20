export default function Counter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <span data-count={to} data-prefix={prefix} data-suffix={suffix}>
      {`${prefix}${to}${suffix}`}
    </span>
  );
}
