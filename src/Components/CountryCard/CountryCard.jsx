import React, { Fragment } from "react";
// import "./CountryCard.css";

const CountryCard = (props) => {
    const CountryCardStyle = {
        position: "relative",
        margin: "1em 1em 1em 3em",
        height: "10em",
        width: "15em",
        backgroundImage: `url(${props.imgLink})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        borderRadius: "0.1cm",
        boxShadow: "5px 5px 15px lightgray",
        zIndex: "-1",
        transform: 'scale(1)'
    };

    const CountryNameStyle = {
        display: "flex",
        height: "6em",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.3em",
        textTransform: "uppercase",
        fontWeight: '500',
        zIndex: '20',
    };

    const MarkTagStyle = {
        backgroundColor: 'black',
        opacity: '0.8',
        padding: '0.1em fit-content',
        color: 'white',
        zIndex: '32',
    }

    return (
        <section style={CountryCardStyle}>
            <div style={CountryNameStyle}>
                <mark style={MarkTagStyle}>{props.countryName}</mark>
            </div>
        </section>
    );
};

export default CountryCard;
