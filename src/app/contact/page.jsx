'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Contract = () => {
  return (
    <motion.div
      className='h-full '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div>contract</div>
    </motion.div>
  )
}

export default Contract
