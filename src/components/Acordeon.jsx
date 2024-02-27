import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const content = [
    {
      title: "Cervezas artesanales",
      content: ["La Roja", "Fractalia", "Hakuna", "20 mission", "Hillerbraw"],
    },
    {
      title: "Cervezas nacionales",
      content: ["Aguila", "Poker", "Club Colombia"],
    },
    {
      title: "Cocteles",
      content: ["Mojito", "Cuba Libre", "Margarita"],
    },
  ];
  return (
    <Accordion variant="splitted">
      {content.map((item, index) => (
        <AccordionItem key={index} aria-label={item.title} title={item.title}>
          {item.content.map((text) => (
            <h1> {text}</h1>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
