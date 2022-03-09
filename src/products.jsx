const minMax = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  } 

const randomGender = () => {
    let num = minMax(0, 100);

    return num > 50 ? 'men' : 'women'
}

const products = [
    {
        _id: Math.floor(Math.random()),
        user: 'detailfrosty',
        title: 'I will create a whiteboard video animation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
},
    {
        _id: Math.floor(Math.random()),
        user: 'studypath',
        title: 'I will create a premium whiteboard animation explainer video',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'federaltortoise',
        title: 'I will whiteboard animations explainer videos ad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'bottlefearless',
        title: 'I will record virtuoso accordion in all styles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'remembertofu',
        title: 'I will compose and record top quality violin and viola and deliver in 48h',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'thatfell',
        title: 'I will create an animated whiteboard animation video',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'endcityethereal',
        title: 'I will create a custom whiteboard animation explainer video',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'flairheadsubtract',
        title: 'I will create jingles in spanish or english for your brand',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'pertown',
        title: 'Make a professional clarinet solo or part',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    },
    {
        _id: Math.floor(Math.random()),
        user: 'clearwingmolecule',
        title: 'Record cleanest classical and acoustic guitar ever',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        price: Math.floor(Math.random() * 200),
        thumbnailUrl: `https://randomuser.me/api/portraits/thumb/${randomGender()}/${minMax(0, 90)}.jpg`
    }]

    export default products;