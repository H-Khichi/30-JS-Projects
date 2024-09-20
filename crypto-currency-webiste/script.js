var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dge = document.getElementById("dogecoin");


    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            btc.innerHTML = data.bitcoin.usd;
            eth.innerHTML = data.ethereum.usd;
            dge.innerHTML = data.dogecoin.usd;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });


