import React from 'react'

// pass props in div className to change color as per type(green)
// use 'props.alert &&' at start as if -else statement
// captalize function to convert type's first latter to upperCase
// 1304: close 'x' button removed

function Aleart1302(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}

export default Aleart1302
