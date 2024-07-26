interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip(props: ChipProps) {
  const { label, className } = props;
  return (
    <div
      className={`rounded-3xl overflow-hidden whitespace-nowrap px-[6px] py-[4px] bg-cyan-500${
        className ? ` ${className}` : ""
      }`}
    >
      <p className="text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis text-slate-50">{label}</p>
    </div>
  );
}
