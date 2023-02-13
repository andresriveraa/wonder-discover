import styled from 'styled-components';
import Hero from '../components/hero/Hero';


const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Hero />
    </StyledPage>
  );
}

export default Index;
