import React from 'react';
import DropdownButton from './DropdownButton';
import { motion as m } from 'framer-motion';

function Page() {
  return (
    <m.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    transition={{ duration: 0.9, ease: "easeInOut" }}
    className="newPage"
  >
      <div className="top-right-corner">
        <DropdownButton />
      </div>
        <h1>New Page</h1>
      </m.div>
  );
}

export default Page;