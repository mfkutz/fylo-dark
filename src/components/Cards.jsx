import { iconAccessAnywhere, iconSecurity, iconCollaboration, iconAnyFile } from "../utils/images"


const Cards = () => {
    return (
        <div className=" w-[350px] flex flex-col items-center z-10">
            <img src={iconAccessAnywhere} alt="computers" className="mb-[1.6rem]" />
            <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-1">Access your files, anywhere</h3>
            <p className="text-center text-White-P text-[.85rem] tracking-[.012rem] ">
                The ability to use a smartphone, tablet, or computer to access your account means your
                files follow you everywhere.
            </p>
        </div>
    )
}

export default Cards