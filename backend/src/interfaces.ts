export interface Transaction {
    id?: number
    type: TransactionType;
    amount: number;
    fullfilledAt: Date;
}

type TransactionType = 'debit' | 'credit'
