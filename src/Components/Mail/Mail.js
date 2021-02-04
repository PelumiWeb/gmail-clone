import { ArrowBack, Delete, MoveToInbox, Error, Email, WatchLater, LabelImportantOutlined, CheckCircle, MoreVert, ExitToApp, Print, UnfoldMore } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton/IconButton'
import React from 'react'
import './Mail.css'
import { useHistory } from 'react-router'
import {useSelector} from 'react-redux'
import {getMail} from '../../features/mailSlice'

function Mail() {
    const history = useHistory()
    const {to, description, subject, time, } = useSelector(getMail)
    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                  <IconButton onClick={() => history.push('/')}>
                  <ArrowBack />
                </IconButton>
                <IconButton>
                  <MoveToInbox />
                </IconButton>  
                <IconButton>
                  <Error />
                </IconButton>  
                <IconButton>
                  <Delete />
                </IconButton>  
                <IconButton>
                  <Email />
                </IconButton>  
                <IconButton>
                  <WatchLater />
                </IconButton>  
                <IconButton>
                  <MoreVert />
                </IconButton>  
                <IconButton>
                  <CheckCircle />
                </IconButton>  
                <IconButton>
                  <LabelImportantOutlined />
                </IconButton>  
            
                </div>
                <div className="mail_toolsRight">
                <IconButton>
                  <UnfoldMore />
                </IconButton>  
                <IconButton>
                  <Print />
                </IconButton> 
                <IconButton>
                  <ExitToApp />
                </IconButton>   
                </div>
            </div>
    
        <div className="mail_body">
            <div className="mail_bodyHeader">
                <h2>{description}</h2>
                <LabelImportantOutlined  className="mail_important"/>
                <p>{to}</p>
                <p className="mail_time">{time}</p>
            </div>
            <div className="mail_message">
                <p>{subject}</p>
            </div>
        </div>
        </div>
    )
}

export default Mail
