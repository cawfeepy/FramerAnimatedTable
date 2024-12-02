import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { useState } from 'react';

export default { title: 'FlipTable' };

export const FlipTable4 = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
    { id: 3, name: 'Row 3' },
    { id: 4, name: 'Row 4' },
    { id: 5, name: 'Row 5' },
    { id: 6, name: 'Row 6' },
    { id: 7, name: 'Row 7' },
    { id: 8, name: 'Row 8' },
  ]);

  const handleAddRow = () => {
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    const newRow = { id: newId, name: `Row ${newId}` };
    setData((prevData) => [...prevData, newRow]);
  };

  const handleRemoveRow = () => {
    setData((prevData) => prevData.slice(0, -1));
  };

  return (
    <div>
      <div className="flex-row gap-3 bg-white p-4">
        <button onClick={handleAddRow}>Add Row</button>
        <button onClick={handleRemoveRow}>Remove Row</button>
      </div>

      <LayoutGroup>
        <div className="w-[350px] flex m-auto relative">
          {/* Background Div */}
          <motion.div
            layout
            transition={{ duration: 0.5 }}
            className="bg-[#FBCF9A] w-full h-full absolute top-0 left-0"
          />

          <table
            className="z-10"
            style={{ borderCollapse: 'collapse', width: '350px', margin: 'auto' }}
          >
            <thead>
              <tr className="text-center text-red">
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
              </tr>
            </thead>
            <motion.tbody>
              <AnimatePresence initial={false}>
                {data.map((row) => (
                  <motion.tr
                    key={row.id}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0, y: -10,
                      transition: {duration: 0.125, ease: "easeOut"}
                    }}
                    transition={{
                      duration: 1.0,
                    }}
                  >
                    <td className="text-center">{row.id}</td>
                    <td className="text-center">{row.name}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </motion.tbody>
          </table>
        </div>
      </LayoutGroup>
    </div>
  );
};
