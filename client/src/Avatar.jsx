import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, fontSize, color, borderRadius, fontType, cursor, textDecoration}) => {
 const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    fontSize,
    color: color || 'black',
    borderRadius,
    fontType,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"

 }
        return(
            <div style ={style}>
                { children }
            </div>
            )
        }
    export default Avatar