export default function Card({ links, title, highlights }) {
  return (
    <div
      href="#"
      target="_blank"
      rel="noreferrer"
      className="max-md:w-full w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </p>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            <div>{link.title}</div>
          </a>
        ))}
        {highlights}
      </div>
    </div>
  );
}
