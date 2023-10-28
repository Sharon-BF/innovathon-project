'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@/hooks/useForm'
import { users, steps } from '@/mocks'
import { icons } from '@/assets/icons'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { TextField, FormControl, Button, Alert, Box, Stepper, Step, StepLabel, OutlinedInput, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import WARDADITO from '../../../../../public/Images/Wardadito.png'

interface UserSearch {
  id: string
  name: string
  email: string
}

export default function CategoryGroup () {
  const router = useRouter()
  const { values, handleChange } = useForm({ initValues: { name: '', value: '' } })
  const { dni } = values
  const [user, setUser] = useState<UserSearch>({ id: '', name: '', email: '' })
  const [addUsers, setAddUsers] = useState<UserSearch[]>([])
  const [loading, setLoading] = useState(false)
  const [click, setClick] = useState(false)
  const [emails, setEmails] = useState<string[]>([])

  const [section, setSection] = useState(0)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user.name, emails })
    })
  }

  const handleSearch = () => {
    setLoading(true)

    const result = users?.find(user => user.dni === dni)

    if (result === undefined) { alert('Usuario no encontrado'); return }
    const user = {
      id: result?.dni,
      name: `${result?.name} ${result?.lastname}`,
      email: result?.email

    }

    setTimeout(() => {
      setUser(user)
      setLoading(false)
    }, 2000)
    setClick(false)
  }

  const handleAddUser = () => {
    if (user === undefined) return

    const userSearch: UserSearch = {
      id: dni,
      name: user.name,
      email: user.email
    }
    setAddUsers([...addUsers, userSearch])
    setClick(true)
    setEmails([...emails, user.email])
  }

  const handleRemoveUser = (id: string) => {
    const userRemoved = addUsers.filter(user => user.id !== id)
    setAddUsers(userRemoved)
  }

  const handleNextSection = () => {
    if (section < 2) setSection(section + 1)
  }

  const handleReturnSection = () => {
    if (section > 0) setSection(section - 1)
  }

  const handleReturnInit = () => {
    router.push('/ahorro/grupal')
    localStorage.setItem('display', 'yes')
  }

  return (
    <div className='flex flex-col gap-4 items-center mt-10'>
        {
            section < 3
              ? <>
                  {/* navigation */}
                  <Box sx={{ width: '100%' }}>
                      <Stepper activeStep={section} alternativeLabel>
                          {steps.map((label) => (
                              <Step key={label}>
                                  <StepLabel />
                              </Step>
                          ))}
                      </Stepper>
                  </Box>
                  {/* Section 1 */}
                  {
                      section === 0 &&
                      <div>
                          <section>
                              <form action="" className='max-w-lg flex flex-col gap-6' onSubmit={handleSubmit}>
                                  <div>
                                      <h3>
                                          <span className='font-bold'>Indica el monto que cada persona wardará</span><br />Logremos juntos eso que tanto desean
                                      </h3>
                                  </div>
                                  <div>
                                      <FormControl fullWidth>
                                          <OutlinedInput
                                              id="outlined-adornment-amount"
                                              startAdornment={<InputAdornment position="start">S/</InputAdornment>}
                                              name='ingreso'
                                              onChange={handleChange}
                                          />
                                      </FormControl>
                                  </div>
                                  <p className='font-bold'>Monto sugerido para ti: <span className='text-violet-800'>S/.430 Mensual</span></p>
                                  <p>Al culminar el registro, tu partner puede cambiar el monto según sus posibilidades</p>
                                  <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                      <div>
                                          {icons.character}
                                      </div>
                                      <div>
                                          <p className='text-sm'>
                                              Tu débito será del <span className='font-bold'>25 al último día de cada mes</span>. Si Warda no encuentra el monto, debitará el saldo que encuentre.
                                          </p>
                                      </div>
                                  </div>
                                  <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                      <div>
                                          <span className='font-bold'>Gana hasta 6.5% TREA por tu ahorro</span>
                                          <p className='text-sm'>
                                              Si ahorras mínimo S/. 500 por un tiempo mayor a 6 meses, puedes ganar intereses a una tasa de hasta 6.5% TREA.
                                          </p>
                                      </div>
                                  </div>

                                        <div>
                                            <button className='w-full py-2 rounded-full bg-blue-600 font-medium capitalize  text-white text-sm' onClick={handleNextSection}>
                                                siguiente
                                            </button>
                                        </div>
                                    </form>

                                </section>
                            </div>
                        }
                        {/* Section 2 */}
                        {
                            section === 1 &&
                            <div>
                                <section>
                                    <form className='max-w-lg flex flex-col gap-6' onSubmit={handleSubmit}>

                                        <div className='flex items-center'>
                                            <h3>
                                                <span className='font-bold'>Elige a una o más personas para wardar</span><br />Enviaremos un correo electrónico con la invitación
                                            </h3>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        id="outlined-search"
                                                        label="Buscar dni"
                                                        type="search"
                                                        name='dni'
                                                        value={dni}
                                                        onChange={handleChange}
                                                    />
                                                </FormControl>
                                                <Button type='button' className='p-3 bg-indigo-600' onClick={() => { handleSearch() }}>
                                                    <SearchIcon className='decoration-white' />
                                                </Button>
                                            </div>
                                            <div className='my-3'>
                                                {
                                                    loading
                                                      ? <p>Buscando...</p>
                                                      : <div className={`${(user.name === '' || click) ? 'hidden' : ''}`}>
                                                            <div className='flex justify-between'>
                                                                <p>{user.name}</p>
                                                                <button type='button' onClick={handleAddUser}>Añadir</button>
                                                            </div>
                                                        </div>
                                                }

                                            </div>
                                            <div className='h-auto my-3'>
                                                {
                                                    addUsers.length > 0
                                                      ? <div>
                                                            <ul className='h-auto'>
                                                                {
                                                                    addUsers.map((user) => {
                                                                      return (
                                                                            <li key={user.id} className='flex justify-between my-3 p-3 bg-blue-50 rounded-lg'>
                                                                                {user.name}
                                                                                <button type='button' onClick={() => { handleRemoveUser(user.id) }}><HighlightOffIcon /></button>
                                                                            </li>
                                                                      )
                                                                    })
                                                                }
                                                            </ul>

                                                        </div>
                                                      : <Alert severity="info">No hay usuarios seleccionados</Alert>
                                                }

                                            </div>

                                        </div>
                                        <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                            <div>
                                                {icons.character}
                                            </div>
                                            <div>
                                                <p className='text-sm'>
                                                    Enviaremos tus notificaciones al correo registrado en el banco: <span className='font-bold'>A.DA@GMAIL.COM</span>para actualizarlo comunícate a banca por teléfono.
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex gap-10'>
                                            <button type='button' className='w-full py-2 rounded-full bg-transparent font-medium capitalize  border text-sm' onClick={handleReturnSection} >
                                                atras
                                            </button>
                                            <button type='button' className='w-full py-2 rounded-full bg-blue-600 font-medium text-white text-sm' onClick={handleNextSection}>
                                                Enviar invitación y registrar
                                            </button>
                                        </div>
                                    </form>

                                </section>
                            </div>
                        }
                        {/* Section 3 */}
                        {
                            section === 2 &&
                            <div className='max-w-lg flex flex-col items-center gap-6 mt-3'>
                                <div className='w-72'>
                                    <img className='w-full' src={WARDADITO.src} alt="" />

                                </div>
                                <h2 className=' text-center'>Hemos recibido tu solicitud</h2>
                                <p>Al haberla registrado luego de las 8:30 a.m. podrás ver tu Wardadito a partir de las 7 a.m. Además te notificaremos a tu correo cuando lo hayamos creado</p>
                                <p>¡Recuerda que también podrás realizar aportes voluntarios!</p>
                                <button type='button' className='w-full py-2 rounded-full bg-blue-600 font-medium text-white text-sm' onClick={handleReturnInit}>
                                    Regresar al inicio
                                </button>
                            </div>
                        }

                    </>
              : <></>
            }
        </div>

  )
}
