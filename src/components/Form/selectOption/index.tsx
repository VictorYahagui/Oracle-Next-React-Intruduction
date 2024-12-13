
interface SelectOptionsProps {
    options: Array<string>;
    label: string;
    value: string;
    changed: (value: string) => void;
}
export function SelectOption(props: SelectOptionsProps) {

    function onInputChanged(event: React.ChangeEvent<HTMLSelectElement>): void {
        props.changed(event.target.value);
    }

    return (
        <div className="flex gap-1 flex-col items-start">
            <label className="text-xl" htmlFor="">{props.label}</label>
            <select className="bg-white shadow-md w-full p-4 rounded-md h-14" name="select"
                onChange={onInputChanged}
            >
                {props.options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    );
                })}
            </select>
        </div>
    );
};

