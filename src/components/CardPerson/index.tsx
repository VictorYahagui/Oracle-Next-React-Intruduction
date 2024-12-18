import { Register } from "../../app"
import { IoMdClose, IoMdHeartDislike, IoMdHeart } from "react-icons/io";

interface CardPersonProps extends Register {
    colorCard: string;
    deleteRegister: (id: string) => void;
    favoritePerson: (id: string) => void;
}

export function CardPerson(props: CardPersonProps) {

    const colorMap: Record<string, string> = {
        "Programação": "bg-green-500",
        "Front-End": "bg-blue-500",
        "Data Science": "bg-lime-500",
        "Devops": "bg-red-500",
        "UX e Design": "bg-pink-500",
        "Mobile": "bg-yellow-500",
        "Inovação e Gestão": "bg-orange-500"
    };

    const selectColor = (position: string): string => {
        return colorMap[position] || "bg-black";
    };
    return (
        <div className="w-72 relative">
            <div className="absolute right-[-10px] top-[-4px] " onClick={() => { props.deleteRegister(props.id); }}>
                <IoMdClose className=" size-7 rounded-full bg-red-400 cursor-pointer hover:bg-red-500 " />
            </div>
            <div className={`flex justify-center items-center rounded-t-xl ${selectColor(props.time)} `}>
                <img className="w-28 rounded-full relative bottom-[-55px]" src={props.image} alt={props.name} />
            </div>
            <div className="flex flex-col justify-center items-center bg-white rounded-b-xl pt-20 pb-10 shadow-xl break-keep text-center">
                <h4 className="text-blue-400 text-xl leading-6">{props.name}</h4>
                <p className="w-full text-xl leading-5 text-black py-4"> {props.position}</p>
                <div className="cursor-pointer" onClick={() => { props.favoritePerson(props.id) }}>
                    {props.favorite ? <IoMdHeart size={24} color="red" /> : <IoMdHeartDislike size={24} />}
                </div>
            </div>
        </div>
    )
};
