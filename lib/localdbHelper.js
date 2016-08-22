
var Utility = require('./utility');
var SQLite = require('react-native-sqlite-storage');

var database_name = "Test.db";
var database_version = "1.0";
var database_displayname = "SQLite Test Database";
var database_size = 200000;
var db;

const imageUrls = [
    "http://www.koalabroker.it/wp-content/uploads/2015/08/testimonianza-donna.png",
    "http://www.biometrisches-passbild.net/wp-content/uploads/2015/01/favicon-big.png",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKo5-7RMKQpARd9050kzYk6yhk467RqWNpPsWBZhy1_bkU0Z_c",
    "https://lh3.googleusercontent.com/--AC5_SAjF1E/AAAAAAAAAAI/AAAAAAAAAAA/Qey-dZt3xRo/photo.jpg",
    "https://wpcdn.voximplant.com/wp-content/uploads/2015/08/1440788917_supportmale.png",
    "https://cdn2.iconfinder.com/data/icons/professions/512/user_hippy_boy-512.png",
    "http://www.theavatarportal.org/forum/download/file.php?avatar=5902_1299528749.jpg",
    "http://real-style.com.ua/wp-content/uploads/2016/03/matureman1-512.png",
    "http://sambigbyonline.com/wp-content/uploads/2015/04/avatar.png",
    "https://esc.vn/wp-content/uploads/2016/03/avatar.png",
    "http://www.englishclubpro.com/uploads/5/4/6/6/54660745/1807266_orig.png",
    "http://www.julisudi.com/images/julisudi-webdesigner-avatar.png",
    "https://freeiconshop.com/files/edd/person-outline-filled.png",
    "http://www.rbb.pt/imgrbb/equipa/luisbarata.png",
    "http://www.newyorker.com/wp-content/uploads/2014/12/Finnegan.jpg",
    "https://cdn0.iconfinder.com/data/icons/iconshock_guys/128/andrew.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/l01.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/e05.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/a03.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/o03.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/fa01.png",
    "http://findicons.com/files/icons/1072/face_avatars/300/i04.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-G3-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-F5-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-B2-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-M2-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-N4-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-N1-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-G1-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L5-icon.png",
    "https://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/kdm/user_male.png",
    "https://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/kdm/user_female.png",
    "https://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/apps/babelfish.png",
    "https://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/apps/penguin.png",
    "https://cdn1.iconfinder.com/data/icons/CrystalClear/128x128/apps/gadu.png",
    "https://cdn2.iconfinder.com/data/icons/business-persons-flat-1/512/person_4-128.png",
    "https://cdn2.iconfinder.com/data/icons/business-persons-flat-1/512/person_9-128.png",
    "https://cdn2.iconfinder.com/data/icons/crystalproject/128x128/apps/personal.png",
    "https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/128/person-man.png"
];

const commonNames = [
    'Emma Noah',
    'Olivia Liam',
    'Sophia Mason',
    'Ava Jacob',
    'Isabella William',
    'Mia Ethan',
    'Abigail James',
    'Emily Alexander',
    'Charlotte Michael',
    'Harper Benjamin',
    'Madison Elijah',
    'Amelia Daniel',
    'Elizabeth Aiden',
    'Sofia Logan',
    'Evelyn Matthew',
    'Avery Lucas',
    'Chloe Jackson',
    'Ella David',
    'Grace Oliver',
    'Victoria Jayden',
    'Aubrey Joseph',
    'Scarlett Gabriel',
    'Zoey Samuel',
    'Addison Carter',
    'Lily Anthony',
    'Lillian John',
    'Natalie Dylan',
    'Hannah Luke',
    'Aria Henry',
    'Layla Andrew',
    'Brooklyn Isaac',
    'Alexa Christopher',
    'Zoe Joshua',
    'Penelope Wyatt',
    'Riley Sebastian',
    'Leah Owen',
    'Audrey Caleb',
    'Savannah Nathan',
    'Allison Ryan',
    'Samantha Jack',
    'Nora Hunter',
    'Skylar Levi',
    'Camila Christian',
    'Anna Jaxon',
    'Paisley Julian',
    'Ariana Landon',
    'Ellie Grayson',
    'Aaliyah Jonathan',
    'Claire Isaiah ',
    'Violet Charles ',
    'Stella Thomas',
    'Sadie Aaron',
    'Mila Eli',
    'Gabriella Connor',
    'Lucy Jeremiah',
    'Arianna Cameron',
    'Kennedy Josiah',
    'Sarah Adrian',
    'Madelyn Colton',
    'Eleanor Jordan',
    'Kaylee Brayden',
    'Caroline Nicholas',
    'Hazel Robert',
    'Hailey Angel',
    'Genesis Hudson',
    'Kylie Lincoln',
    'Autumn Evan',
    'Piper Dominic',
    'Maya Austin',
    'Nevaeh Gavin',
    'Serenity Nolan',
    'Peyton Parker',
    'Mackenzie Adam',
    'Bella Chase',
    'Eva Jace',
    'Taylor Ian',
    'Naomi Cooper',
    'Aubree Easton',
    'Aurora Kevin',
    'Melanie Jose',
    'Lydia Tyler',
    'Brianna Brandon',
    'Ruby Asher',
    'Katherine Jaxson',
    'Ashley Mateo',
    'Alexis Jason',
    'Alice Ayden',
    'Cora Zachary',
    'Julia Carson',
    'Madeline Xavier',
    'Faith Leo',
    'Annabelle Ezra',
    'Alyssa Bentley',
    'Isabelle Sawyer',
    'Vivian Kayden',
    'Gianna Blake',
    'Quinn Nathaniel',
    'Clara Ryder',
    'Reagan Theodore',
    'Khloe Elias',
    'Alexandra Tristan',
    'Hadley Roman',
    'Eliana Leonardo',
    'Sophie Camden',
    'London Brody',
    'Elena Luis',
    'Kimberly Miles',
    'Bailey Micah',
    'Maria Vincent',
    'Luna Justin',
    'Willow Greyson',
    'Jasmine Declan',
    'Kinsley Maxwell',
    'Valentina Juan',
    'Kayla Cole',
    'Delilah Damian',
    'Andrea Carlos',
    'Natalia Max',
    'Lauren Harrison',
    'Morgan Weston',
    'Rylee Brantley',
    'Sydney Braxton',
    'Adalynn Axel',
    'Mary Diego',
    'Ximena Abel',
    'Jade Wesley',
    'Liliana Santiago',
    'Brielle Jesus',
    'Ivy Silas',
    'Trinity Giovanni',
    'Josephine Bryce',
    'Adalyn Jayce',
    'Jocelyn Bryson',
    'Emery Alex',
    'Adeline Everett',
    'Jordyn George',
    'Ariel Eric',
    'Everly Ivan',
    'Lilly Emmett',
    'Paige Kaiden',
    'Isla Ashton',
    'Lyla Kingston',
    'Makayla Jonah',
    'Molly Jameson',
    'Emilia Kai',
    'Mya Maddox',
    'Kendall Timothy',
    'Melody Ezekiel',
    'Isabel Ryker',
    'Brooke Emmanuel',
    'Mckenzie Hayden',
    'Nicole Antonio',
    'Payton Bennett',
    'Margaret Steven',
    'Mariah Richard',
    'Eden Jude',
    'Athena Luca',
    'Amy Edward',
    'Norah Joel',
    'Londyn Victor',
    'Valeria Miguel',
    'Sara Malachi',
    'Aliyah King',
    'Angelina Patrick',
    'Gracie Kaleb',
    'Rose Bryan',
    'Rachel Alan',
    'Juliana Marcus',
    'Laila Preston',
    'Brooklynn Abraham',
    'Valerie Calvin',
    'Alina Colin',
    'Reese Bradley',
    'Elise Jeremy',
    'Eliza Kyle',
    'Alaina Graham',
    'Raelynn Grant',
    'Leilani Jesse',
    'Catherine Kaden',
    'Emerson Alejandro',
    'Cecilia Oscar',
    'Genevieve Jase',
];

class LocalDbHelper {
    initializeDB() {
        db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.openCB, this.errorCB);               
        db.executeSql(
            'CREATE TABLE IF NOT EXISTS Person (ID integer primary key, FullName text, Avatar text, PhoneNumber text)',
            [],
            this.openCB,
            this.errorCB
        );
        
        // insert sample data
        //var insertData = {FullName:'Test Guy',PhoneNumber: '0123-456789'};
        // this.insertValue(insertData, this.openCB);
    }

    openCB(){
        console.log('Success');
    }

    errorCB(){
        console.log('Error');
    }

    insertValue(insertData, callbackFunction){
        if(!insertData.Avatar){
            insertData.Avatar = this.getRandomizeAvatar();
        }
        
        var insertId = -1;
        db.executeSql(
            "INSERT INTO Person (FullName, Avatar, PhoneNumber) VALUES (?,?,?)", 
            [insertData.FullName, insertData.Avatar, insertData.PhoneNumber],
            callbackFunction,
            this.errorCB
        );
    }

    getRandomizeAvatar(){
        var imageIndex = Utility.getRandomInt(imageUrls.length);
        return imageUrls[imageIndex];
    }

    getRandomizeName(){
        var nameIndex = Utility.getRandomInt(commonNames.length);
        return commonNames[nameIndex];
    }

    getRandomizePhoneNumber(){
        var phoneNumber = '';
        for(var i = 0; i < 4; i++) {
            var number = Utility.getRandomInt(10);
            phoneNumber += number;
        }
        
        phoneNumber += '-';
        for(var i = 0; i < 7; i++) {
            var number = Utility.getRandomInt(10);
            phoneNumber += number;
        }
        return phoneNumber;
    }

    getTestPersons(length, minID){
        if(length < 1)
            return [];
        var results = [];
        for(var i = 0; i< length; i++){
            var person = {
                ID: (minID + i),
                FullName: this.getRandomizeName(),
                Avatar: this.getRandomizeAvatar(),
                PhoneNumber: this.getRandomizePhoneNumber()
            };

            results.push(person);
        }
        return results;
    }

    getLocalDataRecord(tableName, returnFunc){
        db.executeSql( 
            "SELECT * FROM " + tableName, 
            [], 
            returnFunc,
            this.errorCB
        );

        return 1;
    }

    static getInstance(){
        return new this;
    }
}

export default LocalDbHelper;