import React from "react";

function Header() {
    
    return(
        <div className="grid">
            <div className="title">
                <h2>Hi, my name is</h2>
                <h1>Fredrick Mazzilli.</h1>
                <p>I specialize in Full Stack Web Development, UI Design and Project Management.</p>
                <p className="blurb">Leveraging my exceptional communication skills to discuss technical subjects with audiences of varying technical knowledge, I adeptly navigate the complexities of <span>project scoping</span> and seamlessly translate client requirements to our development team. This effective <span>collaboration</span> results in the creation of high-end products, meticulously tailored to <span>exceed expectations</span>.</p>
            </div>
            <div className="image-container">
                <div className="image"></div>
            </div>
        </div>
    )
}

export default Header