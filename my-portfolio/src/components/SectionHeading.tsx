import type { ReactNode } from "react";
interface Props {
  index: string;
  label: string;
  title: ReactNode;
  aside?: string;
}
export default function SectionHeading({ index, label, title, aside }: Props) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-index">{index}</span> / {label}
        </span>
        <h2>{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  );
}
