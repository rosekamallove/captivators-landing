import topImage from '@/images/Top1.jpeg'
import Image from 'next/image'

export function TopImage() {
  return (
      <div className=''>
      <Image
                            className="mx-auto "
                            src={topImage}
                            alt=""
                            
                        
                          /> 
      </div>
  
  )
}