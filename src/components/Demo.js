// const props = { name: "Restaurant A", ratings: 4.5 }

const Demo = (props) => { // props = object {}
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.ratings}</h2>
        </div>
    )
}

// // i want to pass props to Demo component
// <Demo {...props} />
export default Demo;