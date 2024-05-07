
let arr1 = [1000, 2000, 3000, 4000]

for (let i = 0; i < arr1.length; i++) {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i);
        }, arr1[i]);
    });

    promise1.then((msg) => console.log(msg)).catch((err) => console.log(err));
}

// let url = "abcd";
// async function fetchData(url) {
//     const Data = await axios.get(url);
//     const response =  Data.json();
//     setinfor(response);
// }



// useEffect(() => {
//     fetchData();  
// }, [url])