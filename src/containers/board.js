import React, { Component } from 'react';
import SVGInline from "react-svg-inline";
import { connect } from 'react-redux';
import { boardClicked, selectCharacter } from '../actions/index';
import { bindActionCreators } from 'redux';

class Board extends Component {
	
	render() {
		return (		
			<div id="board" onClick={(event) => this.props.boardClicked(event, this.props.activeCharacter)}>
			    <SVGInline svg={'<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2489.5 1872.7" style="enable-background:new 0 0 2489.5 1872.7;" xml:space="preserve"><image style="overflow:visible;" width="2500" height="1928" id="Illustration_1_" xlink:href="img/2A6DA3D578C0534C.jpg" transform="matrix(1 0 0 1 -5.5 -55)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="164" id="_x30_1-B-RussellStringerBell" xlink:href="img/2A6DA3D578C0534D.png" transform="matrix(1 0 0 1 722.5 498)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="164" id="_x30_1-A-RussellStringerBell" xlink:href="img/2A6DA3D578C05342.png" transform="matrix(1 0 0 1 722.5 498)"></image><image style="overflow:visible;enable-background:new ;" width="102" height="144" id="_x30_2-B-Kenard" xlink:href="img/2A6DA3D578C05343.png" transform="matrix(1 0 0 1 1316.5 681)"></image><image style="overflow:visible;enable-background:new ;" width="102" height="151" id="_x30_2-A-Kenard" xlink:href="img/2A6DA3D578C05344.png" transform="matrix(1 0 0 1 1316.5 674)"></image><image style="overflow:visible;enable-background:new ;" width="86" height="144" id="_x30_3-B-MarloStanfield" xlink:href="img/2A6DA3D578C05341.png" transform="matrix(1 0 0 1 564.5 1086)"></image><image style="overflow:visible;enable-background:new ;" width="86" height="144" id="_x30_3-A-MarloStanfield" xlink:href="img/2A6DA3D578C05340.png" transform="matrix(1 0 0 1 564.5 1086)"></image><image style="overflow:visible;enable-background:new ;" width="79" height="132" id="_x30_4-B-CalvinCheeseWagstaff" xlink:href="img/2A6DA3D578C0535F.png" transform="matrix(1 0 0 1 -3.5 1368)"></image><image style="overflow:visible;enable-background:new ;" width="79" height="132" id="_x30_4-A-CalvinCheeseWagstaff" xlink:href="img/2A6DA3D578C0535A.png" transform="matrix(1 0 0 1 -3.5 1368)"></image><image style="overflow:visible;enable-background:new ;" width="138" height="207" id="_x30_5-B-MauriceLevy" xlink:href="img/21D8ADDA73CC0997.png" transform="matrix(1 0 0 1 594.5 1507)"></image><image style="overflow:visible;enable-background:new ;" width="138" height="207" id="_x30_5-A-MauriceLevy" xlink:href="img/21D8ADDA73CC0989.png" transform="matrix(1 0 0 1 594.5 1507)"></image><image style="overflow:visible;enable-background:new ;" width="100" height="165" id="_x30_6-B-SpirosVondasVondopoulos" xlink:href="img/21D8ADDA73CC098A.png" transform="matrix(1 0 0 1 283.5 1206)"></image><image style="overflow:visible;enable-background:new ;" width="100" height="165" id="_x30_6-A-SpirosVondasVondopoulos" xlink:href="img/21D8ADDA73CC098B.png" transform="matrix(1 0 0 1 283.5 1206)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="195" id="_x30_7-B-The_Greek" xlink:href="img/21D8ADDA73CC098F.png" transform="matrix(1 0 0 1 186.5 1185)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="195" id="_x30_7-A-The_Greek" xlink:href="img/21D8ADDA73CC0988.png" transform="matrix(1 0 0 1 186.5 1185)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="180" id="_x30_8-B-PropositionJoe" xlink:href="img/21D8ADDA73CC0986.png" transform="matrix(1 0 0 1 521.5 377)"></image><image style="overflow:visible;enable-background:new ;" width="174" height="181" id="_x30_8-A-PropositionJoe" xlink:href="img/21D8ADDA73CC0987.png" transform="matrix(1 0 0 1 521.5 376)"></image><image style="overflow:visible;enable-background:new ;" width="140" height="161" id="_x30_9-B-BriannaBarksdale" xlink:href="img/21D8ADDA73CC09B3.png" transform="matrix(1 0 0 1 1136.5 417)"></image><image style="overflow:visible;enable-background:new ;" width="149" height="175" id="_x30_9-A-BriannaBarksdale" xlink:href="img/21D8ADDA73CC09B4.png" transform="matrix(1 0 0 1 1127.5 403)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="186" id="_x31_0-B-DeLondaBrice" xlink:href="img/21D8ADDA73CC09AA.png" transform="matrix(1 0 0 1 247.5 1055)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="186" id="_x31_0-A-DeLondaBrice" xlink:href="img/21D8ADDA73CC09A6.png" transform="matrix(1 0 0 1 247.5 1055)"></image><image style="overflow:visible;enable-background:new ;" width="186" height="376" id="_x31_1-B-JayLandsman" xlink:href="img/21D8ADDA73CC09A7.png" transform="matrix(1 0 0 1 1983.5 727)"></image><image style="overflow:visible;enable-background:new ;" width="186" height="376" id="_x31_1-A-JayLandsman" xlink:href="img/21D8ADDA73CC09DC.png" transform="matrix(1 0 0 1 1983.5 727)"></image><image style="overflow:visible;enable-background:new ;" width="109" height="247" id="_x31_2-B-AvonBarksdale" xlink:href="img/21D8ADDA73CC09DD.png" transform="matrix(1 0 0 1 444.5 1150)"></image><image style="overflow:visible;enable-background:new ;" width="109" height="247" id="_x31_2-A-AvonBarksdale" xlink:href="img/21D8ADDA73CC09DE.png" transform="matrix(1 0 0 1 444.5 1150)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="190" id="_x31_3-B-BeadieRussell" xlink:href="img/21D8ADDA73CC09E3.png" transform="matrix(1 0 0 1 1577.5 1485)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="197" id="_x31_3-A-BeadieRussell" xlink:href="img/21D8ADDA73CC09E4.png" transform="matrix(1 0 0 1 1569.5 1478)"></image><image style="overflow:visible;enable-background:new ;" width="139" height="350" id="_x31_4-B-WilliamRawls" xlink:href="img/21D8ADDA73CC09E5.png" transform="matrix(1 0 0 1 1688.5 1409)"></image><image style="overflow:visible;enable-background:new ;" width="139" height="351" id="_x31_4-A-WilliamRawls" xlink:href="img/21D8ADDA73CC09E7.png" transform="matrix(1 0 0 1 1688.5 1408)"></image><image style="overflow:visible;enable-background:new ;" width="99" height="194" id="_x31_5-B-NickSobotka" xlink:href="img/21D8ADDA73CC09FD.png" transform="matrix(1 0 0 1 309.5 1679)"></image><image style="overflow:visible;enable-background:new ;" width="99" height="194" id="_x31_5-A-NickSobotka" xlink:href="img/21D8ADDA73CC09C0.png" transform="matrix(1 0 0 1 309.5 1679)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="309" id="_x31_6-B-ClarenceRoyce" xlink:href="img/21D8ADDA73CC09C6.png" transform="matrix(1 0 0 1 1179.5 1548)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="324" id="_x31_6-A-ClarenceRoyce" xlink:href="img/21D8ADDA73CC09CE.png" transform="matrix(1 0 0 1 1179.5 1533)"></image><image style="overflow:visible;enable-background:new ;" width="152" height="217" id="_x31_7-B-TommyCarcetti" xlink:href="img/21D8ADDA73CC09CA.png" transform="matrix(1 0 0 1 2211.5 1656)"></image><image style="overflow:visible;enable-background:new ;" width="154" height="219" id="_x31_7-A-TommyCarcetti" xlink:href="img/21D8ADDA73CC09CB.png" transform="matrix(1 0 0 1 2209.5 1654)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="152" id="_x31_8-B-ThomasKlebanow" xlink:href="img/21D8ADDA73CC09D0.png" transform="matrix(1 0 0 1 1911.5 1721)"></image><image style="overflow:visible;enable-background:new ;" width="127" height="153" id="_x31_8-A-ThomasKlebanow" xlink:href="img/21D8ADDA73CC09D1.png" transform="matrix(1 0 0 1 1911.5 1720)"></image><image style="overflow:visible;enable-background:new ;" width="137" height="153" id="_x31_9_x5F_B-ScottTempleton" xlink:href="img/21D8ADDA73CC09D2.png" transform="matrix(1 0 0 1 1817.5 1720)"></image><image style="overflow:visible;enable-background:new ;" width="137" height="153" id="_x31_9_x5F_A-ScottTempleton" xlink:href="img/21D8ADDA73CC09D3.png" transform="matrix(1 0 0 1 1817.5 1720)"></image><image style="overflow:visible;enable-background:new ;" width="108" height="193" id="_x32_0-B-ClayDavis" xlink:href="img/21D8ADDA73CC0A2B.png" transform="matrix(1 0 0 1 1583.5 365)"></image><image style="overflow:visible;enable-background:new ;" width="108" height="193" id="_x32_0-A-ClayDavis" xlink:href="img/21D8ADDA73CC0A25.png" transform="matrix(1 0 0 1 1583.5 365)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="236" id="_x32_1-B-ChrisPartlow" xlink:href="img/21D8ADDA73CC0A39.png" transform="matrix(1 0 0 1 407.5 882)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="236" id="_x32_1-A-ChrisPartlow" xlink:href="img/21D8ADDA73CC0A3A.png" transform="matrix(1 0 0 1 407.5 882)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="145" id="_x32_2-B-SnoopPearson" xlink:href="img/21D8ADDA73CC0A3B.png" transform="matrix(1 0 0 1 2009.5 274)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="145" id="_x32_2-A-SnoopPearson" xlink:href="img/21D8ADDA73CC0A38.png" transform="matrix(1 0 0 1 2009.5 274)"></image><image style="overflow:visible;enable-background:new ;" width="66" height="107" id="_x32_3-B-RolandPryzbylewski" xlink:href="img/21D8ADDA73CC0A35.png" transform="matrix(1 0 0 1 152.5 1472)"></image><image style="overflow:visible;enable-background:new ;" width="66" height="107" id="_x32_3-A-RolandPryzbylewski" xlink:href="img/21D8ADDA73CC0A34.png" transform="matrix(1 0 0 1 152.5 1472)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="199" id="_x32_4-B-BodieBroadus" xlink:href="img/21D8ADDA73CC0A4F.png" transform="matrix(1 0 0 1 886.5 1143)"></image><image style="overflow:visible;enable-background:new ;" width="125" height="199" id="_x32_4-A-BodieBroadus" xlink:href="img/21D8ADDA73CC0A28.png" transform="matrix(1 0 0 1 886.5 1143)"></image><image style="overflow:visible;enable-background:new ;" width="67" height="140" id="_x32_5-B-Wallace" xlink:href="img/21D8ADDA73CC0A16.png" transform="matrix(1 0 0 1 1365.5 475)"></image><image style="overflow:visible;enable-background:new ;" width="67" height="140" id="_x32_5-A-Wallace" xlink:href="img/21D8ADDA73CC0A11.png" transform="matrix(1 0 0 1 1365.5 475)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="248" id="_x32_6-B-WilliamBunkMoreland" xlink:href="img/21D8ADDA73CC0A12.png" transform="matrix(1 0 0 1 1945.5 1510)"></image><image style="overflow:visible;enable-background:new ;" width="171" height="248" id="_x32_6-A-WilliamBunkMoreland" xlink:href="img/21D8ADDA73CC0A13.png" transform="matrix(1 0 0 1 1945.5 1510)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="292" id="_x32_7-B-DukieWeems" xlink:href="img/21D8ADDA73CC0A07.png" transform="matrix(1 0 0 1 1476.5 986)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="292" id="_x32_7-A-DukieWeems" xlink:href="img/21D8ADDA73CC0A0D.png" transform="matrix(1 0 0 1 1476.5 986)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="291" id="_x32_8-B-RandyWagstaff" xlink:href="img/21D8ADDA73CC0A0F.png" transform="matrix(1 0 0 1 1418.5 921)"></image><image style="overflow:visible;enable-background:new ;" width="106" height="291" id="_x32_8-A-RandyWagstaff" xlink:href="img/21D8ADDA73CC0A0C.png" transform="matrix(1 0 0 1 1418.5 921)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="246" id="_x32_9-B-MichaelLee" xlink:href="img/21D8ADDA73CC0A74.png" transform="matrix(1 0 0 1 1275.5 941)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="246" id="_x32_9-A-MichaelLee" xlink:href="img/21D8ADDA73CC0A75.png" transform="matrix(1 0 0 1 1275.5 941)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="223" id="_x33_0-B-NamondBrice" xlink:href="img/21D8ADDA73CC0A6E.png" transform="matrix(1 0 0 1 1336.5 910)"></image><image style="overflow:visible;enable-background:new ;" width="115" height="223" id="_x33_0-A-NamondBrice" xlink:href="img/21D8ADDA73CC0A10.png" transform="matrix(1 0 0 1 1336.5 910)"></image><image style="overflow:visible;enable-background:new ;" width="97" height="248" id="_x33_1-B-FrankSobotka" xlink:href="img/21D8ADDA73CC0A1C.png" transform="matrix(1 0 0 1 1783.5 295)"></image><image style="overflow:visible;enable-background:new ;" width="97" height="248" id="_x33_1-A-FrankSobotka" xlink:href="img/21D8ADDA73CC0A04.png" transform="matrix(1 0 0 1 1783.5 295)"></image><image style="overflow:visible;enable-background:new ;" width="90" height="248" id="_x33_2-B-RhondaPearlman" xlink:href="img/21D8ADDA73CC0A05.png" transform="matrix(1 0 0 1 1949.5 108)"></image><image style="overflow:visible;enable-background:new ;" width="90" height="248" id="_x33_2-A-RhondaPearlman" xlink:href="img/21D8ADDA73CC0A02.png" transform="matrix(1 0 0 1 1949.5 108)"></image><image style="overflow:visible;enable-background:new ;" width="117" height="159" id="_x33_3-B-EllisCarver" xlink:href="img/21D8ADDA73CC0A03.png" transform="matrix(1 0 0 1 1957.5 1103)"></image><image style="overflow:visible;enable-background:new ;" width="117" height="159" id="_x33_3-A-EllisCarver" xlink:href="img/21D8ADDA73CC0A00.png" transform="matrix(1 0 0 1 1957.5 1103)"></image><image style="overflow:visible;enable-background:new ;" width="111" height="192" id="_x33_4-B-ThomasHercHauk" xlink:href="img/21D8ADDA73CC0A01.png" transform="matrix(1 0 0 1 1869.5 1086)"></image><image style="overflow:visible;enable-background:new ;" width="111" height="192" id="_x33_4-A-ThomasHercHauk" xlink:href="img/21D8ADDA73CC0A2A.png" transform="matrix(1 0 0 1 1869.5 1086)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="154" id="_x33_5-B-AugustusHaynes" xlink:href="img/21D8ADDA73CC0A20.png" transform="matrix(1 0 0 1 2113.5 1416)"></image><image style="overflow:visible;enable-background:new ;" width="118" height="154" id="_x33_5-A-AugustusHaynes" xlink:href="img/21D8ADDA73CC0A29.png" transform="matrix(1 0 0 1 2113.5 1416)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="184" id="_x33_6-B-LesterFreamon" xlink:href="img/21D8ADDA73CC0AF8.png" transform="matrix(1 0 0 1 1652.5 379)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="184" id="_x33_6-A-LesterFreamon" xlink:href="img/21D8ADDA73CC0AF9.png" transform="matrix(1 0 0 1 1652.5 379)"></image><image style="overflow:visible;enable-background:new ;" width="136" height="200" id="_x33_7-B-CedricDaniels" xlink:href="img/21D8ADDA73CC0AFE.png" transform="matrix(1 0 0 1 2256.5 1335)"></image><image style="overflow:visible;enable-background:new ;" width="136" height="200" id="_x33_7-A-CedricDaniels" xlink:href="img/21D8ADDA73CC0AFF.png" transform="matrix(1 0 0 1 2256.5 1335)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="202" id="_x33_8-B-SlimCharles" xlink:href="img/21D8ADDA73CC0AFC.png" transform="matrix(1 0 0 1 1915.5 870)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="202" id="_x33_8-A-SlimCharles" xlink:href="img/21D8ADDA73CC0AF4.png" transform="matrix(1 0 0 1 1915.5 870)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="159" id="_x33_9-B-HowardBunnyColvin" xlink:href="img/21D8ADDA73CC0AF6.png" transform="matrix(1 0 0 1 1044.5 1714)"></image><image style="overflow:visible;enable-background:new ;" width="133" height="159" id="_x33_9-A-HowardBunnyColvin" xlink:href="img/21D8ADDA73CC0AF3.png" transform="matrix(1 0 0 1 1044.5 1714)"></image><image style="overflow:visible;enable-background:new ;" width="194" height="280" id="_x34_0-B-D_x27_AngeloBarksdale" xlink:href="img/21D8ADDA73CC0AC8.png" transform="matrix(1 0 0 1 809.5 554)"></image><image style="overflow:visible;enable-background:new ;" width="194" height="280" id="_x34_0-A-D_x27_AngeloBarksdale" xlink:href="img/21D8ADDA73CC0ACE.png" transform="matrix(1 0 0 1 809.5 554)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="330" id="_x34_1-B-RolandWee-BayBrice" xlink:href="img/21D8ADDA73CC0AC5.png" transform="matrix(1 0 0 1 600.5 828)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="330" id="_x34_1-A-RolandWee-BayBrice" xlink:href="img/21D8ADDA73CC0AC6.png" transform="matrix(1 0 0 1 600.5 828)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="211" id="_x34_2-B-DennisCuttyWise" xlink:href="img/21D8ADDA73CC0AC7.png" transform="matrix(1 0 0 1 1022.5 242)"></image><image style="overflow:visible;enable-background:new ;" width="129" height="211" id="_x34_2-A-DennisCuttyWise" xlink:href="img/21D8ADDA73CC0AC0.png" transform="matrix(1 0 0 1 1022.5 242)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="264" id="_x34_3-B-KimaGreggs" xlink:href="img/21D8ADDA73CC0AC1.png" transform="matrix(1 0 0 1 1968.5 540)"></image><image style="overflow:visible;enable-background:new ;" width="120" height="264" id="_x34_3-A-KimaGreggs" xlink:href="img/21D8ADDA73CC0AC2.png" transform="matrix(1 0 0 1 1968.5 540)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="161" id="_x34_4-B-ReginaldBubblesCousins" xlink:href="img/21D8ADDA73CC0AC3.png" transform="matrix(1 0 0 1 4.5 1597)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="161" id="_x34_4-A-ReginaldBubblesCousins" xlink:href="img/21D8ADDA73CC0AC4.png" transform="matrix(1 0 0 1 4.5 1597)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="365" id="_x34_5-B-BrotherMouzone" xlink:href="img/21D8ADDA73CC0A9F.png" transform="matrix(1 0 0 1 1596.5 831)"></image><image style="overflow:visible;enable-background:new ;" width="122" height="365" id="_x34_5-A-BrotherMouzone" xlink:href="img/21D8ADDA73CC0AA1.png" transform="matrix(1 0 0 1 1596.5 831)"></image><image style="overflow:visible;enable-background:new ;" width="144" height="283" id="_x34_6-B-JimmyMcNulty" xlink:href="img/21D8ADDA73CC0AA2.png" transform="matrix(1 0 0 1 904.5 527)"></image><image style="overflow:visible;enable-background:new ;" width="144" height="283" id="_x34_6-A-JimmyMcNulty" xlink:href="img/21D8ADDA73CC0AA3.png" transform="matrix(1 0 0 1 904.5 527)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="185" id="_x34_7-B-OmarLittle" xlink:href="img/21D8ADDA73CC0AA4.png" transform="matrix(1 0 0 1 1283.5 1103)"></image><image style="overflow:visible;enable-background:new ;" width="126" height="185" id="_x34_7-A-OmarLittle" xlink:href="img/21D8ADDA73CC0AA7.png" transform="matrix(1 0 0 1 1283.5 1103)"></image></svg>'} />
			</div>
		);
	}
	
	componentDidUpdate() {
		this.props.characters.map((character) => {
			// if the character is located correctly
			if(character.found === true) {
				// hide the overlay
				document.getElementById(character.id).style.display = 'none';
			}	
		});
	}
	
	componentWillReceiveProps(nextProps) {
		var currentCharacter = this.props.activeCharacter;
		var elementPos = this.props.characters.map(function(x) {return x.id; }).indexOf(currentCharacter.id);
		
		// see if state has changed
		if(currentCharacter.found !== nextProps.characters[elementPos].found) {
			if(elementPos < 46 && !this.props.characters[elementPos + 1].found) {
				// go to next character as active
				var nextCharacter = this.props.characters[elementPos + 1];
			} else {
				var index = this.props.characters.map(function(e) { return e.found; }).indexOf(false);
				//var nextCharacter = this.props.characters[index];
				
				document.getElementById('endModal').classList.add("is-active");
			}
			
			this.props.selectCharacter(nextCharacter);
		}
	}
}

function mapStateToProps(state) {
	return {
		characters: state.characters,
		activeCharacter: state.activeCharacter
	};
}

function mapDispatchToProps(dispatch) {
	// Whenever selectCharacter is called, the result should be passed to all reducers
	return bindActionCreators({ boardClicked: boardClicked, selectCharacter: selectCharacter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
