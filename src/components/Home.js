import React, {useState} from 'react'
import MarkdownPart from './MarkdownPart'
const Home = () => {
    const [textData, setTextData] = useState('')
    return (
        <div className="home">
            <div className="writing-part">
                <textarea
                value={textData}
                onChange={(e)=>{
                    setTextData(e.target.value)
                }}
                ></textarea>
            </div>
            <div className="markdown-part">
                <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">Markdown Syntex</a>
            <MarkdownPart textData={textData} />

            </div>
        </div>
    )
}

export default Home
