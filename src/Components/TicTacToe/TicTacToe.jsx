import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [data, setData] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState("");

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const toggle = (num) => {
        if (lock || data[num] !== "") {
            return;
        }

        const currentPlayer = count % 2 === 0 ? "X" : "O";

        const newData = [...data];
        newData[num] = currentPlayer;

        setData(newData);
        setCount(count + 1);

        // Check winner
        const hasWinner = winningPatterns.some(([a, b, c]) => {
            return (
                newData[a] !== "" &&
                newData[a] === newData[b] &&
                newData[b] === newData[c]
            );
        });

        if (hasWinner) {
            setWinner(currentPlayer);
            setLock(true);
        }
    };

    const reset = () => {
        setData(Array(9).fill(""));
        setCount(0);
        setLock(false);
        setWinner("");
    };

    return (
        <div className="container">

            <h1 className="title">
                {winner ? (
                    <>
                        Congratulations:{" "}
                        <img
                            src={winner === "X" ? cross_icon : circle_icon}
                            alt={winner}
                        />{" "}
                        wins
                    </>
                ) : (
                    <>
                        Tic Tac Toe Game In <span>React</span>
                    </>
                )}
            </h1>

            <div className="board">
                <div className="row1">
                    {[0, 1, 2].map((num) => (
                        <div
                            key={num}
                            className="boxes"
                            onClick={() => toggle(num)}
                        >
                            {data[num] && (
                                <img
                                    src={
                                        data[num] === "X"
                                            ? cross_icon
                                            : circle_icon
                                    }
                                    alt={data[num]}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="row2">
                    {[3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className="boxes"
                            onClick={() => toggle(num)}
                        >
                            {data[num] && (
                                <img
                                    src={
                                        data[num] === "X"
                                            ? cross_icon
                                            : circle_icon
                                    }
                                    alt={data[num]}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="row3">
                    {[6, 7, 8].map((num) => (
                        <div
                            key={num}
                            className="boxes"
                            onClick={() => toggle(num)}
                        >
                            {data[num] && (
                                <img
                                    src={
                                        data[num] === "X"
                                            ? cross_icon
                                            : circle_icon
                                    }
                                    alt={data[num]}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <button className="reset" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;