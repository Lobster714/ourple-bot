const editData = require("../../utils/editData");
const { ourpleChannelId, score, highScore, recentMemberId } = require('../../../data.json');

module.exports = (client, message) => {
    let s = parseInt(score);
    let hs = parseInt(highScore);
    let rmi = recentMemberId;
    let acceptedChainMessages = [
        'ourpl',
        'purpl',
        '💜',
        '🟣',
        '🟪',
        'acheron',
        'herta',
        'blackswan',
        'black swan',
        'black-swan',
        'mafuyu',
        'yuzuki',
        'yukari',
        'defoko',
        'kairiki',
        'castorice',
        'robin',
        'jade',
        'ratio',
        'kafka'
    ];
    let content = message.content.toLowerCase();

    if (message.author.bot || message.channelId != ourpleChannelId) return;

    if (acceptedChainMessages.some(msg => content.includes(msg))) {
        if (message.member.id === rmi) {
            message.react('1374917936598225076');

            return;
        }

        s += 1;

        if (hs < s) {
            hs = s;
        }

        rmi = message.member.id;

        message.react('💜');
    } else {
        console.log(`Lost at ${content}`);
        message.react('1374891484175798405');
        message.reply(`<:purplex:1374891484175798405> ${message.member.user} broke the chain at ${s}! Highscore is ${hs}`);
        s = 0;
        rmi = 0;
    }

    editData({
        ourpleChannelId: ourpleChannelId,
        score: s,
        highScore: hs,
        recentMemberId: rmi
    });
};