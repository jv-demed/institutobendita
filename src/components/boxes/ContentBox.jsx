import { palette } from '@/assets/palette';
import { screens } from '@/assets/screens';
import styled from 'styled-components';
import { ActionButton } from '../buttons/ActionButton';

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
        width: 100%;
        .actions{
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
    @media(max-width: ${screens.mobile.px}){
        width: 100%;
    }
`

export function ContentBox({ img, title, subtitle, description, actions }){
    return(
        <Styled>
            {img && <img src={img} />}
            <div className='infos'>
                <h3>{title}</h3>
                <span><b>{subtitle}</b></span>
                <span>{description}</span>
                {actions && <div className='actions'>
                    {actions.map(action => {
                        return(
                            <ActionButton 
                                name={action.name}
                            />
                        )
                    })}
                </div>}
            </div>
        </Styled>
    );
}