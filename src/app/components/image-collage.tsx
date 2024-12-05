import Image from 'next/image'
import { Images } from '@/lib/types'

interface ImageCollageProps {
  images: Images
}

const styles = {
  left: [
    'left-[0] xs:left-[1%]',
    'left-[6%] xs:left-[7%] ',
    'left-[16%] xs:left-[17%] '
  ],
  top: ['top-0', 'top-[5%]', 'top-[15%]'],
  rotate: ['-rotate-6', '-rotate-3', 'rotate-0'],
  width: [
    'w-[81px] xs:w-[99px] md:w-[124px] lg:w-[163px]',
    'w-[192px] xs:w-[234px] md:w-[293px] lg:w-[387px]',
    'w-[256px] xs:w-[313px] md:w-[391px] lg:w-[515px]'
  ],
  height: ['h-36 xs:h-44 md:h-[220px] lg:h-[290px]']
}

export default function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className='group relative h-[170px] w-[300px] xs:h-[230px] xs:w-[380px] md:h-[260px] md:w-[470px] lg:h-[350px] lg:w-[620px] xl:max-w-full'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.left[index]} ${styles.top[index]} ${styles.rotate[index]} ${styles.width[index]} ${styles.height} absolute overflow-hidden rounded-md bg-slate-400 shadow-default transition-all duration-300 ease-in-out group-hover:scale-105`}
        >
          <Image src={image} alt='project image' fill />
        </div>
      ))}
    </div>
  )
}
