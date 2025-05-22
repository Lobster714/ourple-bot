const editData = require("../../utils/editData");
const { ourpleChannelId } = require('../../../data.json');

module.exports = {
    name: 'reset',
    description: 'Resets the data!',
    devOnly: true,
    // testOnly: Boolean
    // options: Object[],

    callback: (client, interaction) => {
        editData({
            ourpleChannelId: ourpleChannelId,
            score: 0,
            highScore: 0,
            recentMemberId: 0
        });

        interaction.reply({
            content: 'Reset the data!',
        });
    },
};