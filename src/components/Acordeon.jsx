import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { getCollection } from "astro:content";

const sections = await getCollection("section", (section) => {
  return section.data;
});

console.log(sections);


export default function App() {
  const orderedSections = sections.sort((a, b) => a.data.order - b.data.order);
  return (
    <>
      <Accordion variant="splitted">
        {orderedSections.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.data.title}
            title={item.data.title}
          >
            {item.data.subSections.map((subSection, i) =>
              subSection.items ? (
                <Accordion >
                  <AccordionItem
                    key={i}
                    aria-label={subSection.description}
                    title={subSection.description}
                  >
                    {subSection.items.map((item) => (
                      <div className="flex justify-between">
                        <h1>{item.description}</h1>
                        <h1>{item.value}</h1>
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                <div className="flex justify-between">
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
