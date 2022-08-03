import api from '@api'
import { useCallback, useState } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
})

export function RecoidDemo() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    api.user.userControllerLogin({
      username,
      password,
    })
  }

  return (
    <div>

      <input placeholder="账号" onChange={e => setUserName(e.target.value)}/>
      <input placeholder="密码" onChange={e => setPassword(e.target.value)}/>

      <button onClick={login}>登陆</button>
      <br/>
      <input value={text} onChange={onChange}/>
      <br/>
      Echo: {text}
    </div>
  )
}

const charCountState = selector({
  key: 'charCountState', // unique Id
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  },
})

function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}
