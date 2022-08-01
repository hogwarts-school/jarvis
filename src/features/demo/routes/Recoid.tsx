import { useCallback } from 'react'
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

  return (
    <div>
      <input value={text} onChange={onChange} />
      <br />
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
