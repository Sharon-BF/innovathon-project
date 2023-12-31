'use client'
import CardBill from '@/Components/Card/CardBIll'
import { icons } from '@/assets/icons'
import { bills } from '@/mocks/bills'
import { steps } from '@/mocks/steps'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, Radio, Step, StepLabel, Stepper } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'

import * as yup from 'yup';

interface Data {
    ingreso: number
    type: DataType
    gasto: number
    ahorro: number
}

interface Condiciones {
    acepto: boolean
    politica: boolean
}

type DataType = 'fijos' | 'variables' | ''


const validationSchemaSection = yup.object().shape({
    // ingreso mayor a 100
    ingreso: yup.number().min(1, 'El monto debe ser mayor a 0').required('Este campo es requerido'),
    type: yup.string().required('Debes seleccionar una opción'),
});

export default function Saving() {
    const [data, setData] = useState<Data>({
        ingreso: 0,
        type: '',
        gasto: 0,
        ahorro: 430
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const [condiciones, setCondiciones] = useState<Condiciones>({
        acepto: false,
        politica: false
    })

    const [section, setSection] = useState(0)


    const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault()
        // nextSection()
    }

    const nextSection = () => {
        if (section <= 2) setSection(section + 1)
    }

    const returnSection = () => {
        if (section > 0) setSection(section - 1)
    }


    return (
        <div className='flex flex-col gap-4 items-center'>
            {
                <>
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
                                <Formik
                                    initialValues={{
                                        ingreso: 0,
                                        type: ''
                                    }}
                                    validationSchema={validationSchemaSection}
                                    onSubmit={(values) => {
                                        // alert(values.type);
                                        nextSection();
                                    }}
                                >
                                    {
                                        ({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,

                                        }) => (
                                            <>
                                                <form action="" className='max-w-lg flex flex-col gap-6' onSubmit={handleSubmit}>
                                                    <div>
                                                        <h2 className='font-bold'>
                                                            ¿Cuánto es tu ingreso <br />promedio en un mes?
                                                        </h2>
                                                    </div>
                                                    <div>
                                                        <FormControl fullWidth>
                                                            <OutlinedInput
                                                                id="outlined-adornment-amount"
                                                                startAdornment={<InputAdornment position="start">S/</InputAdornment>}
                                                                value={values.ingreso === 0 ? '' : values.ingreso}
                                                                name='ingreso'
                                                                onChange={handleChange}
                                                            />
                                                        </FormControl>
                                                        <p className='text-red-600 font-medium text-xs'>
                                                            {errors.ingreso && touched.ingreso && errors.ingreso}
                                                        </p>
                                                    </div>
                                                    <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                                        <div>
                                                            {icons.character}
                                                        </div>
                                                        <div>
                                                            <p className='text-sm'>
                                                                <span className='font-bold'>¿Por qué te preguntamos esto?</span>
                                                                <br />
                                                                Para calcular tu capacidad de ahorro y asegurar el éxito de tus débitos.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <p>¿Cómo son tus ingresos?</p>
                                                        </div>
                                                        <div>
                                                            <FormGroup>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Radio
                                                                            name='type'
                                                                            value="fijos"
                                                                            checked={values.type === 'fijos'}
                                                                            onChange={handleChange}
                                                                        />
                                                                    }
                                                                    label="Fijos: Si estoy segur@ de la fecha y monto."
                                                                />

                                                                <FormControlLabel
                                                                    control={
                                                                        <Radio
                                                                            name='type'
                                                                            value="variables"
                                                                            checked={values.type === 'variables'}
                                                                            onChange={handleChange}
                                                                        />
                                                                    }
                                                                    label="Variables: No estoy segur@ de la fecha o monto."
                                                                />

                                                            </FormGroup>
                                                            <p className='text-red-600 font-medium text-xs'>
                                                                {errors.type && touched.type && errors.type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type='submit' className='w-full py-2 rounded-full bg-blue-600 font-medium capitalize  text-white text-sm' >
                                                            siguiente
                                                        </button>
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                </Formik >

                            </section>
                        </div>
                    }
                    {/* Section 2 */}
                    {
                        section === 1 &&
                        <div className='max-w-lg'>
                            <section className='flex flex-col gap-4'>
                                <div>
                                    <h2 className='font-bold'>
                                        Gasto <br />promedio mensual
                                    </h2>
                                </div>
                                <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                    <div>
                                        {icons.character}
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            Hemos calculado tu gasto promedio para ayudarte a conocer lo que puedes ahorrar.
                                        </p>
                                    </div>
                                </div>
                                {
                                    bills.map(bills => {
                                        const { id, name, amount } = bills
                                        return (
                                            <CardBill key={id} name={name} amount={amount} />
                                        )
                                    })

                                }
                                <div className='flex font-bold justify-between gap-4'>
                                    <div className='w-full'>
                                        <p>Total gasto</p>
                                    </div>
                                    <div className='w-full'>
                                        S/ {bills.reduce((acumulador, data) => acumulador + data.amount, 0)}
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <button type='button' className='w-full py-2 rounded-full bg-transparent font-medium capitalize  border text-sm' onClick={returnSection} >
                                        atras
                                    </button>
                                    <button type='submit' className='w-full py-2 rounded-full bg-blue-600 font-medium capitalize  text-white text-sm' onClick={nextSection}>
                                        siguiente
                                    </button>
                                </div>
                            </section>
                        </div>
                    }

                    {/* Section 3 */}
                    {
                        section === 2 &&
                        <div className='max-w-lg'>
                            <section className='flex flex-col gap-4'>
                                <div>
                                    Ahorra hasta <br />
                                    <span >
                                        S/ {data.ahorro}
                                    </span>
                                </div>
                                <div>
                                    Si ahorras mensual en 2 años/meses tendrías <br />
                                    <span className='text-4xl text-blue-600 font-bold'>S/ 10,320</span> <br />
                                    para la inicial de tu depa.
                                </div>
                                <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                    <div>
                                        {icons.character}
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            <span className='font-bold'>¿Cómo funciona?</span>
                                            <br />
                                            El monto se ahorrará de forma automática cada mes.
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                                <div className='flex font-bold justify-between gap-4'>
                                    <div className='w-full'>
                                        <p>Monto mensual</p>
                                    </div>
                                    <div className='w-full'>
                                        S/ {data.ahorro}
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <button type='button' className='w-full py-2 rounded-full bg-transparent font-medium capitalize  border text-sm' >
                                        Voy A pensarlo
                                    </button>
                                    <button type='button' onClick={nextSection} className='w-full py-2 rounded-full bg-blue-600 font-medium capitalize  text-white text-sm' >
                                        Ahorrar mensual
                                    </button>
                                </div>

                            </section>
                        </div>
                    }
                    {/* Terminos y condiciones */}
                    {
                        section === 3 &&
                        <div className='flex flex-col justify-center items-center'>
                            <form action="" className='max-w-lg flex flex-col gap-6' onSubmit={onHandleSubmit}>
                                <div>
                                    <h2 className='font-bold'>
                                        ¡Ya casi estamos! <br />Para terminar acepta los términos y condiciones:
                                    </h2>
                                </div>

                                <div>
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel name="terminos" required control={<Checkbox />} label="Acepto los términos y condiciones del servicio." />
                                            <FormControlLabel name="condiciones" required control={<Checkbox />} label="Declaro no ser una persona políticamente expuesta en Peru" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
                                    <div>
                                        {icons.character}
                                    </div>
                                    <div>
                                        <p className='text-sm'>
                                            <span className='font-bold'>Notificaiciones a Whatsapp y correo</span>
                                            <br />
                                            Cuando estés cerca de la meta y apenas lo logres.
                                            Cuando se debite el ahorro mensual.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='w-full py-2 rounded-full bg-blue-600 font-medium capitalize  text-white text-sm'
                                        disabled={isSubmitDisabled} // Aplica el estado local al atributo 'disabled'
                                    >
                                        Enviar Solicitud
                                    </button>
                                </div>
                            </form>

                        </div>
                    }
                </>

            }
        </div>
    )
}
