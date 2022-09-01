import topImage from '@/images/Top3.jpeg'
import Image from 'next/image'

export function TopImage() {
  return null;
  return (
    <div className=' flex justify-center w-100vw'>
      <Image
        className="w-full object cover"
        src={topImage}
        alt=""

      />
    </div>

  )
}