import { socials } from "../constants"
import Section from "./Section"


const Footer = () => {
  return (
    <Section
     crosses
     className="!px-0 !py-10"
    >
     <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
        © {new Date().getFullYear()} Brainwave. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap ">
            {socials.map((item) => (
                <li key={item.id} className="flex items-center ">
                    <a href={item.url}>
                        <img src={item.iconUrl} width={20} height={20} alt={item.title} />
                    </a>
                </li>
            ))} 
        </ul>
     </div>
    </Section>
  )
}

export default Footer
