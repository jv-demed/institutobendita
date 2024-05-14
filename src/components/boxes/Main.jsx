import styled from 'styled-components';
import { palette } from '@/assets/palette';

export const Main = styled.main`
    align-items: center;
    background: ${palette.main.bgGradient};
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: 100vh;
    padding: 20px 20%;
`