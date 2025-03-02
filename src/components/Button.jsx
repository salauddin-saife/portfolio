import React from 'react'

const Button = ({Button_class, Button_text}) => {
  return (
    <div className={`font-Inter text-main-text font-normal pointer-events-auto text-[28px] text-center border-[3px]  pl-[50px] pr-[50px] pt-[10px] pb-[10px] border-main-text justify-center items-center rounded-2xl hover:bg-main-text/30 duration-300 hover:scale-[105%] cursor-pointer ${Button_class}`}>
        <h1>{Button_text}</h1>
    </div>
  )
}

export default Button