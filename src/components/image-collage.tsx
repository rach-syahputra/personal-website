import Image from 'next/image'
import { Images } from '@/lib/types'

interface ImageCollageProps {
  images: Images
}

const styles = {
  left: [
    'left-[6%] lg:left-0',
    'left-[16%] lg:left-[6%]',
    'left-[26%] lg:left-[16%]'
  ],
  top: ['top-0', 'top-[5%]', 'top-[15%]'],
  rotate: ['-rotate-6', '-rotate-3', 'rotate-0'],
  width: [
    'w-[63px] xs:w-[81px] lg:w-[135px]',
    'w-[149px] xs:w-[192px] lg:w-[320px]',
    'w-[199px] xs:w-[256px] lg:w-[426px]'
  ]
}

export default function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className='xs:h-[170px] xs:w-full relative h-[135px] w-[300px] max-w-[380px] lg:h-[290px] lg:w-[500px] lg:max-w-full'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.left[index]} ${styles.top[index]} ${styles.rotate[index]} ${styles.width[index]} xs:h-36 absolute h-28 overflow-hidden rounded-md bg-slate-400 shadow-default lg:h-60`}
        >
          <Image src={image} alt='project image' fill />
        </div>
      ))}
    </div>
  )
}
