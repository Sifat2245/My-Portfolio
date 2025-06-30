import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useEffect, useState } from 'react';


const LoadingSpinner = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000);

        return () => clearTimeout(timer)
    }, [])

    if(!isLoading) return null


    return (
         <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1c]"
    >
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-transparent border-t-[#8c0829] rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl font-display font-bold gradient-text mb-2"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            {'<'} SIFAT {'/>'} 
          </motion.h1>
          <motion.p 
            className="text-text/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            MERN Stack Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-[#8c0829] via-[#7b1e3b] to-[#4d1426] rounded-full"
        />
      </div>
    </motion.div>
    );
};

export default LoadingSpinner;