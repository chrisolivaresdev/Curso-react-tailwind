import React, { useContext } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context/context'

export const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)

  return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <div className="font-medium text-xl"> Detail </div>
            <div className='cursor-pointer' onClick={() => context.closeProductModal() }>
            <XMarkIcon className="h-6 w-6 text-black" />
            </div>
        </div>
        </aside>
  )
}
