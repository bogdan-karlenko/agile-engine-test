# agile-engine-test

## Run 

### frontend
`cd frontend && npm i && npm start`  
Open browser at [http://localhost:4200](http://localhost:4200)  

### backend
`cd backend && npm i && npm start`  

## Networking

Endpoints:  
- GET '/balance'
- GET '/transactions'
- GET '/transaction/:id'
- POST '/transaction', body: {"type": "debit", "amount": 500} or {"type": "credit", amount: 100}
