import React from "react"
import DoorDash from "../images/doordash.png"
import UberEats from "../images/uber-eatspng.png"

const Footer = () => {
    return (
        <footer class="flex flex-col justify-center items-center shrink bottom-0 left-0 right-0 w-full bg-gray pt-4 pb-4 md:fixed">
            <div>
                <a href="#home">
                    <h1 class="flex justify-center text-lightgray mb-4 md:justify-start md:items-start">Tokyo Teriyaki & Wok</h1>
                </a>
                <div class="flex flex-col space-y-6  justify-center flex-wrap shrink mb-6 text-white md:space-y-0 md:space-x-24 md:flex-row">
                    <div class="flex flex-col sm:space-y-4">
                        <p class="text-xl">Hours</p>
                        <p class="text-sm">Mon - Sat</p>
                        <p class="text-sm">10:30am-8:30pm</p>
                    </div>
                    <div class="flex flex-col sm:space-y-4">
                        <p class="text-xl">Address</p>
                        <a class="text-sm hover:underline" href="https://goo.gl/maps/4zbpbmwxqfRx9xEC7" rel="noreferrer" target="_blank">
                            11603 State Ave #F, Marysville, WA 98271
                        </a>
                    </div>
                    <div class="flex flex-col sm:space-y-4">
                        <p class="text-xl">Contact</p>
                        <a class="text-sm hover:underline" href="tel:+13603575040">360-657-5040</a>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center space-x-8 md:justify-end">
                    <a href="https://www.doordash.com/store/tokyo-teriyaki-&-wok-marysville-119678/" rel="noreferrer" target="_blank">
                    <img src={DoorDash} alt="DoorDash"></img>
                    </a>
                    <a href="https://www.ubereats.com/store/tokyo-teriyaki-%26-wok/K8Ve7ftMVv-XQPj881h7Og?ps=1" rel="noreferrer" target="_blank">
                    <img src={UberEats} alt="UberEats"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer