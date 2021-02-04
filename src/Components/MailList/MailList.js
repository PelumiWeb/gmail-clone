import React, {useEffect, useState} from 'react'
import './MailList.css'
import CheckBox from '@material-ui/core/Checkbox/Checkbox'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import Section from '../Section/Section'
import EmailRow from '../EmailRow/EmailRow'
import {db} from '../../firebase'


function MailList() {
    const [mail, setMail] = useState([])
    console.log(mail)
        useEffect(() => {
    db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapshot => setMail(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
    })))
        
  ) 

},[])

   
    return (
        <div className="mailList">
            <div className="mailList_settings">
                <div className="mailList_settingsLeft">
                <CheckBox />
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Redo />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>

                <div className="mailList_settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>


                </div>
              

            </div>
            <div className="mailList_section">
                <Section Icon={Inbox} title="Primary" color="red" selected  />
                <Section Icon={People} title="Social" color="gray"   />
                <Section Icon={LocalOffer} title="Promotion" color="green"   />
            </div>
            <div className="mailList_list">

                {mail?.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={message}
                    description={subject}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
              ))}
            
            </div>
           
        </div>
    )
}

export default MailList
