import BankAccountIcon from "@/images/icons/bank-card-icon.svg"
import Image from "next/image"
import { useTranslation } from "next-i18next"

const OrdersRefundedToBankAccount = () => {
  const { t } = useTranslation()
  return (
    <div className="wrapper">
      <div className="header">
        <Image
          layout="raw"
          src={BankAccountIcon}
          alt="Wallet"
          className="w-30pxm md:w-30pxt lg:w-30px"
        />
        <span>{t("list_of_orders_refunded_to_bank_account")}</span>
      </div>
      <div className="history-card">
        <div className="first-col">
          <span className="msg">
            {t("this_amount_refunded_to_your_bank_account")}.
          </span>
          <span className="description">
            {t("cancelled_your_appointment_with")} Dr. Ahmed Kasm
          </span>
        </div>
        <div className="second-col">
          <span className="refunded-amount">125 $</span>
          <span className="refunded-date">06.01.2023</span>
        </div>
        <div className="third-col"></div>
      </div>
      <div className="history-card">
        <div className="first-col">
          <span className="msg">
            {t("this_amount_refunded_to_your_bank_account")}.
          </span>
          <span className="description">
            {t("cancelled_your_appointment_with")} Dr. Ahmed Kasm
          </span>
        </div>
        <div className="second-col">
          <span className="refunded-amount">125 $</span>
          <span className="refunded-date">06.01.2023</span>
        </div>
        <div className="third-col"></div>
      </div>
      <div className="history-card">
        <div className="first-col">
          <span className="msg">
            {t("this_amount_refunded_to_your_bank_account")}.
          </span>
          <span className="description">
            {t("cancelled_your_appointment_with")} Dr. Ahmed Kasm
          </span>
        </div>
        <div className="second-col">
          <span className="refunded-amount">125 $</span>
          <span className="refunded-date">06.01.2023</span>
        </div>
        <div className="third-col"></div>
      </div>
      <style jsx>{`
        .wrapper {
          @apply bg-white rounded-lg pt-mb60 md:pt-60pxt lg:pt-vw75 h-fit;
          flex: 1;
        }
        .header {
          @apply flex justify-center items-center mb-mb30 md:mb-30pxt lg:mb-vw40;
          span {
            @apply mx-mb12 md:mx-12pxt lg:mx-vw12 text-18pxm md:text-22pxt lg:text-20px capitalize;
          }
        }
        .history-card {
          @apply grid grid-cols-12 gap-2 px-mb30 md:px-30pxt lg:px-vw30 py-mb16 md:py-16pxt lg:py-vw16 mb-mb20 md:mb-20pxt lg:mb-vw20;
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06);
          &:last-of-type {
            @apply mb-0 rounded-bl-lg rounded-br-lg;
          }
          .first-col {
            @apply col-span-9 lg:col-span-7;
          }
          .second-col {
            @apply col-span-3 lg:col-span-2;
          }
          .third-col {
            @apply flex items-center col-span-12 lg:col-span-3;
          }
          .msg {
            @apply block text-16pxm md:text-20pxt lg:text-18px font-avenirMedium lg:leading-6;
          }
          .description {
            @apply block text-16pxm md:text-22pxt lg:text-18px text-gray-999 lg:leading-5;
          }
          .refunded-amount {
            @apply block font-avenirMedium text-18pxm md:text-22pxt lg:text-20px text-[#0400ff] leading-6;
          }
          .refunded-date {
            @apply text-14pxm md:text-18pxt lg:text-14px text-gray-999 lg:leading-5;
          }
        }
      `}</style>
    </div>
  )
}

export default OrdersRefundedToBankAccount
