import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift= useContext(AssetContext);
    return (
        <div className="grandpa">
             <h2>Friend</h2>
             <p>too: {gift}</p>
        </div>
    );
};

export default Friend;