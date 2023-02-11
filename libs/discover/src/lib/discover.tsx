import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DiscoverProps {}

const StyledDiscover = styled.div`
  color: pink;
`;

export function Discover(props: DiscoverProps) {
  return (
    <StyledDiscover>
      <h1>Welcome to Discover!</h1>
    </StyledDiscover>
  );
}

export default Discover;
