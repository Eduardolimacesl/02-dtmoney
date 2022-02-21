import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable(){
  useEffect(()=>{
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="desposit">12.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/02/2022</td>
          </tr>
          <tr>
            <td>Pagamento de aluguel</td>
            <td className="withdraw">- 2.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}