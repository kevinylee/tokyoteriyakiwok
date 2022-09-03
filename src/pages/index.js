import * as React from "react"
import {Helmet} from "react-helmet"
import WebsiteIcon from "../images/teriyaki-icon.png"
import TokyoLogo from "../images/tokyo-logo-small.jpeg"
import Menu from "../images/menu.pdf"
import Info from "../components/info"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <div className="main" class="font-manrope">
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tokyo Teriyaki & Wok - The Best Teriyaki in Washington</title>
        <meta property="og:title" content="Tokyo Teriyaki & Wok - The Best Teriyaki in Washington" />
        <meta property="og:description" content="Serving delicious Teriyaki in Marysville, WA." />
        <meta property="og:url" content="https://www.tokyoteriyakiwok.com" />
        <meta name="description" content="Serving delicious Teriyaki in Marysville, WA." />
        <meta name="keywords" content="teriyaki, teriyaki marysville, tokyo, chicken teriyaki, japanese food" />
        <meta name="author" content="Kevin Lee" />
        <link rel="icon" type="image/png" href={WebsiteIcon} sizes="64x64" />
      </Helmet>
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
      <div class="flex flex-col flex-wrap jusitify-center items-center text-red text-2xl">
        <p>We will be CLOSED from 09/03 (Saturday) - 09/10 (Saturday) due to a Family Vacation.</p>
        <p>We will be OPEN back on 09/12 (Monday).</p>
        <p>Sorry for the inconvenience.</p>
      </div>
      <Info></Info>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
