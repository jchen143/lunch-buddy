import React from 'react'; 

const Footer = (props) => {

    return(
        <>
            <div className="footer">
                <img src={window.footerLogo}/>

                    
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/jonathan-chen-a63122ba/">LinkedIn</a>
                    <a href="http://jchen143.github.io/">Personal Site</a>
                    <a href="https://github.com/jchen143">Github</a>
                </div>
            </div>

        </>

    )
}

export default Footer