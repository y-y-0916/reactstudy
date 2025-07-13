export default function JSXExample(){
    const title = "React学習"
    const isLearning = true;

    return (
        <div>
            {/* コメント */}
            <h1>{title}</h1>
            <p>現在学習中: {isLearning ? 'はい' : 'いいえ'}</p>
            <ul>
                <li>コンポーネント</li>
                <li>JSX</li>
                <li>Props</li>
            </ul>
        </div>
    );
}