import React from 'react'

const Li = ({li_class, li_text}) => {
  return (
    <div className={li_class}>
        <li>{li_text}</li>
    </div>
  )
}

export default Li