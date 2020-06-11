window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    getVisitCount();
});

const apiGateway = 'https://0ks1n50x2b.execute-api.us-east-2.amazonaws.com/Prod/visitor/'; 

const getVisitCount = () => {
    console.log('api to get visit count');
    let count = getCountApi();
    document.getElementById('counter').innerText =count;
}

const getCountApi = () => {
    let count;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        console.log('jsn', res.Attributes.visitcount)
        count = res.Attributes.visitcount;
    })
    return count;
}



