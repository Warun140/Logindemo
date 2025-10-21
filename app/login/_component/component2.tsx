'use client'
import { useAppContext } from '@/app/utiles/context'
import React, { useContext } from 'react'

const Component2 = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {

  const app = useAppContext()

  return (
    <>
      <div>component2</div>
      <div>{app?.email}</div>
    </>
  )
}

export default Component2