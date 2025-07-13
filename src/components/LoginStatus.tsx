interface LoginStatusProps{
    isLoggedIn:boolean;
    username?:string;
}

// className: ReactでCSSクラスを指定するプロパティ
// HTMLの class属性と同じ役割だが、JavaScriptの予約語 'class' と区別するため
// ここではTailwind CSSのユーティリティクラスを使用:
// - bg-blue-100: 薄い青色の背景
// - p-4: パディング（余白）4単位
// - rounded: 角を丸くする

export default function LoginStatus({isLoggedIn,username}:LoginStatusProps){
    return (
        <div className="bg-blue-100 p-4 rounded">
            {isLoggedIn ? (
                <p>ようこそ、{username}さん！</p>
            ) : (
                <p>ログインしてください。</p>
            )}
        </div>
    );
}