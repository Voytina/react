import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList ({friends}){


    
    
    
    

    
    

    return <div>
        <ul>
            {
                friends.map(value => {
                    return <li key={value.id}> <FriendListItem item={value}/></li>
                    
                })
            }
        </ul>
    </div>

}