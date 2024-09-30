import "./About.css";

export default function About({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <section id={id} className={className} style={{ paddingTop: "80px" }}>
      <div className="flex flex-wrap items-center gap-6">
        <h1 className="w-full text-center text-3xl section-highlight">About</h1>
        <div className="hidden md:block md:flex-1">
          <img
            src="sitting.svg"
            alt="sitting"
            className="flex-1 h-auto mx-auto"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-left text-xl mb-6 title">
            Vancouver, Canada
            <img
              src="ass.png"
              alt="solution architect"
              className="inline-block w-20 pl-2"
            />
          </h2>
          <p className="text-left">
            I am an AWS-certified Software Engineer with 7+ years of experience
            specializing in Web, API and automation.
            <br />
            <br />
            My expertise mainly lies in leveraging React and Node.js to deliver
            microservices-based IT solutions for leading companies such as
            lululemon, IBM, and Vaisala Canada.
            <br />
            <br />
            Presently engaged as a Tech Engineer within the eCommerce industry,
            responsible for developing ReactJS components and automated testing
            frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}
