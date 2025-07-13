'use client';

interface User{
    id:number;
    name:string;
    email:string;
}

interface UserCardProps {
    user:User;
    showEmail?:boolean;
    onUserClick:(user:User) => void;
}

export default function UserCard({user,showEmail = true,onUserClick}:UserCardProps){
    return(
        <div
        className="border p-4 rounded cursor-pointer"
        onClick={()=>onUserClick(user)}
        >
            <h3>{user.name}</h3>
            {showEmail && <p>Email:{user.email}</p>}
        </div>
    )
}