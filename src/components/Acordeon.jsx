import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { getCollection } from "astro:content";

const sections = await getCollection("section", (section) => {
  return section.data;
});

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
  console.log(sections);
  return (
    <>
      <Accordion variant="splitted">
        {sections.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.data.title}
            title={item.data.title}
          >
            {item.data.subSections.map((subSection, i) =>
              subSection.items ? (
                <Accordion>
                  <AccordionItem
                    key={i}
                    aria-label={subSection.description}
                    title={subSection.description}
                  >
                    {subSection.items.map((item) => (
                      <div className="item">
                        <h1>{item.description}</h1>
                        <h1>{item.value}</h1>
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className="item">
                  <h1>{subSection.title}</h1>
                  <h1>{subSection.description}</h1>
                </div>
              )
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
