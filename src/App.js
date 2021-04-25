import * as React from "react"
import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnauthenticatedApp"
import * as facade from "./facades/userFacade"
import {handleError} from "./apiUtils"

function App() {
  const [user, setUser] = React.useState(null)

  function login(userCredentials, setError, push) {
    facade
      .login(userCredentials)
      .then(user => {
        push("/")
        setUser({username: user.username, beers: JSON.parse(user.beers)})
        
      })
      .catch(error => handleError(error, setError))
  }

  function logout() {
    facade.logout()
    setUser(null)
  }

  function addBeer(beer) {
    setUser(user => ({
      ...user, beers: [...user.beers, beer]
    }))
  }

  // Whenever the user changes the app is rerendered
  return user ? (
    <AuthenticatedApp user={user} logout={logout} addBeer={addBeer} />
  ) : (
    <UnauthenticatedApp login={login} />
  )
}

export default App
