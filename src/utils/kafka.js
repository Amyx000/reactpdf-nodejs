const { Kafka } = require("kafkajs")
const dotenv = require('dotenv');

dotenv.config();

const brokers = process.env.KAFKA_BROKER;
const username = process.env.KAFKA_USER_NAME;
const password = process.env.KAFKA_PASSWORD;


const kafka = new Kafka({
    brokers: [brokers],
    sasl: {
        mechanism: 'scram-sha-256',
        username,
        password,
    },
    ssl: true,
})

const consumer = kafka.consumer({ groupId: 'test-group' })
consumer.connect()

function consumerDisconnect() {
    consumer.disconnect();
}

module.exports = {
    consumer,
    consumerDisconnect,
};
