
type TimeType =
    | 'Programação'
    | 'Front-End'
    | 'Data Science'
    | 'Devops'
    | 'UX e Design'
    | 'Mobile'
    | 'Inovação e Gestão';

interface TimeProps {
    time?: string; // Permitir qualquer string temporariamente
    name: string; // Permitir
}

interface ColorScheme {
    primary: string;
    secondary: string;
}

const colorMapping: Record<TimeType, ColorScheme> = {
    'Programação': { primary: 'bg-green-200', secondary: 'border-green-500' },
    'Front-End': { primary: 'bg-blue-200', secondary: 'border-blue-500' },
    'Data Science': { primary: '#32CD32', secondary: '#228B22' },
    'Devops': { primary: '#FFD700', secondary: '#FFA500' },
    'UX e Design': { primary: '#8A2BE2', secondary: '#6A5ACD' },
    'Mobile': { primary: '#FF1493', secondary: '#C71585' },
    'Inovação e Gestão': { primary: '#8B4513', secondary: '#A52A2A' },
};
export function Time(props: TimeProps) {

    const colorScheme: ColorScheme = props.time && (props.time in colorMapping)
        ? colorMapping[props.time as TimeType]  // Garantindo que `time` é do tipo `TimeType`
        : { primary: '#808080', secondary: '#A9A9A9' };

    return (
        <section className={`w-full flex flex-col justify-center items-center p-8 ${colorScheme.primary}`}>
            <h3 className={`inline-block border-b-2 pb-2 text-black ${colorScheme.secondary}`}>
                {props.time}
            </h3>
        </section>
    )
};
