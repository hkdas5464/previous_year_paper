import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

import { groups } from './data2';



const Home: React.FC = () => {
  // State to track checkbox selections (keyed by word id)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load saved checkbox state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('checkedItems');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  // Update state and localStorage when a checkbox is toggled
  const handleCheckboxChange = (id: number, newValue: boolean) => {
    const updatedCheckedItems = { ...checkedItems, [id]: newValue };
    setCheckedItems(updatedCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(updatedCheckedItems));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Outer Accordion in "splitted" variant for groups */}
      <Accordion variant="splitted" className=' text-red-500'>
        {groups.map(group => (
          <AccordionItem
            key={group.title}
            value={group.title}
            title={<span className="text-blue-700 font-bold">{group.title}</span>}
          >
            {/* Inner Accordion for words in each group */}
            <Accordion>
              {group.words.map((word,index) => (
                <AccordionItem
                  key={word.id}
                  value={word.id}
                  title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p className=' text-red-700'>{word.id}&nbsp;</p>
                      <Checkbox
                        color="success"
                        isSelected={!!checkedItems[word.id]}
                        lineThrough
                        onValueChange={(newValue: boolean) =>
                          handleCheckboxChange(word.id, newValue)
                        }
                      ><span style={{ marginLeft: '8px' }}>{word.word}</span></Checkbox>
                      
                    </div>
                  }
                >
                  <div>
                    <p className=' text-blue-700'><strong className=' text-green-600'>English:</strong> {word.eng}</p>
                    <p className=' text-blue-700'><strong className=' text-green-600'>Hindi Meaning:</strong> {word.meaning}</p>
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
