'use client'
import Image from 'next/image';
import { imgs } from '@/assets/imgs';
import { Main } from '@/components/boxes/Main';
import { ContentBox } from '@/components/boxes/ContentBox';
import { SocialBox } from '@/components/boxes/SocialBox';

export default function Home(){
    return(
        <Main>
            <Image 
                src={imgs.logoTransparent.img}
                width={imgs.logoTransparent.widthDesktop}
            />
            <ContentBox 
                img={'#'}
                title='Cursos'
                description='Se torne autoridade nas técnicas mais avançadas.'
                actions={[
                    {
                        name: 'Ver cursos'
                    },{
                        name: 'Quero ser aluna'
                    }
                ]}
            />
            <ContentBox 
                img={'#'}
                title='Procedimentos'
                description='Agende aqui seu procedimento.'
                actions={[
                    {
                        name: 'Ver procedimentos'
                    },{
                        name: 'Quero agendar'
                    }
                ]}
            />
            <ContentBox 
                title='Atendimentos e Cursos'
                subtitle='Atendimentos em:'
                description='Lajeado, Porto Alegre e Santa Cruz do Sul. Ministramos cursos em SP, RJ e RS.'
            />
            <SocialBox />
        </Main>
    );
}