interface InputLabelProps {
    name: string;
    placeholder: string;
    required?: boolean;
    value: string;
    changed: (value: string) => void;
}

export function InputLabel(props: InputLabelProps) {

    function onInputChanged(event: React.ChangeEvent<HTMLInputElement>): void {
        props.changed(event.target.value);
    }

    return (
        <div className="flex gap-1 flex-col items-start">
            <label className="text-xl" htmlFor="">{props.name}</label>
            <input className="bg-white shadow-md w-full p-4 rounded-md" type="text" name="" id=""
                onChange={onInputChanged}
                value={props.value}
                required={!props.required ? false : true}
                placeholder={props.placeholder}
            />
        </div>
    );
};
