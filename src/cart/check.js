const Check = async (page, target) => {
    let result = await page.evaluate((target) => {
        let idList = target.split('-i.')[1];
        let ids = idList.split('.');
        let shopId = parseInt(ids[0]);
        let itemId = parseInt(ids[1]);

        console.log(shopId)
        console.log(itemId)

        let cookie = document.cookie;
        let from = cookie.indexOf('csrftoken');
        let csrf_list = cookie.substr(from).match(new RegExp('csrftoken' + '=([^;]+)'));
        let csrf = csrf_list[1]; // csrftoken

        return new Promise(function (resolve, reject) {

            function getInfo(modelId, itemGroupId, addonDealId) {
                console.log('init adalah get info')
                console.log(typeof shopId)
                console.log(itemGroupId)

                fetch("https://shopee.co.id/api/v2/checkout/get", {
                    "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "if-none-match-": "55b03-5e9df5930f7ca0c6dfdece9ed8f70a32",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-api-source": "pc",
                    "x-csrftoken": csrf,
                    "x-requested-with": "XMLHttpRequest",
                    "x-shopee-language": "id",
                    "cookie": document.cookie
                    },
                    "referrer": "https://shopee.co.id/checkout",
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": JSON.stringify({ shoporders: [ { shop: { shopid: shopId }, items: [ { itemid: itemId, modelid: modelId, add_on_deal_id: addonDealId, is_add_on_sub_item: null, item_group_id: itemGroupId, quantity: 1 } ], logistics: { recommended_channelids: null }, buyer_address_data: {}, selected_preferred_delivery_time_slot_id: null } ], selected_payment_channel_data: {}, promotion_data: { use_coins: false, free_shipping_voucher_info: { free_shipping_voucher_id: 0, disabled_reason: '', description: '' }, platform_vouchers: [], shop_vouchers: [], check_shop_voucher_entrances: true, auto_apply_shop_voucher: false }, device_info: { device_id: '', device_fingerprint: '', tongdun_blackbox: '', buyer_payment_info: {} }, tax_info: { tax_id: '' } }),
                    "method": "POST",
                    "mode": "cors"
                })
                .then(data => data.json())
                .then(data => {
                    console.log("ini adalah getInfo");

                    fetch("https://shopee.co.id/api/v2/checkout/place_order", {
                      "headers": {
                        "accept": "application/json",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "content-type": "application/json",
                        "if-none-match-": "55b03-cba853ca8398056eacf243e4db210c97",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-api-source": "pc",
                        "x-csrftoken": csrf,
                        "x-cv-id": "7",
                        "x-requested-with": "XMLHttpRequest",
                        "x-shopee-language": "id",
                        "x-track-id": "85c275b47e42ca8fed833ffc4bd85394d07006b831513e567b20ba9c18692ad7201beab1ee9e8185bf8ca8378a28f1e9a4b97668d6323aa0e342cc8114de35ca"
                      },
                      "referrer": document.cookie,
                      "referrerPolicy": "strict-origin-when-cross-origin",
                      "body": JSON.stringify(data),
                      "method": "POST",
                      "mode": "cors",
                      "credentials": "include"
                    })
                    .then(data => data.json())
                    .then(data => {
                      console.log(data)
                      resolve(true)
                    });
                })
            }

            function addCart(modelId, addonDealId) {
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
                    "referrer": target,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "{\"quantity\":1,\"checkout\":true,\"update_checkout_only\":false,\"donot_add_quantity\":false,\"source\":\"{\\\"refer_urls\\\":[]}\",\"client_source\":1,\"shopid\":"+shopId+",\"itemid\":"+itemId+",\"modelid\":"+modelId+"}",
                    "method": "POST",
                    "mode": "cors"
                })
                .then(data => data.json())
                .then(data => {
                    let isError = data.error;

                    if (isError == 0) {
                        let itemGroupId = data.data.cart_item.item_group_id;
                        getInfo(modelId, itemGroupId, addonDealId);
                    } else {
                        console.log('add to cart error');
                        console.log(data)
                    }
                })
            }

            fetch(`https://shopee.co.id/api/v2/item/get?itemid=${itemId}&shopid=${shopId}`, {
                "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "if-none-match": "22198a1c6227251c54555eb3a2a5c63c",
                "if-none-match-": "55b03-9bf5ff811a9d5e6db47f6990ee2599b9",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-api-source": "pc",
                "x-requested-with": "XMLHttpRequest",
                "x-shopee-language": "id",
                "cookie": document.cookie,
                },
                "referrer": target,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors"
            })
            .then(data => data.json())
            .then(data => {
                let fs = data.item.flash_sale;

                if (fs) {
                    let item = data.item;
                    let models = item.models;
                    let addonDealId = item.add_on_deal_info ? item.add_on_deal_info.add_on_deal_id : 0;

                    let fsPrice = models.find(function (post, index) {
                        if (post.price.toString().indexOf('12000') > -1 && post.stock != 0) {
                            addCart(post.modelid, addonDealId);
                            console.log('flash 12k')
                            console.log(post.price)
                            console.log(post.modelid)
                            return true;
                        } else {
                            console.log('no stock')
                        }
                    });

                    console.log('flash sale')
                } else {
                    console.log("finding fs...")
                }
            });
        });
    }, target); // eval

    console.log(result);
}

module.exports = Check;