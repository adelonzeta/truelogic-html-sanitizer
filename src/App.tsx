import React, {useState} from 'react'
import replace from 'lodash/replace'

export default () => {
  const [state, dispatch] = useState('')

  function sanitize(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let newHTML = ''
    const HTML = e.target.value
    const stylePattern = /<img alt=""/gm
    const endingPattern = />/gm
    const addStyle = '<img alt="" style="display:block;"'
    const newLine = '>\n'
    newHTML = replace(HTML, stylePattern, addStyle)
    newHTML = replace(newHTML, endingPattern, newLine)
    dispatch(newHTML)
  }

  return (
    <textarea
      id="textarea"
      onChange={sanitize}
      value={state}>
    </textarea>
  )
}
