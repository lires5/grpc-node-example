import path from 'path';

require('dotenv').config({path: path.join(__dirname, '../.env')});

const customConfig: {
    port: number;
} = {
    port: Number(process.env.SERVER_PORT || '3001')
};

export default customConfig;
