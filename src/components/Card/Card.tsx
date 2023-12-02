import { stackColors } from "../../assets/stack-colors";

type Link = {
  url: string;
  title: string;
};

type Stack = {
  color: string;
  name: string;
};

export default function Card({
  links,
  title,
  highlights,
  stacks,
}: {
  links: Array<Link>;
  title: string;
  highlights?: string;
  stacks?: Array<Stack>;
}) {
  return (
    <div
      rel="noreferrer"
      className="max-md:w-full w-[40%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </p>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {links.map((link, index) => (
          <div key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              {link.title}
            </a>
          </div>
        ))}
        {highlights}
        <div className="flex flex-wrap text-md mt-3">
          {stacks?.map(
            ({ color, name }: { color: string; name: string }, index) => {
              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`inline-block rounded-full h-2 w-2 mr-1 ${stackColors[color]}`}
                  />
                  <div className="inline-flex mr-3">{name}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
