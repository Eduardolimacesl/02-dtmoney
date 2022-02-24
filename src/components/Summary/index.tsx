import { useTransactions } from '../../hooks/useTransactions';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acc, transaction) => { 
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  },{
    deposits:0,
    withdraws:0,
    total:0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="$ Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(sumary.deposits)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="$ Outcomes" />
        </header>
        <strong> - {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(sumary.withdraws)}</strong>
      </div>

        <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="$ Total" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(sumary.total)} </strong>
      </div>

    </Container> 
  );
}