import RedStar from "../../assets/Rating-red.png"
import GreyStar from "../../assets/Rating-grey.png"
import PropTypes from "prop-types"

function Rating (rateValue) {
    const range = [1,2,3,4,5]
    const value = Object.values(rateValue)
    return (
        <div>
            {range.map ((rangeElement) => 
            (value >= rangeElement ? <span key={rangeElement.toString()}><img src={RedStar} alt="Etoile rouge"/></span> : <span key={rangeElement.toString()}><img src={GreyStar} alt="Etoile grise"/></span>))}
        </div>
    )
}

Rating.propTypes = {
    rateValue: PropTypes.number
}
export default Rating