import React from 'react'

const Button = ({Button_class, Button_text}) => {
  return (
    <div className={`font-Inter text-main-text font-normal text-[28px] border-[3px] mx-auto pl-[50px] pr-[50px] pt-[10px] pb-[10px] border-main-text  rounded-2xl hover:bg-main-text/30 duration-300 hover:scale-[105%] ${Button_class}`}>
        <h1>{Button_text}</h1>
    </div>
  )
}

export default Button