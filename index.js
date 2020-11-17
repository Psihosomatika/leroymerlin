const obj = 
{
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    },
   "productName": function(){
       return this['displayedName']["displayedName"]["value"][0];
    },
    "listOfStores": function() {
        return Object.keys(this["stock"]["stocks"]["34"]);
    },
    "maxProduct": function() {
        let maximumNumber = 0;
        let numberStock = 0;
        const shops = this["stock"]["stocks"]["34"];
        for(let keys in shops){
            if (maximumNumber < Number(shops[keys])){
                maximumNumber = Number(shops[keys]);
                numberStock = keys;
            };
        };
        const shopObj = {};
        shopObj[`${numberStock}`] = maximumNumber;
        return shopObj;
    }
}
console.log(obj["productName"]());
console.log(obj["listOfStores"]());
console.log(obj["maxProduct"]());