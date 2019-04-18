# SOAP-EASY

Created to forget the configuration, based on [SOAP](https://www.npmjs.com/package/soap) library

## Install

``npm i soap-easy``

## How to Use

```javascript
import {SoapClient} from "soap-easy";
...

public someSoap() {
    const soap = new SoapClient("WSDL_URL");
    const query = {
        param1: 1234,
    };
    
    const result = soap.callSerice("serviceFunction", query);
}

```


#### Link

See on [GITHUB](https://github.com/isma90/easy-soap)

See on [NPM](https://www.npmjs.com/package/soap-easy)
