let statusCode = JSON.stringify({status: 200});
                    let headers = JSON.stringify({headers: {}});
                    let cart_type = JSON.stringify(data.cart_type);
                    let codFee = JSON.stringify(data.shipping_orders[0].cod_fee)
                    let shipping_id = JSON.stringify(data.shipping_orders[0].shipping_id)
                    let tax_payable = JSON.stringify(data.shipping_orders[0].tax_payable)
                    let order_total = JSON.stringify(data.shipping_orders[0].order_total)
                    let buyer_ic_number = JSON.stringify(data.shipping_orders[0].buyer_ic_number)
                    let shopee_shipping_discount_id = JSON.stringify(data.shipping_orders[0].shopee_shipping_discount_id)
                    let selected_logistic_channelid_with_warning = JSON.stringify(data.shipping_orders[0].selected_logistic_channelid_with_warning)
                    let selected_logistic_channelid = JSON.stringify(data.shipping_orders[0].selected_logistic_channelid)
                    let shipping_group_icon = JSON.stringify(data.shipping_orders[0].shipping_group_icon)
                    let buyer_remark = JSON.stringify(data.shipping_orders[0].buyer_remark)
                    let shipping_fee_discount = JSON.stringify(data.shipping_orders[0].shipping_fee_discount)
                    let shipping_group_description = JSON.stringify(data.shipping_orders[0].shipping_group_description)
                    let shoporder_indexes = JSON.stringify(data.shipping_orders[0].shoporder_indexes)
                    let order_total_without_shipping = JSON.stringify(data.shipping_orders[0].order_total_without_shipping)
                    let shipping_fee = JSON.stringify(data.shipping_orders[0].shipping_fee)
                    let selected_preferred_delivery_time_option_id = JSON.stringify(data.shipping_orders[0].selected_preferred_delivery_time_option_id)

                    let disabledCoInfo = JSON.stringify(data.disabled_checkout_info);
                    let timestamp = JSON.stringify(data.timestamp);
                    let coPriceData = JSON.stringify(data.checkout_price_data);
                    let client_id = JSON.stringify(data.client_id);
                    let promotionData = JSON.stringify(data.promotion_data);
                    let dropshippingInfo = JSON.stringify(data.dropshipping_info);
                    let selPayChanData = JSON.stringify(data.selected_payment_channel_data);
                    let shop = JSON.stringify(data.shoporders[0].shop)

                    let amount_detail = JSON.stringify(data.shipping_orders[0].amount_detail)
                    let items = JSON.stringify(data.shoporders[0].items)
                    let buyAddresData = JSON.stringify(data.shoporders[0].buyer_address_data)
                    let vcwCheckingCIds = JSON.stringify(data.shipping_orders[0].voucher_wallet_checking_channel_ids);
                    let fulfillmentInfo = JSON.stringify(data.shipping_orders[0].fulfillment_info);

                    let can_checkout = JSON.stringify(data.can_checkout);
                    let order_update_info = JSON.stringify(data.order_update_info);
                    let buyer_txn_fee_info = JSON.stringify(data.buyer_txn_fee_info);