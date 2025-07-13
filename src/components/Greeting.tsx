interface GreetingProps{
    name: string;
    age: number;
    isStudent?: boolean;
}

export default function Greeting({ name,age,isStudent=false}:GreetingProps){
    return(
        <div>
            <h2>こんにちは、{name}さん</h2>
            <p>年齢:{age}</p>
            {isStudent && <p>学生です</p>}
        </div>
    )
}