const characters = [
    { 
        id: '_x30_1-A-RussellStringerBell',
        name: 'Stringer Bell', 
        'avatar': 'img/1.jpg',
        found: false,
        index: 0
    },
    { 
        id: '_x30_2-A-Kenard',
        name: 'Kenard',
        'avatar': 'img/2.jpg',
        found: false,
        index: 1
    },
    { 
        id: '_x30_3-A-MarloStanfield',
        name: 'Marlo Stanfield',
        'avatar': 'img/3.jpg',
        found: false,
        index: 2
    },
    { 
        id: '_x30_4-A-CalvinCheeseWagstaff',
        name: 'Cheese Wagstaff',
        'avatar': 'img/4.jpg',
        found: false,
        index: 3
    },
    { 
        id: '_x30_5-A-MauriceLevy',
        name: 'Maurice Levy',
        'avatar': 'img/5.jpg',
        found: false,
        index: 4
    },
    { 
        id: '_x30_6-A-SpirosVondasVondopoulos',
        name: 'Spiros',
        'avatar': 'img/6.jpg',
        found: false,
        index: 5
    },
    { 
        id: '_x30_7-A-The_Greek',
        name: 'The Greek',
        'avatar': 'img/7.jpg',
        found: false,
        index: 6
    },
    { 
        id: '_x30_8-A-PropositionJoe',
        name: 'Prop Joe',
        'avatar': 'img/8.jpg',
        found: false,
        index: 7
    },
    { 
        id: '_x30_9-A-BriannaBarksdale',
        name: 'Brianna Barksdale',
        'avatar': 'img/9.jpg',
        found: false,
        index: 8
    },
    { 
        id: '_x31_0-A-DeLondaBrice',
        name: "De'Londa Brice",
        'avatar': 'img/10.jpg',
        found: false,
        index: 9
    },
    { 
        id: '_x31_1-A-JayLandsman',
        name: 'Jay Landsman',
        'avatar': 'img/11.jpg',
        found: false,
        index: 10
    },
    { 
        id: '_x31_2-A-AvonBarksdale',
        name: 'Avon Barksdale',
        'avatar': 'img/12.jpg',
        found: false,
        index: 11
    },
    { 
        id: '_x31_3-A-BeadieRussell',
        name: 'Beadie Russell',
        'avatar': 'img/13.jpg',
        found: false,
        index: 12
    },
    { 
        id: '_x31_4-A-WilliamRawls',
        name: 'William Rawls',
        'avatar': 'img/14.jpg',
        found: false,
        index: 13
    },
    { 
        id: '_x31_5-A-NickSobotka',
        name: 'Nick Sobotka',
        'avatar': 'img/15.jpg',
        found: false,
        index: 14
    },
    { 
        id: '_x31_6-A-ClarenceRoyce',
        name: 'Clarence Royce',
        'avatar': 'img/16.jpg',
        found: false,
        index: 15
    },
    { 
        id: '_x31_7-A-TommyCarcetti',
        name: 'Tommy Carcetti',
        'avatar': 'img/17.jpg',
        found: false,
        index: 16
    },
    { 
        id: '_x31_8-A-ThomasKlebanow',
        name: 'Thomas Klebanow',
        'avatar': 'img/18.jpg',
        found: false,
        index: 17
    },
    { 
        id: '_x31_9_x5F_A-ScottTempleton',
        name: 'Scott Templeton',
        'avatar': 'img/19.jpg',
        found: false,
        index: 18
    },
    { 
        id: '_x32_0-A-ClayDavis',
        name: 'Clay Davis',
        'avatar': 'img/20.jpg',
        found: false,
        index: 19
    },
    { 
        id: '_x32_1-A-ChrisPartlow',
        name: 'Chris Partlow',
        'avatar': 'img/21.jpg',
        found: false,
        index: 20
    },
    { 
        id: '_x32_2-A-SnoopPearson',
        name: 'Snoop Pearson',
        'avatar': 'img/22.jpg',
        found: false,
        index: 21
    },
    { 
        id: '_x32_3-A-RolandPryzbylewski',
        name: 'Roland Pryzbylewski',
        'avatar': 'img/23.jpg',
        found: false,
        index: 22
    },
    { 
        id: '_x32_4-A-BodieBroadus',
        name: 'Bodie',
        'avatar': 'img/24.jpg',
        found: false,
        index: 23
    },
    { 
        id: '_x32_6-A-WilliamBunkMoreland',
        name: 'Bunk Moreland',
        'avatar': 'img/26.jpg',
        found: false,
        index: 24
    },
    { 
        id: '_x32_7-A-DukieWeems',
        name: 'Dukie',
        'avatar': 'img/27.jpg',
        found: false,
        index: 25
    },
    { 
        id: '_x32_8-A-RandyWagstaff',
        name: 'Randy Wagstaff',
        'avatar': 'img/28.jpg',
        found: false,
        index: 26
    },
    { 
        id: '_x32_9-A-MichaelLee',
        name: 'Michael Lee',
        'avatar': 'img/29.jpg',
        found: false,
        index: 27
    },
    { 
        id: '_x33_0-A-NamondBrice',
        name: 'Namond Brice',
        'avatar': 'img/30.jpg',
        found: false,
        index: 28
    },
    { 
        id: '_x33_1-A-FrankSobotka',
        name: 'Frank Sobotka',
        'avatar': 'img/31.jpg',
        found: false,
        index: 29
    },
    { 
        id: '_x33_2-A-RhondaPearlman',
        name: 'Rhonda Pearlman',
        'avatar': 'img/32.jpg',
        found: false,
        index: 30
    },
    { 
        id: '_x33_3-A-EllisCarver',
        name: 'Carver',
        'avatar': 'img/33.jpg',
        found: false,
        index: 31
    },
    { 
        id: '_x33_4-A-ThomasHercHauk',
        name: 'Herc',
        'avatar': 'img/34.jpg',
        found: false,
        index: 32
    },
    { 
        id: '_x33_5-A-AugustusHaynes',
        name: 'Augustus Haynes',
        'avatar': 'img/35.jpg',
        found: false,
        index: 33
    },
    { 
        id: '_x33_6-A-LesterFreamon',
        name: 'Lester Freamon',
        'avatar': 'img/36.jpg',
        found: false,
        index: 34
    },
    { 
        id: '_x33_7-A-CedricDaniels',
        name: 'Cedric Daniels',
        'avatar': 'img/37.jpg',
        found: false,
        index: 35
    },
    { 
        id: '_x33_8-A-SlimCharles',
        name: 'Slim Charles',
        'avatar': 'img/38.jpg',
        found: false,
        index: 36
    },
    { 
        id: '_x33_9-A-HowardBunnyColvin',
        name: 'Bunny Colvin',
        'avatar': 'img/39.jpg',
        found: false,
        index: 37
    },
    { 
        id: '_x34_0-A-D_x27_AngeloBarksdale',
        name: "D'Angelo Barksdale",
        'avatar': 'img/40.jpg',
        found: false,
        index: 38
    },
    { 
        id: '_x34_1-A-RolandWee-BayBrice',
        name: 'Wee-Bey',
        'avatar': 'img/41.jpg',
        found: false,
        index: 39
    },
    { 
        id: '_x34_2-A-DennisCuttyWise',
        name: 'Cutty',
        'avatar': 'img/42.jpg',
        found: false,
        index: 40
    },
    { 
        id: '_x34_3-A-KimaGreggs',
        name: 'Kima Greggs',
        'avatar': 'img/43.jpg',
        found: false,
        index: 41
    },
    { 
        id: '_x34_4-A-ReginaldBubblesCousins',
        name: 'Bubbles',
        'avatar': 'img/44.jpg',
        found: false,
        index: 42
    },
    { 
        id: '_x34_5-A-BrotherMouzone',
        name: 'Brother Mouzone',
        'avatar': 'img/45.jpg',
        found: false,
        index: 43
    },
    { 
        id: '_x34_6-A-JimmyMcNulty',
        name: 'Jimmy McNulty',
        'avatar': 'img/46.jpg',
        found: false,
        index: 44
    },
    { 
        id: '_x34_7-A-OmarLittle',
        name: 'Omar Little',
        'avatar': 'img/47.jpg',
        found: false,
        index: 45
    },
    { 
        id: '_x32_5-A-Wallace',
        name: 'Wallace',
        'avatar': 'img/25.jpg',
        found: false,
        index: 46
    }
];

export default function(state = characters, action) {
  switch(action.type) {
    case 'BOARD_CLICKED':
      return state.map((character) => {  // map over the characters, returning a new array
        if (character.id === action.payload.id && character.id === action.payload.activeCharacter) { // if character id matches action id, change that character 
          return {
            ... character,
            found: !character.found 
          }
        } else if(character.id === '_x31_1-A-JayLandsman' && action.payload.id === '_x34_3-A-KimaGreggs' && character.id === action.payload.activeCharacter) {
            return {
                ... character,
                found: !character.found 
              }
        } else if(character.id === '_x30_3-A-MarloStanfield' && action.payload.id === '_x34_1-A-RolandWee-BayBrice' && character.id === action.payload.activeCharacter) {
            return {
                ... character,
                found: !character.found 
              }      
        } else { // if the id doesn't match, return the original character
          return character
        }
      });
    default:
      return state; 
  }
}
