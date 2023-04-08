import React, {useRef} from 'react'

export const Heading = ({searchWord, phonetic, audioUrl}) => {
    const ref = useRef(); 
    const playAudio = () => {
        ref.current.play()
    }
  return (
    <div className="flex flex-row justify-between my-5" >
      <h3 className="font-bold text-3x1 font-serif">
      {searchWord} 
      <span className="block font-normal text-sm text-indigo-600">{phonetic}</span>
      </h3>
      <button onClick={playAudio} className="bg-indigo-300 rounded-full h-16 w-16">Play</button>
      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  )
}

export default Heading;

