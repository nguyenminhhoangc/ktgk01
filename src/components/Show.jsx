import '../App.css'
const Show = (Props) => {

    return (
        <div className='Overlay'>
            <img src='../asset/spy_carousel 1.png' />
            <img src='../asset/overlay.png' />
            <div className='Content'>
                <h1>{Props.movieName}</h1>
                <p>
                    {Props.description}
                </p>
            </div>
        </div>
    )
}
export default Show;