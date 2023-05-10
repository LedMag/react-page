import styled from 'styled-components';
import { colors } from 'theme/colors';
import { mediaMob } from 'utils/FuncHelpers';

export const ConfigurationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

// export const config = styled.div.attrs `
//   width: 100%;
//   height: 50px;
//   margin-bottom: 10px;

//   ${mediaMob('border-radius', '15px')}

//     background-color: ${colors.blue};
// `



export const ConfigSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mediaMob('height', '50px')};
  ${mediaMob('margin-bottom', '10px')};
  ${mediaMob('border-radius', '15px')}
  background-color: ${colors.blue};
`