import { GraduationCap, Landmark, User, UserRoundPlus } from 'lucide-react'

function Dashboard() {
	return (
		<section className='overflow-x-scroll'>

      <h2 className='font-kumbh font-semibold text-[#4F4F4F] text-[20px] sm:text-[24px] md:text-[36px] text-center  md:px-[30px] text-wrap'>Welcome to your dashboard, Udemy school</h2>
			<div className='title font-kumbh font-semibold text-[#4F4F4F] text-[36px]  sm:max-w-[758px] md:min-w-[758px] mx-auto'>
				<h2 className='text-[16px] sm:text-[18px]  md:text-[24px] inline-block  text-start text-wrap'>
					Uyo/school/@teachable.com
				</h2>
			</div>

			<div className='max-w-[758px] md:min-w-[758px] mx-auto py-[68px] flex flex-col gap-[51px]'>

          <div className="flex gap-[20px]">
            <div className="bg-[#EFF3FA] h-[36px] w-[40px] hidden justify-center items-center rounded-[8px] text-[24px] text-[#4F4F4F] md:flex"> <UserRoundPlus /></div>
            <div className="text-[#4F4F4F] font-kumbh px-[5px]">
              <h2 className=' font-medium text-[24px] mb-[16px]'>Add other admins</h2>
              <p className='text-[12px] sm:text-[14px] text-wrap'>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>


          <div className="flex gap-[20px]">
            <div className="bg-[#EFF3FA] h-[36px] w-[40px] hidden justify-center items-center rounded-[8px] text-[24px] text-[#4F4F4F] md:flex"> <Landmark /></div>
            <div className="text-[#4F4F4F] font-kumbh px-[5px]">
              <h2 className=' font-medium text-[24px] mb-[16px]'>Add classes</h2>
              <p className='text-[12px] sm:text-[14px] text-wrap'>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div className="bg-[#EFF3FA] h-[36px] w-[40px] hidden justify-center items-center rounded-[8px] text-[24px] text-[#4F4F4F] md:flex"> <GraduationCap /></div>
            <div className="text-[#4F4F4F] font-kumbh px-[5px]">
              <h2 className=' font-medium text-[24px] mb-[16px]'>Add students</h2>
              <p className='text-[12px] sm:text-[14px] text-wrap'>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>

      </div>
		</section>
	)
}

export default Dashboard
