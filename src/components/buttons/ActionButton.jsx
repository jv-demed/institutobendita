import styled from 'styled-components';
import { palette } from '@/assets/palette';

const Styled = styled.div`
    button{
        background-color: ${palette.button.bg};
        border: 1px solid ${palette.button.border};
        border-radius: 2px;
        color: ${palette.button.color};
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 6px 0;
        width: 100%;
    }
`

export function ActionButton({ type, name }){
    return(
        <Styled>
            <button type={type || 'button'}>
                {name}
            </button>
        </Styled>
    );
}