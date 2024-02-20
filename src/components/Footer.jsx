import { FaTwitter, FaFacebookF , FaGooglePlusG , FaPinterestP, FaLinkedinIn} from "react-icons/fa6";

function Footer() {
  return (
    <footer className='py-[60px] pb-14'>
    <div className='container mx-auto flex'>
    <div className="w-[40%] ml-5">
      <img src="../images/logo.png" alt="logo" className="w-[50px]"/>
      <p className="w-5/6 mt-4 mb-4">Utenim ad minim veniam quis nostrud exercitation ullamco lorem ipsum dolor sit ametullamco</p>
      <div>
        <ul className="flex gap-3">
            <li><FaTwitter className="text-[#00ACED] hover:translate-y-2 duration-300 transition-all" /></li>
            <li><FaFacebookF className="text-[#3B5998] hover:translate-y-2 duration-300 transition-all" /></li>
            <li><FaGooglePlusG className="text-[#F04B3F] hover:translate-y-2 duration-300 transition-all"  /></li>
            <li><FaPinterestP className="text-[#CB2027] hover:translate-y-2 duration-300 transition-all"  /></li>
            <li><FaLinkedinIn className="text-[#007BB6] hover:translate-y-2 duration-300 transition-all"  /></li>
        </ul>
      </div>
    </div>

    <div className="flex gap-32">
        <div className="">
        <h5 className="text-xl font-semibold mb-5 text-[#1C2045]">Services</h5>
        <ul>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Big Data</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Desktop Application</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Product Engineering</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Machine Learning</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Machine Learning</li>
        </ul>
        </div>
        <div>
        <h5 className="text-xl font-semibold  mb-5 text-[#1C2045]">Community</h5>
        <ul>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Our Product</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Documentation</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Our Services</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">Company</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">What We Do?</li>
        </ul>
        </div>
        <div>
        <h5 className="text-xl font-semibold  mb-5 text-[#1C2045]">Contact Us</h5>
        <ul>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">3407 Wilkinson Court, Denver Colorado</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F]">33901</li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F] font-bold">Email: <span className="font-normal">hello@example.com</span></li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F] font-bold">Phone: <span className="font-normal">+44 587 154756</span></li>
            <li className="text-sm leading-0 mb-2 text-[#3A505F] font-bold">Fax: <span className="font-normal">+55 785 4578964</span></li>
        </ul>
        </div>
    </div>
    </div>

    <div className="container mx-auto">
        <div className="after:w-[70%] h-[1px] bg-[#EBEBEF] mt-10 mb-6">
            <p className="text-sm text-[#3A505F] pt-7 ml-2">© 2023 Robofume - Template By <span className="text-sm font-bold">Themescare</span></p>
        </div>

    </div>
</footer>
  )
}

export default Footer