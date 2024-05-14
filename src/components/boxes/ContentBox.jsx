import { palette } from '@/assets/palette';
import styled from 'styled-components';

const Styled = styled.div`
    border-radius: 5px;
    background: ${palette.contentBox.bg};
    color: ${palette.contentBox.color};
    display: flex;
    gap: 15px;
    padding: 10px;
    width: 300px;
    img{
        width: 20%;
    }
    .infos{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 80%;
        .actions{
            display: flex;
            flex-direction: column;
        }
    }
`

export function ContentBox({ title, description }){
    return(
        <Styled>
            <img src='#' />
            <div className='infos'>
                <h3>{title}</h3>
                <span>{description}</span>
                <div className='actions'>
                    <button>
                        Ação
                    </button>
                </div>
            </div>
        </Styled>
    );
}