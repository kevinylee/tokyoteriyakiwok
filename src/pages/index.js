import * as React from "react"
import TokyoLogo from "../images/tokyo-logo-small.jpeg"
import Menu from "../images/menu.pdf"
import Broccoli from "../images/Broccoli-Beef.png"
import DoorDash from "../images/doordash.png"
import UberEats from "../images/uber-eatspng.png"

// markup
const IndexPage = () => {
  return (
    <div className="main" class="font-manrope">
      <header id="home" class="flex shrink justify-center items-center w-full">
        <div class="flex flex-row flex-wrap items-center text-xl space-x-2 md:space-x-[25rem] md:mb-4">
          <a href="#home">
            <img class="w-[200px]" src={TokyoLogo} alt="Tokyo Teriyaki & Wok Logo"></img>
          </a>
          <div class="flex flex-row space-x-8">
            <a class="hover:underline" target="_blank" rel="noreferrer" href={Menu}>Menu</a>
            <a class="hover:underline" target="_blank" rel="noreferrer" href="https://www.doordash.com/store/tokyo-teriyaki-&-wok-marysville-119678/">Order</a>
          </div>
        </div>
      </header>
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
            <a class="text-2xl hover:underline" href="tel:+13603575040">360-657-5040</a>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default IndexPage
