const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');

const streetNumber = ["111", "222", "333", "444", "555", "666"];
const streetName = ["A street", "B street", "C avenue", "D drive", "E court", "F parkway"];
const cityName = ["Abec", "Deet", "Joll", "Houd", "Marn", "Boot", "Wool"];
const stateName = ["NY", "WA", "MA", "CT", "OH"];
const zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"];

const addTemplate = [
  streetNumber, " ", streetName, ", ", cityName, " ", stateName, ", ", zipCode
];

const getRandomElement = (array) => {
  if (array instanceof Array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return array;
}

const getRandomAddress = () =>  addTemplate.map(getRandomElement).join("");

const randomValueBetween = (min, max) => Math.random() * (max - min) + min;

const randomDate = (date1, date2) => {
  var date1 = date1 || '01-01-1970'
  var date2 = date2 || new Date().toLocaleDateString()
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
      return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
  } else{
    return new Date(randomValueBetween(date1, date2)).toLocaleDateString() 
  }
}

const links = [
  "google.com",
  "youtube.com",
  "reddit.com",
  "apple.com"
];

const dataGenerator = () => {
  const bookIdtoAuthorId = uuidv4();
  const generatedDate = randomDate('02/13/2020', '01/01/2000');
  const randIdx = parseInt((Math.random() * links.length), 10);
  return ({
    counter: uuidv4(),
    id: uuidv4(),
    name: uuidv4(),
    email: `${uuidv4()}@gmail.com`,
    phoneNumber: Math.floor(100000000 + Math.random() * 900000000),
    authors: _.range(3).map(() => ({
      id: bookIdtoAuthorId,
      authorName: uuidv4(),
      phoneNumber: Math.floor(100000000 + Math.random() * 900000000),
      address: getRandomAddress(),
    })),
    books: _.range(3).map(() => ({
      id: uuidv4(),
      title: uuidv4(),
      author: bookIdtoAuthorId,
    })),
    boolean: Math.random() < 0.5,
    token: uuidv4(),
    createdAt: new Date(generatedDate).toISOString(),
    url: 'http://' + links[randIdx],
    largeText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Nec sagittis aliquam malesuada bibendum arcu vitae. Aliquam eleifend mi in nulla posuere sollicitudin. Id velit ut tortor pretium. Dui sapien eget mi proin sed libero enim sed faucibus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Magna fringilla urna porttitor rhoncus dolor purus non. Bibendum arcu vitae elementum curabitur. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Enim neque volutpat ac tincidunt vitae semper quis. Lobortis elementum nibh tellus molestie nunc non blandit. Volutpat consequat mauris nunc congue nisi vitae suscipit. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.

Sed odio morbi quis commodo odio aenean. Tincidunt augue interdum velit euismod in. In mollis nunc sed id. At varius vel pharetra vel turpis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Lacus vel facilisis volutpat est velit. Vitae semper quis lectus nulla at. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Gravida cum sociis natoque penatibus et magnis dis. Sed id semper risus in hendrerit gravida rutrum quisque non. Mi in nulla posuere sollicitudin aliquam. Aliquam purus sit amet luctus venenatis. Lacus luctus accumsan tortor posuere ac. Condimentum vitae sapien pellentesque habitant morbi tristique.

Eu facilisis sed odio morbi quis commodo. Vitae et leo duis ut diam quam nulla. Sed velit dignissim sodales ut eu. Egestas maecenas pharetra convallis posuere. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Donec adipiscing tristique risus nec feugiat in fermentum. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Tristique senectus et netus et malesuada fames. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Elementum eu facilisis sed odio morbi quis commodo. Neque gravida in fermentum et sollicitudin ac orci phasellus. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Quam elementum pulvinar etiam non. Et ligula ullamcorper malesuada proin. Suspendisse potenti nullam ac tortor vitae purus faucibus.

Neque egestas congue quisque egestas diam in arcu. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Blandit turpis cursus in hac habitasse platea dictumst. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Id interdum velit laoreet id donec. Suspendisse in est ante in nibh mauris. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Tristique senectus et netus et malesuada fames. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Neque convallis a cras semper auctor neque vitae tempus quam. Proin fermentum leo vel orci porta non pulvinar neque laoreet. A lacus vestibulum sed arcu non odio euismod. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.

Sem nulla pharetra diam sit amet nisl suscipit. Consequat ac felis donec et odio pellentesque diam. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quis auctor elit sed vulputate mi. A pellentesque sit amet porttitor eget. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Enim ut sem viverra aliquet eget sit. Faucibus purus in massa tempor nec feugiat nisl pretium. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Velit aliquet sagittis id consectetur purus ut faucibus. Est ultricies integer quis auctor elit sed vulputate mi. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Amet facilisis magna etiam tempor orci eu lobortis. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec adipiscing tristique risus nec feugiat in fermentum posuere.`
  })
};

module.exports = dataGenerator;