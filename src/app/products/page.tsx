'use client'
import {  sanityUserPost } from '@/services/userApi'
import React, { useEffect } from 'react'

function Products() {
 
  useEffect(() => {
    sanityUserPost()
  }, [])


  return (
    <div>
      
    </div>
  )
}

export default Products
