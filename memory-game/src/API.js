const baseUrl = 'http://localhost:3001'
const signinUrl = baseUrl + '/signin'

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const signIn = user => post(signinUrl, user)

export default { signIn }
