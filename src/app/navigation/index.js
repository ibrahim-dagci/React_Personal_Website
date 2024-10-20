import HomePage from "../pages/home";
import More from "../pages/more";
import {
    Routes, 
    Route,
} from "react-router-dom";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/more" element={<More></More>} />
        </Routes>
    );
};
export default Navigation;
