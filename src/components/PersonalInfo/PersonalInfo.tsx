import { useState } from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import stacks from "../../data/stacks.json";
import Separator from "../Separator/Separator";
import "./PersonalInfo.css";

const infos = [
  {
    icon: <MdEmail size={33} />,
    title: "Email",
    content: "patrick.hm.tse@gmail.com",
  },
  {
    icon: <SlLocationPin size={33} />,
    title: "Location",
    content: "Vancouver, Canada",
  },
];

export default function PersonalInfo() {
  const propics = ["giraffe.png", "sticker.webp"];
  const [propic, setPropic] = useState(0);

  return (
    <div className="summary flex flex-col max-lg:w-full w-3/12 rounded-xl p-3">
      <button
        className="flex justify-end"
        onClick={() => setPropic((propic + 1) % propics.length)}
      >
        <RxUpdate className="propic-update-icon " />
      </button>
      <div className="propic-card w-fit p-6 mb-6 m-auto rounded-lg">
        <img src={`${propics[propic]}`} alt="profile" className="h-52" />
      </div>
      <p className="text-3xl font-bold m-2 text-center">Patrick HM Tse</p>
      <p className="inline-block m-auto w-fit mt-2 p-2 text-sm text-center rounded-lg bg-[#373737]">
        Software Engineer
      </p>
      <Separator />
      <div className="flex flex-col gap-4">
        {infos.map((info, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="m-w-1/12">{info.icon}</div>
            <div className="flex flex-wrap">
              <div className="w-full text-xs">{info.title}</div>
              <div className="w-full font-bold break-all">{info.content}</div>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-6">
          <div className="m-w-1/12">
            <FaRegFileCode size={34} />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full text-xs">Tech Stacks</div>
            <div className="w-full break-words">
              {stacks.map(({ title, content }, index) => (
                <div key={index} className="mb-1">
                  <span className="font-bold">{title}</span>
                  {`: `}
                  <span className="text-sm">{content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
