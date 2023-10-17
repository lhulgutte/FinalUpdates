console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie=async ()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })

    const getPopCorn=new Promise((resolve, reject)=>resolve('popcorn'))
    const getButter=new Promise((resolve, reject)=>resolve('butter'))
    const getCoke=new Promise((resolve, reject)=>resolve('coke'))
    let ticket=await promiseWifeBringingTicket;
    let[popcorn,butter, coke]=await Promise.all([getPopCorn,getButter,getCoke]);
    console.log('Wife: I have tickets');
    console.log('Husband: We should go in');
    console.log('Wife: no I am hungry');

    //let popcorn= await getPopCorn;
    console.log(`Husband: I bought ${popcorn} lets go now`);
    console.log(`Wife:I want butter`);
    console.log('Husband: I will get it  for you');

    //let butter=await getButter;
    console.log(`Husband: I bought ${coke} lets go now`);
    console.log(`Wife:lets go we are getting late`);
    console.log('Husband: That is what I was saying');
    console.log(`Husband: I bought ${butter} lets go now`);
    console.log(`Wife:I want coke now`);
    console.log('Husband: not again');

 
    return ticket;
}

preMovie().then((m)=>console.log(m))

console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');