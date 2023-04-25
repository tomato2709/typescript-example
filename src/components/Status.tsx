//string literal props example
type statusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: statusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Fetch data thành công!'
    } else if (props.status === 'error') {
        message = 'Lỗi fetch data'
    }
    return (
        <div>
            <div>Status - {message}</div>
        </div>
    )
}