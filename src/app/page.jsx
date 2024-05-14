'use client'
import Image from 'next/image';
import { imgs } from '@/assets/imgs';
import { Main } from '@/components/boxes/Main';
import { ContentBox } from '@/components/boxes/ContentBox';

export default function Home(){
    return(
        <Main>
            <Image 
                src={imgs.logoTransparent.img}
                width={imgs.logoTransparent.widthDesktop}
            />
            <ContentBox 
                title='Cursos'
                description='Se torne autoridade nas técnicas mais avançadas.'
            />
            <ContentBox 
                title='Procedimentos'
                description='Agende aqui seu procedimento.'
            />
        </Main>
    );
}