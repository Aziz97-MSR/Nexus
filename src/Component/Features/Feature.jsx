import './Second.css'
const Feature = (props) => {
    const { product } = props
    const { img, name, type, height } = product
    const style = {
        backgroundImage : img
    }
    return (
        <div style={{backgroundImage : `url(${img})`, backgroundRepeat : 'no-repeat', height : height }} className={`w-full flex justify-between items-end rounded-[10px] pt-4 pb-2 px-2 md:pt-6 md:pb-4 md:px-4  xl:pt-[32px] xl:pb-[24px] xl:px-[24px]`}>
            <div className="text-white">
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p>{type}</p>
            </div>
            <div className="roundBackground">
            </div>
        </div>
    )
}

export default Feature