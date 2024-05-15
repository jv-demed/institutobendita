import styled from 'styled-components';

const Styled = styled.a`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100px;
    .icon{
        font-size: 2rem;
    }
`

export function SocialButton({ name, url,  icon }){
    return(
        <Styled href={url} target='_blank'>
            <icon.component className='icon' />
            <span>{name}</span>
        </Styled>
    );
}