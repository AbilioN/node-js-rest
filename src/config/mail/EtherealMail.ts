import nodemailer from 'nodemailer';


interface ISendMail {
    to :  string;
    body : string;
}
export default class EtherealMail 
{

    static async sendEmail( { to, body } : ISendMail) : Promise <void>
    {
        const account = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port : account.smtp.port,
            secure : account.smtp.secure,
            auth : {
                user : account.user,
                pass : account.pass
            }

        });

        const message = await transporter.sendMail({
            from : 'abilion@apitype.com.br',
            to,
            subject : 'Password Recorvery',
            text: body
        });

        console.log(' Message sent : %s' , message.messageId);

        console.log('Preview URL : %s' , nodemailer.getTestMessageUrl(message));
    }
}