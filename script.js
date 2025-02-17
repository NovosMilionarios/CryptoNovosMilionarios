document.getElementById("connectWallet").addEventListener("click", async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            document.getElementById("walletAddress").innerText = `Carteira: ${accounts[0]}`;
        } catch (error) {
            console.error("Erro ao conectar à MetaMask", error);
        }
    } else {
        alert("MetaMask não está instalado! Baixe em https://metamask.io/");
    }
});
