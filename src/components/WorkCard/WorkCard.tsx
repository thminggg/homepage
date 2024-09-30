const ViewButton = ({ href }: { href: string }) => {
  return (
    <button className="btn bg-dark dark:bg-white text-sm text-white dark:text-black rounded-3xl font-bold px-3 py-2 ml-auto">
      <a href={href}>View</a>
    </button>
  );
};

const Logo = ({ src }: { src: string }) => {
  return <img src={src} alt="logo" className="w-10 h-10" />;
};

const Highlight = ({
  headline,
  description,
  bgColor,
}: {
  headline: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <div
      className="h-[80%] p-6 text-white rounded-t-lg"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-[90%]">
        <p className="text-2xl font-bold">{headline}</p>
        <p className="text-md mt-3">{description}</p>
      </div>
    </div>
  );
};

const Bar = ({
  title,
  img,
  href,
}: {
  title: string;
  img: string;
  href: string;
}) => {
  return (
    <div className="flex h-[20%] items-center gap-2 px-6 py-3">
      <Logo src={img} />
      <p className="text-sm font-bold">{title}</p>
      <ViewButton href={href} />
    </div>
  );
};

export default function WorkCard({
  key,
  title,
  headline,
  description,
  img,
  href,
  bgColor,
  onClick,
}: {
  key: number;
  title: string;
  headline: string;
  description: string;
  img: string;
  href: string;
  bgColor: string;
  onClick: () => void;
}) {
  return (
    <div
      key={key}
      className="flex flex-col h-96 bg-white dark:bg-dark rounded-lg cursor-pointer hover:scale-105 hover:duration-[400ms]"
      onClick={onClick}
    >
      <Highlight
        headline={headline}
        description={description}
        bgColor={bgColor}
      />
      <Bar title={title} img={img} href={href} />
    </div>
  );
}
