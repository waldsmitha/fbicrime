import { motion } from "framer-motion";
import React, { useState } from "react";

const Toggle = ({ children, title, state }) => {
  const [toggle, setToggle] = useState(state);
  return (
    <motion.div layout>
      {toggle ? children : ""}
      <motion.h4 layout onClick={() => setToggle(!toggle)}>
        {title}
      </motion.h4>
    </motion.div>
  );
};

export default Toggle;

//Use Example
{
  /* <AnimateSharedLayout>
  <Toggle title="How Do I Start?">
    <div className="answer">
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem
        accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat
        corporis.
      </p>
    </div>
  </Toggle>
</AnimateSharedLayout>; */
}
