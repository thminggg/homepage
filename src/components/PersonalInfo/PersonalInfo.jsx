import { FaRegFileCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import Separator from "../Separator/Separator";
import "./PersonalInfo.css";
import stacks from "../../data/stacks.json";

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
  return (
    <div className="summary flex flex-col max-lg:w-full w-4/12 rounded-xl p-3">
      <div className="propic-card w-fit p-6 mb-6 m-auto rounded-lg">
        <img src="sticker.webp" alt="profile" className="h-52" />
      </div>
      <p className="text-2xl font-bold m-2 text-center">Patrick HM Tse</p>
      <p className="text-sm text-center">Software Engineer</p>
      <Separator />
      <div className="flex flex-col gap-4">
        {infos.map((info, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="m-w-1/12">{info.icon}</div>
            <div className="flex flex-wrap">
              <div className="w-full text-xs">{info.title}</div>
              <div className="w-full font-bold break-all">{info.content}</div>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-6">
          <div className="m-w-1/12">
            <FaRegFileCode size={34} />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full text-xs">Tech Stacks</div>
            <div className="w-full break-words">
              {stacks.map((stack, index) => (
                <div key={index} className="mb-1">
                  <span className="font-bold">{stack.title}</span>
                  {`: `}
                  <span className="text-sm">{stack.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
