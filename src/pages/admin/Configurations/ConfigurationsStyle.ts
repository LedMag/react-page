import styled from 'styled-components';
import { colors } from 'theme/colors';

export const mediaPC = (arg: any, val: any): any => {
  return `
  @media (min-width: 768px) {
    ${arg}: calc(${val} * 2.4);
  }
  @media (min-width: 926px) {
    ${arg}: calc(${val} * 2.9);
  }
  @media (min-width: 1024px) {
    ${arg}: calc(${val} * 3.2);
  }
  @media (min-width: 1280px) {
    ${arg}: calc(${val} * 4);
  }
  @media (min-width: 1360px) {
    ${arg}: calc(${val} * 4.24);
  }
  @media (min-width: 1440px) {
    ${arg}: calc(${val} * 4.5);
  }
  @media (min-width: 1920px) {
    ${arg}: calc(${val} * 6);
  }`
};

export const mediaMob = (arg: any, val: any) => {
  return `
    ${arg}: ${val};
    @media (min-width: 375px) {
      ${arg}: calc(${val} * 1.17);
    }
    @media (min-width: 390px) {
      ${arg}: calc(${val} * 1.22);
    }
    @media (min-width: 425px) {
      ${arg}: calc(${val} * 1.33);
    }
    @media (min-width: 640px) {
      ${arg}: calc(${val} * 1.4);
    }
  `;
};

export const mediaAll = (arg: any, val: any): any => {
  return `
    ${arg}: ${val};
    @media (min-width: 375px) {
      ${arg}: calc(${val} * 1.17);
    }
    @media (min-width: 390px) {
      ${arg}: calc(${val} * 1.22);
    }
    @media (min-width: 425px) {
      ${arg}: calc(${val} * 1.33);
    }
    @media (min-width: 640px) {
      ${arg}: calc(${val} * 2);
    }
    @media (min-width: 768px) {
      ${arg}: calc(${val} * 2.4);
    }
    @media (min-width: 926px) {
      ${arg}: calc(${val} * 2.9);
    }
    @media (min-width: 1024px) {
      ${arg}: calc(${val} * 3.2);
    }
    @media (min-width: 1280px) {
      ${arg}: calc(${val} * 4);
    }
    @media (min-width: 1360px) {
      ${arg}: calc(${val} * 4.24);
    }
    @media (min-width: 1440px) {
      ${arg}: calc(${val} * 4.5);
    }
    @media (min-width: 1920px) {
      ${arg}: calc(${val} * 6);
    }`
};

export const ConfigurationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  div{
    width: 100%;
    height: 50px;
    margin-bottom: 10px;

    ${mediaMob('border-radius', '15px')}

    background-color: ${colors.blue};
  }
`