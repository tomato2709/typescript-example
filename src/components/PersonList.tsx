// array of objects props example
type personListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.names.map(name =>  {
                return (
                    <div key={name.first}>
                        {name.first} {name.last}
                    </div>
                )
            })}
        </div>
    )
}