import React from 'react'
import { useState, useEffect } from 'react'
import mainService from '../../services/mainService'



const Game = ({ user }) => {

    
    const [scores, setScores] = useState([])
    const [score, setScore] = useState(null)
    const [gameOnGoing, setGameOnGoing] = useState(false)
   

    const hideWhenNoScore = { display: !score ? 'none' : '' }
    const showWhenScore = { display: !score ? '' : 'none' }

    useEffect(() => {
        const fetchData = async () => {
            await mainService
            .getAllScores()
            .then(initalScores => {
                setScores(initalScores.sort((scoreA, scoreB) => {return parseInt(scoreB.score) - parseInt(scoreA.score)}))
            })


        }


        fetchData()

    }, [])

    useEffect(() => {}, [score])

    



    const startGame = () => {

        //prevent multiple games at the same moment
        if (gameOnGoing) {
            return
        }
        
        setGameOnGoing(true)
        setScore(null)
        
        var canvas = document.getElementById("canvas")
        var context = canvas.getContext("2d")
        var x = 250
        var y = 300
        var r_x = 600
        //var r_y = 350
        var r_y = Math.random() * 350
        var t = Date.now()
        var speed = 150
        var rectSpeed = 100
        let count = 0
    
        document.onkeydown = () => {
            y -= 25
            speed = 1
        }
        document.ontouchstart = () => {
            y -= 25
            speed = 2
        }

        const draw = () => {
            var timePassed = (Date.now() - t) / 1000
            t = Date.now()
            //clearing the canvas
            context.clearRect(0, 0, 600, 400)
            
            //redrawing the bigger rectangle   
            context.beginPath()
            context.rect(x, y, 100, 100)
            context.fillStyle="red"
            context.fill()

            //draw smaller rectangle object
            context.beginPath()
            context.rect(r_x, r_y, 50, 50)
            context.fillStyle="gray"
            context.fill()


            //drawing the count value
            context.font = '25px Arial'
            context.fillStyle = 'white'
            context.fillText("Count: " + count, 20, 30)


            //creating downwards movement
            if(y <= 300) {
                speed += 250 * timePassed
                y += speed*timePassed;
            }

            //roof
            if(y < 0) {
                y = 1
            }



            //Drawing smaller rectangle movement
            r_x -= rectSpeed*timePassed

            if(r_x < 0) {
                r_x = 600
                r_y = Math.random() * 350
                if(rectSpeed < 600) {
                    rectSpeed = rectSpeed*1.1
                    speed = speed*1.1
                }

                //add score
                count += 1
            }

            //end the game  
            if((r_x >= 200 && r_x <= 350) && (r_y+50 >= y && r_y <= y+100) ) {
                setScore(count)
                setGameOnGoing(false)
                return
            }


            window.requestAnimationFrame(draw)
        }

        draw()

    }


    const saveScore = (event) => {
        event.preventDefault()

        const scoreObject = {
            score: score
        }


        mainService
            .createScore(scoreObject)
            .then(returnedScore => {
                const returnedScoreWithUsername = {
                    score: returnedScore.score,
                    user: {
                        username: user.username
                    },
                    id: returnedScore.id
                }
                setScores(scores.concat(returnedScoreWithUsername).sort((scoreA, scoreB) => {return parseInt(scoreB.score) - parseInt(scoreA.score)}))
            })
            .catch((error) => {
                alert("You have to be logged in to save score.")
            })
    }



    


    return (

        <div id='game' className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">/ Game</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        The game is made with vanilla JavaScript by me. The idea is to dodge gray squares coming from the right with a bigger red square. <br/> Controls on keyboards: press any key to move. <br/> Controls on touchscreens: tap to move.
                    </p>
                    <canvas id='canvas' width="600" height="400" className='bg-black w-full'>
                        Your browser does not support the HTML5 canvas tag.
                    </canvas>
                    <div className='grid grid-rows-1 grid-flow-col gap-4'>
                        <button onClick={startGame} className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-2 rounded">Start game</button>

                        <div className='mt-4 text-center row-start-1 row-end-4' style={hideWhenNoScore}>

                            <h3>Game over!</h3>

                            <p className='font-bold text-sm '>Your score: {score}</p>

                        </div>
                        <button style={hideWhenNoScore} onClick={saveScore} className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-2 rounded">Save the score</button>
                        
                    </div>
                    

                    
                </div>

                <div className="max-w-2xl">
                    <h2 className="text-lg leading-8 ml-8 text-gray-600 lg:mt-24">Leaderboard</h2>
                    <ul role="list" className="divide-y divide-gray-100 overflow-auto max-h-[500px]">
                        {scores.map((score) => (
                          <li key={score.id} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Player: {score.user.username}</p>
                              </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                              <p className="text-sm leading-6 text-gray-900">Score: {score.score}</p>
                            </div>
                          </li>
                        ))}
                    </ul>
                    
                </div>

             </div>
        </div>
    )
}

export default Game