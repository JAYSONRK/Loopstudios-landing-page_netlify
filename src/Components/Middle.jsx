import React from "react";
import IntertactiveD from "../images/desktop/image-interactive.jpg";
import IntertactiveM from "../images/mobile/image-interactive.jpg";

const  Middle = () => {
    return (<>
        <section className="middle mx-4 my-5">
            <div className="leader text-center container">
            <div className="row lead">
                <picture className="col-12 col-md-7">
                    <source media="(min-width:576px)" srcSet={IntertactiveD}/>
                    <img src={IntertactiveM} alt="interactive"/>
                </picture>
                <article className="col-12 col-md-6" >
                    <h2>The leader in interactive VR</h2>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </article>
            </div>
            </div>
            <div className="creation container-fluid py-5">
                <div className="creation-heading text-center py-4">
                    <div>
                        <h2>Our creations</h2>
                    </div>
                    <div  className="top-button see-all text-center my-3">
                        <button>See all</button>
                    </div>
                </div>
                <div className="gallary row py-1">
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>Deep earth</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3" >
                        <h3>Night arcade</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>Soccer team VR</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>The grid</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>From up above VR</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>Pocket borealis</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>The curiosity</h3>
                    </div>
                    <div className="col-12	col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h3>Make it fisheye</h3>
                    </div>
                </div>
                <div  className="bottom-button see-all text-center my-3">
                    <button>See all</button>
                </div>
            </div>
        </section>
    </>)
}

export default Middle;