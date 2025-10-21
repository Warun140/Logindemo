'use client'

import Component2 from "./component2"

const Component11 = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {

  return (
    <>
      <div>
        component test
      </div>
      <Component2 >
        {children}
      </Component2>
    </>
  )
}

export default Component11