import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

import { dances, groups } from './data';



const Home: React.FC = () => {
  // State to track checkbox selections (keyed by word id)
  const [checkedclassicalDances, setcheckedclassicalDances] = useState<Record<string, boolean>>({});

  // Load saved checkbox state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('checkedclassicalDances');
    if (saved) {
      setcheckedclassicalDances(JSON.parse(saved));
    }
  }, []);

  // Update state and localStorage when a checkbox is toggled
  const handleCheckboxChange = (id: string, newValue: boolean) => {
    const updatedcheckedclassicalDances = { ...checkedclassicalDances, [id]: newValue };
    setcheckedclassicalDances(updatedcheckedclassicalDances);
    localStorage.setItem('checkedclassicalDances', JSON.stringify(updatedcheckedclassicalDances));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Outer Accordion in "splitted" variant for groups */}
      <Accordion variant="splitted" className=' text-red-500'>
        {dances.map((group,index) => (
          <AccordionItem
            key={group.danceName}
            value={group.danceName}
            title={<span className="text-blue-700 font-bold"><a className=' text-red-700'>{index+1} )</a> {group.danceName}</span>}
          >
            {/* Inner Accordion for words in each group */}
            <Accordion>
              {group.exponents.map((word,index) => (
                <AccordionItem
                  key={word.id}
                  value={word.id}
                  title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p className=' text-red-700'>{index+1}&nbsp;</p>
                      <Checkbox
                        color="success"
                        isSelected={!!checkedclassicalDances[word.id]}
                        lineThrough
                        onValueChange={(newValue: boolean) =>
                          handleCheckboxChange(word.id, newValue)
                        }
                      ><span style={{ marginLeft: '8px' }}>{word.name}</span></Checkbox>

                    </div>
                  }
                >
                  <div>
                    <p className=' text-blue-700'><strong className=' text-green-600'>English:</strong> {word.achievements}</p>
                    <p className=' text-blue-700'><strong className=' text-green-600'>Hindi Meaning:</strong> {word.nameinhindi}</p>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionItem>
        ))}
      </Accordion>
      {/* Global CSS to hide any native hidden input rendered by the Checkbox */}
      <style jsx global>{`
        [data-slot="hiddenInput"] {
          display: none !important;
        }
      `}</style>


    </div>
  );
};

export default Home;
