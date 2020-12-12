{
  "cart_type": 0,
  "shipping_orders": [
    {
      "logistics": {
        "non_integrated_channelids": [],
        "logistic_service_types": {
          "regular": {
            "name": "Reguler",
            "max_cost": 3100000000,
            "channel_ids": [
              80005,
              80014
            ],
            "min_cost": 2600000000,
            "priority": 4,
            "consolidated_logistic_info": {
              "shopee_max_cost": 0,
              "shop_promo_only_min_cost": 2600000000,
              "shop_promo_only_max_cost": 3100000000,
              "enabled": true,
              "shopee_min_cost": 0
            },
            "identifier": "regular",
            "enabled": true,
            "sla_msg": "Diterima 2-7 hari setelah paket diserahkan ke kurir"
          },
          "regular_cargo": {
            "name": "Kargo/Ekonomi",
            "max_cost": 4500000000,
            "channel_ids": [
              80008
            ],
            "min_cost": 4500000000,
            "priority": 9,
            "consolidated_logistic_info": {
              "shopee_max_cost": 500000000,
              "shop_promo_only_min_cost": 4500000000,
              "shop_promo_only_max_cost": 4500000000,
              "enabled": true,
              "shopee_min_cost": 500000000
            },
            "identifier": "regular_cargo",
            "enabled": true,
            "sla_msg": "Diterima 2-7 hari setelah paket diserahkan ke kurir"
          }
        },
        "logistic_channels": {
          "80005": {
            "channel_data": {
              "category": 28,
              "cashless": 0,
              "display_name": "JNE Reguler (Cashless)",
              "name": "JNE Reguler (Cashless)",
              "is_mask_channel": 0,
              "channelid": 80005,
              "enabled": true,
              "extra_flag": 12288,
              "min_amount_need_ic": 0,
              "priority": 11,
              "warning_msg": "",
              "flag": 864691274530504800,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 28
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 2600000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 0,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 2600000000,
                "seller": 0
              },
              "cost": 0,
              "original_cost": 2600000000,
              "discount_amount": 2600000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 2600000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 2600000000,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -2600000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 2600000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "COD_FEE": 0,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 2600000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "delay_message": "",
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-21",
                "he_pt": 4,
                "cdt_max": 3.73,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.59,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608522035,
              "is_rapid_sla": false,
              "max_days": 9,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 9,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": false
            },
            "guarantee_extension_period": null
          },
          "80008": {
            "channel_data": {
              "category": 10008,
              "cashless": 0,
              "display_name": "JNE JTR (Cashless)",
              "name": "JNE JTR (Cashless)",
              "is_mask_channel": 0,
              "channelid": 80008,
              "enabled": true,
              "extra_flag": 0,
              "min_amount_need_ic": 0,
              "priority": 11,
              "warning_msg": "",
              "flag": 864691824252701800,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 80008
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 4500000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 500000000,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 4000000000,
                "seller": 0
              },
              "cost": 500000000,
              "original_cost": 4500000000,
              "discount_amount": 4000000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 4500000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 4500000000,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -4000000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 4000000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "COD_FEE": 0,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 4500000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "delay_message": "",
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-22",
                "he_pt": 4,
                "cdt_max": 4.94,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.82,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608608435,
              "is_rapid_sla": false,
              "max_days": 10,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 10,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": false
            },
            "guarantee_extension_period": null
          },
          "80014": {
            "channel_data": {
              "category": 24,
              "cashless": 0,
              "display_name": "J&T Express",
              "name": "J&T Express",
              "is_mask_channel": 0,
              "channelid": 80014,
              "enabled": true,
              "extra_flag": 0,
              "min_amount_need_ic": 0,
              "priority": 6,
              "warning_msg": "",
              "flag": 292734671610201200,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 24
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 3100000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 0,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 3100000000,
                "seller": 0
              },
              "cost": 0,
              "original_cost": 3100000000,
              "discount_amount": 3100000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 3100000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 3100000000,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -3100000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 3100000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "COD_FEE": 0,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 3100000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "delay_message": "",
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-22",
                "he_pt": 4,
                "cdt_max": 4.89,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.87,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608608435,
              "is_rapid_sla": false,
              "max_days": 10,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 10,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": true
            },
            "guarantee_extension_period": null
          }
        },
        "integrated_channelids": [
          80014,
          80005,
          80008
        ],
        "voucher_wallet_checking_channel_ids": [
          80014,
          80005,
          80008
        ]
      },
      "cod_fee": 0,
      "tax_payable": 0,
      "order_total": 4300000000,
      "shipping_id": 1,
      "buyer_ic_number": null,
      "fulfillment_info": {
        "fulfillment_flag": 64,
        "fulfillment_source": "",
        "managed_by_sbs": false,
        "order_fulfillment_type": 2,
        "warehouse_address_id": 0
      },
      "shopee_shipping_discount_id": 123934,
      "selected_logistic_channelid_with_warning": null,
      "selected_logistic_channelid": 80014,
      "voucher_wallet_checking_channel_ids": [
        80014,
        80005,
        80008
      ],
      "shipping_group_icon": "",
      "buyer_remark": null,
      "buyer_address_data": {
        "tax_address": "",
        "error_status": "",
        "address_type": 0,
        "addressid": 55569901
      },
      "shipping_fee_discount": 0,
      "shipping_group_description": "",
      "shoporder_indexes": [
        0
      ],
      "order_total_without_shipping": 1200000000,
      "shipping_fee": 3100000000,
      "selected_preferred_delivery_time_option_id": 1,
      "amount_detail": {
        "BASIC_SHIPPING_FEE": 3100000000,
        "SELLER_ESTIMATED_INSURANCE_FEE": 0,
        "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -3100000000,
        "VOUCHER_DISCOUNT": 0,
        "SHIPPING_DISCOUNT_BY_SELLER": 0,
        "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
        "SHIPPING_DISCOUNT_BY_SHOPEE": 3100000000,
        "INSURANCE_FEE": 0,
        "ITEM_TOTAL": 1200000000,
        "shop_promo_only": true,
        "COD_FEE": 0,
        "TAX_FEE": 0,
        "SELLER_ONLY_SHIPPING_DISCOUNT": 0
      }
    }
  ],
  "disabled_checkout_info": {
    "auto_popup": false,
    "description": "",
    "error_infos": []
  },
  "timestamp": 1607744435,
  "checkout_price_data": {
    "shipping_subtotal": 3100000000,
    "shipping_discount_subtotal": 0,
    "shipping_subtotal_before_discount": 3100000000,
    "bundle_deals_discount": null,
    "group_buy_discount": 0,
    "merchandise_subtotal": 1200000000,
    "tax_payable": 0,
    "buyer_txn_fee": 0,
    "credit_card_promotion": null,
    "promocode_applied": null,
    "shopee_coins_redeemed": null,
    "total_payable": 4300000000
  },
  "client_id": 0,
  "promotion_data": {
    "promotion_msg": "",
    "price_discount": 0,
    "can_use_coins": false,
    "voucher_info": {
      "coin_earned": 0,
      "promotionid": 0,
      "discount_percentage": 0,
      "discount_value": 0,
      "voucher_code": null,
      "reward_type": 0,
      "coin_percentage": 0,
      "used_price": 0
    },
    "coin_info": {
      "coin_offset": 0,
      "coin_earn": 0,
      "coin_earn_by_voucher": 0,
      "coin_used": 0
    },
    "free_shipping_voucher_info": {
      "free_shipping_voucher_id": 0,
      "disabled_reason": null,
      "free_shipping_voucher_code": ""
    },
    "applied_voucher_code": null,
    "shop_voucher_entrances": [
      {
        "status": true,
        "shopid": 18399858
      }
    ],
    "card_promotion_enabled": false,
    "invalid_message": null,
    "card_promotion_id": null,
    "voucher_code": null,
    "use_coins": false
  },
  "payment_channel_info": {
    "channels": [
      {
        "preselect_disabled": false,
        "description": "",
        "info_link": "",
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "groups": {
          "bank_transfer": false,
          "installment": false,
          "immediate": true,
          "credit_card": false,
          "wallet": true,
          "bank_account": false
        },
        "icon": "https://shopee.co.id/static/images/ic_paymentoption_shopeewallet_v2.png",
        "name": "ShopeePay",
        "info_text": "",
        "payment_result_text": "Silakan cek notifikasi untuk mengetahui status pengiriman.",
        "enabled": true,
        "channel_id": 8001400,
        "priority": 3,
        "icon_background": null,
        "version": 2,
        "payment_channel_hints": {},
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "balance": 19142700000,
        "support_subscription": true
      },
      {
        "channel_id": 8005200,
        "priority": 8,
        "preselect_disabled": false,
        "description": "",
        "info_link": "",
        "info_text": "",
        "enabled": true,
        "is_new": false,
        "payment_channel_hints": {},
        "promotion_info": {
          "text": ""
        },
        "icon_background": null,
        "version": 2,
        "groups": {
          "bank_transfer": true,
          "installment": false,
          "immediate": false,
          "credit_card": false,
          "wallet": false,
          "bank_account": false
        },
        "banks": [
          {
            "bank_name": "Bank BCA (Dicek Otomatis)",
            "description": "",
            "option_info": "89052001",
            "is_virtual_account": true,
            "enabled": true,
            "eligible_transfer": "label_bank_bca_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Hanya menerima dari Bank BCA",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_bca",
            "icon": "https://shopee.co.id/static/images/img_bankid_bca.png"
          },
          {
            "bank_name": "Bank Mandiri (Dicek Otomatis)",
            "description": "",
            "option_info": "89052002",
            "is_virtual_account": true,
            "enabled": true,
            "eligible_transfer": "label_bank_mandiri_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Menerima transfer dari semua Bank termasuk Bank Syariah",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_mandiri",
            "icon": "https://shopee.co.id/static/images/img_bankid_mandiri.png"
          },
          {
            "disabled_reason_key": "under_maintenance",
            "bank_name": "Bank BNI (Dicek Otomatis)",
            "disabled_reason_data": {
              "id": 520,
              "message_localized": "Maaf, metode pembayaran ini sedang dalam perbaikan. Anda dapat memilih metode pembayaran lainnya",
              "description": "BNI VA Maintenance"
            },
            "option_info": "89052003",
            "is_virtual_account": true,
            "enabled": false,
            "eligible_transfer": "label_bank_bni_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Hanya menerima dari Bank BNI",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "icon": "https://shopee.co.id/static/images/img_bankid_bni.png",
            "disabled_reason": "Maaf, metode pembayaran ini sedang dalam perbaikan. Anda dapat memilih metode pembayaran lainnya",
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_bni",
            "description": ""
          },
          {
            "bank_name": "Bank BRI (Dicek Otomatis)",
            "description": "",
            "option_info": "89052004",
            "is_virtual_account": true,
            "enabled": true,
            "eligible_transfer": "label_bank_bri_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Hanya menerima dari Bank BRI",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_bri",
            "icon": "https://shopee.co.id/static/images/img_bankid_bri.png"
          },
          {
            "bank_name": "Bank Syariah Mandiri (Dicek Otomatis)",
            "description": "",
            "option_info": "89052005",
            "is_virtual_account": true,
            "enabled": true,
            "eligible_transfer": "label_bank_bsm_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Hanya menerima dari Bank Syariah Mandiri",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_bsm",
            "icon": "https://shopee.co.id/static/images/img_bankid_bsm.png"
          },
          {
            "bank_name": "Bank Permata (Dicek Otomatis)",
            "description": "",
            "option_info": "89052006",
            "is_virtual_account": true,
            "enabled": true,
            "eligible_transfer": "label_sipp_va_bank_permata_virtual_account_eligible_transfer",
            "icon_background": null,
            "sub_description_info": {
              "important": "Hanya menerima dari Bank Permata",
              "normal": "Biaya Penanganan Rp1.000"
            },
            "popup_confirmation_data": {
              "cancel_button_message": "Ubah Metode Pembayaran",
              "need_popup": false,
              "message": "Jika ingin lanjut, akan menggunakan nomor Virtual Account baru, namun pesanan dengan Virtual Account sebelumnya tetap dapat dibayar.",
              "ok_button_message": "Lanjutkan Pembayaran"
            },
            "option_icon": "img_bankid_permata",
            "icon": "https://shopee.co.id/static/images/img_bankid_permata.png"
          }
        ],
        "icon": "https://shopee.co.id/static/images/ic_paymentoption_banktransfer.png",
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false,
        "name": "Transfer Bank"
      },
      {
        "preselect_disabled": true,
        "description": "",
        "info_link": "",
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "payment_channel_hints": {},
        "groups": {
          "bank_transfer": false,
          "installment": false,
          "immediate": false,
          "credit_card": true,
          "wallet": false,
          "bank_account": false
        },
        "icon": "https://shopee.co.id/static/images/ic_paymentoption_creditcard.png",
        "promotions": [
          {
            "description": "Diskon 15RB Min. Pemb. 200RB Maks. 4 trx/bln",
            "title": "PermataKartuKredit",
            "url": "https://shopee.co.id/m/promo-spesial-permata",
            "bank_id": 14,
            "discount_type": 1,
            "bank_logo": "https://shopee.co.id/static/images/bank_logo/ic_permata@4x.png",
            "discount_value": 15000,
            "card_promotion_id": 3734,
            "primary_color": "#B22B37"
          }
        ],
        "add_card_url": {
          "api": "https://shopee.co.id/buyer/payment/spm/action/add_new_card/api/",
          "ui": "https://shopee.co.id/buyer/payment/spm/action/add_new_card/8002050/?block_cc=False"
        },
        "name": "Kartu Kredit / Debit Online",
        "info_text": "",
        "enabled": true,
        "channel_id": 8002050,
        "priority": 94,
        "icon_background": null,
        "version": 2,
        "cards": [],
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false
      },
      {
        "category": 6,
        "promotion_info": {
          "text": ""
        },
        "name_label": "label_cod",
        "subcategory": 6,
        "description": "Cash on Delivery",
        "icon": "https://mall.shopee.co.id/static/images/ic_paymentoption_cod.png",
        "icon_background": null,
        "country": "ID",
        "channelid": 89000,
        "enabled": true,
        "priority": 96,
        "currency": "IDR",
        "flag": 10995116285969,
        "version": 1,
        "payment_channel_hints": {},
        "extra_data": {
          "voucher_payment_type": 3,
          "banned_categories": [
            2160
          ],
          "expiry_duration": 259200,
          "spm_channel_id": 8005000
        },
        "spm_channel_id": 0,
        "spm_option_info": "",
        "name": "COD (Bayar di Tempat)"
      },
      {
        "disabled_reason_key": 9,
        "preselect_disabled": true,
        "description": "",
        "info_link": "",
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "groups": {
          "bank_transfer": false,
          "installment": true,
          "immediate": false,
          "credit_card": true,
          "wallet": false,
          "bank_account": false
        },
        "icon": "https://shopee.co.id/static/images/ic_paymentoption_ccinstallment.png",
        "add_card_url": {
          "api": "https://shopee.co.id/buyer/payment/nicepay_cc/add_card/post/",
          "ui": "https://shopee.co.id/buyer/payment/nicepay_cc/add_card/new/"
        },
        "name": "Cicilan Kartu Kredit",
        "info_text": "",
        "enabled": false,
        "channel_id": 8002000,
        "priority": 97,
        "icon_background": null,
        "version": 2,
        "installment_banks": [
          {
            "bank_name": "DBS",
            "subdescription": "",
            "enabled": false,
            "bank_id": 833,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-200",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 833,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_anz @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-201",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 833,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_anz @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-202",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 833,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_anz @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-203",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 833,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_anz @18x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_dbs_digibank_id.png"
          },
          {
            "bank_name": "Permata",
            "subdescription": "",
            "enabled": false,
            "bank_id": 2505,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-220",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2505,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_permata @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-221",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2505,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_permata @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-222",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2505,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_permata @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-223",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2505,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_permata @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-224",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2505,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_permata @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_permata.png"
          },
          {
            "bank_name": "Panin",
            "subdescription": "",
            "enabled": false,
            "bank_id": 13339,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-285",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13339,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_panin @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-286",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13339,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_panin @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-287",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13339,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_panin @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_panin_bank.png"
          },
          {
            "bank_name": "Maybank",
            "subdescription": "",
            "enabled": false,
            "bank_id": 13865,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-250",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13865,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_maybank @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-251",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13865,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_maybank @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-252",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13865,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_maybank @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 200000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-254",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13865,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_maybank @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_maybank.png"
          },
          {
            "bank_name": "Standard Chartered",
            "subdescription": "",
            "enabled": false,
            "bank_id": 1798,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-210",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1798,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_standardchartered @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-211",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1798,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_standardchartered @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-212",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1798,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_standardchartered @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-213",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1798,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_standardchartered @18x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_standard_chartered.png"
          },
          {
            "bank_name": "MNC",
            "subdescription": "",
            "enabled": false,
            "bank_id": 13863,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-270",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13863,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mnc @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-271",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13863,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mnc @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-272",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13863,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mnc @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-273",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13863,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mnc @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 1000000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-274",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13863,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mnc @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_MNC.png"
          },
          {
            "bank_name": "Bukopin",
            "subdescription": "",
            "enabled": false,
            "bank_id": 1577,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-280",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1577,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bukopin @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-281",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1577,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bukopin @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 200000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-282",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1577,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bukopin @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-284",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1577,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bukopin @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_BUKOPIN.png"
          },
          {
            "bank_name": "BTN",
            "subdescription": "",
            "enabled": false,
            "bank_id": 13895,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-265",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13895,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_btn @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-266",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13895,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_btn @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-267",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13895,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_btn @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 1000000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-268",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13895,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_btn @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 180062500,
                "option_info": "8002000-269",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13895,
                "tenure": 24,
                "plan_name": "24x @ 0.5%",
                "description": "Nicepay CC Installment [label_bankid_btn @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_BTN.png"
          },
          {
            "bank_name": "HSBC",
            "subdescription": "",
            "enabled": false,
            "bank_id": 4495,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-225",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4495,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_hsbc @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-226",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4495,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_hsbc @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-227",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4495,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_hsbc @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-228",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4495,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_hsbc @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-229",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4495,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_hsbc @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_hsbc.png"
          },
          {
            "bank_name": "BNI",
            "subdescription": "",
            "enabled": false,
            "bank_id": 3632,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-256",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 3632,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_negara @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-257",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 3632,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_negara @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-258",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 3632,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_negara @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-259",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 3632,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_negara @24x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-255",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 3632,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_negara @3x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_negara.png"
          },
          {
            "bank_name": "Bank Mega",
            "subdescription": "",
            "enabled": false,
            "bank_id": 4882,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1440500000,
                "option_info": "8002000-235",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4882,
                "tenure": 3,
                "plan_name": "3x @ 0.5%",
                "description": "Nicepay CC Installment [label_bankid_megabank @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 720250000,
                "option_info": "8002000-236",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4882,
                "tenure": 6,
                "plan_name": "6x @ 0.5%",
                "description": "Nicepay CC Installment [label_bankid_megabank @6x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_mega_bank.png"
          },
          {
            "bank_name": "BRI",
            "subdescription": "",
            "enabled": false,
            "bank_id": 5011,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-240",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5011,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bri @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-241",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5011,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bri @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 300000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-242",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5011,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bri @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_BRI.png"
          },
          {
            "bank_name": "BCA",
            "subdescription": "",
            "enabled": false,
            "bank_id": 5236,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-290",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5236,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bca @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-291",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5236,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bca @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-292",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 5236,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_bca @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_bca.png"
          },
          {
            "bank_name": "OCBC NISP",
            "subdescription": "",
            "enabled": false,
            "bank_id": 7447,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-275",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 7447,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_ocbc_nisp @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-276",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 7447,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_ocbc_nisp @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-277",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 7447,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_ocbc_nisp @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-278",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 7447,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_ocbc_nisp @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-279",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 7447,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_ocbc_nisp @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_OCBC_NISP.png"
          },
          {
            "bank_name": "Mandiri",
            "subdescription": "",
            "enabled": false,
            "bank_id": 2200,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-215",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2200,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mandiri @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-216",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2200,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mandiri @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-217",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2200,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mandiri @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 1000000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-218",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2200,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mandiri @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 500000000000
                },
                "monthly_payment": 180062500,
                "option_info": "8002000-219",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 2200,
                "tenure": 24,
                "plan_name": "24x @ 0.5%",
                "description": "Nicepay CC Installment [label_bankid_mandiri @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_mandiri.png"
          },
          {
            "bank_name": "UOB",
            "subdescription": "",
            "enabled": false,
            "bank_id": 6391,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-245",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 6391,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_uob @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 150000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-246",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 6391,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_uob @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 150000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-247",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 6391,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_uob @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_UOB.png"
          },
          {
            "bank_name": "Danamon",
            "subdescription": "",
            "enabled": false,
            "bank_id": 858,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-205",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 858,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_danamon @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-206",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 858,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_danamon @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-207",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 858,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_danamon @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_danamon_bank.png"
          },
          {
            "bank_name": "CIMB",
            "subdescription": "",
            "enabled": true,
            "bank_id": 1499,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "monthly_payment": 1433333333,
                "option_info": "8002000-260",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1499,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_cimb @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-261",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1499,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_cimb @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-262",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1499,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_cimb @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 1000000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-264",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 1499,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_cimb @24x]"
              }
            ],
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_CIMB.png"
          },
          {
            "bank_name": "Mayapada",
            "subdescription": "",
            "enabled": false,
            "bank_id": 13916,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-295",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13916,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mayapada @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-296",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13916,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mayapada @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 100000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-297",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 13916,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_mayapada @12x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_bank_mayapada.png"
          },
          {
            "bank_name": "Citibank",
            "subdescription": "",
            "enabled": false,
            "bank_id": 4575,
            "priority": 1,
            "icon_background": null,
            "cards": [],
            "installment_plans": [
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 1433333333,
                "option_info": "8002000-230",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4575,
                "tenure": 3,
                "plan_name": "3x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_citibank @3x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 716666666,
                "option_info": "8002000-231",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4575,
                "tenure": 6,
                "plan_name": "6x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_citibank @6x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 358333333,
                "option_info": "8002000-232",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4575,
                "tenure": 12,
                "plan_name": "12x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_citibank @12x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 238888888,
                "option_info": "8002000-233",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4575,
                "tenure": 18,
                "plan_name": "18x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_citibank @18x]"
              },
              {
                "disabled_reason_key": "not_reach_min_amount",
                "disabled_reason_data": {
                  "min_amount": 50000000000
                },
                "monthly_payment": 179166666,
                "option_info": "8002000-234",
                "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
                "enabled": false,
                "bank_id": 4575,
                "tenure": 24,
                "plan_name": "24x @ 0%",
                "description": "Nicepay CC Installment [label_bankid_citibank @24x]"
              }
            ],
            "disabled_reason": "Sorry, there are no installment payment options available for this bank for this order.",
            "icon": "https://shopee.co.id/static/images/bank_logo/ID/box_icon/ic_citi.png"
          }
        ],
        "payment_channel_hints": {},
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "disabled_reason": "Minimal transaksi menggunakan metode pembayaran ini adalah Rp500.000. Silakan pilih metode pembayaran lainnya untuk checkout.",
        "support_subscription": false
      },
      {
        "channel_id": 8003200,
        "priority": 108,
        "preselect_disabled": false,
        "description": "",
        "info_link": "https://shopee.co.id/events3/code/3832293383/?",
        "info_text": "",
        "enabled": true,
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "icon_background": null,
        "version": 2,
        "groups": {
          "bank_transfer": false,
          "installment": false,
          "immediate": false,
          "credit_card": false,
          "wallet": false,
          "bank_account": false
        },
        "payment_channel_hints": {},
        "icon": "https://shopee.co.id/static/images/ic_alfamart.png",
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false,
        "name": "Alfamart"
      },
      {
        "channel_id": 8003001,
        "priority": 109,
        "preselect_disabled": false,
        "description": "",
        "info_link": "https://shopee.co.id/events3/code/349237558/",
        "info_text": "",
        "enabled": true,
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "icon_background": null,
        "version": 2,
        "groups": {
          "bank_transfer": false,
          "installment": false,
          "immediate": false,
          "credit_card": false,
          "wallet": false,
          "bank_account": false
        },
        "payment_channel_hints": {},
        "icon": "https://shopee.co.id/static/images/ic_indomaret.png",
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false,
        "name": "Indomaret / i.Saku"
      },
      {
        "is_credit_card_channel": 16384,
        "subcategory": 19,
        "enabled": true,
        "promotion_info": {
          "text": ""
        },
        "currency": "IDR",
        "flag": 8804683244545,
        "has_cards": false,
        "spm_option_info": "",
        "description": "OneKlik",
        "category": 19,
        "extra_data": {
          "expiry_duration": 10800,
          "spm_channel_id": 8000600,
          "redirect_url": "https://shopee.co.id/events3/code/95958400/"
        },
        "name": "OneKlik",
        "country": "ID",
        "channelid": 83019,
        "name_label": "label_bca_oneklik",
        "priority": 110,
        "icon_background": null,
        "credit_cards": [],
        "version": 1,
        "payment_channel_hints": {},
        "icon": "https://mall.shopee.co.id/static/images/ic_oneklik.png",
        "spm_channel_id": 8000600
      },
      {
        "channel_id": 8002100,
        "priority": 111,
        "preselect_disabled": false,
        "description": "",
        "info_link": "",
        "info_text": "",
        "enabled": false,
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "icon_background": null,
        "version": 2,
        "groups": {
          "bank_transfer": false,
          "installment": true,
          "immediate": false,
          "credit_card": false,
          "wallet": false,
          "bank_account": false
        },
        "payment_channel_hints": {},
        "icon": "https://shopee.co.id/static/images/ic_payment_kredivo.png",
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false,
        "disabled_reason": "Metode pembayaran saat ini tidak tersedia. Anda dapat memilih metode pembayaran lain.",
        "name": "Kredivo"
      },
      {
        "preselect_disabled": false,
        "description": "",
        "info_link": "https://shopee.co.id/events3/code/852042602/",
        "installment_promotion_link": "https://shopee.co.id/m/promo-harian-akulaku",
        "is_new": false,
        "promotion_info": {
          "text": ""
        },
        "groups": {
          "bank_transfer": false,
          "installment": true,
          "immediate": false,
          "credit_card": false,
          "wallet": false,
          "bank_account": false
        },
        "installment_plans": [
          {
            "monthly_payment": 4500000000,
            "description": "Cicilan 1 Bulan",
            "enabled": true,
            "icon_background": null,
            "tenure": 1,
            "icon": "",
            "plan_name": "Cicilan 1X",
            "option_info": "8000700-25"
          },
          {
            "monthly_payment": 2300000000,
            "description": "Cicilan 2 Bulan",
            "enabled": true,
            "icon_background": null,
            "tenure": 2,
            "icon": "",
            "plan_name": "Cicilan 2X",
            "option_info": "8000700-26"
          },
          {
            "disabled_reason_key": "msg_akulaku_installment_plan_not_eligible",
            "disabled_reason_data": {},
            "monthly_payment": 1600000000,
            "option_info": "8000700-27",
            "plan_name": "Cicilan 3X",
            "enabled": false,
            "icon_background": null,
            "tenure": 3,
            "icon": "",
            "disabled_reason": "Cicilan Akulaku tidak tersedia untuk total pembayaran ini.",
            "description": "Cicilan 3 Bulan"
          },
          {
            "disabled_reason_key": "msg_akulaku_installment_plan_not_eligible",
            "disabled_reason_data": {},
            "monthly_payment": 900000000,
            "option_info": "8000700-28",
            "plan_name": "Cicilan 6X",
            "enabled": false,
            "icon_background": null,
            "tenure": 6,
            "icon": "",
            "disabled_reason": "Cicilan Akulaku tidak tersedia untuk total pembayaran ini.",
            "description": "Cicilan 6 Bulan"
          },
          {
            "disabled_reason_key": "msg_akulaku_installment_plan_not_eligible",
            "disabled_reason_data": {},
            "monthly_payment": 700000000,
            "option_info": "8000700-29",
            "plan_name": "Cicilan 9X",
            "enabled": false,
            "icon_background": null,
            "tenure": 9,
            "icon": "",
            "disabled_reason": "Cicilan Akulaku tidak tersedia untuk total pembayaran ini.",
            "description": "Cicilan 9 Bulan"
          },
          {
            "disabled_reason_key": "msg_akulaku_installment_plan_not_eligible",
            "disabled_reason_data": {},
            "monthly_payment": 500000000,
            "option_info": "8000700-30",
            "plan_name": "Cicilan 12X",
            "enabled": false,
            "icon_background": null,
            "tenure": 12,
            "icon": "",
            "disabled_reason": "Cicilan Akulaku tidak tersedia untuk total pembayaran ini.",
            "description": "Cicilan 12 Bulan"
          }
        ],
        "icon": "https://shopee.co.id/static/images/ic_akulaku_new.png",
        "installment_data": {
          "plan_info": "Lihat promo Akulaku bulan ini",
          "plan_info_link": "https://shopee.co.id/m/promo-harian-akulaku"
        },
        "installment_promotion_text": "Lihat promo Akulaku bulan ini",
        "name": "Akulaku",
        "info_text": "Bagaimana cara menggunakan pembayaran Akulaku?",
        "enabled": true,
        "channel_id": 8000700,
        "priority": 116,
        "icon_background": null,
        "version": 2,
        "payment_channel_hints": {},
        "channel_behavior": {
          "disable_instruction": false,
          "disable_cancel": false
        },
        "support_subscription": false
      },
      {
        "category": 2,
        "promotion_info": {
          "text": ""
        },
        "name_label": "label_offline_bank_transfer",
        "subcategory": 2,
        "description": "Bank Transfer",
        "icon": "https://mall.shopee.co.id/static/images/ic_paymentoption_banktransfer.png",
        "icon_background": null,
        "country": "ID",
        "channelid": 81000,
        "enabled": true,
        "subchannels": [
          {
            "subcategory": 2,
            "enabled": true,
            "parent_channelid": 81000,
            "promotion_info": {
              "text": ""
            },
            "currency": "IDR",
            "flag": 8804682965057,
            "spm_option_info": "",
            "description": "Bank BCA (Manual Transfer)",
            "category": 2,
            "extra_data": {
              "eligible_transfer": "Hanya menerima dari Bank BCA"
            },
            "name": "Bank BCA (Dicek Manual)",
            "country": "ID",
            "channelid": 81001,
            "name_label": "label_bank_bca_normal_account",
            "priority": 118,
            "icon_background": null,
            "version": 1,
            "sub_description_info": {
              "second": {
                "text": "Biaya Penanganan Rp1.000",
                "highlight": false
              },
              "first": {
                "text": "Hanya menerima dari Bank BCA",
                "highlight": false
              }
            },
            "payment_channel_hints": {},
            "icon": "https://mall.shopee.co.id/static/images/img_bankid_bca.png",
            "spm_channel_id": 0
          },
          {
            "subcategory": 2,
            "enabled": true,
            "parent_channelid": 81000,
            "promotion_info": {
              "text": ""
            },
            "currency": "IDR",
            "flag": 8804682965057,
            "spm_option_info": "",
            "description": "Bank Mandiri (Manual Transfer)",
            "category": 2,
            "extra_data": {
              "eligible_transfer": "Hanya menerima dari Bank Mandiri"
            },
            "name": "Bank Mandiri (Dicek Manual)",
            "country": "ID",
            "channelid": 81002,
            "name_label": "label_bank_mandiri_normal_account",
            "priority": 120,
            "icon_background": null,
            "version": 1,
            "sub_description_info": {
              "second": {
                "text": "Biaya Penanganan Rp1.000",
                "highlight": false
              },
              "first": {
                "text": "Hanya menerima dari Bank Mandiri",
                "highlight": false
              }
            },
            "payment_channel_hints": {},
            "icon": "https://mall.shopee.co.id/static/images/img_bankid_mandiri.png",
            "spm_channel_id": 0
          },
          {
            "subcategory": 2,
            "enabled": true,
            "parent_channelid": 81000,
            "promotion_info": {
              "text": ""
            },
            "currency": "IDR",
            "flag": 8804682965057,
            "spm_option_info": "",
            "description": "Bank BNI (Manual Transfer)",
            "category": 2,
            "extra_data": {
              "eligible_transfer": "Hanya menerima dari Bank BNI"
            },
            "name": "Bank BNI (Dicek Manual)",
            "country": "ID",
            "channelid": 81003,
            "name_label": "label_bank_bni_normal_account",
            "priority": 122,
            "icon_background": null,
            "version": 1,
            "sub_description_info": {
              "second": {
                "text": "Biaya Penanganan Rp1.000",
                "highlight": false
              },
              "first": {
                "text": "Hanya menerima dari Bank BNI",
                "highlight": false
              }
            },
            "payment_channel_hints": {},
            "icon": "https://mall.shopee.co.id/static/images/img_bankid_bni.png",
            "spm_channel_id": 0
          },
          {
            "subcategory": 2,
            "enabled": true,
            "parent_channelid": 81000,
            "promotion_info": {
              "text": ""
            },
            "currency": "IDR",
            "flag": 8804682965057,
            "spm_option_info": "",
            "description": "Bank BRI (Manual Transfer)",
            "category": 2,
            "extra_data": {
              "eligible_transfer": "Hanya menerima dari Bank BRI"
            },
            "name": "Bank BRI (Dicek Manual)",
            "country": "ID",
            "channelid": 81004,
            "name_label": "label_bank_bri_normal_account",
            "priority": 124,
            "icon_background": null,
            "version": 1,
            "sub_description_info": {
              "second": {
                "text": "Biaya Penanganan Rp1.000",
                "highlight": false
              },
              "first": {
                "text": "Hanya menerima dari Bank BRI",
                "highlight": false
              }
            },
            "payment_channel_hints": {},
            "icon": "https://mall.shopee.co.id/static/images/img_bankid_bri.png",
            "spm_channel_id": 0
          },
          {
            "subcategory": 2,
            "enabled": true,
            "parent_channelid": 81000,
            "promotion_info": {
              "text": ""
            },
            "currency": "IDR",
            "flag": 8804682964993,
            "spm_option_info": "",
            "description": "Bank CIMB Niaga (Manual Transfer)",
            "category": 2,
            "extra_data": {
              "eligible_transfer": "Menerima transfer dari semua bank"
            },
            "name": "Bank Lainnya (Dicek Manual)",
            "country": "ID",
            "channelid": 81006,
            "name_label": "label_bank_cimb_normal_account",
            "priority": 131,
            "icon_background": null,
            "version": 1,
            "sub_description_info": {
              "second": {
                "text": "Biaya Penanganan Rp1.000",
                "highlight": false
              },
              "first": {
                "text": "Menerima transfer dari semua bank",
                "highlight": false
              }
            },
            "payment_channel_hints": {},
            "icon": "https://mall.shopee.co.id/static/images/img_bankid_cimb.png",
            "spm_channel_id": 0
          }
        ],
        "priority": 117,
        "currency": "IDR",
        "flag": 8796093030465,
        "version": 1,
        "payment_channel_hints": {},
        "extra_data": {
          "price_limit": 50000000000000,
          "expiry_duration": 86400,
          "spm_channel_id": 8003100,
          "expiry_extension": 86400
        },
        "spm_channel_id": 0,
        "spm_option_info": "",
        "name": "Transfer Bank"
      }
    ],
    "promotion_info": {
      "text": ""
    },
    "grouping_info": {
      "groups": [
        {
          "display_info": {
            "name": "Transfer Bank",
            "info_link": "https://shopee.co.id/m/transfer-bank",
            "info_text": "Pelajari Lebih Lanjut",
            "is_new": false,
            "promotion_info": {
              "voucher_payment_type": null
            },
            "icon_background": "#ffffff",
            "channel_id": 8000200,
            "version": 2,
            "icon": "https://shopee.co.id/static/images/ic_paymentoption_banktransfer.png"
          },
          "group_id": null,
          "to_combine": [
            8000200,
            8005200,
            8003600,
            81000
          ]
        }
      ]
    }
  },
  "dropshipping_info": {
    "phone_number": "",
    "enabled": false,
    "name": ""
  },
  "selected_payment_channel_data": {
    "channel_id": 8001400,
    "channel_item_option_info": {
      "option_info": ""
    },
    "version": 2
  },
  "shoporders": [
    {
      "shop": {
        "remark_type": 0,
        "support_ereceipt": false,
        "images": "",
        "is_official_shop": false,
        "cb_option": false,
        "shopid": 18399858,
        "shop_name": "Galeryhijabsemarang"
      },
      "buyer_remark": null,
      "shipping_fee": 3100000000,
      "order_total": 4300000000,
      "shipping_id": 1,
      "buyer_ic_number": null,
      "items": [
        {
          "itemid": 6747622673,
          "is_add_on_sub_item": false,
          "image": "9d91220f5a7e9e82805951dee0d8f972",
          "shopid": 18399858,
          "opc_extra_data": {
            "slash_price_activity_id": 0
          },
          "promotion_id": 2006436328,
          "add_on_deal_id": 0,
          "modelid": 70674620629,
          "offerid": 0,
          "source": "",
          "checkout": true,
          "item_group_id": 0,
          "service_by_shopee_flag": false,
          "none_shippable_full_reason": "",
          "price": 1200000000,
          "is_flash_sale": true,
          "categories": [
            {
              "catids": [
                43,
                18291,
                18292
              ]
            }
          ],
          "shippable": true,
          "name": "JILBAB ANAK SYAFIQA",
          "none_shippable_reason": "",
          "is_pre_order": false,
          "stock": 0,
          "model_name": "syafiqa marun",
          "quantity": 1
        }
      ],
      "logistics": {
        "non_integrated_channelids": [],
        "integrated_channelids": [
          80014,
          80005,
          80008
        ],
        "logistic_channels": {
          "80005": {
            "channel_data": {
              "category": 28,
              "cashless": 0,
              "display_name": "JNE Reguler (Cashless)",
              "name": "JNE Reguler (Cashless)",
              "is_mask_channel": 0,
              "channelid": 80005,
              "enabled": true,
              "extra_flag": 12288,
              "min_amount_need_ic": 0,
              "priority": 11,
              "warning_msg": "",
              "flag": 864691274530504800,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 28
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 2600000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 0,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 2600000000,
                "seller": 0
              },
              "cost": 0,
              "original_cost": 2600000000,
              "discount_amount": 2600000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 2600000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 2600000000,
                "COD_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -2600000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 2600000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 2600000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "is_rapid_sla": false,
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-21",
                "he_pt": 4,
                "cdt_max": 3.73,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.59,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608522035,
              "delay_message": "",
              "max_days": 9,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 9,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": false
            },
            "guarantee_extension_period": null
          },
          "80008": {
            "channel_data": {
              "category": 10008,
              "cashless": 0,
              "display_name": "JNE JTR (Cashless)",
              "name": "JNE JTR (Cashless)",
              "is_mask_channel": 0,
              "channelid": 80008,
              "enabled": true,
              "extra_flag": 0,
              "min_amount_need_ic": 0,
              "priority": 11,
              "warning_msg": "",
              "flag": 864691824252701800,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 80008
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 4500000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 500000000,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 4000000000,
                "seller": 0
              },
              "cost": 500000000,
              "original_cost": 4500000000,
              "discount_amount": 4000000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 4500000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 4500000000,
                "COD_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -4000000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 4000000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 4500000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "is_rapid_sla": false,
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-22",
                "he_pt": 4,
                "cdt_max": 4.94,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.82,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608608435,
              "delay_message": "",
              "max_days": 10,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 10,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": false
            },
            "guarantee_extension_period": null
          },
          "80014": {
            "channel_data": {
              "category": 24,
              "cashless": 0,
              "display_name": "J&T Express",
              "name": "J&T Express",
              "is_mask_channel": 0,
              "channelid": 80014,
              "enabled": true,
              "extra_flag": 0,
              "min_amount_need_ic": 0,
              "priority": 6,
              "warning_msg": "",
              "flag": 292734671610201200,
              "warning": "",
              "maintenance": 0,
              "need_check_ic": false,
              "is_show_preferred_delivery_option": 1,
              "address_type": 0,
              "cod_supported": true,
              "shipping_method": 24
            },
            "cost_info": {
              "discount_promotion_rule_snapshot_id": 128530,
              "estimated_shipping_fee": 3100000000,
              "enjoy_discount": true,
              "discounted_shipping_fee": 0,
              "discount_promotion_rule_id": 123934,
              "rebate_promotion_rule_id": 123934,
              "discounts": {
                "shopee": 3100000000,
                "seller": 0
              },
              "cost": 0,
              "original_cost": 3100000000,
              "discount_amount": 3100000000
            },
            "preferred_delivery_instructions": {
              "options": []
            },
            "shippability_info": {
              "next_available_date": "",
              "able_to_ship": true
            },
            "shipping_fee_data": {
              "cod_fee": 0,
              "shipping_fee_before_discount": 3100000000,
              "shipping_fee_detail": {
                "BASIC_SHIPPING_FEE": 3100000000,
                "COD_FEE": 0,
                "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -3100000000,
                "SHIPPING_DISCOUNT_BY_SELLER": 0,
                "SELLER_ESTIMATED_INSURANCE_FEE": 0,
                "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
                "SHIPPING_DISCOUNT_BY_SHOPEE": 3100000000,
                "INSURANCE_FEE": 0,
                "ITEM_TOTAL": 0,
                "shop_promo_only": true,
                "SELLER_ONLY_SHIPPING_DISCOUNT": 0
              },
              "chargeable_shipping_fee": 3100000000
            },
            "days_to_deliver": 7,
            "preferred_delivery_time_info": {
              "alert_msg": "",
              "options": [
                {
                  "option_id": 0,
                  "name": "Pengiriman setiap saat",
                  "short_name": "Setiap Saat",
                  "description": "Disarankan untuk alamat rumah"
                },
                {
                  "option_id": 1,
                  "name": "Pengiriman pada jam kantor",
                  "short_name": "Pada Jam Kantor",
                  "description": "Disarankan untuk alamat kantor"
                }
              ]
            },
            "cover_shipping_fee": false,
            "delivery_data": {
              "is_rapid_sla": false,
              "estimated_delivery_date_from": 1608003635,
              "is_shopee_24h": false,
              "min_days": 3,
              "detail_info": {
                "edt_max_dt": "2020-12-22",
                "he_pt": 4,
                "cdt_max": 4.89,
                "he_cdt": 0,
                "apt": 1.030231,
                "cdt_min": 1.87,
                "edt_min_dt": "2020-12-15"
              },
              "estimated_delivery_date_to": 1608608435,
              "delay_message": "",
              "max_days": 10,
              "estimated_delivery_time_min": 3,
              "display_mode": "edt_by_date",
              "is_cross_border": false,
              "estimated_delivery_time_max": 10,
              "has_edt": true
            },
            "cod_data": {
              "cod_available": true
            },
            "guarantee_extension_period": null
          }
        },
        "logistic_service_types": {
          "regular": {
            "name": "Reguler",
            "max_cost": 3100000000,
            "channel_ids": [
              80005,
              80014
            ],
            "min_cost": 2600000000,
            "priority": 4,
            "consolidated_logistic_info": {
              "shopee_max_cost": 0,
              "shop_promo_only_min_cost": 2600000000,
              "shop_promo_only_max_cost": 3100000000,
              "enabled": true,
              "shopee_min_cost": 0
            },
            "identifier": "regular",
            "enabled": true,
            "sla_msg": "Diterima 2-7 hari setelah paket diserahkan ke kurir"
          },
          "regular_cargo": {
            "name": "Kargo/Ekonomi",
            "max_cost": 4500000000,
            "channel_ids": [
              80008
            ],
            "min_cost": 4500000000,
            "priority": 9,
            "consolidated_logistic_info": {
              "shopee_max_cost": 500000000,
              "shop_promo_only_min_cost": 4500000000,
              "shop_promo_only_max_cost": 4500000000,
              "enabled": true,
              "shopee_min_cost": 500000000
            },
            "identifier": "regular_cargo",
            "enabled": true,
            "sla_msg": "Diterima 2-7 hari setelah paket diserahkan ke kurir"
          }
        },
        "voucher_wallet_checking_channel_ids": [
          80014,
          80005,
          80008
        ]
      },
      "selected_logistic_channelid": 80014,
      "cod_fee": 0,
      "tax_payable": 0,
      "buyer_address_data": {
        "tax_address": "",
        "error_status": "",
        "address_type": 0,
        "addressid": 55569901
      },
      "shipping_fee_discount": 0,
      "order_total_without_shipping": 1200000000,
      "selected_preferred_delivery_time_option_id": 1,
      "amount_detail": {
        "BASIC_SHIPPING_FEE": 3100000000,
        "COD_FEE": 0,
        "SHOPEE_OR_SELLER_SHIPPING_DISCOUNT": -3100000000,
        "VOUCHER_DISCOUNT": 0,
        "SHIPPING_DISCOUNT_BY_SELLER": 0,
        "SELLER_ESTIMATED_INSURANCE_FEE": 0,
        "SELLER_ESTIMATED_BASIC_SHIPPING_FEE": 0,
        "SHIPPING_DISCOUNT_BY_SHOPEE": 3100000000,
        "INSURANCE_FEE": 0,
        "ITEM_TOTAL": 1200000000,
        "shop_promo_only": true,
        "TAX_FEE": 0,
        "SELLER_ONLY_SHIPPING_DISCOUNT": 0
      }
    }
  ],
  "can_checkout": true,
  "order_update_info": {},
  "buyer_txn_fee_info": {
    "error": "invalid_rule_id"
  }
}