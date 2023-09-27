import { iconAccessAnywhere, iconSecurity, iconCollaboration, iconAnyFile } from "../utils/images"
const Features = () => {
  return (
    <div className="bg-DarkBlueMain flex flex-col justify-center items-center gap-[4.2rem]  ">


      <div className="flex flex-wrap justify-center mt-7 lg:gap-[9.2rem] gap-[6rem] ">

        <div className=" max-w-[350px] w-full flex flex-col items-center z-10 relative mx-[15px]">
          <img src={iconAccessAnywhere} alt="computers" className="mb-[1.6rem] absolute top-0" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-[0.52rem] pt-[6.4rem]">Access your files, anywhere</h3>
          <p className="text-center text-White-P text-[.845rem] tracking-[.012rem] ">
            The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.
          </p>
        </div>

        <div className=" max-w-[380px] w-full flex flex-col items-center z-10 relative mx-[15px]">
          <img src={iconSecurity} alt="computers" className="mb-[1.6rem] absolute -top-1" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-[0.52rem] pt-[6.4rem]">Security you can trust</h3>
          <p className="text-center text-White-P text-[.845rem] tracking-[.012rem] ">
            2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.
          </p>
        </div>
      </div>


      <div className="flex flex-wrap justify-center lg:gap-[10rem] mt-7 gap-[6rem]">
        <div className=" max-w-[360px] w-full flex flex-col items-center z-10 mx-[15px]">
          <img src={iconCollaboration} alt="computers" className="mb-[1.9rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-[0.4rem]">Real-time collaboration</h3>
          <p className="text-center text-White-P text-[.845rem] tracking-[.012rem] ">
            Securely share files and folders with friends, family and colleagues for live collaboration.
            No email attachments required.
          </p>
        </div>

        <div className=" max-w-[350px] w-full flex flex-col items-center z-10 pt-1 mx-[15px]">
          <img src={iconAnyFile} alt="computers" className="mb-[2rem]" />
          <h3 className=" text-White-P text-[1.2rem] font-Ral font-semibold tracking-wide mb-[0.4rem]">Store any type of file</h3>
          <p className="text-center text-White-P text-[.845rem] tracking-[.012rem] ">
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
            file types to be securely stored and shared.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Features