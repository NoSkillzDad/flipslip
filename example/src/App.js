import React from 'react'

import { FlipCardHover } from 'flipslip'
import 'flipslip/dist/index.css'

const App = () => {
  return <FlipCardHover
    id={"fc0"}
    text_front={["this is the front text"]}
    title_back={"John Doe"}
    text_back={["Architecht", "Programmer"]}
  />
}

export default App
