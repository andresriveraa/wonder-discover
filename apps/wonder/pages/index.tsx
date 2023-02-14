import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import StepByStep from '../components/stepByStep/StepByStep';
import Hero from '../components/hero/Hero';


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
