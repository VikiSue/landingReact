import React from 'react';
import banner from '../../img/banner-photo.jpg';

const FirstScreen = () => {
    return (
        <section className="sectionOne">
            <div className="container">
                <div className="row align-items-center sectionOne__content">
                    <div className=" col col-lg-7 col-md-8 col-sm-12 col-xs-12 text-lg-left text-md-left text-sm-center text-sx-center">
                        <h1 className="mb-3 sectionOne__title mt-5 title1">
                            Test assignment <br /> for Frontend <br /> Developer position
                        </h1>
                        <p className="mb-3">
                            We kindly remind you that your test assignment should be submitted as a
                            link to github/bitbucket repository. Please be patient, we consider and
                            respond to every application that meets minimum requirements. We look
                            forward to your submission. Good luck! The photo has to scale in the
                            banner area on the different screens
                        </p>
                        <button className="button">Sing up now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;
