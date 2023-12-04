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
    <>
      <div rel="noreferrer" className="flex flex-wrap text-white w-full mb-2">
        <p className="w-28 font-bold">{title}:</p>
        <div className="flex flex-wrap w-4/6">
          {entries.map(
            ({ color, name }: { color: string; name: string }, index) => {
              return (
                <div
                  key={`${stackIndex}-${index}`}
                  className="flex items-center"
                >
                  <div
                    className={`rounded-full h-2 w-2 mr-1 ${stackColors[color]}`}
                  />
                  <div className="mr-4">{name}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
