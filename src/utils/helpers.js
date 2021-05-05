export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  console.log(time);
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    votesOne: optionOne.votes,
    votesTwo: optionTwo.votes,
    avatar: avatarURL,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVoteLength: optionOne.votes.length,
    optionTwoVotelength: optionTwo.votes.length,
    optionTwoHasVote: optionTwo.votes.includes(authedUser),
    optionOneHasVote: optionOne.votes.includes(authedUser),
    //   parent: !parentTweet
    //     ? null
    //     : {
    //         author: parentTweet.author,
    //         id: parentTweet.id,
    //       },
    // };
  };
}
