import { useState } from 'react'
import { type InitValues } from '@/types'

export function useForm ({ initValues }: { initValues: InitValues }) {
  const [values, setValues] = useState(initValues)

  function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  return {
    values,
    handleChange
  }
}
