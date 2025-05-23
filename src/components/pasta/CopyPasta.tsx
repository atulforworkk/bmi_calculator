import { Badge, LoadingOverlay } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import images from "images/images";
import { useState } from "react";
import ReactGA from 'react-ga';
interface PastaData {
  id: number;
  email: string;
  name: string;
  pasta_text: string;
  tags: string[];
}


type Props = {
  loading:boolean,
  pastaResponse:PastaData[],
};


const CopyPasta = ({loading,pastaResponse}: Props) => {
console.log("🚀 ~ CopyPasta ~ pastaResponse:", pastaResponse)

  return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
  <LoadingOverlay visible={loading} />
  {pastaResponse.map((pasta:PastaData, index:number) => (
    <Pasta pasta_text={pasta.pasta_text} nameText={pasta.name} key={index} />
  ))}
</div>
  );
};

export default CopyPasta;

type PastaProps = {
  pasta_text: string;
  nameText: string;
};
const Pasta = ({ pasta_text, nameText }: PastaProps) => {

console.log("🚀 ~ Pasta ~ nameText:", nameText)

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {

    ReactGA.event({'category':'Test',"action":'onclick','label':'label'})
    navigator.clipboard
      .writeText(pasta_text)
      .then(() => {
        setCopied(true); // Set state to true when text is copied
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        notifications.show({
          message: "Text Copied to clipboard ",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="border-white border  p-2 bg-slate-800">
      <p>{pasta_text}</p>
      <div className="flex justify-between items-center py-2">
        <Badge color="blue">{nameText}</Badge>
        <button className="text-end" onClick={handleCopy}>
          <img src={images.clipboardIcon} alt="" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
