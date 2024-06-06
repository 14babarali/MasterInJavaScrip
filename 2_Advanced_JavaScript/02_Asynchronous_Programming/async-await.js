// Async/Await example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 2000);
    });
}

async function processData() {
    try {
        const data = await fetchData();
        console.log(data); // Output after 2 seconds: Data received
    } catch (error) {
        console.error(error);
    }
}

processData();
