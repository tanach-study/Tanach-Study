import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <h1 className="center">About Us</h1>

        <div className="divider"></div>

        <h3 className="left-align">Our Mission</h3>
        <div className="row valign-wrapper hide-on-small-only">
          <div className="col l3 m4 s12 valign">
            <img src="/assets/images/mission.jpg" alt="mission compass direction" className="responsive-img"/>
          </div>
          <div className="col l9 m8 s12 valign">
            <p>Our mission is to create a platform for all serious students to easily study the entire Tanach (Torah, Nevi’im and Ketuvim) in a comprehensible fashion.</p>
            <p>We seek to generate an experience that allows our members to become intimately familiar with the text, framework, and storyline of the Tanach.</p>
            <p>Our emergent objectives are to increase knowledge of our ancestral Jewish history, to strengthen our sense of awe and love of God, and reinforce our personal and national Jewish identity.</p>
          </div>
        </div>
        <div className="row hide-on-med-and-up">
          <div className="col l3 m4 s12">
            <img src="/assets/images/mission.jpg" alt="mission compass direction" className="responsive-img"/>
          </div>
          <div className="col l9 m8 s12">
            <p>Our mission is to create a platform for all serious students to easily study the entire Tanach (Torah, Nevi’im and Ketuvim) in a comprehensible fashion.</p>
            <p>We seek to generate an experience that allows our members to become intimately familiar with the text, framework, and storyline of the Tanach.</p>
            <p>Our emergent objectives are to increase knowledge of our ancestral Jewish history, to strengthen our sense of awe and love of God, and reinforce our personal and national Jewish identity.</p>
          </div>
        </div>

        <div className="divider"></div>

        <h3 className="left-align">Core practices of the Tanach Study Experience</h3>
        <div className="">
            <div className="row hide-on-med-and-up">
              <div className="col s12">
                <img src="/assets/images/practices.jpg" alt="practices calendar" className="responsive-img"/>
              </div>
            </div>
          <p>The Tanach Study experience will consist of three components - a daily, weekly, and monthly - each with different purposes:</p>
          <div className="row valign-wrapper hide-on-small-only">
            <div className="col l9 m8 valign">
              <h5 className="left-align"><b>Daily</b></h5>
              <p>The daily component will introduce the members to Hebrew Masoretic text, an English translation, and peshat explanation by a qualified educator in a recording approximately 20 minutes in length.</p>
              <h5 className="left-align"><b>Weekly</b></h5>
              <p>The weekly component will allow for a further development of the ideas studied that week by offering a one hour class, which will be recorded and posted online.</p>
              <h5 className="left-align"><b>Monthly</b></h5>
              <p>The monthly component will allow for further development of the ideas and themes studied that month, through an opportunity to meet and learn from a high-level Tanach scholar, which will also be recorded and posted online.</p>
            </div>
            <div className="col l3 m4 valign">
              <img src="/assets/images/practices.jpg" alt="practices calendar" className="responsive-img"/>
            </div>
          </div>
          <div className="row hide-on-med-and-up">
            <div className="col s12">
              <h5 className="left-align"><b>Daily</b></h5>
              <p>The daily component will introduce the members to Hebrew Masoretic text, an English translation, and peshat explanation by a qualified educator in a recording approximately 20 minutes in length.</p>
              <h5 className="left-align"><b>Weekly</b></h5>
              <p>The weekly component will allow for a further development of the ideas studied that week by offering a one hour class, which will be recorded and posted online.</p>
              <h5 className="left-align"><b>Monthly</b></h5>
              <p>The monthly component will allow for further development of the ideas and themes studied that month, through an opportunity to meet and learn from a high-level Tanach scholar, which will also be recorded and posted online.</p>
            </div>
          </div>
          <div className="section no-pad-top">
            <i>By peshat we mean the clarification of what happened then with a focus on the past, while always being bound by the text itself. If the text is poetic we read it with the acuteness of a poem or song.</i>
            <i>We seek to study the grammar and philological meaning of the words, context of each pasuk, and structure of every paragraph.</i>
          </div>
        </div>

        <div className="divider"></div>

        <h3 className="left-align">Our Humble Beginnings</h3>
        <div className="row valign-wrapper hide-on-small-only">
          <div className="col l3 m4">
            <img src="/assets/images/beginning.jpg" alt="beginning start button" className="responsive-img"/>
          </div>
          <div className="col l9 m8">
            <p>It became apparent that our most important work to our nation had started to become neglected on some level. We all knew the Tanach was the backbone to our identity, but no one knew how to increase its study in a serious and sanctified manner.</p>
            <p>One morning in the Sephardic Rabbinical College, Rabbi Albert Setton announced that he took a new position at Kol Israel and wanted to teach over Sefer Yeshaya.</p>
            <p>Jesse quickly interjected, “What do you think of recording those perakim and using them to create an online platform to study all of Tanach?” With his affirmation, Jesse turned to Ovadia and said “We’ll get your dad to teach Yirmiyahu. Can you teach Yehezkel? And Josh, you’ll do Tere Asar?” Within 60 seconds there were commitments to teaching all of Nevi’im Aharonim, and with the hardest sefarim accounted for, Jesse knew that with a little effort he could help create a platform for a textual study of the entire Tanach. He set his mind to completing this mission, and ran from rabbi to rabbi and from educator to developer pitching the concept. Nearly everyone he approached identified with the idea and enthusiastically dedicated their time to make it a reality. With the help of a few dedicated young men and women a website was launched, texts were written and summarized, recordings were recorded, and the program was publicized. The program launched in October 2015 and grew to 1000 subscribers within a few weeks.</p>
            <p>Today we look back in amazement how a few inconsequential words and a strong will, turned into a long overdue Tanach study platform for the world to utilize.</p>
          </div>
        </div>

        <div className="row hide-on-med-and-up">
          <div className="col s12">
            <img src="/assets/images/beginning.jpg" alt="beginning start button" className="responsive-img"/>
          </div>
          <div className="col s12">
            <p>It became apparent that our most important work to our nation had started to become neglected on some level. We all knew the Tanach was the backbone to our identity, but no one knew how to increase its study in a serious and sanctified manner.</p>
            <p>One morning in the Sephardic Rabbinical College, Rabbi Albert Setton announced that he took a new position at Kol Israel and wanted to teach over Sefer Yeshaya.</p>
            <p>Jesse quickly interjected, “What do you think of recording those perakim and using them to create an online platform to study all of Tanach?” With his affirmation, Jesse turned to Ovadia and said “We’ll get your dad to teach Yirmiyahu. Can you teach Yehezkel? And Josh, you’ll do Tere Asar?” Within 60 seconds there were commitments to teaching all of Nevi’im Aharonim, and with the hardest sefarim accounted for, Jesse knew that with a little effort he could help create a platform for a textual study of the entire Tanach. He set his mind to completing this mission, and ran from rabbi to rabbi and from educator to developer pitching the concept. Nearly everyone he approached identified with the idea and enthusiastically dedicated their time to make it a reality. With the help of a few dedicated young men and women a website was launched, texts were written and summarized, recordings were recorded, and the program was publicized. The program launched in October 2015 and grew to 1000 subscribers within a few weeks.</p>
            <p>Today we look back in amazement how a few inconsequential words and a strong will, turned into a long overdue Tanach study platform for the world to utilize.</p>
          </div>
        </div>

        <div className="section"></div>

      </div>
    );
  }
}

export default About;
