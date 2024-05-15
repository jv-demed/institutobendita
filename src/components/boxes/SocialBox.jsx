import { palette } from '@/assets/palette';
import { screens } from '@/assets/screens';
import styled from 'styled-components';
import { icons } from '@/assets/icons';
import { SocialButton } from '../buttons/SocialButton';
import { infos } from '@/assets/infos';

const Styled = styled.div`
    align-items: center;
    background: ${palette.contentBox.bg};
    border-radius: 5px;
    color: ${palette.contentBox.color};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    .icons{
        display: flex;
        gap: 10px;
    }
    @media(max-width: ${screens.mobile.px}){
        width: 100%;
    }
`

export function SocialBox(){
    return(
        <Styled>
            <span><b>Onde nos encontrar:</b></span>
            <div className='icons'>
                <SocialButton 
                    name='Whatsapp'
                    url={`https://wa.me/${infos.whatsapp}`}
                    icon={{component: icons.whatsapp}}
                />
                <SocialButton 
                    name='Instagram'
                    url={`https://www.instagram.com/${infos.instagram}`}
                    icon={{component: icons.instagram}}
                />
                <SocialButton 
                    name='Site'
                    url={infos.site}
                    icon={{component: icons.site}}
                />
            </div>
        </Styled>
    );
}