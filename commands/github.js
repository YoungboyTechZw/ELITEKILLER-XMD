async function githubCommand(sock, chatId) {
    const repoInfo = `*ELITEKILLER-XMD*

*📂 GitHub Repository:*
https://github.com/YoungboyTechZw/ELITEKILLER-XMD/fork

*📢 Official Channel:*
https://whatsapp.com/channel/0029Vb6d0LyFy72HEaYrP53K


I Hope you liked it

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363330180223606@newsletter',
                    newsletterName: 'ELITEKILLER-XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 