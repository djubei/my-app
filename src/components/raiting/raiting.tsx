import React from "react";


type RaitingPropsType = {
    value: number
}

export function Raiting(props: RaitingPropsType) {
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if (props.value === 4) {
        console.log("raiting")
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>

        )
    } else {

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>


            </div>
        )
    }


    ;
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}