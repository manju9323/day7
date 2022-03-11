var country = [{"name":"Afghanistan","code":"AF","id":1,"phone":93},
        {"name":"Armenia","code":"AM","id":2,"phone":374},
        {"name":"Azerbaijan","code":"AZ","id":3,"phone":994},
        {"name":"Bahrain","code":"BH","id":4,"phone":973},
        {"name":"Bangladesh","code":"BD","id":5,"phone":880},
        {"name":"Bhutan","code":"BT","id":6,"phone":975},
        {"name":"British Indian Ocean Territory","code":"IO","id":7,"phone":246},
        {"name":"Brunei Darussalam","code":"BN","id":8,"phone":673},
        {"name":"Cambodia","code":"KH","id":9,"phone":855},
        {"name":"China","code":"CN","id":10,"phone":86},
        {"name":"Christmas Island","code":"CX","id":11,"phone":61},
        {"name":"Cocos (Keeling) Islands","code":"CC","id":12,"phone":672},
        {"name":"Cyprus","code":"CY","id":13,"phone":357},
        {"name":"Georgia","code":"GE","id":14,"phone":995},
        {"name":"Hong Kong","code":"HK","id":15,"phone":852},
        {"name":"India","code":"IN","id":16,"phone":91},
        {"name":"Indonesia","code":"ID","id":17,"phone":62},
        {"name":"Iran, Islamic Republic of","code":"IR","id":18,"phone":98},
        {"name":"Iraq","code":"IQ","id":19,"phone":964},
        {"name":"Israel","code":"IL","id":20,"phone":972},
        {"name":"Japan","code":"JP","id":21,"phone":81},
        {"name":"Jordan","code":"JO","id":22,"phone":962},
        {"name":"Kazakhstan","code":"KZ","id":23,"phone":7},
        {"name":"Korea, Democratic People's Republic of","code":"KP","id":24,"phone":850},
        {"name":"Korea, Republic of","code":"KR","id":25,"phone":82},
        {"name":"Kuwait","code":"KW","id":26,"phone":965},
        {"name":"Kyrgyzstan","code":"KG","id":27,"phone":996},
        {"name":"Lao People's Democratic Republic","code":"LA","id":28,"phone":856},
        {"name":"Lebanon","code":"LB","id":29,"phone":961},
        {"name":"Macao","code":"MO","id":30,"phone":853},
        {"name":"Malaysia","code":"MY","id":31,"phone":60},
        {"name":"Maldives","code":"MV","id":32,"phone":960},
        {"name":"Mongolia","code":"MN","id":33,"phone":976},
        {"name":"Myanmar","code":"MM","id":34,"phone":95},
        {"name":"Nepal","code":"NP","id":35,"phone":977},
        {"name":"Oman","code":"OM","id":36,"phone":968},
        {"name":"Pakistan","code":"PK","id":37,"phone":92},
        {"name":"Palestinian Territory, Occupied","code":"PS","id":38,"phone":970},
        {"name":"Philippines","code":"PH","id":39,"phone":63},
        {"name":"Qatar","code":"QA","id":40,"phone":974},
        {"name":"Russian Federation","code":"RU","id":41,"phone":70},
        {"name":"Saudi Arabia","code":"SA","id":42,"phone":966},
        {"name":"Singapore","code":"SG","id":43,"phone":65},
        {"name":"Sri Lanka","code":"LK","id":44,"phone":94},
        {"name":"Syrian Arab Republic","code":"SY","id":45,"phone":963},
        {"name":"Taiwan, Province of China","code":"TW","id":46,"phone":886},
        {"name":"Tajikistan","code":"TJ","id":47,"phone":992},
        {"name":"Thailand","code":"TH","id":48,"phone":66},
        {"name":"Timor-Leste","code":"TL","id":49,"phone":670},
        {"name":"Turkey","code":"TR","id":50,"phone":90},
        {"name":"Turkmenistan","code":"TM","id":51,"phone":7370},
        {"name":"United Arab Emirates","code":"AE","id":52,"phone":971},
        {"name":"Uzbekistan","code":"UZ","id":53,"phone":998},
        {"name":"Viet Nam","code":"VN","id":54,"phone":84},
        {"name":"Yemen","code":"YE","id":56,"phone":967},
    ]
//country.forEach((i)=>{console.log(`name ${i.//name}`)})
let asia=country.filter((value)=>{ return value.id<55;})
asia.forEach((i)=>{console.log(`name ${i.name}`)})
//all the country of asia using filter function
//o/p

//Output:
/*
name Afghanistan
name Armenia
name Azerbaijan
name Bahrain
name Bangladesh
name Bhutan
name British Indian Ocean Territory
name Brunei Darussalam
name Cambodia
name China
name Christmas Island
name Cocos (Keeling) Islands
name Cyprus
name Georgia
name Hong Kong
name India
name Indonesia
name Iran, Islamic Republic of
name Iraq
name Israel
name Japan
name Jordan
name Kazakhstan
name Korea, Democratic People's Republic of
name Korea, Republic of
name Kuwait
name Kyrgyzstan
name Lao People's Democratic Republic
name Lebanon
name Macao
name Malaysia
name Maldives
name Mongolia
name Myanmar
name Nepal
name Oman
name Pakistan
name Palestinian Territory, Occupied
name Philippines
name Qatar
name Russian Federation
name Saudi Arabia
name Singapore
name Sri Lanka
name Syrian Arab Republic
name Taiwan, Province of China
name Tajikistan
name Thailand
name Timor-Leste
name Turkey
name Turkmenistan
name United Arab Emirates
name Uzbekistan
name Viet Nam
*/