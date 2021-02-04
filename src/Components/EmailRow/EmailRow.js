import { Checkbox, IconButton } from '@material-ui/core'
import { StarBorderOutlined, LabelImportantOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {selectEmail} from '../../features/mailSlice'


function EmailRow({id, title, subject, description, time}) {
    const dispatch = useDispatch()

    const history = useHistory()
    const readMail = () => {
        history.push('/mail')
        dispatch(selectEmail({
            id, 
            title, 
            subject,
            description,
             time,
        }))
    } 

    return (
        <div className="emailRow" onClick={readMail}>
          <div className="emailRow_option">
              <Checkbox  className="checkbox"/>
              <IconButton>
                  <StarBorderOutlined />
              </IconButton>
              <IconButton>
                  <LabelImportantOutlined />
              </IconButton>
         </div>  
         <div className="emailRow_title">
             <h2>{title}</h2>
         </div>  
         <div className="emailRow_message">
             <h4>
             {subject}
             <span className="emailRow_description">
             {description}
                </span> 
             </h4>
         </div>  
         
         <div className="emailRow_time">
            <p>{time}</p> 
         </div>  
        </div>
    )
}

export default EmailRow
