import Image from 'next/image'

export type Images = [string, string, string]

interface ImageCollageProps {
  images: Images
}

const styles = {
  left: ['left-[6%]', 'left-[16%]', 'left-[26%]'],
  top: ['top-0', 'top-[5%]', 'top-[15%]'],
  rotate: ['-rotate-6', '-rotate-3', 'rotate-0'],
  width: ['w-[81px]', 'w-[192px]', 'w-[256px]']
}

export default function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className='relative h-[170px] w-[380px]'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.left[index]} ${styles.top[index]} ${styles.rotate[index]} ${styles.width[index]} shadow-default absolute h-36 overflow-hidden rounded-md bg-slate-400`}
        >
          <Image src={image} alt='project image' fill />
        </div>
      ))}
    </div>
  )
}
