// массив объекта

// const friends = [
//   { name: "AAA", online: "falce" },
//   { name: "BBB", online: "true" },
//   { name: "CCC", online: "true" },
//   { name: "DDD", online: "falce" },
// ];

// console.table(friends);
// for (const friend of friends) {
//     console.log(friend);
//     friend.newprop = 555;
//     }
// console.table(friends);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2135,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.name = "Henry Sibola";
// apartment.tags = "trusted";

// console.table(apartment);

// const aptRating = apartment.rating;
// console.log(aptRating);

// const aptDescr = apartment.descr;
// console.log(aptDescr);

// const aptPrice = apartment.price;
// console.log(aptPrice);

// const aptTags = apartment.tags;
// console.log(aptTags);

// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags[0];
// console.log(numberOfTags);

// const firstTag = apartment.tags[1];
// console.log(firstTag);

// const lastTag = apartment.tags.[length-1];
// console.log(lastTag);

// =====================================================

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials.email);
// console.log(credentials.password);

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {


//   if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
//   }
// }


// =============

// function countProps(object) {
//   let propCount = 0;
 
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }


// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));







// 
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {

//     values.push(apartment[key]);
// }

// console.log(keys);


// function countProps(object) {

//   let propCount = 0;
//   const keyObject = Object.keys(object);

//   for (const key of keyObject) {
//     propCount += 1;
//   }

//   return propCount;

// }

// console.log(keys);











