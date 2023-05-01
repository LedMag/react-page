import styled from 'styled-components';

export const ConfigurationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
    
`
export const mediaPC = (arg: any, val: any): any => {
  return `
    ${arg}: ${val};
    @media (max-width: 1440px) {
      ${arg}: ${val} * 0.75;
    };
    @media (max-width: 1200px) {
      ${arg}: ${val} * 0.62;
    };
    @media (max-width: 1024px) {
      ${arg}: ${val} * 0.53;
    };
    @media (max-width: 768px) {
      ${arg}: ${val} * 0.4;
    };
  `
};

export const mediaMob = (arg: any, val: any) => {
  return `
    ${arg}: ${val};
    @media (max-width: 425px) {
      ${arg}: ${val} * 0.53;
    }
    @media (max-width: 390px) {
      ${arg}: ${val} * 0.49;
    }
    @media (max-width: 375px) {
      ${arg}: ${val} * 0.47;
    }
    @media (max-width: 320px) {
      ${arg}: ${val} * 0.4;
    }
  `;
};

export const mediaAll = (arg: any, val: any): any => {
  return `
    ${arg}: ${val};
    @media (max-width: 1440px) {
      ${arg}: ${val} * 0.75;
    }
    @media (max-width: 1200px) {
      ${arg}: ${val} * 0.62;
    }
    @media (max-width: 1024px) {
      ${arg}: ${val} * 0.53;
    }
    @media (max-width: 768px) {
      ${arg}: ${val} * 0.4;
    }
    @media (max-width: 425px) {
      ${arg}: ${val} * 0.22;
    }
    @media (max-width: 390px) {
      ${arg}: ${val} * 0.2;
    }
    @media (max-width: 375px) {
      ${arg}: ${val} * 0.19;
    }
    @media (max-width: 320px) {
      ${arg}: ${val} * 0.17;
    }`
};
