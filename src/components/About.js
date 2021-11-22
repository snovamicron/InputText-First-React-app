import React from 'react'

const About = (porp) => {
    const {bgMode,Mode,colorMode} = porp.modeDefine
    return (
        <>
            <div  className="accordion mt-3" id="accordionExample">
                <div  style={{backgroundColor:colorMode(Mode), color:bgMode(Mode)}} className="accordion-item">
                    <h2  className="accordion-header" id="headingOne">
                        <button style={{backgroundColor:colorMode(Mode), color:bgMode(Mode)}}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {porp.item1}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi laudantium maiores, ut porro provident quos dignissimos, inventore quo quam libero sed recusandae, perferendis unde ducimus dolore. Nam qui modi quo ducimus praesentium reiciendis doloribus iure placeat! Quae fugit sint voluptatem. Accusamus repellendus hic veniam qui. Quasi et incidunt aut at dolores dolorem eius! Fugit adipisci magni et excepturi deleniti at atque doloremque repudiandae id voluptates numquam dolorum molestias, sunt autem quam repellendus cum natus fuga? Impedit, debitis ut ad aliquid beatae laudantium magnam quae, molestias autem incidunt quod nobis eaque laboriosam sapiente obcaecati quaerat similique rem reprehenderit ipsam!
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:colorMode(Mode), color:bgMode(Mode)}} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={{backgroundColor:colorMode(Mode), color:bgMode(Mode)}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            {porp.item2}
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem odio, unde aspernatur debitis temporibus molestiae, libero aperiam commodi neque labore ullam? Ratione doloremque pariatur magnam sunt exercitationem ipsa blanditiis laudantium cupiditate vel atque quibusdam numquam expedita voluptate repudiandae dolores, iusto ad molestias deleniti ex aliquam! Provident impedit illo nulla sunt, fugiat at quidem rem deserunt vero porro consequatur eos reiciendis rerum aut fuga delectus beatae ullam magni possimus debitis quia. Omnis, nemo ea. Vero, nesciunt omnis delectus nulla eius in itaque iure maiores distinctio recusandae non et, sint voluptatum odio placeat eos reiciendis quam obcaecati fuga velit exercitationem molestiae! Nemo, pariatur? Aperiam reprehenderit fugiat est minus eum? Eaque temporibus ipsum provident repellendus quidem accusantium, ab consequatur debitis distinctio, ex ducimus aliquid odit aperiam adipisci esse possimus? Dicta, ratione eius magni harum ipsam obcaecati nemo minima. Aspernatur laboriosam aliquid tenetur magni neque non provident consequatur nulla blanditiis odio nobis, tempore veniam ad debitis, ipsum cumque, ut vero! Amet laborum quasi dicta nemo? Earum nisi totam dolores non cum, incidunt eaque dolore fugiat consectetur iure aperiam reiciendis reprehenderit dolorem ratione id saepe consequuntur cumque est qui veniam provident. Maxime impedit dolore accusantium? Unde est, magnam accusamus magni veritatis quas debitis totam!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
