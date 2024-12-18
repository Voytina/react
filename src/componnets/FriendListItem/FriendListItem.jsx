import clsx from "clsx";

import css from './FriendListItem.module.css'


export default function FriendListItem ({item:{avatar,name,isOnline,id}}){

    
    

    return <div>
        <img src={avatar} alt="" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.green : css.red )}>
            {
                isOnline ? 'online' : 'not online'
            }
        </p>
        <p>{id}</p>
    </div>

}