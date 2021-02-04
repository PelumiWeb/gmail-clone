import React from 'react'
import './Sidebar.css'
import Button from '@material-ui/core/Button/Button'
import AddIcon from '@material-ui/icons/Add'
import Inbox from '@material-ui/icons/Inbox'
import SidebarOption from '../SidebarOption/SidebarOption'
import StarIcon from '@material-ui/icons/Star'
import { AccessTime, LabelImportant, NearMe, Note, ExpandMore, Person, Duo, Phone, } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton/IconButton'
import {useDispatch} from 'react-redux'
import {openSendMesssage} from '../../features/mailSlice'
function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />}
            className="sidebar_compare"
            onClick={() => dispatch(openSendMesssage())}
            >
                Compose
            </Button>
        <SidebarOption Icon={Inbox} title="Inbox" number={34} selected />
        <SidebarOption Icon={StarIcon} title="Starred" number={34} />
        <SidebarOption Icon={AccessTime} title="Snoozed" number={34} />
        <SidebarOption Icon={LabelImportant} title="Important" number={34} />
        <SidebarOption Icon={NearMe} title="Sent" number={34} />
        <SidebarOption Icon={Note} title="Drafts" number={34} />
        <SidebarOption Icon={ExpandMore} title="More" number={34} />
        <div className="sidebar_footer">
            <div className="sidebar_footerIcons">
        <IconButton>
            <Phone />
        </IconButton>
        <IconButton>
            <Duo />
        </IconButton>
        <IconButton>
            <Person />
        </IconButton>
            </div>
        </div>

        </div>
    )
}

export default Sidebar
