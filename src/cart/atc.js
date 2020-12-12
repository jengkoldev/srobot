const Atc = async (page, target) => {
    await page.evaluate(() => {
        let cookie = document.cookie;
        let from = cookie.indexOf('csrftoken');
        let csrf_list = cookie.substr(from).match(new RegExp('csrftoken' + '=([^;]+)'));
        let csrf = csrf_list[1]; // csrftoken

        fetch("https://shopee.co.id/api/v2/cart/add_to_cart", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": "application/json",
                "if-none-match-": "55b03-18eb36327f12fde2b16a97df96849767",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-api-source": "pc",
                "x-csrftoken": csrf,
                "x-requested-with": "XMLHttpRequest",
                "x-shopee-language": "id",
                "cookie": cookie
            },
            "referrer": "https://shopee.co.id/Samsung-Galaxy-S20-FE-Note-20-S20-Ultra-S10-S10E-S8-S9-Note-10-Lite-Plus-8-9-Pelindung-Lensa-Kamera-Tempered-Glass-9h-Untuk-i.213249483.3231567099",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"quantity\":1,\"checkout\":true,\"update_checkout_only\":false,\"donot_add_quantity\":false,\"source\":\"{\\\"refer_urls\\\":[]}\",\"client_source\":1,\"shopid\":213249483,\"itemid\":3231567099,\"modelid\":16708089298}",
            "method": "POST",
            "mode": "cors"
        })
        .then(data => data)
        .then(data => { console.log(data) })
    });
}

module.exports = Atc;
