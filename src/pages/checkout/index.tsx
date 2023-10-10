import checkoutAnimation from "../../json/checkoutAnimation.json"
import Lottie from "lottie-react";
const Checkout = () => {
  return (
    <div className="error">
    <Lottie animationData={checkoutAnimation}
                      loop={true}/>
                      </div>
  )
}

export default Checkout