export type name = 'transactions' | 'supermarket' | 'rent';

export interface BillType {
    id: number;
    name: name;
    amount: number;
}

export const bills: BillType[] = [
    {
        id: 1,
        name: 'transactions',
        amount: 400.50,
    },
    {
        id: 2,
        name: 'rent',
        amount: 600.00,
    },
    {
        id: 3,
        name: 'supermarket',
        amount: 42.80,
    }
]