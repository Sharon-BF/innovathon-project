'use client'
import { Checkbox, FormControl, FormControlLabel, FormHelperText, MenuItem, Select, TextField } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface PropsLogin {
  count: number
}

const LoginPage = ({ count }: PropsLogin) => {
  const [data, setData] = useState({
    dni: '',
    card: '755',
    password: '',
    code: ''
  })

  const formatCard = (card: string) => {
    return card.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
  }

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === 'card' && event.target.value.length > 19) return
    if (event.target.name === 'password' && event.target.value.length > 6) return

    setData({ ...data, [event.target.name]: event.target.value })
  }
  return (
        <div className="w-full h-screen flex ">
            <div className="relative w-1/3 bg-cover bg-center hidden lg:block" style={{ backgroundImage: 'url(https://loginunico.viabcp.com/assets/img/ciam/W4.jpg)' }}>
                <img className="absolute w-24 m-6" src="./images/logo.svg" alt="" />
            </div>
            <div className="flex flex-col w-full lg:w-2/3 bg-white px-4 overflow-scroll">
                <div className="py-0 lg:py-4">
                    <div className="text-right text-sm">Esta ventana se <span>cerrará</span> en <span className="text-xl">{count}</span> segundos chronometer</div>
                    <div className="flex justify-between">
                        <button className="flex gap-1 font-semibold  text-orange-500">
                            <div>
                                &lt;--
                            </div>
                            <div><Link href="/">Volver</Link></div>
                        </button>
                        <div className="text-gray-400">&#10681;</div>
                    </div>
                </div>
                <div className="px-0 sm:px-10 md:px-40 w-full">
                    <form className="flex flex-col gap-8" action="">
                        <div><h2 className="text-blue-900 text-center font-bold text-xl">Warda</h2></div>
                        <div>
                            <FormControl className="w-full" sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Select
                                    className="max-w-1/3"
                                    value="DNI"
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="DNI">DNI</MenuItem>
                                    <MenuItem value="CE">CE</MenuItem>
                                </Select>
                                <TextField className="w-full" />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                required
                                id="outlined-required"
                                label="Número de tarjeta"
                                name='card'
                                value={formatCard(data.card)}
                                onChange={onHandleChange}
                                autoComplete='off'
                            />
                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox />} label="Recordar datos" />
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                required
                                id="outlined-required"
                                label="Clave de internet de 6 dígitos"
                                name='password'
                                value={data.password}
                                onChange={onHandleChange}
                                autoComplete='off'
                            />
                            <div className="my-2  flex justify-between">
                                <FormHelperText className="text-orange-500"><button>Crear Clave</button></FormHelperText>
                                <FormHelperText className="text-orange-500"><button>Olvidé mi clave</button></FormHelperText>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <TextField
                                    className="w-1/3"
                                    disabled
                                    style={{ backgroundImage: 'url(./images/logo.svg)' }}
                                />
                                <TextField className="w-full"
                                    required
                                    autoComplete='off'
                                    name="code"
                                    value={data.code}
                                    onChange={onHandleChange}
                                />

                            </div>
                            <div className="my-2  flex justify-between">
                                <FormHelperText className="text-orange-500"><button>Cambiar código</button></FormHelperText>
                            </div>
                        </div>
                        <div>
                            <button className='w-full'>
                                <Link className="w-full bg-orange-600 hover:bg-orange-500 rounded-full py-2 px-8" href="/ahorro">
                                    Continuar
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <footer>

                    </footer>
                </div>
            </div >
        </div >
  )
}
const EndSession = () => {
  return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-8">¡Tu sesión ha terminado!</h1>
                <Link href="/" className="bg-orange-600 hover:bg-orange-500 rounded-full py-2 px-8 text-white font-bold">
                    Volver al inicio
                </Link>
            </div>
        </div>
  )
}

export default function Login () {
  const [count, setCount] = useState<number>(0)
  // Corregir error al inicio de la pagina
  // const [count, setCount] = useState<number>(Number(sessionStorage.getItem('time')));

  useEffect(() => {
    setCount(Number(sessionStorage.getItem('time')))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount - 1
        sessionStorage.setItem('time', newCount.toString())
        return newCount
      })
    }, 1000)

    return () => { clearInterval(interval) }
  }, [setCount])

  return (
        <>
            {count >= 0 ? <LoginPage count={count} /> : <EndSession />}
        </>
  )
}
