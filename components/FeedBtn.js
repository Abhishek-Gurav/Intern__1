import React from 'react'

function FeedBtn(props) {
    return (
        <div>
            <button className={props}><i>{props.text}</i></button>
        </div>
    )
}

export default FeedBtn
