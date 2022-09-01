import topImage from '@/images/Top1.jpeg'
import Image from 'next/image'

export function TopImage() {
  return (
      <div className='w-full flex justify-center'>
      <Image
                            className=""
                            src={topImage}
                            alt=""
                            
                        
                          /> 
      </div>
  
  )
}