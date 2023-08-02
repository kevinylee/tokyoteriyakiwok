import * as React from "react"
import Broccoli from "../images/Broccoli-Beef.png"

const Info = (props) => {
    return (                  
        <div class="flex flex-col justify-center items-center w-full md:mt-2 md:flex-row md:-space-x-40">
            <img class="w-[34rem] shadow-sm"src={Broccoli} alt="Broccoli Beef"></img>
            <div id="infoBox" class="flex flex-col justify-center bg-white pt-10 pb-10 pl-10 pr-7 space-y-12 max-h-66 shadow-2xl">
                <div class="flex shrink space-x-36">
                    <p class="text-3xl">Hours</p>
                    <ul class="flex flex-col space-y-2 text-2xl">
                        <li>Mon - Sat</li>
                        <li>10:30AM-8:30 PM</li>
                    </ul>
                </div>
                <div class="flex shrink space-x-28">
                    <p class="text-3xl">Address</p>
                    <a class="text-2xl hover:underline" href="https://goo.gl/maps/4zbpbmwxqfRx9xEC7" rel="noreferrer" target="_blank">11603 State Ave #F, Marysville, WA 98271</a>
                </div>
                <div class="flex shrink space-x-36">
                    <p class="text-3xl">Phone</p>
                    <a class="text-2xl hover:underline" href="tel:+13606575040">360-657-5040</a>
                </div>
            </div>
        </div>
    )
}

export default Info