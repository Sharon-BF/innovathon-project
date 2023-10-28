import { useState } from 'react'
import { type InitValues } from '@/types'

/**
 * The useForm function is a custom hook in TypeScript React that manages form state and provides a
 * handleChange function to update form values.
 * @param  - - `initValues`: An object that contains the initial values for the form fields.
 * @returns The `useForm` function returns an object with two properties: `values` and `handleChange`.
 */
export function useForm({ initValues }: { initValues: InitValues }) {
  const [values, setValues] = useState(initValues)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  return {
    values,
    handleChange
  }
}
