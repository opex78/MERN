const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4 ">
                Contact Us
            </h1>
            <form>
                <input className="border border-black p-2 m-2"
                    type="text"
                    placeholder="message"
                />
                <button className="border border-black p-2"> Submit </button>
            </form>
        </div>
    )
}

export default Contact;
