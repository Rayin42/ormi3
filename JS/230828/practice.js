const BASE_URL = "http://test.api.weniv.co.kr/";
const mainContainer = document.getElementById("main");

function createProductCard(imgUrl, price, productName, onClick) {
    const $productCard = document.createElement("div");
    const $productName = document.createElement("strong");
    const $price = document.createElement("span");
    const $thumbnailImg = document.createElement("img");

    $thumbnailImg.src = imgUrl;
    $price.innerText = price + "원";
    $productName.innerText = productName;
    $productCard.append($productName, $price);
    $productCard.addEventListener("click", onClick);

    return $productCard;
}

function createProductDetail(imgUrl) {
    const $productDetail = document.createElement("img");
    $productDetail.src = imgUrl;
    return $productDetail;
}

async function main() {
    const productsContainer = document.createElement("div");
    productsContainer.id = "products";
    const detailContainer = document.createElement("div");
    detailContainer.id = "detail";
    mainContainer.appendChild(productsContainer);
    mainContainer.appendChild(detailContainer);

    const res = await fetch(BASE_URL + "mall")
    const json = await res.json();
    json.forEach(data => {
        const productId = data.id;
        const productImgUrl = BASE_URL + data.thumbnailImg;
        const productName = data.productName;
        const price = data.price;
        const onClick = async (e) => {           
            detailContainer.innerHTML = "";
            const res = await fetch(BASE_URL + "mall/" + productId); 
            const json = await res.json();

            json.detailInfoImage.forEach((imgUrl)=>{
                const detailImgUrl = BASE_URL+imgUrl;
                const $productDetail = createProductDetail(detailImgUrl);
                detailContainer.appendChild($productDetail);
            })
        }
        const $productCard = createProductCard(productImgUrl, price, productName, onClick)
        productsContainer.appendChild($productCard);
    });
}
main();