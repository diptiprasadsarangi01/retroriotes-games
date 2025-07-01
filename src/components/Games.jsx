import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Game from './Game.jsx'
import tertis from '../GamesProfile/tertish2.jpg'
import hangman from '../GamesProfile/hangman.jpg'


function Games() {
  const headingRef = useRef(null)
 const headingInView = useInView(headingRef, {
    margin: "-6% 0% -10% 0%", 
    amount: 0,
  });

  const games = [
    {
      gameName: "Hang Man",
      details: ["Rule: Choose a category (Foods, Animals, Countries, or Colors) to get a hidden word. Guess letters one by one: correct guesses reveal letters, wrong guesses cost lives. Win by completing the word before you run out of chances!","Your Goal: Guess the hidden word before you run out of chances!"],
      gameLink: "https://diptiprasadsarangi01.github.io/01_HangManWordGame/",
      gameImgName: hangman,
    },
    {
      gameName: "Match Me",
      details: ["Rule: Match pairs of cards by clicking on them. If the cards don't match, they flip back over.","Your Goal: Find all the matching pairs with the fewest moves!"],
      gameLink: "https://diptiprasadsarangi01.github.io/MemoryCardGame/",
      gameImgName: "https://img.freepik.com/free-photo/high-angle-kid-playing-memory-game_23-2150294739.jpg?t=st=1751066978~exp=1751070578~hmac=09f99ba1faf20641fcbae845faabe98a5fe56742a3a2875c158af6d67a5da69a",
    },
    {
      gameName: "SIMON SAYS",
      details:[
        "Rule: The game shows a sequence of lights and sounds. Each round adds one more step.",
        "Your goal: Repeat the sequence exactly by clicking the colors in order. If you make a mistake, the game ends.",
        "Strict Mode: One mistake resets the game to the first sequence."
      ],
      gameLink: "https://diptiprasadsarangi01.github.io/SimonFunGame/#",
      gameImgName: "https://img.artpal.com/51963/34-15-5-6-14-31-52m.jpg",
    },
    {
      gameName: "Tetris",
      details:["Rule: Move and rotate falling blocks to fit them together. Complete a full horizontal line to clear it and earn points. The game speeds up as you progress. The game ends when the blocks stack to the top of the screen!",
      "Your Goal: Clear as many lines as possible before the game ends!"],
      gameLink: "https://diptiprasadsarangi01.github.io/Tertis/",
      gameImgName: tertis,
    },
    {
      gameName: "Connect 4",
      details:["Rule: Take turns dropping discs into columns. Discs stack from the bottom up. Create a line of four discs horizontally, vertically, or diagonally to win. The game ends when a player connects four or the grid is full!",
      "Your Goal: Be the first to connect four of your discs in a row!"],
      gameLink: "https://diptiprasadsarangi01.github.io/FourInARow/",
      gameImgName: "https://clipart-library.com/2023/connect-4.jpg",
    }


  ];

  return (
    <section id="games" className=" games-section bg-black min-h-[70%] px-6 lg:pt-16 pt-5 2xl:pt-20 text-white">
      <motion.h2
        ref={headingRef}
        className=" text-3xl md:text-4xl lg:text-5xl  2xl:text-7xl  text-center text-shadow-gray-50 capitalize tracking-widest"
        initial={{ opacity: 0, x: -100 }}
        animate={headingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Games
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-9 sm:gap-5 md:gap-9 mb-10 my-5 sm:my-8 md:my-18  ">
        {games.map((game, index) => {
          const cardRef = useRef(null)
          const cardInView = useInView(cardRef, { margin: "-20px" })

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Game game={game} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Games