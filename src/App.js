import React, { useState } from 'react';
import './style.css';
import POLLS_CONFIGURATIONS from './polls-configuration';

export default function App() {
  const [votingValue, setVotingValue] = useState(POLLS_CONFIGURATIONS);

  const handleVote = (val) => {
    setVotingValue((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang?.name === val ? { ...lang, vote: lang.vote + 1 } : lang
      )
    );
  };

  const calculatePercentage = (vote) => {
    const percentage = vote * 10 || 0;
    return percentage.toFixed(1);
  };

  return (
    <div className="container">
      <div className="title">What's your favorite programming language?</div>
      {votingValue.map((itm) => {
        const { name = '', vote = 0 } = itm || {};

        return (
          <div className="each_poll" key={name}>
            <button onClick={() => handleVote(name)} disabled={vote >= 10}>
              Vote
            </button>
            <div className="content">
              <div className="label">{name?.toUpperCase()}</div>
              <div className="value_section">
                <div className="percentage">{`${calculatePercentage(
                  vote
                )} %`}</div>
                <div className="votes">{`(${vote} votes)`}</div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={calculatePercentage(vote)}
            />
          </div>
        );
      })}
    </div>
  );
}
