import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

import { groups,nationalpark } from './data2';



const Home: React.FC = () => {
  // State to track checkbox selections (keyed by word id)
  const [checkedIdioms, setcheckedIdioms] = useState<Record<string, boolean>>({});

  // Load saved checkbox state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('checkedIdioms');
    if (saved) {
      setcheckedIdioms(JSON.parse(saved));
    }
  }, []);

  // Update state and localStorage when a checkbox is toggled
  const handleCheckboxChange = (id: string, newValue: boolean) => {
    const updatedcheckedIdioms = { ...checkedIdioms, [id]: newValue };
    setcheckedIdioms(updatedcheckedIdioms);
    localStorage.setItem('checkedIdioms', JSON.stringify(updatedcheckedIdioms));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Outer Accordion in "splitted" variant for groups */}
      <Accordion variant="splitted" className=' text-red-500'>
        {nationalpark.map(group => (
          <AccordionItem
            key={group.state}
            value={group.state}
            title={<span className="text-blue-700 font-bold">{group.state}</span>}
          >
            {/* Inner Accordion for words in each group */}
            <Accordion>
              {group.national_parks.map((word,index) => (
                <AccordionItem
                  key={word.id}
                  value={word.id}
                  title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p className=' text-red-700'>{index+1 }&nbsp;</p>
                      <Checkbox
                        color="success"
                        isSelected={!!checkedIdioms[word.id]}
                        lineThrough
                        onValueChange={(newValue: boolean) =>
                          handleCheckboxChange(word.id, newValue)
                        }
                      ><span style={{ marginLeft: '8px' }}>{word.name}</span></Checkbox>
                      
                    </div>
                  }
                >
                  <div>
                    <p className=' text-blue-700'><strong className=' text-green-600'>Established:</strong> {word.established}</p>
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
