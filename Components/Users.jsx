import { useEffect, useState } from "react";
import animationData from "../Components/Utils/lotties/Animation - 1723020635626.json";
import Lottie from "react-lottie";

function Users(){
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setIsLoading(false)
    }, [])
    if (isLoading) {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      return (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      );
    }
}
export default Users