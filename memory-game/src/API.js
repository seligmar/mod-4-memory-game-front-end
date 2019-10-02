const baseUrl = 'http://localhost:3000'
const signinUrl = baseUrl + '/signin'
const createUserUrl = baseUrl + '/createUser'

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const signIn = user => post(signinUrl, user)

const createNewUser = user => post(createUserUrl, user)

export default { signIn, createNewUser }
