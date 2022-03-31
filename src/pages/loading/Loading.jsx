import 'tw-elements'

const Loading = () => {
    return (
        <div className="flex justify-center mt-28 h-screen">
            <div className="spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Loading