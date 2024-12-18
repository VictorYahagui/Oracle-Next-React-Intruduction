import { useState } from "react";
import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Time } from "./components/Time";
import { Footer } from "./components/Footer";

export interface Register {
  id: string;
  name: string;
  position: string;
  image: string;
  time: string;
  favorite: boolean;
}

type Person = Register;

const times = [
  'Programação',
  'Front-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
  'Inovação e Gestão',
  'novo'
] as const;
type TimeType = typeof times[number];



export function App() {

  const [registers, setRegisters] = useState<Register[]>([]);

  function addNewPerson(person: Person): void {
    setRegisters([...registers, person])
  }
  function deleteRegister(id: string): void {
    setRegisters(registers.filter((register) => register.id !== id))
  }
  function updateFavoritePerson(id: string): void {
    setRegisters(registers.map((register) => register.id === id ? { ...register, favorite: !register.favorite } : register))
  }
  return (
    <section className="w-full">
      <header >
        <Hero />
      </header>
      <main className="flex flex-col items-center">
        <Form newRegister={person => addNewPerson(person)} />
        {times.map((time, index) => {
          return (
            <Time
              key={index}
              time={time}
              registers={registers.filter((register) => time.includes(register.time as TimeType))}
              deleteRegister={deleteRegister}
              favoritePerson={updateFavoritePerson}
            />
          )
        })
        }
      </main>
      <footer>
        <Footer />
      </footer>
    </section>

  )
}

