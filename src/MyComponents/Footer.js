import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer className='bg-dark text-light py-3 text-center' style=
    {footerStyle}>
      <p className="text-center"></p>
      Copyright &copy; MyTodosList.com | All Rights Reserved | Terms and Conditions
    </footer>
  )
}

export default Footer
