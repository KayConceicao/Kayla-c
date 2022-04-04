import React from "react";
import { TailSpin } from  'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { motion } from "framer-motion";

const Loader = () => {
    return ( 
        <motion.div exit={{ opacity: 0 }} className='loading-screen'>
            <TailSpin color="#000000" height={80} width={80} />
        </motion.div>
        
    )
}

export default Loader;

