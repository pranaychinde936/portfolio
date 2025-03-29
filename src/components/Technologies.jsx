import { FaGit, FaPython, FaGithub, FaDocker, FaAws, FaJs } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCpp className='text-7xl text-white-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-blue-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJs className='text-7xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-7xl text-orange-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaDocker className='text-7xl text-blue-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-7xl text-white-700' />
            </div>
        </div>
    </div>
  )
}

export default Technologies