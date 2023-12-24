import React, { FC } from 'react';
import BtnSignIn from '../atoms/BtnSignIn';
import { Link } from 'react-router-dom';
import "../../../App.css"
type RightBtnsType = {
    page: string;
}
const RightBtns: FC<RightBtnsType> = ({page}) => {
    return (
        <div style={{display: "flex", width: "228px", justifyContent: "space-between", flexWrap: "wrap-reverse"}}>
            {page === "main" 
            ? 
            <Link to="/favorites"  className="linkToPage">
                <img src={process.env.PUBLIC_URL + '/images/icons/Heart.png'} alt='Favorites'/>
            </Link>
            : 
            <Link to="/" className="linkToPage">
                <img src={process.env.PUBLIC_URL + '/images/icons/PinkHeart.png'} alt='>Favorites<'/>
            </Link>
            }
            <BtnSignIn/>
        </div>
    );
};

export default RightBtns;