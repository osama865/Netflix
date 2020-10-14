import React , {useContext, useState} from 'react'
import { createContext } from 'react';
import OptFormContainer from '../../containers/opt-form';
import {Title , Frame , Header , Item , Body , Container , Inner, Icon } from './styles/accordion'

const ToggleContext = createContext();

export default function Accordion ({children , ...restProps}){
    return (
        <Container {...restProps} >
            <Inner>
                {children}
                <OptFormContainer/>
            </Inner>
        </Container> 
    )
}

Accordion.Title = function AccordionTitle ({children ,...restProps}){
    return (
    <Title {...restProps}>
        {children}
    </Title>
    );
}

Accordion.Item = function AccordionItem ({children,...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return (
    <ToggleContext.Provider value={{toggleShow , setToggleShow}} >
        <Item {...restProps}>
            {children}  
        </Item>
    </ToggleContext.Provider>
    );
}


Accordion.Body = function AccordionBody ({children,...restProps}){
    const {toggleShow , setToggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps} >
        {children}
    </Body> : null ;
}

Accordion.Frame = function AccordionFrame ({children,...restProps}){
    return <Frame {...restProps}>
        
    </Frame>
}


Accordion.Header = function AccordionTitle ({children,...restProps}){
    const {toggleShow , setToggleShow} = useContext(ToggleContext);
    return (
    <Header onClick={()=>setToggleShow((toggleShow)=> !toggleShow)} {...restProps} >
        {children}
        {toggleShow ? (
            <Icon src='/images/icons/close-slim.png' alt='close' />
        ) : <Icon src='/images/icons/add.png' alt='add' /> }
    </Header>
    );
}