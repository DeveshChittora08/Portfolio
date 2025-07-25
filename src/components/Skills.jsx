import  {useState} from 'react'
import { motion } from "motion/react"


const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 65 },
    { name: "ReactJS", level: 65 },
    { name: "Tailwind CSS", level: 60 },
  ];

function Skills() {

      
      const [skills,] = useState(skillsData);

  return (
   <div className='h-screen bg-slate-200'>
     <motion.div
     initial={{  opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 0.8 }}
     id='skill' className="max-w-2xl mx-auto p-6">
    <motion.h2
    initial={{ y:-20, opacity: 0 }}
    whileInView={{y:0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="text-3xl font-bold mb-6 text-center">My Skills</motion.h2>
    <div 
   
    className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div 
        initial={{ y:30 ,opacity: 0 }}
        whileInView={{ y:0,opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        key={index} className="w-full">
          <motion.div
           initial={{ y:20 ,opacity: 0 }}
           whileInView={{ y:0,opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-between mb-1">
            <span className="text-lg font-medium">{skill.name}</span>
            <span className="text-gray-600">{skill.level}%</span>
          </motion.div>
          <input
            type="range"
            min="0"
            max="100"
            value={skill.level}
            className="w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-900 rounded-md appearance-none cursor-pointer accent-yellow-500"
            readOnly
          />
        </motion.div>
      ))}
    </div>
  </motion.div>

 
   </div>
);
}


export default Skills
