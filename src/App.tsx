import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import {Accordion} from "./components/accordion/accordion";
import {Raiting} from "./components/raiting/raiting";

function hello() {
    debugger
    alert('Hello')

}

hello()

function App() {
    return (
        <div>
            <PageTittle title={'This is App component'}/>
            <PageTittle title={'My friends'}/>
            <Raiting value={3}/>
            <Accordion titleValue={'Аккордион'} collapsed={true}/>
            <Accordion titleValue={'Баян'} collapsed={false}/>
            <Raiting value={4}/>

        </div>


    );
}

type PageTittlePropsType = {
    title: string
}

function PageTittle(props: PageTittlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}


export default App;
