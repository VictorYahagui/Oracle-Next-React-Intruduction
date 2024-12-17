
import fb from "@assets/fb.png"
import ig from "@assets/ig.png"
import tw from "@assets/tw.png"
import logo from "@assets/logo.png"
import fundo from "@assets/fundo.png"

export function Footer() {
    return (
        <div className={`w-full py-10 flex justify-around items-center relative bg-[#6278F7] bg-cover bg-center bg-footer`}>
            <div className="">
                <ul className="flex gap-5 justify-center items-center">
                    <li>
                        <a href="#" className="size-6">
                            <img src={fb} alt="FaceBook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={ig} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={tw} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-40 h-16">
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <span className="text-white">Desenvolvido por Victor Yahagui</span>
            </div>
        </div>
    )
};
