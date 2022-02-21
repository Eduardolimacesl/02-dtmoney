import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; //centralização

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;//alinhamento na vertical
  justify-content: space-between;//espaço entre tags.

  button {
    font-size: 1rem;
    color: #FFF;
    background-color: var(--blue-ligth);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;