import React, { useEffect, useState } from 'react'
import { Layout } from '../../Components/Layout/Layout'
import { Card } from '../../Components/Card/Card'

export const Home = () => {

  const [Items, setItems] = useState([])

  useEffect(() => {
   fetch('https://api.escuelajs.co/api/v1/products')
   .then(response => response.json())
   .then(data => setItems(data))
  }, [])

  return (
      <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        Items?.map((item) => <Card key={item.id} data={item} />)
      }
      </div>
      </Layout>
  )
}
