import { env } from "process";
import * as soap from "soap";
import { SoapConfig } from "./SoapConfig";

export class SoapClient {

    private readonly wsdlUrl: string;
    private soapConfig: SoapConfig;

    constructor(wsdlUrl: string) {
        this.wsdlUrl = wsdlUrl;
        this.soapConfig = new SoapConfig({
            wsdl_options: {
              strictSSL: false,
              rejectUnauthorized: false,
              secureOptions: env.SSL_OP_NO_TLSv1_2 ? env.SSL_OP_NO_TLSv1_2 : "",
            },
            namespaceArrayElements: false,
          });
    }

    public async callSerice(route: string, query: any): Promise<any> {
        return new Promise((resolve, reject) => {
            soap.createClient(this.wsdlUrl, this.soapConfig.getOptions(), (err, client: any) => {
                if (err) {
                    reject(err);
                }
                client.setSecurity(this.soapConfig.getSslSecurity());
                client[route](query, this.soapConfig.getOptions(), (error: any, result: any) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                });
            });
        });
    }

}
