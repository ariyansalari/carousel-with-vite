import NavEL from "../../utils/NavEL";
import '@splidejs/splide/css';
import "./index.css"
const  Slider= () => {
    const nav=NavEL({
        element:"div",
        className:"splide",
        ariaLabel:"Splide Basic HTML Example",
        children:NavEL({
            element:"div",
            className:"splide__track",
            children:NavEL({
                element:"ul",
                className:"splide__list",
                children:[NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/$$$.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/andrew.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/$$$.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/killua.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/gon.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/killiua cute.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/sad.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/denji.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                }),NavEL({
                    element:"li",
                    className:"containers",
                    className:"splide__slide",
                    children:[NavEL({
                        element:"img",
                        src:"../public/photo/canelo.jpg",
                        style:"width:600px;height:600px;"
                    }),NavEL({
                        element:"div",
                        className:"overlay",
                        children:NavEL({
                            element:"div",
                            className:"content",
                            children:NavEL({
                                element:"img",
                                style:"width:100px; height:100px",
                                src:"../public/photo/play.png"

                            })
                        })
                    })]
                })]
            })
        })
    })

    return nav;
}
 
export default Slider;