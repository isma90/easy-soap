import * as soap from "soap";

interface IOptions {
    wsdl_options: {
        strictSSL: boolean;
        rejectUnauthorized: boolean;
        secureOptions: string;
    };
    namespaceArrayElements: boolean;
}

export class SoapConfig {

    private options: IOptions;
    private sslSecurity: any;

    constructor(options: IOptions) {
        this.options = options;
        this.sslSecurity = new soap.ClientSSLSecurity("", "", "", this.options.wsdl_options);
    }

    public getOptions(): IOptions {
        return this.options;
    }

    public getSslSecurity(): any {
        return this.sslSecurity;
    }

}
