import React from 'react'
import FeedBtn from '../../components/FeedBtn'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope,faInstagram } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
function Feedback() {
    return (
        <div>
            <FeedBtn text="Feedback" cls="feed__btn__1" />
            <p className="feed__p">Please tell us what do you think, any kind of feedback is highly appreciated.</p>
            <textarea className='feed__t' placeholder='Your Feedback'></textarea>
            <button className='feed__btn__3' >Send Feedback</button>
            <FeedBtn text="CONTACT US" cls="feed__btn__2"/>
            <div className='feed__fntasm__div'>
            <FontAwesomeIcon icon={faEnvelope} className='fntawsm'></FontAwesomeIcon>
            </div>
            <div className='feed__fntasm__div'>
            <FontAwesomeIcon icon={faEnvelope} className='fntawsm'></FontAwesomeIcon>
            </div>
            <div className='feed__fntasm__div'>
            <FontAwesomeIcon icon={faEnvelope} className='fntawsm'></FontAwesomeIcon>
            </div>
            <div className='feed__fntasm__div'>
            <FontAwesomeIcon icon={faEnvelope} className='fntawsm'></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Feedback
