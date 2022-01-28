import React from 'react'
import ReactMarkdown from 'react-markdown'
const MarkdownPart = ({textData}) => {
    return (
        <div>
            <h1><ReactMarkdown>{textData}</ReactMarkdown></h1>
        </div>
    )
}

export default MarkdownPart
