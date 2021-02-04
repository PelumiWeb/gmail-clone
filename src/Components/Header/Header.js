import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { ArrowDropDown} from '@material-ui/icons'
import NotificationIcon from '@material-ui/icons/NotificationImportant'
import AppIcon from '@material-ui/icons/Apps'
import Avatar from "@material-ui/core/Avatar/Avatar" 
import {useSelector, useDispatch} from 'react-redux';
import {selectUser, logout} from '../../features/userSlice'
import {auth} from '../../firebase'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

const signOut = () => {
    auth.signOut().then(() => {
        dispatch(logout())
    })
   
}

    return (
        <div  className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="data:image/png;base64,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" alt=""/>
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input type="text"/>
                <ArrowDropDown />
                </div>
                <div className="header_right">
                    <IconButton>
                    <AppIcon />
                    </IconButton>
                    <IconButton>
                    <NotificationIcon />
                    </IconButton>
                    <Avatar 
                    onClick={signOut}
                    src={user.photoUrl}/>
                

                
                </div>
        </div>
    )
}

export default Header
