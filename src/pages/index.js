import * as React from "react"
import TokyoLogo from "../images/tokyo-logo-small.jpeg"
import Menu from "../images/menu.pdf"
import Info from "../components/info"
import Footer from "../components/footer"

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
      <Info></Info>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
