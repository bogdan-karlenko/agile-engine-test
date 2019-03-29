import { Transaction } from './interfaces';

class AppStorage {

    public isProcessing = false;

    private innerStorage: Transaction[] = [];

    public add(data: Transaction): void {
        this.isProcessing = true;
        this.innerStorage.push({ id: +new Date(), ...data });
        this.isProcessing = false;
        return;
    }

    public get(id: number): Transaction {
        return this.innerStorage.find(item => item.id === id);
    }
    public getAll(): Transaction[] {
        return this.innerStorage;
    }
    public get balance(): number {
        return this.getAll().reduce((sum, transaction) => sum += transaction.type === 'debit' ? transaction.amount : -transaction.amount, 0) || 0;
    }
}

export default new AppStorage();
