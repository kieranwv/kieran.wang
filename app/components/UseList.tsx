import type { UseItem } from "../../lib/uses";

export function UseList({ items }: { items: UseItem[] }) {
  if (items.length === 0) return null;

  return (
    <dl className="uses-list">
      {items.map((item) => (
        <div className="uses-row" key={`${item.label}-${item.valueHtml}`}>
          {item.label ? <dt>{item.label}</dt> : null}
          <dd dangerouslySetInnerHTML={{ __html: item.valueHtml }} />
        </div>
      ))}
    </dl>
  );
}
