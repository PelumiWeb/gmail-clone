import { Close } from '@material-ui/icons'
import Button from '@material-ui/core/Button/Button'
import React from 'react'
import './SendMail.css'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from '../../features/mailSlice'
import firebase from 'firebase'
import {db} from '../../firebase'

function SendMail() {
    const dispatch = useDispatch()
    const {register, handleSubmit,  errors } = useForm()
    const onSubmit = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())

    }
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <Close className="sendMail_close"
                onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            name="to" 
            type="email"
            placeholder="To"
            ref={register({required: true})}
             />
             {errors.to && <p className="sendMail_error">To is required</p>}
            <input name="subject" type="text" placeholder="Subject"
            ref={register({required: true})}
            />
              {errors.subject && <p className="sendMail_error">Subject is required</p>}
            <input name="message" type="text" placeholder="message"
            className="sendMail_message"
            ref={register({required: true})}
            />
              {errors.message && <p className="sendMail_error">message is required</p>}

            <div className="sendMail_option">
            <Button 
            type="submit"
            className="sendMail_send">Send</Button>
            </div>
            </form>
      
        </div>
    )
}

export default SendMail
