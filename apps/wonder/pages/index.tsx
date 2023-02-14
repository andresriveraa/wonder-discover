import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import StepByStep from '../components/stepByStep/stepByStep';


const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Hero />
      <StepByStep />
      <Footer />
    </StyledPage>
  );
}

export default Index;
