import "./marquee.css";

export function Marquee({ items }: { items: string[] }) {
  const duplicated = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]; // 🔥 triple copia

  return (
    <div className="overflow-hidden bg-black border-y border-gray-800 py-4">
      <div className="marquee">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="text-yellow-400 font-bold uppercase whitespace-nowrap mx-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}