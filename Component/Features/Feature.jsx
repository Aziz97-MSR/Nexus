import './Second.css'
const Feature = (props) => {
    const { product } = props
    const { img, name, type, height } = product
    const style = {
        backgroundImage : img
    }
    return (
        <div style={{backgroundImage : `url(${img})`, backgroundRepeat : 'no-repeat', height : height}} className={`flex justify-between items-end rounded-[10px] pt-[32px] pb-[24px] px-[24px]`}>

            <div className="text-white">
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p>{type}</p>
            </div>
            <div className="roundBackground">
                <i class="fa-solid fa-arrow-up-right"></i>
            </div>
        </div>
    )
}

export default Feature