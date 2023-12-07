export default class Utils {
   static  DEFAULT_PAGE=1;
   static  DEFAULT_PAGE_LIMIT=10;

   static  ROW_STATUS_ACTIVE=`ACTIVE`
   static  ROW_STATUS_IN_ACTIVE=`INACTIVE`
   static  ROW_STATUS_PENDING=`PENDING`

   static  responseBuilder(responseData?:any,message?:String){
          const rawData=JSON.parse(JSON.stringify(responseData));
          const data:any=rawData?.data??responseData;
          const metaData=rawData?.meta??{};
          
          return{
            ...metaData,
            data,
            message
          }
   }
}

