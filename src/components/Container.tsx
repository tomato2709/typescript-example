type containerProps = {
    styles: React.CSSProperties
}

export const Container = (props: containerProps) => {
    return (
        <div style={props.styles}>
            Text mẫu ở đây
        </div>
    )
}