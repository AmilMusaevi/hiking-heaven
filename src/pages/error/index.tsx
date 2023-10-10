import errorAnimation from "../../json/errorAnimation.json"
import Lottie from "lottie-react";
const Error = () => {
  return (
    <div className="error">
    <Lottie animationData={errorAnimation}
                      loop={true}/>
                      </div>
  )
}

export default Error