console.log('person1: shows.ticket');
console.log('person2: shows.ticket');
const premovie = async ()=>{
    const person3Promisetoshowticketwhenwifearrives = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })
    const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('popcorn'),3000);
    })
    const addButter = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('butter'),3000);
    })
    const getColddrinks = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('colddrinks'),3000);
    })
    let ticket = await person3Promisetoshowticketwhenwifearrives;
    console.log(`got the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);
    
    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
    
    let butter = await addButter;
    console.log(`added ${butter}`);
  
    let coldDrinks = await getColddrinks;
    console.log(`bought ${coldDrinks}`);
  
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);
    
    return ticket;
};
premovie().then((t)=>console.log('person4 shows ${t}'));
console.log('person4 shows ticket');
console.log('person5 shows ticket');