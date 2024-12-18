import { useState } from "react";
import { Button } from "../Button";
import { InputLabel } from "./InputLabel";
import { SelectOption } from "./selectOption";
import { v4 as uuidv4 } from 'uuid';
import { Register } from "../../app";
interface FormProps {
    newRegister: (value: Register) => void;
}

export function Form(props: FormProps) {

    const options = [
        'Selecione seu Time',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setimage] = useState('');
    const [time, setTime] = useState('');

    const clearStates = () => {
        setName('');
        setPosition('');
        setimage('');
        setTime('');
    }

    const onSave = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        props.newRegister({
            id: uuidv4(),
            name,
            position,
            image,
            time,
            favorite: false,
        });
        clearStates();
    }

    return (
        <div className="flex flex-col gap-5 my-7 py-9 px-14 bg-[#f6f6f6] rounded-2xl">
            <h3 className="text-3xl">Preencha os dados para criar o card do colaborador.</h3>
            <form action="" className="flex flex-col gap-4" onSubmit={onSave}>
                <InputLabel
                    value={name}
                    required name="Nome"
                    placeholder="Digite seu nome"
                    changed={value => setName(value)}
                />
                <InputLabel
                    value={position}
                    required name="Cargo"
                    placeholder="Digite seu cargo"
                    changed={value => setPosition(value)}
                />
                <InputLabel
                    value={image}
                    name="Imagem"
                    placeholder="Informe o endereço da imagem"
                    changed={value => setimage(value)}
                />
                <SelectOption
                    value={time}
                    options={options}
                    label="Time"
                    changed={value => setTime(value)}
                />
                <Button text="Create card" />
            </form>
        </div>
    )
}