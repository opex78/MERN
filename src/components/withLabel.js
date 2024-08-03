const withLabel = (WrappedComponent, labelText) => {
    return (props) => {
        return (
            <>
                <label>{labelText}</label>
                <WrappedComponent {...props} />
            </>
        )
    }
}
export default withLabel;