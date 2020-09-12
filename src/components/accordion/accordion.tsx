import React from "react";


// import {AccordionBody} from "./body";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType) {
    debugger
    if (props.collapsed) {
        return (
            <div>
                < AccordionHeader title={props.titleValue}/>
                < AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                < AccordionHeader title={props.titleValue}/>
            </div>
        );
    }


}

type AccordionHeader = {
    title: string
}

function AccordionHeader(props: AccordionHeader) {
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>asd</li>
            <li>asda</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
        </ul>

    );
}