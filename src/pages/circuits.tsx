// pages/Circuits.tsx

import ProjectCard from "@/components/ProjectCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Circuits = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-left  p-24 ${inter.className} mb-`}
    >
      <p className="text-2xl font-semibold">Circuits</p>
      <p className="text py-5">
        As a PhD Student studying Computer Engineering, I have a lot of
        experience working with circuits of all kinds. My research lab focuses
        on a specific framework of circuits called Asynchrnous Circuits (
        <a
          href="https://en.wikipedia.org/wiki/Asynchronous_circuit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "light-blue" }}
        >
          see more
        </a>
        ).
      </p>
      <ProjectCard
        id="polymorphic-key-decomposer"
        title={"Polymorphic Key Decomposer"}
        date={"Summer 2021"}
        body={
          "Polymorphic circuit design opens a new door for security research. A key decomposer provides an extra layer of security to prevent attackers from gleaning information about the circuit."
        }
        tags={["Circuits", "Research", "Security"]}
      />
    </div>
  );
};

export default Circuits;
