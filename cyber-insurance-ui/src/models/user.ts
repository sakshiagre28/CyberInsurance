import { IPlan } from "./plan";

export interface IUser{
    salutation: string,
    firstName: string,
    lastName : string,
    birthDate : string,
    email : string,
    sendQuoteAt  : string,
    aadhar : string,
    income : string,
    policyStartDate : string,
    policyEndDate : string,
    plan : IPlan,
    zipcode: string,
    isMalwareSelected : boolean,
    quotationNumber: number
}