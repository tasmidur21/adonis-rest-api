export default class LocaleValidator{
    schema:any;
    data:any;
    message:any;
    static defaultLocale:string='en';
    messageClassPath=``
    constructor(schema:any,data:any,message?:any) {
      this.schema=schema;
      this.data=data;
      this.message=message
    }

    static setLocale(locale:string){
        this.defaultLocale=locale;
    }

    static messages():any{
        return {
            required: '{{ field }} is required to sign up',
            enumSet: 'The value of {{ field }} must be in {{ options.choices }}',
        }
    }

    

}