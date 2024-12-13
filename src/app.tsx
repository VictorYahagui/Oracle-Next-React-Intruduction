import { useState } from "react";
import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Time } from "./components/Time";

interface Register {
  id: string;
  name: string;
  position: string;
  image: string;
  time: string;
}

type Person = Register;

export function App() {


  const [registers, setRegisters] = useState<Register[]>([]);

  function addNewPerson(person: Person): void {
    setRegisters([...registers, person])
  }

  return (
    <section className="w-full">
      <header >
        <Hero />
      </header>
      <main className="flex flex-col items-center">
        <Form newRegister={person => addNewPerson(person)} />
        <Time time="Front-End" name="fronttttttttttttttttttttttttttttttttttttttttt" />
      </main>
      <footer>

      </footer>
    </section>

  )
}

