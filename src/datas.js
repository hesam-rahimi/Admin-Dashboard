let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dec",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Mohammad Amin",
    title: "Web Developer",
    img: "images/profile1.png",
  },
  {
    id: 2,
    username: "Sasas Moq",
    title: "Seo Eng",
    img: "images/profile1.png",
  },
  {
    id: 3,
    username: "Zahra Agayi",
    title: "Weblog",
    img: "images/profile1.png",
  },
  {
    id: 4,
    username: "Qadir Yolme",
    title: "Hacker",
    img: "images/profile1.png",
  },
];

const transactions = [
  {
      id: 1,
      customer: 'Qadir Yolme',
      date: '12 Jun 2022',
      amount: 123,
      status: 'Approved',
      img: 'images/profile1.png'
  },
  {
      id: 2,
      customer: 'Amin Saeedi',
      date: '23 Jul 2022',
      amount: 123,
      status: 'Declined',
      img: 'images/profile1.png'
  },
  {
      id: 3,
      customer: 'Mohammad Qol',
      date: '28 May 2022',
      amount: 123,
      status: 'Pending',
      img: 'images/profile1.png'
  },
  {
      id: 4,
      customer: 'Sasan Moq',
      date: '1 Feb 2022',
      amount: 123,
      status: 'Approved',
      img: 'images/profile1.png'
  },
]

let userRows = [
  {
      id: 1,
      username: 'Qadir Yolme',
      avatar: 'images/profile1.png',
      status: 'active',
      transaction: '$129.52',
      email: 'amin@gmail.com'
  },
  {
      id: 2,
      username: 'Amin Saeedi',
      avatar: 'images/profile1.png',
      status: 'non-active',
      transaction: '$110',
      email: 'amin@gmail.com'
  },
  {
      id: 3,
      username: 'Sasan Moq',
      avatar: 'images/profile1.png',
      status: 'active',
      transaction: '$98',
      email: 'amin@gmail.com'
  },
  {
      id: 4,
      username: 'Zahra Agayi',
      avatar: 'images/profile1.png',
      status: 'active',
      transaction: '$0',
      email: 'amin@gmail.com'
  },
  {
      id: 5,
      username: 'Hamze mohammadi',
      avatar: 'images/profile1.png',
      status: 'active',
      transaction: '$55.98',
      email: 'amin@gmail.com'
  }
]

let products = [
  {
      id: 1,
      title: 'Asus',
      avatar: 'images/profile1.png',
      price: "$890"
  },
  {
      id: 2,
      title: 'Acer',
      avatar: 'images/profile1.png',
      price: "$890"
  },
  {
      id: 3,
      title: 'HP',
      avatar: 'images/profile1.png',
      price: "$890"
  },
  {
      id: 4,
      title: 'Dell',
      avatar: 'images/profile1.png',
      price: "$890"
  },
]

const productsData = [
  {
      name: 'Jan',
      sales: 4000,
  },
  {
      name: 'Feb',
      sales: 3000,
  },
  {
      name: 'Mar',
      sales: 5000,
  },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData };
