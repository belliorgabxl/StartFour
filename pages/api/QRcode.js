//ลง module ตามนี้จ้าาาาาาา
//npm i express qrcode promptpay-qr body-parser lodash cors 


import QRCode from 'qrcode';
import generatePayload from 'promptpay-qr';
import _ from 'lodash';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = parseFloat(_.get(req, ["body", "amount"]));
    const mobileNumber = _.get(req, ["body", "mobileNumber"]); 
    const payload = generatePayload(mobileNumber, { amount });
    const option = {
      color: {
        dark: '#000',
        light: '#fff'
      }
    };
    try {
      const url = await generateQRCode(payload, option);
      return res.status(200).json({
        RespCode: 200,
        RespMessage: 'good',
        Result: url
      });
    } catch (error) {
      console.error('generate fail', error);
      return res.status(400).json({
        RespCode: 400,
        RespMessage: 'bad: ' + error.message
      });
    }
  } 
}
async function generateQRCode(payload, option) {
  const url = await QRCode.toDataURL(payload, option);
  return url;
}
