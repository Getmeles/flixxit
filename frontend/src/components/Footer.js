import React from "react";

const Footer = () => {
    return (
        <footer className="container text-center mt-auto">
            <hr />
            <span className="text">
                &copy; {new Date().getFullYear()} Flixxit. Developed by Meles Habtu.
            </span>
        </footer>
    );
};

export default Footer;
