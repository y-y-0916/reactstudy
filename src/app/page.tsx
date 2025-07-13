// src/app/page.tsx
'use client';

import Welcome from '@/components/Welcome';
import Greeting from '@/components/Greeting'
import UserCard from '@/components/UserCard'
import LoginStatus from '@/components/LoginStatus'


export default function Homepage(){
    // ユーザーデータの例
    const sampleUser = {
        id: 1,
        name: "山田太郎",
        email: "yamada@example.com"
    };

    const loginStatusTest1 = {
        isLoggedin: true,
        username: "user1" 
    };

    // ユーザークリック時の処理
    const handleUserClick = (user: {id: number, name: string, email: string}) => {
        alert(`${user.name}がクリックされました！`);
    };

    return (
        <div>
            <Welcome />
            <Greeting name="田中" age={25}/>
            <Greeting name="Bob" age={18} isStudent={true}/>
            
            <h2>UserCardの例：</h2>
            <UserCard 
                user={sampleUser}
                showEmail={true}
                onUserClick={handleUserClick}
            />
            <LoginStatus isLoggedIn = {false} username="testuser"/>

        </div>
    );
}