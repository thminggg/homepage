import { stackColors } from "../../assets/stack-colors";

type Entry = {
  color: string;
  name: string;
};

export default function Stacks({
  stackIndex,
  title,
  entries,
}: {
  stackIndex: number;
  title: string;
  entries: Array<Entry>;
}) {
  return (
    <div className="flex flex-wrap">
      <div rel="noreferrer" className="flex flex-wrap w-full text-white">
        <p className="inline-block mr-2 font-bold">{title}:</p>
        {entries.map(
          ({ color, name }: { color: string; name: string }, index) => {
            return (
              <div key={`${stackIndex}-${index}`} className="flex items-center">
                <div
                  className={`inline-block rounded-full h-2 w-2 mr-1 ${stackColors[color]}`}
                />
                <div className="inline-flex mr-4">{name}</div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
