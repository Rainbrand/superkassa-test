import React, {useEffect, useRef} from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import setStateAction from "../store/actions/setStateAction";

const StyledButton = styled.div.attrs(props => ({
}))`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${props => props.className === "button button--on" ? 'green' : 'red'};
  border-radius: 150px;
  
  &:hover{
    cursor: pointer;
  }
`


const Button = () => {
    const buttonTextRef = useRef(null)
    const buttonRef = useRef(null)
    const toggled = useSelector(store => store.buttonReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getState(){
            const state = await fetch("http://localhost:9000/api/get_state").then(res => res.json())
            await dispatch(setStateAction(state))
        }
        if (toggled == null) {
            getState()
        } else if (toggled === true){
            buttonTextRef.current.textContent = "ON"
        } else {
            buttonTextRef.current.textContent = "OFF"
        }
    })
    
    const handleClick = async () => {
        const state = await fetch("http://localhost:9000/api/set_state").then(res => res.json())
        await dispatch(setStateAction(state))
    }

    return(
        <StyledButton className={`button ${toggled ? "button--on" : "button--off"}`} ref={buttonRef} onClick={() => handleClick()}>
            Click Me
            <div className="button_text" ref={buttonTextRef}>OFF</div>
        </StyledButton>
    )
}

export default Button
