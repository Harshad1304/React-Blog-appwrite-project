import {Client, Account, ID} from 'appwrite';
import conf from '../conf/conf'


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwirteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //another method
                this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return this.account.get()
        } catch (error) {
            console.log(`Appwrite Service :: getCurrentUser :: error ${error}`)
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }catch (error){
            console.log(`Appwrite Service :: logout :: error ${error}`)
        }
    }
}

const authService = new AuthService();

export default authService