import React from 'react';
import { ManSVG } from '../svg';

const SecondScreen = () => {
    return (
        <section className="sectionTwo">
            <div className=" text-justify container sectionTwo__content d-flex align-items-center justify-content-center">
                <div className='mt-5'>
                    <h2  className='text-center sectionTwo__title title1'>Let's get acquainted</h2>
                    <div className="row  d-flex align-items-center justify-content-between">
                        <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12">
                            <ManSVG />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 sectionTwo__right ">
                            <h3 className='title2'>I am cool frontend developer</h3>
                            <div className='sectionTwo__text'>
                                <p className="mt-4">
                                    We will evaluate how clean your approach to writing CSS and
                                    Javascript code is. You can use any CSS and Javascript 3rd party
                                    libraries without any restriction.
                                </p>
                                <p className="mt-4">
                                    If 3rd party css/javascript libraries are added to the project
                                    via bower/npm/yarn you will get bonus points. If you use any
                                    task runner (gulp/webpack) you will get bonus points as well.
                                    Slice service directory page P​SD mockup​ into HTML5/CSS3.{' '}
                                </p>
                            </div>
                            <a className="flatBtn d-block" href='#form'>Sing up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondScreen;
