import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/closeX_icon.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
};

export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content" 
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Close button" />
      </button>

      <Container >
        <h2>Cadastrar transação</h2>
        <input  
          placeholder='Título'
        />

        <input 
          type = 'number'
          placeholder='Valor' 
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </button>
        </TransactionTypeContainer>

        <input  
          placeholder='Categoria'
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>

  )
}