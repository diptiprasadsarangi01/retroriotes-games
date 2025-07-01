import React from 'react'

function Game({ game }) {
  return (
    <a href={game.gameLink} target="_blank" rel="noopener noreferrer"> 
      <div className="flex items-center justify-center py-4 bg-black">
        <div className="group relative neon-container">


          {/* Top trapezium header */}
          <div className="neon-header  absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500 text-[#F3E8C9]">
           <div className="neon-header-inner flex items-center justify-center"> <span className='neon-header-inner-text'>Details</span></div>
          </div>

          {/* Octagonal frame */}
          <div className="neon-frame text-[#f8e09f] text-center ">
            <div className="absolute  z-0 neon-shadow"></div>        
            <div className='neon-frame-inner relative'>
                <div className='neon-frame-bg-image z-10  opacity-30 transition-opacity duration-500 group-hover:opacity-4'
                style={{
                  backgroundImage: `url(${game.gameImgName})`,
                }}
                >
                  {/* Game name visible by default */}

                </div>
               <div className=" game-card-front z-30 transition-opacity duration-500 group-hover:opacity-0 flex items-center justify-center h-full text-3xl font-bold font-[Aclonica]">
                  {game.gameName}
                </div>
    
                {/* Game details visible on hover */}
                <div className="game-card-back absolute inset-0 opacity-0  group-hover:opacity-100 transition duration-500 flex items-center justify-center px-4">
                  <div className="text-base text-justify ">
                    {game.details.map((line, idx) => (
                          <p key={idx} className='py-2'>{line}</p>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </a>
  )
}

export default Game
