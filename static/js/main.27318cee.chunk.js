(this["webpackJsonpAlon-Tal-07-07-2020"]=this["webpackJsonpAlon-Tal-07-07-2020"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),l=a(32),c=a(27),u=a(70),s=a(168),m=a(169),p=a(80),y=a(12),h=a(76),d=a(162),g=a(156),f=a(14),T=a(16),U=a.n(T),b=a(23),C=a(20),V=a(170),w=a(163),v=a(171),x=a(47),P=a.n(x),S=a(48),E=a.n(S),N={getCurrentWeather:function(e){return D.apply(this,arguments)},getAutoCompCityList:function(e){return P.a.get(I(e)).then((function(e){return e.data})).catch((function(){E.a.fire({type:"error",title:"You have exceeded 50 AJAX Calls a Day",text:"Please, Try again tomorrow or with another Api Key."})}))},getForecasts:function(e){return L.apply(this,arguments)},getDefaultForecasts:function(){return H[2].DailyForecasts},getDefaultCurrentWeather:function(){return console.log(H[1]),H[1]},getDefaultCity:function(){return H[0]}};function D(){return(D=Object(b.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get(W(t));case 3:return a=e.sent,n=a.data[0],e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),E.a.fire({type:"error",title:"You have exceeded 50 AJAX calls per Day",text:"Please, Try again tomorrow or with another Api Key."}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(){return(L=Object(b.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get(A(t));case 3:return a=e.sent,n=a.data.DailyForecasts,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),E.a.fire({type:"error",title:"You have exceeded 50 AJAX Calls a Day",text:"Please, Try again tomorrow or with another Api Key."}),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var O="rNwjsLkEBTSSNaB7HrTGjfFCY6NoBhbX",W=function(e){return"https://dataservice.accuweather.com/currentconditions/v1/"+e+"?apikey="+O},A=function(e){return"https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+e+"?apikey="+O},I=function(e){return"https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+O+"&q="+e},H=[{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",EnglishName:"Tel Aviv",PrimaryPostalCode:"",Region:{ID:"MEA",LocalizedName:"Middle East",EnglishName:"Middle East"},Country:{ID:"IL",LocalizedName:"Israel",EnglishName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv",EnglishName:"Tel Aviv",Level:1,LocalizedType:"District",EnglishType:"District",CountryID:"IL"},TimeZone:{Code:"IDT",Name:"Asia/Jerusalem",GmtOffset:3,IsDaylightSaving:!0,NextOffsetChange:"2020-10-24T23:00:00Z"},GeoPosition:{Latitude:32.045,Longitude:34.77,Elevation:{Metric:{Value:34,Unit:"m",UnitType:5},Imperial:{Value:111,Unit:"ft",UnitType:0}}},IsAlias:!1,SupplementalAdminAreas:[],DataSets:["AirQualityCurrentConditions","AirQualityForecasts","Alerts","ForecastConfidence"]},{LocalObservationDateTime:"2020-07-11T15:40:00+03:00",EpochTime:1594471200,WeatherText:"Partly sunny",WeatherIcon:3,HasPrecipitation:!1,PrecipitationType:null,IsDayTime:!0,Temperature:{Metric:{Value:31,Unit:"C",UnitType:17},Imperial:{Value:88,Unit:"F",UnitType:18}},MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"},{Headline:{EffectiveDate:"2020-07-11T08:00:00+03:00",EffectiveEpochDate:1594443600,Severity:4,Text:"Pleasant this weekend",Category:"mild",EndDate:null,EndEpochDate:null,MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"},DailyForecasts:[{Date:"2020-07-08T07:00:00+03:00",EpochDate:1594180800,Sun:{Rise:"2020-07-08T05:42:00+03:00",EpochRise:1594176120,Set:"2020-07-08T19:50:00+03:00",EpochSet:1594227e3},Moon:{Rise:"2020-07-08T22:30:00+03:00",EpochRise:1594236600,Set:"2020-07-09T09:35:00+03:00",EpochSet:1594276500,Phase:"WaningGibbous",Age:17},Temperature:{Minimum:{Value:24,Unit:"C",UnitType:17},Maximum:{Value:30.7,Unit:"C",UnitType:17}},RealFeelTemperature:{Minimum:{Value:23,Unit:"C",UnitType:17},Maximum:{Value:35.1,Unit:"C",UnitType:17}},RealFeelTemperatureShade:{Minimum:{Value:23,Unit:"C",UnitType:17},Maximum:{Value:30.6,Unit:"C",UnitType:17}},HoursOfSun:13.1,DegreeDaySummary:{Heating:{Value:0,Unit:"C",UnitType:17},Cooling:{Value:9,Unit:"C",UnitType:17}},AirAndPollen:[{Name:"AirQuality",Value:40,Category:"Good",CategoryValue:1,Type:"Ozone"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:12,Category:"Extreme",CategoryValue:5}],Day:{Icon:1,IconPhrase:"Sunny",HasPrecipitation:!1,ShortPhrase:"Sunny and nice",LongPhrase:"Sunny and nice",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:13,Unit:"km/h",UnitType:7},Direction:{Degrees:292,Localized:"WNW",English:"WNW"}},WindGust:{Speed:{Value:24.1,Unit:"km/h",UnitType:7},Direction:{Degrees:334,Localized:"NNW",English:"NNW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:4},Night:{Icon:34,IconPhrase:"Mostly clear",HasPrecipitation:!1,ShortPhrase:"Mainly clear",LongPhrase:"Mainly clear",PrecipitationProbability:3,ThunderstormProbability:0,RainProbability:3,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:7.4,Unit:"km/h",UnitType:7},Direction:{Degrees:320,Localized:"NW",English:"NW"}},WindGust:{Speed:{Value:20.4,Unit:"km/h",UnitType:7},Direction:{Degrees:3,Localized:"N",English:"N"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:25},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"},{Date:"2020-07-09T07:00:00+03:00",EpochDate:1594267200,Sun:{Rise:"2020-07-09T05:42:00+03:00",EpochRise:1594262520,Set:"2020-07-09T19:50:00+03:00",EpochSet:1594313400},Moon:{Rise:"2020-07-09T23:04:00+03:00",EpochRise:1594325040,Set:"2020-07-10T10:31:00+03:00",EpochSet:1594366260,Phase:"WaningGibbous",Age:18},Temperature:{Minimum:{Value:22.9,Unit:"C",UnitType:17},Maximum:{Value:29.9,Unit:"C",UnitType:17}},RealFeelTemperature:{Minimum:{Value:22.2,Unit:"C",UnitType:17},Maximum:{Value:33.8,Unit:"C",UnitType:17}},RealFeelTemperatureShade:{Minimum:{Value:22.2,Unit:"C",UnitType:17},Maximum:{Value:29.2,Unit:"C",UnitType:17}},HoursOfSun:11.1,DegreeDaySummary:{Heating:{Value:0,Unit:"C",UnitType:17},Cooling:{Value:8,Unit:"C",UnitType:17}},AirAndPollen:[{Name:"AirQuality",Value:41,Category:"Good",CategoryValue:1,Type:"Particle Pollution"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:12,Category:"Extreme",CategoryValue:5}],Day:{Icon:2,IconPhrase:"Mostly sunny",HasPrecipitation:!1,ShortPhrase:"Mostly sunny and beautiful",LongPhrase:"Beautiful with sunshine and patchy clouds",PrecipitationProbability:2,ThunderstormProbability:0,RainProbability:2,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:13,Unit:"km/h",UnitType:7},Direction:{Degrees:289,Localized:"WNW",English:"WNW"}},WindGust:{Speed:{Value:22.2,Unit:"km/h",UnitType:7},Direction:{Degrees:307,Localized:"NW",English:"NW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:21},Night:{Icon:33,IconPhrase:"Clear",HasPrecipitation:!1,ShortPhrase:"Clear",LongPhrase:"Clear",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:7.4,Unit:"km/h",UnitType:7},Direction:{Degrees:5,Localized:"N",English:"N"}},WindGust:{Speed:{Value:18.5,Unit:"km/h",UnitType:7},Direction:{Degrees:3,Localized:"N",English:"N"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:8},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"},{Date:"2020-07-10T07:00:00+03:00",EpochDate:1594353600,Sun:{Rise:"2020-07-10T05:43:00+03:00",EpochRise:1594348980,Set:"2020-07-10T19:50:00+03:00",EpochSet:1594399800},Moon:{Rise:"2020-07-10T23:34:00+03:00",EpochRise:1594413240,Set:"2020-07-11T11:26:00+03:00",EpochSet:1594455960,Phase:"WaningGibbous",Age:19},Temperature:{Minimum:{Value:23.5,Unit:"C",UnitType:17},Maximum:{Value:30.2,Unit:"C",UnitType:17}},RealFeelTemperature:{Minimum:{Value:23.9,Unit:"C",UnitType:17},Maximum:{Value:34.4,Unit:"C",UnitType:17}},RealFeelTemperatureShade:{Minimum:{Value:23.9,Unit:"C",UnitType:17},Maximum:{Value:30.1,Unit:"C",UnitType:17}},HoursOfSun:12.4,DegreeDaySummary:{Heating:{Value:0,Unit:"C",UnitType:17},Cooling:{Value:9,Unit:"C",UnitType:17}},AirAndPollen:[{Name:"AirQuality",Value:45,Category:"Good",CategoryValue:1,Type:"Particle Pollution"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:12,Category:"Extreme",CategoryValue:5}],Day:{Icon:1,IconPhrase:"Sunny",HasPrecipitation:!1,ShortPhrase:"Sunshine and pleasant",LongPhrase:"Sunshine and pleasant",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:13,Unit:"km/h",UnitType:7},Direction:{Degrees:294,Localized:"WNW",English:"WNW"}},WindGust:{Speed:{Value:24.1,Unit:"km/h",UnitType:7},Direction:{Degrees:335,Localized:"NNW",English:"NNW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:5},Night:{Icon:34,IconPhrase:"Mostly clear",HasPrecipitation:!1,ShortPhrase:"Mainly clear",LongPhrase:"Mainly clear",PrecipitationProbability:1,ThunderstormProbability:0,RainProbability:1,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:7.4,Unit:"km/h",UnitType:7},Direction:{Degrees:96,Localized:"E",English:"E"}},WindGust:{Speed:{Value:20.4,Unit:"km/h",UnitType:7},Direction:{Degrees:350,Localized:"N",English:"N"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:29},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"},{Date:"2020-07-11T07:00:00+03:00",EpochDate:159444e4,Sun:{Rise:"2020-07-11T05:43:00+03:00",EpochRise:1594435380,Set:"2020-07-11T19:49:00+03:00",EpochSet:1594486140},Moon:{Rise:null,EpochRise:null,Set:"2020-07-11T11:26:00+03:00",EpochSet:1594455960,Phase:"WaningGibbous",Age:20},Temperature:{Minimum:{Value:25.8,Unit:"C",UnitType:17},Maximum:{Value:30.5,Unit:"C",UnitType:17}},RealFeelTemperature:{Minimum:{Value:25.3,Unit:"C",UnitType:17},Maximum:{Value:35.1,Unit:"C",UnitType:17}},RealFeelTemperatureShade:{Minimum:{Value:25.3,Unit:"C",UnitType:17},Maximum:{Value:30.9,Unit:"C",UnitType:17}},HoursOfSun:11.8,DegreeDaySummary:{Heating:{Value:0,Unit:"C",UnitType:17},Cooling:{Value:10,Unit:"C",UnitType:17}},AirAndPollen:[{Name:"AirQuality",Value:50,Category:"Good",CategoryValue:1,Type:"Particle Pollution"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:12,Category:"Extreme",CategoryValue:5}],Day:{Icon:2,IconPhrase:"Mostly sunny",HasPrecipitation:!1,ShortPhrase:"Mostly sunny and beautiful",LongPhrase:"Mostly sunny and beautiful",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:13,Unit:"km/h",UnitType:7},Direction:{Degrees:287,Localized:"WNW",English:"WNW"}},WindGust:{Speed:{Value:22.2,Unit:"km/h",UnitType:7},Direction:{Degrees:307,Localized:"NW",English:"NW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:12},Night:{Icon:35,IconPhrase:"Partly cloudy",HasPrecipitation:!1,ShortPhrase:"Partly cloudy and very warm",LongPhrase:"Partly cloudy and very warm",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:7.4,Unit:"km/h",UnitType:7},Direction:{Degrees:269,Localized:"W",English:"W"}},WindGust:{Speed:{Value:18.5,Unit:"km/h",UnitType:7},Direction:{Degrees:339,Localized:"NNW",English:"NNW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:31},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"},{Date:"2020-07-12T07:00:00+03:00",EpochDate:1594526400,Sun:{Rise:"2020-07-12T05:44:00+03:00",EpochRise:1594521840,Set:"2020-07-12T19:49:00+03:00",EpochSet:1594572540},Moon:{Rise:"2020-07-12T00:02:00+03:00",EpochRise:1594501320,Set:"2020-07-12T12:19:00+03:00",EpochSet:1594545540,Phase:"Last",Age:21},Temperature:{Minimum:{Value:25.8,Unit:"C",UnitType:17},Maximum:{Value:30.8,Unit:"C",UnitType:17}},RealFeelTemperature:{Minimum:{Value:25.4,Unit:"C",UnitType:17},Maximum:{Value:36,Unit:"C",UnitType:17}},RealFeelTemperatureShade:{Minimum:{Value:25.4,Unit:"C",UnitType:17},Maximum:{Value:32.1,Unit:"C",UnitType:17}},HoursOfSun:12.3,DegreeDaySummary:{Heating:{Value:0,Unit:"C",UnitType:17},Cooling:{Value:10,Unit:"C",UnitType:17}},AirAndPollen:[{Name:"AirQuality",Value:29,Category:"Good",CategoryValue:1,Type:"Particle Pollution"},{Name:"Grass",Value:0,Category:"Low",CategoryValue:1},{Name:"Mold",Value:0,Category:"Low",CategoryValue:1},{Name:"Ragweed",Value:0,Category:"Low",CategoryValue:1},{Name:"Tree",Value:0,Category:"Low",CategoryValue:1},{Name:"UVIndex",Value:12,Category:"Extreme",CategoryValue:5}],Day:{Icon:1,IconPhrase:"Sunny",HasPrecipitation:!1,ShortPhrase:"Sunshine and pleasant",LongPhrase:"Abundant sunshine and pleasant",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:13,Unit:"km/h",UnitType:7},Direction:{Degrees:285,Localized:"WNW",English:"WNW"}},WindGust:{Speed:{Value:22.2,Unit:"km/h",UnitType:7},Direction:{Degrees:295,Localized:"WNW",English:"WNW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:7},Night:{Icon:35,IconPhrase:"Partly cloudy",HasPrecipitation:!1,ShortPhrase:"Partly cloudy and very warm",LongPhrase:"Partly cloudy and very warm",PrecipitationProbability:0,ThunderstormProbability:0,RainProbability:0,SnowProbability:0,IceProbability:0,Wind:{Speed:{Value:7.4,Unit:"km/h",UnitType:7},Direction:{Degrees:279,Localized:"W",English:"W"}},WindGust:{Speed:{Value:16.7,Unit:"km/h",UnitType:7},Direction:{Degrees:319,Localized:"NW",English:"NW"}},TotalLiquid:{Value:0,Unit:"mm",UnitType:3},Rain:{Value:0,Unit:"mm",UnitType:3},Snow:{Value:0,Unit:"cm",UnitType:4},Ice:{Value:0,Unit:"mm",UnitType:3},HoursOfPrecipitation:0,HoursOfRain:0,HoursOfSnow:0,HoursOfIce:0,CloudCover:44},Sources:["AccuWeather"],MobileLink:"http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"}]}];function R(e){return{type:"LOAD_CITY",city:e}}function M(e){return{type:"WEATHER_UPDATE",currentWeather:e}}function k(e){return{type:"FORECASTS_UPDATE",forecasts:e}}function j(e){return{type:"AUTO_COMPLETE_UPDATE",cityList:e}}var F=a(121),z=a(159),G=a(161),_=Object(g.a)({root:{minWidth:150,maxHeight:140,textAlign:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginTop:12}}),q=function(e){var t=_(),a=e.forecast;return i.a.createElement(z.a,{className:t.root},i.a.createElement(G.a,null,i.a.createElement(F.a,{className:t.title,color:"textSecondary",gutterBottom:!0},new Date(a.Date).toString().slice(0,3)),i.a.createElement(F.a,{variant:"h6",component:"h2"},a.Day.IconPhrase),i.a.createElement(F.a,{className:t.pos,color:"textSecondary"},function(){var e=a.Temperature.Maximum.Value,t=a.Temperature.Minimum.Value;return Math.floor(5*((e+t)/2-32)/9).toString()+" \xb0C"}())))},K=a(19),B={query:J,get:function(e,t){return J(e).find((function(e){return e.cityKey===t}))},post:function(e,t){var a=J(e);return a.push(t),Q(e,a),t},put:function(e,t){var a=J(e),n=a.findIndex((function(e){return e.cityKey===t.cityKey}));return a.splice(n,1,t),Q(e,a),t},remove:function(e,t){var a=J(e);a=a.filter((function(e){return e.Key!==t})),Q(e,a)},postMany:function(e,t){var a=J(e);return a.push.apply(a,Object(K.a)(t)),Q(e,a),a}};function J(e){return JSON.parse(localStorage.getItem(e))||[]}function Q(e,t){localStorage.setItem(e,JSON.stringify(t))}var X={query:function(){var e=B.query("favorites");return console.log(e),0===e.length?B.postMany("favorites",e):e},save:function(e){return B.post("favorites",e)},remove:function(e){return B.remove("favorites",e)},get:function(e){return B.get("favorites",e)}};var Y=Object(g.a)((function(e){return{root:{maxWidth:"1550px"},text:{margin:"10px"},button:{width:"200px"},card:{margin:"10px"},weatherText:{margin:"30px 60px 60px 60px",textAlign:"center"},textGrid:{border:"1px solid lightgrey"},"@media (max-width:730px)":{}}})),Z=Object(c.b)((function(e){return{city:e.city,currentWeather:e.currentWeather,forecasts:e.forecasts}}),{})((function(e){var t=Y(),a=e.city,n=e.currentWeather,r=e.forecasts,o=function(e){for(var t=0;t<e.length;t++)if(a.Key===e[t].Key)return!0;return!1};return i.a.createElement(d.a,{container:!0,direction:"column"},i.a.createElement(d.a,{item:!0,container:!0,direction:"row"},i.a.createElement(d.a,{item:!0,xs:1}),i.a.createElement(d.a,{item:!0,container:!0,xs:10,direction:"column",className:t.textGrid},i.a.createElement(F.a,{className:t.text,variant:"h5",component:"h2"},a.LocalizedName),i.a.createElement(F.a,{className:t.text,variant:"h5",component:"h2"},n.Temperature.Metric.Value.toString()+" \xb0C"),i.a.createElement(w.a,{className:t.button,onClick:function(){var e=X.query();if(console.log(a),console.log(e),o(e))X.remove(a.Key);else{var t=Object(f.a)(Object(f.a)(Object(f.a)({},a),n),{},{isFavorite:!0});X.save(t)}},variant:"contained",color:"primary"},"toggle favorites"),i.a.createElement(F.a,{className:t.weatherText,variant:"h2"},n.WeatherText)),i.a.createElement(d.a,{item:!0,xs:1})),i.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center"},r&&r.map((function(e,a){return i.a.createElement(d.a,{item:!0,className:t.card,key:a},i.a.createElement(q,{forecast:e}))}))))})),$=Object(g.a)((function(){return{home:{margin:"50px auto",maxWidth:"1550px",textAlign:"center"},button:{width:"150px"},form:{display:"flex",flexDirection:"column",width:"300px",margin:"50px auto",alignItems:"center"},"@media (max-width:1550px)":{home:{margin:"0px 10px"}},"@media (max-width:450px)":{home:{margin:"0px 20px"}}}})),ee={updateCity:function(e){return function(t){t(R(e))}},setDefaultCity:function(){return function(e){e(R(N.getDefaultCity()))}},updateCurrentWeather:function(e){return function(){var t=Object(b.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.getCurrentWeather(e.Key);case 3:n=t.sent,a(M(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ForecastsAction: err in updateForecasts",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},updateForecasts:function(e){return function(){var t=Object(b.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.getForecasts(e.Key);case 3:n=t.sent,a(k(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ForecastsAction: err in updateForecasts",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getAutoCompCityList:function(e){return function(t){N.getAutoCompCityList(e).then((function(e){t(j(e))})).catch()}},resetAutoCompCityList:function(){return function(e){e(j([]))}},setDefaultForecasts:function(){return function(e){e(k(N.getDefaultForecasts()))}}},te=Object(c.b)((function(e){return{city:e.city,currentWeather:e.currentWeather,autoCompCityList:e.autoCompCityList}}),ee)((function(e){var t=$(),a=Object(n.useState)(N.getDefaultCity()),r=Object(C.a)(a,2),o=r[0],l=r[1];Object(n.useEffect)((function(){function t(){return(t=Object(b.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateForecasts(o);case 2:return t.next=4,e.updateCurrentWeather(o);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var c=function(){var t=Object(b.a)(U.a.mark((function t(a){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===(n=a.target.value)){t.next=6;break}return t.next=4,e.getAutoCompCityList(n);case 4:t.next=7;break;case 6:e.resetAutoCompCityList();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(b.a)(U.a.mark((function t(a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.updateCity(o);case 3:return t.next=5,e.updateCurrentWeather(o);case 5:return t.next=7,e.updateForecasts(o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(d.a,{item:!0,container:!0,direction:"column"},i.a.createElement(d.a,{item:!0},i.a.createElement(v.a,{freeSolo:!0,onChange:function(t,a){var n=Object.values(e.autoCompCityList).find((function(e){return e.LocalizedName===a}));l(Object(f.a)({},n))},disableClearable:!0,options:e.autoCompCityList&&e.autoCompCityList.map((function(e){return e.LocalizedName})),renderInput:function(e){return i.a.createElement("form",{onSubmit:u,className:t.form},i.a.createElement(V.a,Object.assign({},e,{className:t.textField,label:"Search City",margin:"normal",variant:"outlined",onChange:c,InputProps:Object(f.a)(Object(f.a)({},e.InputProps),{},{type:"search"})})),i.a.createElement(w.a,{className:t.button,type:"submit",variant:"contained",color:"primary"},"Check Weather"))}})),i.a.createElement(d.a,{item:!0},i.a.createElement(Z,null)))})),ae=a(165),ne=a(166),ie=a(172),re=a(167),oe=Object(g.a)((function(e){return{toolbar:{height:"70px"},typography:{flex:1,fontSize:"16px",fontWeight:"600"},link:{paddingRight:"40px"},"@media (min-width:1300px)":{toolbar:{height:"80px"}},"@media (max-width:500px)":{link:{paddingRight:"20px"}}}})),le=function(e){var t=oe();return i.a.createElement(ae.a,{position:"static",elevation:0},i.a.createElement(ne.a,{className:t.toolbar},i.a.createElement(F.a,{className:t.typography},"Weather App"),i.a.createElement(ie.a,{component:"nav","aria-label":"main manu"},i.a.createElement(re.a,{href:"/Alon-Tal-07-07-2020/",className:t.link,color:"inherit",variant:"body1"},"Home"),i.a.createElement(re.a,{href:"/Alon-Tal-07-07-2020/#/favorites",className:t.link,color:"inherit",variant:"body1"},"Favorites"))))},ce=Object(g.a)({root:{minWidth:150,maxHeight:140,textAlign:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginTop:12}}),ue=Object(c.b)((function(e){return{city:e.city,currentWeather:e.currentWeather,favorites:e.favorites}}),{})((function(e){var t=ce(),a=e.favorite;return i.a.createElement(z.a,{className:t.root},i.a.createElement(G.a,null,i.a.createElement(F.a,{className:t.title,color:"textSecondary",gutterBottom:!0},a.LocalizedName),i.a.createElement(F.a,{variant:"h6",component:"h2"},new Date(a.LocalObservationDateTime).toString().slice(0,3)),i.a.createElement(F.a,{className:t.pos,color:"textSecondary"},function(){console.log(a);var e=a.Temperature.Metric.Value;return e=Math.floor(e).toString()+" \xb0C"}()),i.a.createElement(F.a,{className:t.pos,color:"textSecondary"},a.WeatherText)))})),se=Object(g.a)((function(e){return{root:{maxWidth:"1550px"},text:{margin:"10px"},card:{margin:"10px"},noFavText:{marginTop:"20px"},weatherText:{margin:"30px 60px 60px 60px",textAlign:"center"},textGrid:{border:"1px solid lightgrey"},"@media (max-width:730px)":{}}})),me=function(e){var t=se(),a=X.query();return i.a.createElement(d.a,{container:!0,direction:"column"},i.a.createElement(d.a,{container:!0,item:!0,direction:"row",justify:"center",alignItems:"center"},a&&a.length>0&&a.map((function(e,a){return i.a.createElement(d.a,{item:!0,className:t.card,key:a},i.a.createElement(ue,{favorite:e}))})),(!a||0===a.length)&&i.a.createElement(F.a,{className:t.noFavText},"No Favorite Cities.")))},pe=Object(h.a)(),ye=Object(g.a)((function(e){return{}}));var he=function(e){return ye(),i.a.createElement(d.a,{container:!0,direction:"column"},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(le,null)),i.a.createElement(d.a,{item:!0,container:!0,xs:12},i.a.createElement(p.a,{history:pe,basename:"/Alon-Tal-07-07-2020"},i.a.createElement(y.c,null,i.a.createElement(y.a,{path:"/#/favorites",component:me,exact:!0}),i.a.createElement(y.a,{path:"/",component:te,exact:!0})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de,ge=a(13),fe=a(79),Te=a(78),Ue=a.n(Te),be=a(77),Ce={fontFamily:"NeueHaasDisplay",fontStyle:"normal",fontDisplay:"swap",fontWeight:400,src:"\n  local('NeueHaasDisplay'),\n    local('NeueHaasDisplay-Roman'),\n    url(".concat(a.n(be).a,") format('woff')\n  "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},Ve=Object(fe.a)({breakpoints:{values:{xs:0,sm:600,md:800,lg:960,xl:1920}},palette:{primary:{main:"#1976d2"},secondary:{main:Ue.a[500]}},spacing:8,typography:{fontFamily:["NeueHaasDisplay"].join(","),h1:{fontSize:"60px",fontWeight:"400",lineHeight:"75px"},h2:{fontSize:"50px",fontWeight:"400"},h3:{fontSize:"17px",fontWeight:"400",lineHeight:"20px"},h4:{fontSize:"13px"},subtitle1:{fontSize:"40px",fontWeight:"400",lineHeight:"50px"}},overrides:{MuiCssBaseline:{"@global":{"@font-face":[Ce]}}}});Ve.typography.h1=Object(f.a)(Object(f.a)({},Ve.typography.h1),{},(de={paddingLeft:"50px"},Object(ge.a)(de,Ve.breakpoints.down("lg"),{paddingLeft:"50px",paddingRight:"20px"}),Object(ge.a)(de,"@media (max-width:735px)",{fontSize:"8.9vw",paddingLeft:"10px",lineHeight:"10vw",padding:"0px"}),Object(ge.a)(de,"@media (max-width:500px)",{fontSize:"11.6vw",lineHeight:"13.5vw",padding:"0px"}),de));var we=Ve,ve={city:{Key:"215854",LocalizedName:"Tel Aviv"},currentWeather:{Temperature:{Metric:{Value:"--"}}},forecasts:[],autoCompCityList:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD_CITY":return Object(f.a)(Object(f.a)({},e),{},{city:t.city});case"WEATHER_UPDATE":return Object(f.a)(Object(f.a)({},e),{},{currentWeather:Object(f.a)({},t.currentWeather)});case"AUTO_COMPLETE_UPDATE":return Object(f.a)(Object(f.a)({},e),{},{autoCompCityList:t.cityList});case"FORECASTS_UPDATE":return Object(f.a)(Object(f.a)({},e),{},{forecasts:Object(K.a)(t.forecasts)});default:return e}},Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,Se=Object(l.d)(xe,Pe(Object(l.a)(u.a)));o.a.render(i.a.createElement(s.a,{theme:we},i.a.createElement(m.a,null),i.a.createElement(c.a,{store:Se},i.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a.p+"static/media/NeueHaasDisplay-Roman.127d6b3d.woff"},91:function(e,t,a){e.exports=a(119)}},[[91,1,2]]]);
//# sourceMappingURL=main.27318cee.chunk.js.map