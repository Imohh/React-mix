import React from 'react'
import ReactDom from 'react-dom'

function App() {
  const date = new Date(2019, 6, 12, 16)
  const hours = date.getHours()
  let timeOfDay

  const styles = {

  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "green"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "brown"
  } else {
    timeOfDay ="night"
    styles.color = "yellow"
  }



  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDom.render (
  <App />,
  document.getElementById('root')
)