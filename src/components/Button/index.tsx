
interface ButtonProps {
    text: string;
}

export function Button(props: ButtonProps) {
    return (
        <button className="p-4 rounded-md bg-[#6278f7] text-white size-1/5 mt-2">
            {props.text}
        </button>
    );
};