import React, { Component } from 'react';
import SVGInline from "react-svg-inline";
import { connect } from 'react-redux';
import { boardClicked } from '../actions/index';
import { bindActionCreators } from 'redux';

class Board extends Component {
	
	render() {
		return (
			<div id="board" onClick={(event) => this.props.boardClicked(event)}>
			    <SVGInline svg={'<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2500 2623" style="enable-background:new 0 0 2500 2623;" xml:space="preserve"><image style="overflow:visible;enable-background:new ;" width="2500" height="2624" id="Background_1_" xlink:href="/img/2A6DA3D578C05349.jpeg" transform="matrix(1 0 0 0.9996 0 0.5)"></image><image style="overflow:visible;enable-background:new ;" width="2500" height="1876" id="Illustration" xlink:href="/img/2A6DA3D578C0534B.jpeg" transform="matrix(1 0 0 1 0 185)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="164" id="_x30_1-B-RussellStringerBell" xlink:href="/img/2A6DA3D578C05349.png" transform="matrix(1 0 0 1 728 686)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="164" id="_x30_1-A-RussellStringerBell" xlink:href="/img/2A6DA3D578C0534F.png" transform="matrix(1 0 0 1 728 686)"></image><image style="overflow:visible;enable-background:new ;" width="102" height="144" id="_x30_2-B-Kenard" xlink:href="/img/2A6DA3D578C0534A.png" transform="matrix(1 0 0 1 1322 869)"></image><image style="overflow:visible;enable-background:new ;" width="102" height="151" id="_x30_2-A-Kenard" xlink:href="/img/2A6DA3D578C0534B.png" transform="matrix(1 0 0 1 1322 862)"></image><image style="overflow:visible;enable-background:new ;" width="86" height="144" id="_x30_3-B-MarloStanfield" xlink:href="/img/2A6DA3D578C05346.png" transform="matrix(1 0 0 1 570 1274)"></image><image style="overflow:visible;enable-background:new ;" width="86" height="144" id="_x30_3-A-MarloStanfield" xlink:href="/img/2A6DA3D578C05347.png" transform="matrix(1 0 0 1 570 1274)"></image><image style="overflow:visible;enable-background:new ;" width="79" height="132" id="_x30_4-B-CalvinCheeseWagstaff" xlink:href="/img/2A6DA3D578C05359.png" transform="matrix(1 0 0 1 2 1556)"></image><image style="overflow:visible;enable-background:new ;" width="79" height="132" id="_x30_4-A-CalvinCheeseWagstaff" xlink:href="/img/21D8ADDA73CC0992.png" transform="matrix(1 0 0 1 2 1556)"></image><image style="overflow:visible;enable-background:new ;" width="138" height="207" id="_x30_5-B-MauriceLevy" xlink:href="/img/21D8ADDA73CC0995.png" transform="matrix(1 0 0 1 600 1695)"></image><image style="overflow:visible;enable-background:new ;" width="138" height="207" id="_x30_5-A-MauriceLevy" xlink:href="/img/21D8ADDA73CC0996.png" transform="matrix(1 0 0 1 600 1695)"></image><image style="overflow:visible;enable-background:new ;" width="100" height="165" id="_x30_6-B-SpirosVondasVondopoulos" xlink:href="/img/21D8ADDA73CC0994.png" transform="matrix(1 0 0 1 289 1394)"></image><image style="overflow:visible;enable-background:new ;" width="100" height="165" id="_x30_6-A-SpirosVondasVondopoulos" xlink:href="/img/21D8ADDA73CC0993.png" transform="matrix(1 0 0 1 289 1394)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="195" id="_x30_7-B-The_Greek" xlink:href="/img/21D8ADDA73CC098D.png" transform="matrix(1 0 0 1 192 1373)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="195" id="_x30_7-A-The_Greek" xlink:href="/img/21D8ADDA73CC098E.png" transform="matrix(1 0 0 1 192 1373)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="180" id="_x30_8-B-PropositionJoe" xlink:href="/img/21D8ADDA73CC098C.png" transform="matrix(1 0 0 1 527 565)"></image><image style="overflow:visible;enable-background:new ;" width="174" height="181" id="_x30_8-A-PropositionJoe" xlink:href="/img/21D8ADDA73CC09B2.png" transform="matrix(1 0 0 1 527 564)"></image><image style="overflow:visible;enable-background:new ;" width="140" height="161" id="_x30_9-B-BriannaBarksdale" xlink:href="/img/21D8ADDA73CC09B5.png" transform="matrix(1 0 0 1 1142 605)"></image><image style="overflow:visible;enable-background:new ;" width="149" height="175" id="_x30_9-A-BriannaBarksdale" xlink:href="/img/21D8ADDA73CC09A9.png" transform="matrix(1 0 0 1 1133 591)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="186" id="_x31_0-B-DeLondaBrice" xlink:href="/img/21D8ADDA73CC09AB.png" transform="matrix(1 0 0 1 253 1243)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="186" id="_x31_0-A-DeLondaBrice" xlink:href="/img/21D8ADDA73CC09A8.png" transform="matrix(1 0 0 1 253 1243)"></image><image style="overflow:visible;enable-background:new ;" width="186" height="376" id="_x31_1-B-JayLandsman" xlink:href="/img/21D8ADDA73CC09D7.png" transform="matrix(1 0 0 1 1989 915)"></image><image style="overflow:visible;enable-background:new ;" width="186" height="376" id="_x31_1-A-JayLandsman" xlink:href="/img/21D8ADDA73CC09D9.png" transform="matrix(1 0 0 1 1989 915)"></image><image style="overflow:visible;enable-background:new ;" width="109" height="247" id="_x31_2-B-AvonBarksdale" xlink:href="/img/21D8ADDA73CC09DB.png" transform="matrix(1 0 0 1 450 1338)"></image><image style="overflow:visible;enable-background:new ;" width="109" height="247" id="_x31_2-A-AvonBarksdale" xlink:href="/img/21D8ADDA73CC09D8.png" transform="matrix(1 0 0 1 450 1338)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="190" id="_x31_3-B-BeadieRussell" xlink:href="/img/21D8ADDA73CC09DF.png" transform="matrix(1 0 0 1 1583 1673)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="197" id="_x31_3-A-BeadieRussell" xlink:href="/img/21D8ADDA73CC09DA.png" transform="matrix(1 0 0 1 1575 1666)"></image><image style="overflow:visible;enable-background:new ;" width="139" height="350" id="_x31_4-B-WilliamRawls" xlink:href="/img/21D8ADDA73CC09E6.png" transform="matrix(1 0 0 1 1694 1597)"></image><image style="overflow:visible;enable-background:new ;" width="139" height="351" id="_x31_4-A-WilliamRawls" xlink:href="/img/21D8ADDA73CC09FC.png" transform="matrix(1 0 0 1 1694 1596)"></image><image style="overflow:visible;enable-background:new ;" width="99" height="194" id="_x31_5-B-NickSobotka" xlink:href="/img/21D8ADDA73CC09C3.png" transform="matrix(1 0 0 1 315 1867)"></image><image style="overflow:visible;enable-background:new ;" width="99" height="194" id="_x31_5-A-NickSobotka" xlink:href="/img/21D8ADDA73CC09C4.png" transform="matrix(1 0 0 1 315 1867)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="309" id="_x31_6-B-ClarenceRoyce" xlink:href="/img/21D8ADDA73CC09C7.png" transform="matrix(1 0 0 1 1185 1736)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="324" id="_x31_6-A-ClarenceRoyce" xlink:href="/img/21D8ADDA73CC09C5.png" transform="matrix(1 0 0 1 1185 1721)"></image><image style="overflow:visible;enable-background:new ;" width="152" height="217" id="_x31_7-B-TommyCarcetti" xlink:href="/img/21D8ADDA73CC09C2.png" transform="matrix(1 0 0 1 2217 1844)"></image><image style="overflow:visible;enable-background:new ;" width="154" height="219" id="_x31_7-A-TommyCarcetti" xlink:href="/img/21D8ADDA73CC09CC.png" transform="matrix(1 0 0 1 2215 1842)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="152" id="_x31_8-B-ThomasKlebanow" xlink:href="/img/21D8ADDA73CC09CF.png" transform="matrix(1 0 0 1 1917 1909)"></image><image style="overflow:visible;enable-background:new ;" width="127" height="153" id="_x31_8-A-ThomasKlebanow" xlink:href="/img/21D8ADDA73CC09CD.png" transform="matrix(1 0 0 1 1917 1908)"></image><image style="overflow:visible;enable-background:new ;" width="137" height="153" id="_x31_9_x5F_B-ScottTempleton" xlink:href="/img/21D8ADDA73CC09C1.png" transform="matrix(1 0 0 1 1823 1908)"></image><image style="overflow:visible;enable-background:new ;" width="137" height="153" id="_x31_9_x5F_A-ScottTempleton" xlink:href="/img/21D8ADDA73CC0A2F.png" transform="matrix(1 0 0 1 1823 1908)"></image><image style="overflow:visible;enable-background:new ;" width="108" height="193" id="_x32_0-B-ClayDavis" xlink:href="/img/21D8ADDA73CC0A21.png" transform="matrix(1 0 0 1 1589 553)"></image><image style="overflow:visible;enable-background:new ;" width="108" height="193" id="_x32_0-A-ClayDavis" xlink:href="/img/21D8ADDA73CC0A23.png" transform="matrix(1 0 0 1 1589 553)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="236" id="_x32_1-B-ChrisPartlow" xlink:href="/img/21D8ADDA73CC0A26.png" transform="matrix(1 0 0 1 413 1070)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="236" id="_x32_1-A-ChrisPartlow" xlink:href="/img/21D8ADDA73CC0A27.png" transform="matrix(1 0 0 1 413 1070)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="145" id="_x32_2-B-SnoopPearson" xlink:href="/img/21D8ADDA73CC0A22.png" transform="matrix(1 0 0 1 2015 462)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="145" id="_x32_2-A-SnoopPearson" xlink:href="/img/21D8ADDA73CC0A3D.png" transform="matrix(1 0 0 1 2015 462)"></image><image style="overflow:visible;enable-background:new ;" width="66" height="107" id="_x32_3-B-RolandPryzbylewski" xlink:href="/img/21D8ADDA73CC0A3E.png" transform="matrix(1 0 0 1 158 1660)"></image><image style="overflow:visible;enable-background:new ;" width="66" height="107" id="_x32_3-A-RolandPryzbylewski" xlink:href="/img/21D8ADDA73CC0A3F.png" transform="matrix(1 0 0 1 158 1660)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="199" id="_x32_4-B-BodieBroadus" xlink:href="/img/21D8ADDA73CC0A24.png" transform="matrix(1 0 0 1 892 1331)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="199" id="_x32_4-A-BodieBroadus" xlink:href="/img/21D8ADDA73CC0A1E.png" transform="matrix(1 0 0 1 892 1331)"></image><image style="overflow:visible;enable-background:new ;" width="67" height="140" id="_x32_5-B-Wallace" xlink:href="/img/21D8ADDA73CC0A19.png" transform="matrix(1 0 0 1 1371 663)"></image><image style="overflow:visible;enable-background:new ;" width="67" height="140" id="_x32_5-A-Wallace" xlink:href="/img/21D8ADDA73CC0A1A.png" transform="matrix(1 0 0 1 1371 663)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="248" id="_x32_6-B-WilliamBunkMoreland" xlink:href="/img/21D8ADDA73CC0A18.png" transform="matrix(1 0 0 1 1951 1698)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="248" id="_x32_6-A-WilliamBunkMoreland" xlink:href="/img/21D8ADDA73CC0A06.png" transform="matrix(1 0 0 1 1951 1698)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="292" id="_x32_7-B-DukieWeems" xlink:href="/img/21D8ADDA73CC0A09.png" transform="matrix(1 0 0 1 1482 1174)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="292" id="_x32_7-A-DukieWeems" xlink:href="/img/21D8ADDA73CC0A0A.png" transform="matrix(1 0 0 1 1482 1174)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="291" id="_x32_8-B-RandyWagstaff" xlink:href="/img/21D8ADDA73CC0A08.png" transform="matrix(1 0 0 1 1424 1109)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="291" id="_x32_8-A-RandyWagstaff" xlink:href="/img/21D8ADDA73CC0A0E.png" transform="matrix(1 0 0 1 1424 1109)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="246" id="_x32_9-B-MichaelLee" xlink:href="/img/21D8ADDA73CC0A0B.png" transform="matrix(1 0 0 1 1281 1129)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="246" id="_x32_9-A-MichaelLee" xlink:href="/img/21D8ADDA73CC0A6D.png" transform="matrix(1 0 0 1 1281 1129)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="223" id="_x33_0-B-NamondBrice" xlink:href="/img/21D8ADDA73CC0A6F.png" transform="matrix(1 0 0 1 1342 1098)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="223" id="_x33_0-A-NamondBrice" xlink:href="/img/21D8ADDA73CC0A6C.png" transform="matrix(1 0 0 1 1342 1098)"></image><image style="overflow:visible;enable-background:new ;" width="97" height="248" id="_x33_1-B-FrankSobotka" xlink:href="/img/21D8ADDA73CC0A6B.png" transform="matrix(1 0 0 1 1789 483)"></image><image style="overflow:visible;enable-background:new ;" width="97" height="248" id="_x33_1-A-FrankSobotka" xlink:href="/img/21D8ADDA73CC0A15.png" transform="matrix(1 0 0 1 1789 483)"></image><image style="overflow:visible;enable-background:new ;" width="90" height="248" id="_x33_2-B-RhondaPearlman" xlink:href="/img/21D8ADDA73CC0A17.png" transform="matrix(1 0 0 1 1955 296)"></image><image style="overflow:visible;enable-background:new ;" width="90" height="248" id="_x33_2-A-RhondaPearlman" xlink:href="/img/21D8ADDA73CC0A14.png" transform="matrix(1 0 0 1 1955 296)"></image><image style="overflow:visible;enable-background:new ;" width="117" height="159" id="_x33_3-B-EllisCarver" xlink:href="/img/21D8ADDA73CC0A1B.png" transform="matrix(1 0 0 1 1963 1291)"></image><image style="overflow:visible;enable-background:new ;" width="117" height="159" id="_x33_3-A-EllisCarver" xlink:href="/img/21D8ADDA73CC0A1D.png" transform="matrix(1 0 0 1 1963 1291)"></image><image style="overflow:visible;enable-background:new ;" width="111" height="192" id="_x33_4-B-ThomasHercHauk" xlink:href="/img/21D8ADDA73CC0A1F.png" transform="matrix(1 0 0 1 1875 1274)"></image><image style="overflow:visible;enable-background:new ;" width="111" height="192" id="_x33_4-A-ThomasHercHauk" xlink:href="/img/21D8ADDA73CC0A30.png" transform="matrix(1 0 0 1 1875 1274)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="154" id="_x33_5-B-AugustusHaynes" xlink:href="/img/21D8ADDA73CC0A3C.png" transform="matrix(1 0 0 1 2119 1604)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="154" id="_x33_5-A-AugustusHaynes" xlink:href="/img/21D8ADDA73CC0A31.png" transform="matrix(1 0 0 1 2119 1604)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="184" id="_x33_6-B-LesterFreamon" xlink:href="/img/21D8ADDA73CC0A33.png" transform="matrix(1 0 0 1 1658 567)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="184" id="_x33_6-A-LesterFreamon" xlink:href="/img/21D8ADDA73CC0A36.png" transform="matrix(1 0 0 1 1658 567)"></image><image style="overflow:visible;enable-background:new ;" width="136" height="200" id="_x33_7-B-CedricDaniels" xlink:href="/img/21D8ADDA73CC0A37.png" transform="matrix(1 0 0 1 2262 1523)"></image><image style="overflow:visible;enable-background:new ;" width="136" height="200" id="_x33_7-A-CedricDaniels" xlink:href="/img/21D8ADDA73CC0A32.png" transform="matrix(1 0 0 1 2262 1523)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="202" id="_x33_8-B-SlimCharles" xlink:href="/img/21D8ADDA73CC0A2D.png" transform="matrix(1 0 0 1 1921 1058)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="202" id="_x33_8-A-SlimCharles" xlink:href="/img/21D8ADDA73CC0A2E.png" transform="matrix(1 0 0 1 1921 1058)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="159" id="_x33_9-B-HowardBunnyColvin" xlink:href="/img/21D8ADDA73CC0A2C.png" transform="matrix(1 0 0 1 1050 1902)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="159" id="_x33_9-A-HowardBunnyColvin" xlink:href="/img/21D8ADDA73CC0ACB.png" transform="matrix(1 0 0 1 1050 1902)"></image><image style="overflow:visible;enable-background:new ;" width="194" height="280" id="_x34_0-B-D_x27_AngeloBarksdale" xlink:href="/img/21D8ADDA73CC0ACD.png" transform="matrix(1 0 0 1 815 742)"></image><image style="overflow:visible;enable-background:new ;" width="194" height="280" id="_x34_0-A-D_x27_AngeloBarksdale" xlink:href="/img/21D8ADDA73CC0ACF.png" transform="matrix(1 0 0 1 815 742)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="330" id="_x34_1-B-RolandWee-BayBrice" xlink:href="/img/21D8ADDA73CC0ACA.png" transform="matrix(1 0 0 1 606 1016)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="330" id="_x34_1-A-RolandWee-BayBrice" xlink:href="/img/21D8ADDA73CC0AC9.png" transform="matrix(1 0 0 1 606 1016)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="211" id="_x34_2-B-DennisCuttyWise" xlink:href="/img/21D8ADDA73CC0AF5.png" transform="matrix(1 0 0 1 1028 430)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="211" id="_x34_2-A-DennisCuttyWise" xlink:href="/img/21D8ADDA73CC0AF7.png" transform="matrix(1 0 0 1 1028 430)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="264" id="_x34_3-B-KimaGreggs" xlink:href="/img/21D8ADDA73CC0AFA.png" transform="matrix(1 0 0 1 1974 728)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="264" id="_x34_3-A-KimaGreggs" xlink:href="/img/21D8ADDA73CC0AFB.png" transform="matrix(1 0 0 1 1974 728)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="161" id="_x34_4-B-ReginaldBubblesCousins" xlink:href="/img/21D8ADDA73CC0AFD.png" transform="matrix(1 0 0 1 10 1785)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="161" id="_x34_4-A-ReginaldBubblesCousins" xlink:href="/img/21D8ADDA73CC0A9A.png" transform="matrix(1 0 0 1 10 1785)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="365" id="_x34_5-B-BrotherMouzone" xlink:href="/img/21D8ADDA73CC0A9D.png" transform="matrix(1 0 0 1 1602 1019)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="365" id="_x34_5-A-BrotherMouzone" xlink:href="/img/21D8ADDA73CC0A9E.png" transform="matrix(1 0 0 1 1602 1019)"></image><image style="overflow:visible;enable-background:new ;" width="144" height="283" id="_x34_6-B-JimmyMcNulty" xlink:href="/img/21D8ADDA73CC0A9C.png" transform="matrix(1 0 0 1 910 715)"></image><image style="overflow:visible;enable-background:new ;" width="144" height="283" id="_x34_6-A-JimmyMcNulty" xlink:href="/img/21D8ADDA73CC0A9B.png" transform="matrix(1 0 0 1 910 715)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="185" id="_x34_7-B-OmarLittle" xlink:href="/img/21D8ADDA73CC0AA5.png" transform="matrix(1 0 0 1 1289 1291)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="185" id="_x34_7-A-OmarLittle" xlink:href="/img/21D8ADDA73CC0AA6.png" transform="matrix(1 0 0 1 1289 1291)"></image></svg>'} />
			</div>
		);
	}
	
	componentDidUpdate() {
		this.props.characters.map((character) => {
			if(character.found === true) {
				document.getElementById(character.id).style.display = 'none';
			}	
		});
	}
}

function mapStateToProps(state) {
	return {
		characters: state.characters
	};
}

function mapDispatchToProps(dispatch) {
	// Whenever selectCharacter is called, the result should be passed to all reducers
	return bindActionCreators({ boardClicked: boardClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);