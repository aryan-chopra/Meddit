import {Client,Account,Databases} from 'appwrite'
const client = new Client();
Client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6643af6a0009233fb4dd");
export const account = new Account(client);

//databases
export const databases = new Databases(client,"6643b6d00013f0ed1900")