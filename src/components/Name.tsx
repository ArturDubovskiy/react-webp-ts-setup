import React, { FC } from 'react'

interface NameProps {
  name: string
}

const Name: FC<NameProps> = ({ name }) => <h2>My name is {name}</h2>

export default Name
