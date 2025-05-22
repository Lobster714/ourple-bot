const editData = require("../../utils/editData");
const { score, highScore, recentMemberId } = require('../../../data.json');

module.exports = {
    name: 'channel',
    description: 'Sets ourple channel!',
    devOnly: true,
    // testOnly: Boolean
    // options: Object[],

    callback: (client, interaction) => {
        editData({
            ourpleChannelId: interaction.channelId,
            score: score,
            highScore: highScore,
            recentMemberId: recentMemberId
        });

        interaction.reply({
            content: `Set ourple channel to <#${interaction.channelId}>.`,
        });
    },
};