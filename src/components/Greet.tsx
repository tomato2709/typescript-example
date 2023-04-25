// basic props example
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            {
                props.isLoggedIn 
                ? `Xin chào ${props.name}! Bạn có ${messageCount} tin nhắn.`
                : 'Xin chào Guest!'
            }
        </div>
    )
}