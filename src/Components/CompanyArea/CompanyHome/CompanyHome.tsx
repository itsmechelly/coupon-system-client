import companyMain from "../../../Assets/Images/CompanyMain.jpg";
import "./CompanyHome.css";

function CompanyHome(): JSX.Element {
    return (
        <div className="CompanyHome">
            <img src={companyMain} className="CompanyMainImg" />
            <div className="w3-container">
                <h1>Our Coupon System</h1>
                <h2>Join us for the best shopping experience you can ever find, <br />and you will get the top products available on the market today.</h2>
                <p>We are here to help you make educated purchases with the best coupons and the biggest discounts.</p>
                <p>We are committed to providing you the best deals online.</p>
                <p>Hurry up, before all the wonderful coupons will run out!</p>
                <br />
            </div>
        </div>
    );
}

export default CompanyHome;
