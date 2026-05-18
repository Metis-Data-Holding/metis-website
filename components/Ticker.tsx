export function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            <span className="dot">◆</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
