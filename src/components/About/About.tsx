import "./About.css";

export default function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="flex flex-wrap items-center pt-20"
      style={{ minHeight: "648px", paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl about">About</h1>
      <div className="w-6/12">
        <img
          src="sticker.webp"
          alt="propic"
          className="w-6/12 h-auto ml-auto mr-auto"
        />
      </div>
      <div className="w-6/12">
        <h2 className="text-left text-xl mb-6 title">I'm Patrick</h2>
        <p className="text-left italic">
          Software Engineer based in Vancouver, Canada
          <br />
          <br />
          Specialize in Cloud services, FinTech, and Innovation, utilizing
          ReactJS and NodeJS.
          <br />
          <br />
          Presently engaged as a Software Engineer in Test within the eCommerce
          industry, responsible for developing sophisticated automated testing
          frameworks.
          <br />
          <br />
          Before that, working as as a Lead Software Engineer at a consulting
          firm to provide tailor-made IT solutions for clients in the finance
          and insurance sectors.
        </p>
      </div>
    </section>
  );
}
