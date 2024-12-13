
import hero from "@assets/banner.png"

export function Hero() {
    return (
        <div className="flex flex-col items-center bg-[#6278F7]">
            <img src={hero} alt="Banner" />
        </div>
    )
}