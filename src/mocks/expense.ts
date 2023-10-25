import { v4 as uuidv4 } from 'uuid'

export const expense = [
  {
    id: uuidv4(),
    name: 'Alimentos y bebidas',
    description: 'Restaurantes y productos comestibles',
    icon: '',
    historial: [
      {
        id: uuidv4(),
        date: '2023-10-01',
        amount: 100,
        category: 'restaunate',
        name: 'La Rosa Náutica'
      },
      {
        id: uuidv4(),
        date: '2023-10-01',
        amount: 30,
        category: 'super mercado',
        name: 'Plaza Vea'
      },
      {
        id: uuidv4(),
        date: '2023-10-02',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-03',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-04',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-05',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-06',
        amount: 100,
        category: 'restaunate',
        name: 'Pardos Chicken'
      },
      {
        id: uuidv4(),
        date: '2023-10-07',
        amount: 50,
        category: 'restaunate',
        name: 'Papa Johns'
      },
      {
        id: uuidv4(),
        date: '2023-10-08',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-09',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-10',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      },
      {
        id: uuidv4(),
        date: '2023-10-11',
        amount: 15,
        category: 'restaunate',
        name: 'Criollitos'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Transporte',
    description: 'Costs related to getting around',
    icon: ''
  },
  {
    id: uuidv4(),
    name: 'Entretenimiento',
    description: 'Actividades recreativas y de ocio.',
    icon: ''
  },
  {
    id: uuidv4(),
    name: 'Hogar',
    description: 'Alquiler, hipoteca y servicios públicos',
    icon: ''
  }
]
