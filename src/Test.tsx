import React, { FC } from 'react'

interface TestProps {
  name: string
}

const Test: FC<TestProps> = ({ name }) => <h2>My name is {name}</h2>

export default Test
