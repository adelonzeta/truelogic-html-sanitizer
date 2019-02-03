import React, {useState} from 'react'
import replace from 'lodash/replace'

export default () => {
  const [state, dispatch] = useState('Paste your HTML here...')

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
    <div>
      <textarea
        id="textarea"
        cols={30} 
        rows={10} 
        onChange={sanitize}
        value={state}>
      </textarea>
    </div>
  )
}
