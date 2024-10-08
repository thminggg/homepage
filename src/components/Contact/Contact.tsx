import "./Contact.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactProps {
  id: string;
  className?: string;
}

function Contact({ id, className }: ContactProps) {
  return (
    <section id={id} className={`flex flex-col ${className}`}>
      <h1 className="w-full text-center mb-6 text-3xl section-highlight">
        Contact
      </h1>
      <div className="w-full flex flex-col mt-3 mb-3 md:w-full">
        <div className="grid grid-rows-3 gap-8 mx-auto">
          <div className="flex items-center">
            <MdOutlineMarkEmailUnread className="h-4/6 mr-9 gmail" />
            <p className="text-lg font-semibold md:text-2xl">
              patrick.hm.tse@gmail.com
            </p>
          </div>
          <div className="flex items-center">
            <FaGithub className="h-4/6 mr-9" />
            <a
              className=" text-lg font-semibold md:text-2xl"
              href="https://github.com/thminggg"
              target="__blank"
            >
              thminggg
            </a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="h-4/6 mr-9 linkedin" />
            <a
              className="text-lg font-semibold md:text-2xl whitespace-nowrap"
              href="https://www.linkedin.com/in/patrick-tse-ca"
              target="__blank"
            >
              patrick-tse-ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
