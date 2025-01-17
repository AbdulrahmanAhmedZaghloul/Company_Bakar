



import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineUp } from "react-icons/ai";

interface CardSelectorProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}
const CardSelector = ({ selectedOption, setSelectedOption }: CardSelectorProps) => {
  const options = [{ value: "MohamedHazem", label: "MohamedHazem" }];
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <Select onValueChange={setSelectedOption} value={selectedOption}>
        <SelectTrigger className="relative w-full  focus:outline-0 border  border-black rounded-none p-6 flex items-center justify-between">
            <AiOutlineUp className="font-extrabold mx-auto absolute right-[1.6rem]  top-1 text-[#80838B] text-[13.5px] " />
          <div className=" flex items-center gap-3">
            <SelectValue placeholder="Select a cardholder" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white border focus:outline-0 border-black rounded-none shadow-lg">
          {options.map((option) => (<>
            <SelectItem key={option.value} value={option.value} className="flex focus:outline-0 items-center gap-3 p-2">
              <div className="flex">
                <FaCcVisa className="text-xl me-2" />
                {option.label}
              </div>
            </SelectItem>
          </>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CardSelector;