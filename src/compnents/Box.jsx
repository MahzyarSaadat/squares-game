import { useState } from "react";

const Box = (props) => {
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }


    return(
        <div onClick={() => props.toggle(props.id)} style={styles} className="box"></div>
    )    
}

export default Box;