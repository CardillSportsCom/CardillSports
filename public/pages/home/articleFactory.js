angular.module('cardillApp').factory('articles', [function(){
    var o = {
        articles: [
             {title: 'Parity, What Nba Parity?', author: 'Bman', authorImg: 'images/bman.png', imgPath: 'images/parity-what-nba-parity.jpg', link: '#/posts/parity-what-nba-parity',
                description: 'Good for Durant, because realistically if he were to chase a championship, GSW was the best place to go to. They already had ridiculous shooters like Curry and Thompson, and so adding  Durant to the mix just made them an NBA 2k team...', },
             {title: 'Meet Jacob Poeltl', author: 'Prageen Siva', authorImg: 'images/prageen.png', imgPath: 'images/meet-jakob-poeltl.png', link: '#/posts/meet-jakob-poeltl',
                description: 'The Toronto Raptors, who held the 9th pick in the 2016 NBA draft, are coming off a historic season. Not only did the Raptors reach the Eastern Conference Finals for the first time in the franchise’s 21 years, but they also achieved a team record of 56 wins. However, with great achievements, there are greater expectations; the Raptors are now pushing for a....', },
             {title: 'Missing Stroshow', author: 'Braveen Ravi', authorImg: 'images/braveen.jpg', imgPath: 'images/missing-stroshow.jpg', link: '#/posts/missing-stroshow',
                description: 'Near the end of the 2015 MLB season, Toronto Blue Jays received a blessing in disguise. With Marcus Stroman\'s miraculous return back into the Blue Jays starting rotation just months after tearing his ACL, he made a sudden impact for the Toronto Blue Jays\' push to the post season . With his sudden return, he electrified the Jays rotation with countless strikeouts and with his charisma on and off the field...', },
             {title: 'Long Live the King', author: 'Prageen Siva', authorImg: 'images/prageen.png', imgPath: 'images/long-live-the-king.jpg', link: '#/posts/long-live-the-king',
                description: 'In a series full of blowouts, game 7 between the Warriors and Cavaliers was an instant classic. The Warriors started off strong with Draymond doing the best he could to make up for his Game 5 suspension by going on absolute fire in the first half (5-5 3pm, 22 points). It was a classic perimeter vs. paint gameas Cleveland was just 1-14 behind the arc with 28 of their 42 points coming within the inside...', },
            {title: 'Finals Preview', author: 'Jvalant Dave', authorImg: 'images/jv.png', imgPath: 'images/finals-preview.png', link: '#/posts/finals-preview',
                description: 'This is it. This is what it’s come down to. Why did we ever think it would end up differently? OKC Raptors, Spurs Cavs, Warriors Raptors, OKC Cavs, etc. All of that is moot as the prediction for the finals since the beginning of the season was that the Warriors and Cavs would have a rematch for the title of best basketball team in the world.  ...', },
            {title: 'Not So Fast', author: 'Zen Potter', authorImg: 'images/sujee.png', imgPath: 'images/not-so-fast.jpg', link: '#/posts/not-so-fast',
                description: 'As the NBA keeps moving towards a world that allows smaller players to flourish with better spacing and ball movement, it seems like the end is near for the prototypical bigs. With analytical progression come numerous ideas as to exactly how to play basketball. While the three point line is the epitome of efficiency, the mid range, which was once a lethal shooting spot for the games brightest, has become a mockery of the inefficient player. We have the Derozans of the world that the stats ...', },
            {title: 'Draft Retrospective', author: 'Vithushan Nama', authorImg: 'images/vithushan.png', imgPath: 'images/draft-retro.png', link: '#/posts/draft-retro', 
                description: 'Now that the fantasy basketball season is over and the championship is in our rearview, lets take a moment to reflect on the night that started it all. The fantasy basketball draft happened well before the beginning of the regular NBA season. Our league discussed some of the people that were passed over in the first round of our draft, as well some major disappointments. There were a bunch of players that sat out a substantial portion of the season due to injury, these players wouldn\'t have been...'},
            {title: 'Round 2 Game 7', author: 'Vithushan Nama', authorImg: 'images/vithushan.png', imgPath: 'images/rd2-gm7.png', link: '#/posts/rd2-gm7',
                description: 'I’m not much of a superstitious guy. I don’t believe in any 416-curse, or that you as a fan can directly affect the outcome of the game with your actions. You deciding to watch the game from your basement has as much impact on the game as the decision to take a nap or post a Facebook status. I’m more of a numbers guy. I believe in analyzing the cold hard facts. With that let’s take a look at the recent events leading up to tonight’s extremely important game 7...'},
            {title: 'Power of Veto', author: 'Vithushan Nama', authorImg: 'images/vithushan.png', imgPath: 'images/power-of-veto.jpg', link: '#/posts/power-of-veto', 
                description: 'When I say the word trade, I think of ancient history when people didn’t have a monetary system. Before people started using currency, they got through life bartering or trading things with each other. Two people would meet and have some kind of negotiation. After some initial back and forth, they would both agree that each had something that the other wanted and to do an exchange in order to better the lives of both parties. And that’s it right? End of story? Well, not in our league...'},
            {title: 'The Day I Said What If', author: 'Zen Potter', authorImg: 'images/sujee.png', imgPath: 'images/the-day-i-said-what-if.png', link: '#/posts/the-day-i-said-what-if',
                description: 'Think about it. What if Carter stayed? What if McGrady stayed? Life as a Raptors fan would be a whole lot different. This ordinary run, that an ordinary playoff team such as the 2015-2016 Raptors are having would not have felt the same way as watching Rocky running through those Philli steps with a full blast of 1970’s techno. Boy that was a heart wrenching scene, but I digress. So what if Carter and McGrady stayed? Would the Raptors have won a championship with those two?...'}
        ]
    };
    return o;
}]);