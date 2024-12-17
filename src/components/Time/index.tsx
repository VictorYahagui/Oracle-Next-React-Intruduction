import { Register } from "../../app";
import { CardPerson } from "../CardPerson";

type TimeType =
    | 'Programação'
    | 'Front-End'
    | 'Data Science'
    | 'Devops'
    | 'UX e Design'
    | 'Mobile'
    | 'Inovação e Gestão';

interface TimeProps {
    time?: string;
    registers: Register[];
}
interface ColorScheme {
    primary: string;
    secondary: string;
}

const colorMapping: Record<TimeType, ColorScheme> = {
    'Programação': { primary: 'bg-green-100', secondary: 'border-green-600' },
    'Front-End': { primary: 'bg-blue-100', secondary: 'border-blue-600' },
    'Data Science': { primary: 'bg-lime-100', secondary: 'border-lime-600' },
    'Devops': { primary: 'bg-red-100', secondary: 'border-red-600' },
    'UX e Design': { primary: 'bg-pink-100', secondary: 'border-pink-600' },
    'Mobile': { primary: 'bg-yellow-100', secondary: 'border-yellow-600' },
    'Inovação e Gestão': { primary: 'bg-orange-100', secondary: 'border-orange-600' },
};
export function Time(props: TimeProps) {

    const colorScheme: ColorScheme = props.time && (props.time in colorMapping)
        ? colorMapping[props.time as TimeType]
        : { primary: '#808080', secondary: '#A9A9A9' };
    return (
        props.registers.length > 0 && <section className={`w-full flex flex-col gap-4 justify-center items-center p-8 ${colorScheme.primary}`}>
            <h3 className={`inline-block border-b-2 pb-2 text-black text-xl font-semibold ${colorScheme.secondary}`}>
                {props.time}
            </h3>
            <div className="flex flex-wrap justify-around">
                {props.registers.map(register => {
                    return (
                        <CardPerson
                            key={register.id}
                            colorCard={colorScheme.primary}
                            id={register.id} name={register.name}
                            image={register.image}
                            position={register.position}
                            time={register.time} />
                    )
                })}
            </div>
        </section>
    )
};
