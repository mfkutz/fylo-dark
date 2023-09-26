import { iconAccessAnywhere, iconSecurity, iconCollaboration, iconAnyFile } from "../utils/images"
const Features = () => {
  return (
    <div className="bg-DarkBlueMain flex flex-col justify-center items-center ">

      {/* TOP*/}
      <div className="flex flex-wrap justify-center ">

        <div className=" w-[350px] flex flex-col items-center z-10">
          <img src={iconAccessAnywhere} alt="computers" className="mb-[1.6rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-1">Access your files, anywhere</h3>
          <p className="text-center text-White-P text-[.85rem] tracking-[.012rem] ">
            The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.
          </p>
        </div>

        <div className=" w-[350px] flex flex-col items-center z-10">
          <img src={iconSecurity} alt="computers" className="mb-[1.6rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-1">Security you can trust</h3>
          <p className="text-center text-White-P text-[.85rem] tracking-[.012rem] ">
            2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.
          </p>
        </div>

      </div>

      {/* DOWN */}
      <div className="flex flex-wrap justify-center">
        <div className=" w-[350px] flex flex-col items-center ">
          <img src={iconCollaboration} alt="computers" className="mb-[1.6rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-1">Access your files, anywhere</h3>
          <p className="text-center text-White-P text-[.85rem] tracking-[.012rem] ">
            The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.
          </p>
        </div>

        <div className=" w-[350px] flex flex-col items-center ">
          <img src={iconAnyFile} alt="computers" className="mb-[1.6rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-1">Security you can trust</h3>
          <p className="text-center text-White-P text-[.85rem] tracking-[.012rem] ">
            2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Features