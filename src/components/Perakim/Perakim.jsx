import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

function formatDir(passed) {
  let str;
  if (passed) str = passed.toLowerCase();
  else return undefined;
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, i) => {
    if (+match === 0) return '';
    return match.toUpperCase();
  });
}

class Perakim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sefer: this.props.params.sefer,
      perek: this.props.params.perek,
      prettySefer: this.props.params.sefer.charAt(0).toUpperCase() + this.props.params.sefer.slice(1),
      activePerek: {},
      show: 'heb',
    };
  }

  updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    init(jQuery);
    fetch(`/api/perakim/${this.state.sefer}/${this.state.perek}`)
    .then(r => r.json())
    .then(data => this.updateState('activePerek', data))
    .catch(err => console.log(err));
  }

  render() {
    const partName = encodeURIComponent(formatDir(this.state.activePerek.part_name));
    const seferName = encodeURIComponent(formatDir(this.state.sefer));
    const fileName = `${this.state.sefer.replace(/ /g, '-')}-${this.state.perek}.mp3`;
    const teamimName = `${this.state.sefer.replace(/ /g, '-')}-${this.state.perek}-teamim.mp3`;
    const act = this.state.activePerek;
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2>Sefer {this.state.prettySefer} Perek {this.state.perek}</h2>
            <div className="col l6 m12 s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Class given by {`${act.teacher_title} ${act.teacher_fname} ${act.teacher_mname || ''}${act.teacher_lname}`}<i className="material-icons right">more_vert</i></span>
                  <br/>
                  <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/${fileName}`} controls />
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{`${act.teacher_title} ${act.teacher_fname} ${act.teacher_mname || ''}${act.teacher_lname}`}<i className="material-icons right">close</i></span>
                  <p>{act.teacher_bio || 'This teacher doesn\'t have a bio'}</p>
                  <a href="#">See {act.teacher_title} {act.teacher_lname}'s bio page</a>
                </div>
              </div>
            </div>
            <div className="col l6 m12 s12">
              <div className="card">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Perek read by {`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className="material-icons right">more_vert</i></span>
                  <br/>
                  <audio src={`http://cdn.tanachstudy.com/archives/${partName}/${seferName}/recordings/${teamimName}`} controls />
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{`${act.reader_title} ${act.reader_fname} ${act.reader_mname || ''}${act.reader_lname}`}<i className="material-icons right">close</i></span>
                  <p>{act.reader_bio || 'This teacher doesn\'t have a bio'}</p>
                  <a href="#">See {act.reader_title} {act.reader_lname}'s bio page</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider hide-on-med-and-down"></div>
          <br className="hide-on-med-and-down" />
          <div className="row">
            <div className="center">
              <a className="waves-effect waves-light btn col l2 m3 s12 offset-l2" onClick={() => this.updateState('show', 'heb')}>Hebrew</a>
              <a className="waves-effect waves-light btn col l2 m4 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'par')}>Hebrew/English</a>
              <a className="waves-effect waves-light btn col l2 m3 s12 offset-l1 offset-m1" onClick={() => this.updateState('show', 'eng')}>English</a>
            </div>
          </div>
          <div className="row">
            <div className="card">
              {this.showSefer()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  showSefer() {
    if (this.state.show == "heb") {
      return (
        <div id='hebText'>
          <p><b>א. </b>וַיְהִי אַחֲרֵי מוֹת מֹשֶׁה עֶבֶד יְהוָה וַיֹּאמֶר יְהוָה אֶל־יְהוֹשֻׁעַ בִּן־נוּן מְשָׁרֵת מֹשֶׁה לֵאמֹר׃</p>
          <p><b>ב. </b>מֹשֶׁה עַבְדִּי מֵת וְעַתָּה קוּם עֲבֹר אֶת־הַיַּרְדֵּן הַזֶּה אַתָּה וְכָל־הָעָם הַזֶּה אֶל־הָאָרֶץ אֲשֶׁר אָנֹכִי נֹתֵן לָהֶם לִבְנֵי יִשְׂרָאֵל׃</p>
          <p><b>ג. </b>כָּל־מָקוֹם אֲשֶׁר תִּדְרֹךְ כַּף־רַגְלְכֶם בּוֹ לָכֶם נְתַתִּיו כַּאֲשֶׁר דִּבַּרְתִּי אֶל־מֹשֶׁה׃</p>
          <p><b>ד. </b>מֵהַמִּדְבָּר וְהַלְּבָנוֹן הַזֶּה וְעַד־הַנָּהָר הַגָּדוֹל נְהַר־פְּרָת כֹּל אֶרֶץ הַחִתִּים וְעַד־הַיָּם הַגָּדוֹל מְבוֹא הַשָּׁמֶשׁ יִהְיֶה גְּבוּלְכֶם׃</p>
          <p><b>ה. </b>לֹא־יִתְיַצֵּב אִישׁ לְפָנֶיךָ כֹּל יְמֵי חַיֶּיךָ כַּאֲשֶׁר הָיִיתִי עִם־מֹשֶׁה אֶהְיֶה עִמָּךְ לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ׃</p>
          <p><b>ו. </b>חֲזַק וֶאֱמָץ כִּי אַתָּה תַּנְחִיל אֶת־הָעָם הַזֶּה אֶת־הָאָרֶץ אֲשֶׁר־נִשְׁבַּעְתִּי לַאֲבוֹתָם לָתֵת לָהֶם׃</p>
          <p><b>ז. </b>רַק חֲזַק וֶאֱמַץ מְאֹד לִשְׁמֹר לַעֲשׂוֹת כְּכָל־הַתּוֹרָה אֲשֶׁר צִוְּךָ מֹשֶׁה עַבְדִּי אַל־תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול לְמַעַן תַּשְׂכִּיל בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
          <p><b>ח. </b>לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה לְמַעַן תִּשְׁמֹר לַעֲשׂוֹת כְּכָל־הַכָּתוּב בּוֹ כִּי־אָז תַּצְלִיחַ אֶת־דְּרָכֶךָ וְאָז תַּשְׂכִּיל׃</p>
          <p><b>ט. </b>הֲלוֹא צִוִּיתִיךָ חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת כִּי עִמְּךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
          <p><b>י. </b>וַיְצַו יְהוֹשֻׁעַ אֶת־שֹׁטְרֵי הָעָם לֵאמֹר׃</p>
          <p><b>יא. </b>עִבְרוּ בְּקֶרֶב הַמַּחֲנֶה וְצַוּוּ אֶת־הָעָם לֵאמֹר הָכִינוּ לָכֶם צֵידָה כִּי בְּעוֹד שְׁלֹשֶׁת יָמִים אַתֶּם עֹבְרִים אֶת־הַיַּרְדֵּן הַזֶּה לָבוֹא לָרֶשֶׁת אֶת־הָאָרֶץ אֲשֶׁר יְהוָה אֱלֹהֵיכֶם נֹתֵן לָכֶם לְרִשְׁתָּהּ׃</p>
          <p><b>יב. </b>וְלָראוּבֵנִי וְלַגָּדִי וְלַחֲצִי שֵׁבֶט הַמְנַשֶּׁה אָמַר יְהוֹשֻׁעַ לֵאמֹר׃</p>
          <p><b>יג. </b>זָכוֹר אֶת־הַדָּבָר אֲשֶׁר צִוָּה אֶתְכֶם מֹשֶׁה עֶבֶד־יְהוָה לֵאמֹר יְהוָה אֱלֹהֵיכֶם מֵנִיחַ לָכֶם וְנָתַן לָכֶם אֶת־הָאָרֶץ הַזֹּאת׃</p>
          <p><b>יד. </b>נְשֵׁיכֶם טַפְּכֶם וּמִקְנֵיכֶם יֵשְׁבוּ בָּאָרֶץ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה בְּעֵבֶר הַיַּרְדֵּן וְאַתֶּם תַּעַבְרוּ חֲמֻשִׁים לִפְנֵי אֲחֵיכֶם כֹּל גִּבּוֹרֵי הַחַיִל וַעֲזַרְתֶּם אוֹתָם׃</p>
          <p><b>טו. </b>עַד אֲשֶׁר־יָנִיחַ יְהוָה לַאֲחֵיכֶם כָּכֶם וְיָרְשׁוּ גַם־הֵמָּה אֶת־הָאָרֶץ אֲשֶׁר־יְהוָה אֱלֹהֵיכֶם נֹתֵן לָהֶם וְשַׁבְתֶּם לְאֶרֶץ יְרֻשַּׁתְכֶם וִירִשְׁתֶּם אוֹתָהּ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה עֶבֶד יְהוָה בְּעֵבֶר הַיַּרְדֵּן מִזְרַח הַשָּׁמֶשׁ׃</p>
          <p><b>טז. </b>וַיַּעֲנוּ אֶת־יְהוֹשֻׁעַ לֵאמֹר כֹּל אֲשֶׁר־צִוִּיתָנוּ נַעֲשֶׂה וְאֶל־כָּל־אֲשֶׁר תִּשְׁלָחֵנוּ נֵלֵךְ׃</p>
          <p><b>יז. </b>כְּכֹל אֲשֶׁר־שָׁמַעְנוּ אֶל־מֹשֶׁה כֵּן נִשְׁמַע אֵלֶיךָ רַק יִהְיֶה יְהוָה אֱלֹהֶיךָ עִמָּךְ כַּאֲשֶׁר הָיָה עִם־מֹשֶׁה׃</p>
          <p><b>יח. </b>כָּל־אִישׁ אֲשֶׁר־יַמְרֶה אֶת־פִּיךָ וְלֹא־יִשְׁמַע אֶת־דְּבָרֶיךָ לְכֹל אֲשֶׁר־תְּצַוֶּנּוּ יוּמָת רַק חֲזַק וֶאֱמָץ׃</p>
        </div>
      );
    } else if (this.state.show == "par") {
      return (
        <div id='parText'>
          <p><b>א. </b>וַיְהִי אַחֲרֵי מוֹת מֹשֶׁה עֶבֶד יְהוָה וַיֹּאמֶר יְהוָה אֶל־יְהוֹשֻׁעַ בִּן־נוּן מְשָׁרֵת מֹשֶׁה לֵאמֹר׃</p>
          <p><b>1. </b>Now it came to pass after the death of Moses the servant of the LORD, that the LORD spoke unto Joshua the son of Nun, Moses’minister, saying:</p>
          <p><b>ב. </b>מֹשֶׁה עַבְדִּי מֵת וְעַתָּה קוּם עֲבֹר אֶת־הַיַּרְדֵּן הַזֶּה אַתָּה וְכָל־הָעָם הַזֶּה אֶל־הָאָרֶץ אֲשֶׁר אָנֹכִי נֹתֵן לָהֶם לִבְנֵי יִשְׂרָאֵל׃</p>
          <p><b>2. </b>’Moses My servant is dead; now therefore arise, go over this Jordan, thou, and all this people, unto the land which I do give to them, even to the children of Israel.</p>
          <p><b>ג. </b>כָּל־מָקוֹם אֲשֶׁר תִּדְרֹךְ כַּף־רַגְלְכֶם בּוֹ לָכֶם נְתַתִּיו כַּאֲשֶׁר דִּבַּרְתִּי אֶל־מֹשֶׁה׃</p>
          <p><b>3. </b>Every place that the sole of your foot shall tread upon, to you have I given it, as I spoke unto Moses.</p>
          <p><b>ד. </b>מֵהַמִּדְבָּר וְהַלְּבָנוֹן הַזֶּה וְעַד־הַנָּהָר הַגָּדוֹל נְהַר־פְּרָת כֹּל אֶרֶץ הַחִתִּים וְעַד־הַיָּם הַגָּדוֹל מְבוֹא הַשָּׁמֶשׁ יִהְיֶה גְּבוּלְכֶם׃</p>
          <p><b>4. </b>From the wilderness, and this Lebanon, even unto the great river, the river Euphrates, all the land of the Hittites, and unto the Great Sea toward the going down of the sun, shall be your border.</p>
          <p><b>ה. </b>לֹא־יִתְיַצֵּב אִישׁ לְפָנֶיךָ כֹּל יְמֵי חַיֶּיךָ כַּאֲשֶׁר הָיִיתִי עִם־מֹשֶׁה אֶהְיֶה עִמָּךְ לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ׃</p>
          <p><b>5. </b>There shall not any man be able to stand before thee all the days of thy life; as I was with Moses, so I will be with thee; I will not fail thee, nor forsake thee.</p>
          <p><b>ו. </b>חֲזַק וֶאֱמָץ כִּי אַתָּה תַּנְחִיל אֶת־הָעָם הַזֶּה אֶת־הָאָרֶץ אֲשֶׁר־נִשְׁבַּעְתִּי לַאֲבוֹתָם לָתֵת לָהֶם׃</p>
          <p><b>6. </b>Be strong and of good courage; for thou shalt cause this people to inherit the land which I swore unto their fathers to give them.</p>
          <p><b>ז. </b>רַק חֲזַק וֶאֱמַץ מְאֹד לִשְׁמֹר לַעֲשׂוֹת כְּכָל־הַתּוֹרָה אֲשֶׁר צִוְּךָ מֹשֶׁה עַבְדִּי אַל־תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול לְמַעַן תַּשְׂכִּיל בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
          <p><b>7. </b>Only be strong and very courageous, to observe to do according to all the law, which Moses My servant commanded thee; turn not from it to the right hand or to the left, that thou mayest have good success whithersoever thou goest.</p>
          <p><b>ח. </b>לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה לְמַעַן תִּשְׁמֹר לַעֲשׂוֹת כְּכָל־הַכָּתוּב בּוֹ כִּי־אָז תַּצְלִיחַ אֶת־דְּרָכֶךָ וְאָז תַּשְׂכִּיל׃</p>
          <p><b>8. </b>This book of the law shall not depart out of thy mouth, but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein; for then thou shalt make thy ways prosperous, and then thou shalt have good success.</p>
          <p><b>ט. </b>הֲלוֹא צִוִּיתִיךָ חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת כִּי עִמְּךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
          <p><b>9. </b>Have not I commanded thee? Be strong and of good courage; be not affrighted, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.’</p>
          <p><b>י. </b>וַיְצַו יְהוֹשֻׁעַ אֶת־שֹׁטְרֵי הָעָם לֵאמֹר׃</p>
          <p><b>10. </b>Then Joshua commanded the officers of the people, saying:</p>
          <p><b>יא. </b>עִבְרוּ בְּקֶרֶב הַמַּחֲנֶה וְצַוּוּ אֶת־הָעָם לֵאמֹר הָכִינוּ לָכֶם צֵידָה כִּי בְּעוֹד שְׁלֹשֶׁת יָמִים אַתֶּם עֹבְרִים אֶת־הַיַּרְדֵּן הַזֶּה לָבוֹא לָרֶשֶׁת אֶת־הָאָרֶץ אֲשֶׁר יְהוָה אֱלֹהֵיכֶם נֹתֵן לָכֶם לְרִשְׁתָּהּ׃</p>
          <p><b>11. </b>’Pass through the midst of the camp, and command the people, saying: Prepare you victuals; for within three days ye are to pass over this Jordan, to go in to possess the land, which the LORD your God giveth you to possess it.’</p>
          <p><b>יב. </b>וְלָראוּבֵנִי וְלַגָּדִי וְלַחֲצִי שֵׁבֶט הַמְנַשֶּׁה אָמַר יְהוֹשֻׁעַ לֵאמֹר׃</p>
          <p><b>12. </b>And to the Reubenites, and to the Gadites, and to the half-tribe of Manasseh, spoke Joshua, saying:</p>
          <p><b>יג. </b>זָכוֹר אֶת־הַדָּבָר אֲשֶׁר צִוָּה אֶתְכֶם מֹשֶׁה עֶבֶד־יְהוָה לֵאמֹר יְהוָה אֱלֹהֵיכֶם מֵנִיחַ לָכֶם וְנָתַן לָכֶם אֶת־הָאָרֶץ הַזֹּאת׃</p>
          <p><b>13. </b>’Remember the word which Moses the servant of the LORD commanded, you, saying: The LORD your God giveth you rest, and will give you this land.</p>
          <p><b>יד. </b>נְשֵׁיכֶם טַפְּכֶם וּמִקְנֵיכֶם יֵשְׁבוּ בָּאָרֶץ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה בְּעֵבֶר הַיַּרְדֵּן וְאַתֶּם תַּעַבְרוּ חֲמֻשִׁים לִפְנֵי אֲחֵיכֶם כֹּל גִּבּוֹרֵי הַחַיִל וַעֲזַרְתֶּם אוֹתָם׃</p>
          <p><b>14. </b>Your wives, your little ones, and your cattle, shall abide in the land which Moses gave you beyond the Jordan; but ye shall pass over before your brethren armed, all the mighty men of valour, and shall help them;</p>
          <p><b>טו. </b>עַד אֲשֶׁר־יָנִיחַ יְהוָה לַאֲחֵיכֶם כָּכֶם וְיָרְשׁוּ גַם־הֵמָּה אֶת־הָאָרֶץ אֲשֶׁר־יְהוָה אֱלֹהֵיכֶם נֹתֵן לָהֶם וְשַׁבְתֶּם לְאֶרֶץ יְרֻשַּׁתְכֶם וִירִשְׁתֶּם אוֹתָהּ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה עֶבֶד יְהוָה בְּעֵבֶר הַיַּרְדֵּן מִזְרַח הַשָּׁמֶשׁ׃</p>
          <p><b>15. </b>until the LORD have given your brethren rest, as unto you, and they also have possessed the land which the LORD your God giveth them; then ye shall return unto the land of your possession, and possess it, which Moses the servant of the LORD gave you beyond the Jordan toward the sunrising.’</p>
          <p><b>טז. </b>וַיַּעֲנוּ אֶת־יְהוֹשֻׁעַ לֵאמֹר כֹּל אֲשֶׁר־צִוִּיתָנוּ נַעֲשֶׂה וְאֶל־כָּל־אֲשֶׁר תִּשְׁלָחֵנוּ נֵלֵךְ׃</p>
          <p><b>16. </b>And they answered Joshua, saying: ‘All that thou hast commanded us we will do, and whithersoever thou sendest us we will go.</p>
          <p><b>יז. </b>כְּכֹל אֲשֶׁר־שָׁמַעְנוּ אֶל־מֹשֶׁה כֵּן נִשְׁמַע אֵלֶיךָ רַק יִהְיֶה יְהוָה אֱלֹהֶיךָ עִמָּךְ כַּאֲשֶׁר הָיָה עִם־מֹשֶׁה׃</p>
          <p><b>17. </b>According as we hearkened unto Moses in all things, so will we hearken unto thee; only the LORD thy God be with thee, as He was with Moses.</p>
          <p><b>יח. </b>כָּל־אִישׁ אֲשֶׁר־יַמְרֶה אֶת־פִּיךָ וְלֹא־יִשְׁמַע אֶת־דְּבָרֶיךָ לְכֹל אֲשֶׁר־תְּצַוֶּנּוּ יוּמָת רַק חֲזַק וֶאֱמָץ׃</p>
          <p><b>18. </b>Whosoever he be that shall rebel against thy commandment, and shall not hearken unto thy words in all that thou commandest him, he shall be put to death; only be strong and of good courage.’</p>
        </div>
      );
    } else if (this.state.show == "eng") {
      return (
        <div id='engText'>
          <p><b>1. </b>Now it came to pass after the death of Moses the servant of the LORD, that the LORD spoke unto Joshua the son of Nun, Moses’minister, saying:</p>
          <p><b>2. </b>’Moses My servant is dead; now therefore arise, go over this Jordan, thou, and all this people, unto the land which I do give to them, even to the children of Israel.</p>
          <p><b>3. </b>Every place that the sole of your foot shall tread upon, to you have I given it, as I spoke unto Moses.</p>
          <p><b>4. </b>From the wilderness, and this Lebanon, even unto the great river, the river Euphrates, all the land of the Hittites, and unto the Great Sea toward the going down of the sun, shall be your border.</p>
          <p><b>5. </b>There shall not any man be able to stand before thee all the days of thy life; as I was with Moses, so I will be with thee; I will not fail thee, nor forsake thee.</p>
          <p><b>6. </b>Be strong and of good courage; for thou shalt cause this people to inherit the land which I swore unto their fathers to give them.</p>
          <p><b>7. </b>Only be strong and very courageous, to observe to do according to all the law, which Moses My servant commanded thee; turn not from it to the right hand or to the left, that thou mayest have good success whithersoever thou goest.</p>
          <p><b>8. </b>This book of the law shall not depart out of thy mouth, but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein; for then thou shalt make thy ways prosperous, and then thou shalt have good success.</p>
          <p><b>9. </b>Have not I commanded thee? Be strong and of good courage; be not affrighted, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.’</p>
          <p><b>10. </b>Then Joshua commanded the officers of the people, saying:</p>
          <p><b>11. </b>’Pass through the midst of the camp, and command the people, saying: Prepare you victuals; for within three days ye are to pass over this Jordan, to go in to possess the land, which the LORD your God giveth you to possess it.’</p>
          <p><b>12. </b>And to the Reubenites, and to the Gadites, and to the half-tribe of Manasseh, spoke Joshua, saying:</p>
          <p><b>13. </b>’Remember the word which Moses the servant of the LORD commanded, you, saying: The LORD your God giveth you rest, and will give you this land.</p>
          <p><b>14. </b>Your wives, your little ones, and your cattle, shall abide in the land which Moses gave you beyond the Jordan; but ye shall pass over before your brethren armed, all the mighty men of valour, and shall help them;</p>
          <p><b>15. </b>until the LORD have given your brethren rest, as unto you, and they also have possessed the land which the LORD your God giveth them; then ye shall return unto the land of your possession, and possess it, which Moses the servant of the LORD gave you beyond the Jordan toward the sunrising.’</p>
          <p><b>16. </b>And they answered Joshua, saying: ‘All that thou hast commanded us we will do, and whithersoever thou sendest us we will go.</p>
          <p><b>17. </b>According as we hearkened unto Moses in all things, so will we hearken unto thee; only the LORD thy God be with thee, as He was with Moses.</p>
          <p><b>18. </b>Whosoever he be that shall rebel against thy commandment, and shall not hearken unto thy words in all that thou commandest him, he shall be put to death; only be strong and of good courage.’</p>
        </div>
      );
    }
  }
}

// require('../../../public/tanach/')
            // <div dangerouslySetInnerHTML={require(`../../../public/tanach/${seferName}/full/${seferName}-${this.state.perek}-full.txt`)}></div>

export default Perakim;

// function showSefer() {
//   return (
//     <div className="card">
//       <div className='text' id='hebText'>
//         <p><b>א. </b>וַיְהִי אַחֲרֵי מוֹת מֹשֶׁה עֶבֶד יְהוָה וַיֹּאמֶר יְהוָה אֶל־יְהוֹשֻׁעַ בִּן־נוּן מְשָׁרֵת מֹשֶׁה לֵאמֹר׃</p>
//         <p><b>ב. </b>מֹשֶׁה עַבְדִּי מֵת וְעַתָּה קוּם עֲבֹר אֶת־הַיַּרְדֵּן הַזֶּה אַתָּה וְכָל־הָעָם הַזֶּה אֶל־הָאָרֶץ אֲשֶׁר אָנֹכִי נֹתֵן לָהֶם לִבְנֵי יִשְׂרָאֵל׃</p>
//         <p><b>ג. </b>כָּל־מָקוֹם אֲשֶׁר תִּדְרֹךְ כַּף־רַגְלְכֶם בּוֹ לָכֶם נְתַתִּיו כַּאֲשֶׁר דִּבַּרְתִּי אֶל־מֹשֶׁה׃</p>
//         <p><b>ד. </b>מֵהַמִּדְבָּר וְהַלְּבָנוֹן הַזֶּה וְעַד־הַנָּהָר הַגָּדוֹל נְהַר־פְּרָת כֹּל אֶרֶץ הַחִתִּים וְעַד־הַיָּם הַגָּדוֹל מְבוֹא הַשָּׁמֶשׁ יִהְיֶה גְּבוּלְכֶם׃</p>
//         <p><b>ה. </b>לֹא־יִתְיַצֵּב אִישׁ לְפָנֶיךָ כֹּל יְמֵי חַיֶּיךָ כַּאֲשֶׁר הָיִיתִי עִם־מֹשֶׁה אֶהְיֶה עִמָּךְ לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ׃</p>
//         <p><b>ו. </b>חֲזַק וֶאֱמָץ כִּי אַתָּה תַּנְחִיל אֶת־הָעָם הַזֶּה אֶת־הָאָרֶץ אֲשֶׁר־נִשְׁבַּעְתִּי לַאֲבוֹתָם לָתֵת לָהֶם׃</p>
//         <p><b>ז. </b>רַק חֲזַק וֶאֱמַץ מְאֹד לִשְׁמֹר לַעֲשׂוֹת כְּכָל־הַתּוֹרָה אֲשֶׁר צִוְּךָ מֹשֶׁה עַבְדִּי אַל־תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול לְמַעַן תַּשְׂכִּיל בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
//         <p><b>ח. </b>לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה לְמַעַן תִּשְׁמֹר לַעֲשׂוֹת כְּכָל־הַכָּתוּב בּוֹ כִּי־אָז תַּצְלִיחַ אֶת־דְּרָכֶךָ וְאָז תַּשְׂכִּיל׃</p>
//         <p><b>ט. </b>הֲלוֹא צִוִּיתִיךָ חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת כִּי עִמְּךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
//         <p><b>י. </b>וַיְצַו יְהוֹשֻׁעַ אֶת־שֹׁטְרֵי הָעָם לֵאמֹר׃</p>
//         <p><b>יא. </b>עִבְרוּ בְּקֶרֶב הַמַּחֲנֶה וְצַוּוּ אֶת־הָעָם לֵאמֹר הָכִינוּ לָכֶם צֵידָה כִּי בְּעוֹד שְׁלֹשֶׁת יָמִים אַתֶּם עֹבְרִים אֶת־הַיַּרְדֵּן הַזֶּה לָבוֹא לָרֶשֶׁת אֶת־הָאָרֶץ אֲשֶׁר יְהוָה אֱלֹהֵיכֶם נֹתֵן לָכֶם לְרִשְׁתָּהּ׃</p>
//         <p><b>יב. </b>וְלָראוּבֵנִי וְלַגָּדִי וְלַחֲצִי שֵׁבֶט הַמְנַשֶּׁה אָמַר יְהוֹשֻׁעַ לֵאמֹר׃</p>
//         <p><b>יג. </b>זָכוֹר אֶת־הַדָּבָר אֲשֶׁר צִוָּה אֶתְכֶם מֹשֶׁה עֶבֶד־יְהוָה לֵאמֹר יְהוָה אֱלֹהֵיכֶם מֵנִיחַ לָכֶם וְנָתַן לָכֶם אֶת־הָאָרֶץ הַזֹּאת׃</p>
//         <p><b>יד. </b>נְשֵׁיכֶם טַפְּכֶם וּמִקְנֵיכֶם יֵשְׁבוּ בָּאָרֶץ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה בְּעֵבֶר הַיַּרְדֵּן וְאַתֶּם תַּעַבְרוּ חֲמֻשִׁים לִפְנֵי אֲחֵיכֶם כֹּל גִּבּוֹרֵי הַחַיִל וַעֲזַרְתֶּם אוֹתָם׃</p>
//         <p><b>טו. </b>עַד אֲשֶׁר־יָנִיחַ יְהוָה לַאֲחֵיכֶם כָּכֶם וְיָרְשׁוּ גַם־הֵמָּה אֶת־הָאָרֶץ אֲשֶׁר־יְהוָה אֱלֹהֵיכֶם נֹתֵן לָהֶם וְשַׁבְתֶּם לְאֶרֶץ יְרֻשַּׁתְכֶם וִירִשְׁתֶּם אוֹתָהּ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה עֶבֶד יְהוָה בְּעֵבֶר הַיַּרְדֵּן מִזְרַח הַשָּׁמֶשׁ׃</p>
//         <p><b>טז. </b>וַיַּעֲנוּ אֶת־יְהוֹשֻׁעַ לֵאמֹר כֹּל אֲשֶׁר־צִוִּיתָנוּ נַעֲשֶׂה וְאֶל־כָּל־אֲשֶׁר תִּשְׁלָחֵנוּ נֵלֵךְ׃</p>
//         <p><b>יז. </b>כְּכֹל אֲשֶׁר־שָׁמַעְנוּ אֶל־מֹשֶׁה כֵּן נִשְׁמַע אֵלֶיךָ רַק יִהְיֶה יְהוָה אֱלֹהֶיךָ עִמָּךְ כַּאֲשֶׁר הָיָה עִם־מֹשֶׁה׃</p>
//         <p><b>יח. </b>כָּל־אִישׁ אֲשֶׁר־יַמְרֶה אֶת־פִּיךָ וְלֹא־יִשְׁמַע אֶת־דְּבָרֶיךָ לְכֹל אֲשֶׁר־תְּצַוֶּנּוּ יוּמָת רַק חֲזַק וֶאֱמָץ׃</p>
//       </div>
//       <div className='text' id='parText'>
//         <p><b>א. </b>וַיְהִי אַחֲרֵי מוֹת מֹשֶׁה עֶבֶד יְהוָה וַיֹּאמֶר יְהוָה אֶל־יְהוֹשֻׁעַ בִּן־נוּן מְשָׁרֵת מֹשֶׁה לֵאמֹר׃</p>
//         <p><b>1. </b>Now it came to pass after the death of Moses the servant of the LORD, that the LORD spoke unto Joshua the son of Nun, Moses’minister, saying:</p>
//         <p><b>ב. </b>מֹשֶׁה עַבְדִּי מֵת וְעַתָּה קוּם עֲבֹר אֶת־הַיַּרְדֵּן הַזֶּה אַתָּה וְכָל־הָעָם הַזֶּה אֶל־הָאָרֶץ אֲשֶׁר אָנֹכִי נֹתֵן לָהֶם לִבְנֵי יִשְׂרָאֵל׃</p>
//         <p><b>2. </b>’Moses My servant is dead; now therefore arise, go over this Jordan, thou, and all this people, unto the land which I do give to them, even to the children of Israel.</p>
//         <p><b>ג. </b>כָּל־מָקוֹם אֲשֶׁר תִּדְרֹךְ כַּף־רַגְלְכֶם בּוֹ לָכֶם נְתַתִּיו כַּאֲשֶׁר דִּבַּרְתִּי אֶל־מֹשֶׁה׃</p>
//         <p><b>3. </b>Every place that the sole of your foot shall tread upon, to you have I given it, as I spoke unto Moses.</p>
//         <p><b>ד. </b>מֵהַמִּדְבָּר וְהַלְּבָנוֹן הַזֶּה וְעַד־הַנָּהָר הַגָּדוֹל נְהַר־פְּרָת כֹּל אֶרֶץ הַחִתִּים וְעַד־הַיָּם הַגָּדוֹל מְבוֹא הַשָּׁמֶשׁ יִהְיֶה גְּבוּלְכֶם׃</p>
//         <p><b>4. </b>From the wilderness, and this Lebanon, even unto the great river, the river Euphrates, all the land of the Hittites, and unto the Great Sea toward the going down of the sun, shall be your border.</p>
//         <p><b>ה. </b>לֹא־יִתְיַצֵּב אִישׁ לְפָנֶיךָ כֹּל יְמֵי חַיֶּיךָ כַּאֲשֶׁר הָיִיתִי עִם־מֹשֶׁה אֶהְיֶה עִמָּךְ לֹא אַרְפְּךָ וְלֹא אֶעֶזְבֶךָּ׃</p>
//         <p><b>5. </b>There shall not any man be able to stand before thee all the days of thy life; as I was with Moses, so I will be with thee; I will not fail thee, nor forsake thee.</p>
//         <p><b>ו. </b>חֲזַק וֶאֱמָץ כִּי אַתָּה תַּנְחִיל אֶת־הָעָם הַזֶּה אֶת־הָאָרֶץ אֲשֶׁר־נִשְׁבַּעְתִּי לַאֲבוֹתָם לָתֵת לָהֶם׃</p>
//         <p><b>6. </b>Be strong and of good courage; for thou shalt cause this people to inherit the land which I swore unto their fathers to give them.</p>
//         <p><b>ז. </b>רַק חֲזַק וֶאֱמַץ מְאֹד לִשְׁמֹר לַעֲשׂוֹת כְּכָל־הַתּוֹרָה אֲשֶׁר צִוְּךָ מֹשֶׁה עַבְדִּי אַל־תָּסוּר מִמֶּנּוּ יָמִין וּשְׂמֹאול לְמַעַן תַּשְׂכִּיל בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
//         <p><b>7. </b>Only be strong and very courageous, to observe to do according to all the law, which Moses My servant commanded thee; turn not from it to the right hand or to the left, that thou mayest have good success whithersoever thou goest.</p>
//         <p><b>ח. </b>לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה לְמַעַן תִּשְׁמֹר לַעֲשׂוֹת כְּכָל־הַכָּתוּב בּוֹ כִּי־אָז תַּצְלִיחַ אֶת־דְּרָכֶךָ וְאָז תַּשְׂכִּיל׃</p>
//         <p><b>8. </b>This book of the law shall not depart out of thy mouth, but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein; for then thou shalt make thy ways prosperous, and then thou shalt have good success.</p>
//         <p><b>ט. </b>הֲלוֹא צִוִּיתִיךָ חֲזַק וֶאֱמָץ אַל־תַּעֲרֹץ וְאַל־תֵּחָת כִּי עִמְּךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ׃</p>
//         <p><b>9. </b>Have not I commanded thee? Be strong and of good courage; be not affrighted, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.’</p>
//         <p><b>י. </b>וַיְצַו יְהוֹשֻׁעַ אֶת־שֹׁטְרֵי הָעָם לֵאמֹר׃</p>
//         <p><b>10. </b>Then Joshua commanded the officers of the people, saying:</p>
//         <p><b>יא. </b>עִבְרוּ בְּקֶרֶב הַמַּחֲנֶה וְצַוּוּ אֶת־הָעָם לֵאמֹר הָכִינוּ לָכֶם צֵידָה כִּי בְּעוֹד שְׁלֹשֶׁת יָמִים אַתֶּם עֹבְרִים אֶת־הַיַּרְדֵּן הַזֶּה לָבוֹא לָרֶשֶׁת אֶת־הָאָרֶץ אֲשֶׁר יְהוָה אֱלֹהֵיכֶם נֹתֵן לָכֶם לְרִשְׁתָּהּ׃</p>
//         <p><b>11. </b>’Pass through the midst of the camp, and command the people, saying: Prepare you victuals; for within three days ye are to pass over this Jordan, to go in to possess the land, which the LORD your God giveth you to possess it.’</p>
//         <p><b>יב. </b>וְלָראוּבֵנִי וְלַגָּדִי וְלַחֲצִי שֵׁבֶט הַמְנַשֶּׁה אָמַר יְהוֹשֻׁעַ לֵאמֹר׃</p>
//         <p><b>12. </b>And to the Reubenites, and to the Gadites, and to the half-tribe of Manasseh, spoke Joshua, saying:</p>
//         <p><b>יג. </b>זָכוֹר אֶת־הַדָּבָר אֲשֶׁר צִוָּה אֶתְכֶם מֹשֶׁה עֶבֶד־יְהוָה לֵאמֹר יְהוָה אֱלֹהֵיכֶם מֵנִיחַ לָכֶם וְנָתַן לָכֶם אֶת־הָאָרֶץ הַזֹּאת׃</p>
//         <p><b>13. </b>’Remember the word which Moses the servant of the LORD commanded, you, saying: The LORD your God giveth you rest, and will give you this land.</p>
//         <p><b>יד. </b>נְשֵׁיכֶם טַפְּכֶם וּמִקְנֵיכֶם יֵשְׁבוּ בָּאָרֶץ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה בְּעֵבֶר הַיַּרְדֵּן וְאַתֶּם תַּעַבְרוּ חֲמֻשִׁים לִפְנֵי אֲחֵיכֶם כֹּל גִּבּוֹרֵי הַחַיִל וַעֲזַרְתֶּם אוֹתָם׃</p>
//         <p><b>14. </b>Your wives, your little ones, and your cattle, shall abide in the land which Moses gave you beyond the Jordan; but ye shall pass over before your brethren armed, all the mighty men of valour, and shall help them;</p>
//         <p><b>טו. </b>עַד אֲשֶׁר־יָנִיחַ יְהוָה לַאֲחֵיכֶם כָּכֶם וְיָרְשׁוּ גַם־הֵמָּה אֶת־הָאָרֶץ אֲשֶׁר־יְהוָה אֱלֹהֵיכֶם נֹתֵן לָהֶם וְשַׁבְתֶּם לְאֶרֶץ יְרֻשַּׁתְכֶם וִירִשְׁתֶּם אוֹתָהּ אֲשֶׁר נָתַן לָכֶם מֹשֶׁה עֶבֶד יְהוָה בְּעֵבֶר הַיַּרְדֵּן מִזְרַח הַשָּׁמֶשׁ׃</p>
//         <p><b>15. </b>until the LORD have given your brethren rest, as unto you, and they also have possessed the land which the LORD your God giveth them; then ye shall return unto the land of your possession, and possess it, which Moses the servant of the LORD gave you beyond the Jordan toward the sunrising.’</p>
//         <p><b>טז. </b>וַיַּעֲנוּ אֶת־יְהוֹשֻׁעַ לֵאמֹר כֹּל אֲשֶׁר־צִוִּיתָנוּ נַעֲשֶׂה וְאֶל־כָּל־אֲשֶׁר תִּשְׁלָחֵנוּ נֵלֵךְ׃</p>
//         <p><b>16. </b>And they answered Joshua, saying: ‘All that thou hast commanded us we will do, and whithersoever thou sendest us we will go.</p>
//         <p><b>יז. </b>כְּכֹל אֲשֶׁר־שָׁמַעְנוּ אֶל־מֹשֶׁה כֵּן נִשְׁמַע אֵלֶיךָ רַק יִהְיֶה יְהוָה אֱלֹהֶיךָ עִמָּךְ כַּאֲשֶׁר הָיָה עִם־מֹשֶׁה׃</p>
//         <p><b>17. </b>According as we hearkened unto Moses in all things, so will we hearken unto thee; only the LORD thy God be with thee, as He was with Moses.</p>
//         <p><b>יח. </b>כָּל־אִישׁ אֲשֶׁר־יַמְרֶה אֶת־פִּיךָ וְלֹא־יִשְׁמַע אֶת־דְּבָרֶיךָ לְכֹל אֲשֶׁר־תְּצַוֶּנּוּ יוּמָת רַק חֲזַק וֶאֱמָץ׃</p>
//         <p><b>18. </b>Whosoever he be that shall rebel against thy commandment, and shall not hearken unto thy words in all that thou commandest him, he shall be put to death; only be strong and of good courage.’</p>
//       </div>
//       <div className='text' id='engText'>
//         <p><b>1. </b>Now it came to pass after the death of Moses the servant of the LORD, that the LORD spoke unto Joshua the son of Nun, Moses’minister, saying:</p>
//         <p><b>2. </b>’Moses My servant is dead; now therefore arise, go over this Jordan, thou, and all this people, unto the land which I do give to them, even to the children of Israel.</p>
//         <p><b>3. </b>Every place that the sole of your foot shall tread upon, to you have I given it, as I spoke unto Moses.</p>
//         <p><b>4. </b>From the wilderness, and this Lebanon, even unto the great river, the river Euphrates, all the land of the Hittites, and unto the Great Sea toward the going down of the sun, shall be your border.</p>
//         <p><b>5. </b>There shall not any man be able to stand before thee all the days of thy life; as I was with Moses, so I will be with thee; I will not fail thee, nor forsake thee.</p>
//         <p><b>6. </b>Be strong and of good courage; for thou shalt cause this people to inherit the land which I swore unto their fathers to give them.</p>
//         <p><b>7. </b>Only be strong and very courageous, to observe to do according to all the law, which Moses My servant commanded thee; turn not from it to the right hand or to the left, that thou mayest have good success whithersoever thou goest.</p>
//         <p><b>8. </b>This book of the law shall not depart out of thy mouth, but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein; for then thou shalt make thy ways prosperous, and then thou shalt have good success.</p>
//         <p><b>9. </b>Have not I commanded thee? Be strong and of good courage; be not affrighted, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.’</p>
//         <p><b>10. </b>Then Joshua commanded the officers of the people, saying:</p>
//         <p><b>11. </b>’Pass through the midst of the camp, and command the people, saying: Prepare you victuals; for within three days ye are to pass over this Jordan, to go in to possess the land, which the LORD your God giveth you to possess it.’</p>
//         <p><b>12. </b>And to the Reubenites, and to the Gadites, and to the half-tribe of Manasseh, spoke Joshua, saying:</p>
//         <p><b>13. </b>’Remember the word which Moses the servant of the LORD commanded, you, saying: The LORD your God giveth you rest, and will give you this land.</p>
//         <p><b>14. </b>Your wives, your little ones, and your cattle, shall abide in the land which Moses gave you beyond the Jordan; but ye shall pass over before your brethren armed, all the mighty men of valour, and shall help them;</p>
//         <p><b>15. </b>until the LORD have given your brethren rest, as unto you, and they also have possessed the land which the LORD your God giveth them; then ye shall return unto the land of your possession, and possess it, which Moses the servant of the LORD gave you beyond the Jordan toward the sunrising.’</p>
//         <p><b>16. </b>And they answered Joshua, saying: ‘All that thou hast commanded us we will do, and whithersoever thou sendest us we will go.</p>
//         <p><b>17. </b>According as we hearkened unto Moses in all things, so will we hearken unto thee; only the LORD thy God be with thee, as He was with Moses.</p>
//         <p><b>18. </b>Whosoever he be that shall rebel against thy commandment, and shall not hearken unto thy words in all that thou commandest him, he shall be put to death; only be strong and of good courage.’</p>
//       </div>
//     </div>
//   );
// }
