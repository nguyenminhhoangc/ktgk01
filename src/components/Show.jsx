import '../App.css'
const Show = (Props) => {

    return (
        <div className='Overlay'>
            <img src='/ktgk01/asset/spy_carousel 1.png' />
            <img src='/ktgk01/asset/overlay.png' />
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