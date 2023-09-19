
const emojis = {
    "-": " ",
    "O": "🚪",
    "X": "💣",
    "I": "🎁",
    "PLAYER": "🤖",
    "BOMB_COLLISION": "🔥",
    "GAME_OVER": "🤬",
    "WIN": "🏆",
    "HEART": '❤️',
};
const maps = [];
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
`);
maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
maps.push(`
    XI-----XXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
`);
// maps.push(`
//     O---XXXXXX
//     XXX--XX-XX
//     XXXXX----X
//     XXXXXX--XX
//     XXX-X--XXX
//     XX-XX-XX-X
//     X--X-X--XX
//     XX--X--XXX
//     XX---XX--X
//     XXXXX----I
// `);
