export interface ITransaction {
    type: TransactionType;
    amount: number;
    fullfilledAt: Date;
}

type TransactionType = 'debit' | 'credit';
