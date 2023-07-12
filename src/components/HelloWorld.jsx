import React from "react";


function HelloWorld({ children }) {
  return <div>{children}</div>
}

const withLama = (Component, Text) => () => {
  return <Component>{Text}</Component>
}

export { HelloWorld }
export default withLama;