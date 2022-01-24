import { useMemo } from "react";
import { DeliveryDateContainer } from "./deliveryDate.style";

const Icon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1967 13.6449C9.44449 13.6449 8.01904 15.0707 8.01904 16.8224C8.01904 18.5746 9.44449 20 11.1967 20C12.9484 20 14.3742 18.5746 14.3742 16.8224C14.3742 15.0707 12.9484 13.6449 11.1967 13.6449ZM11.1967 17.757C10.6812 17.757 10.2621 17.3379 10.2621 16.8224C10.2621 16.3069 10.6812 15.8878 11.1967 15.8878C11.7121 15.8878 12.1312 16.3069 12.1312 16.8224C12.1312 17.3379 11.7121 17.757 11.1967 17.757Z" fill="#0500FF" />
    <path d="M10.7307 0C11.0184 0.0686127 11.2095 0.162113 11.3041 0.280502L17.4028 7.90928C17.5154 8.04972 17.577 8.22737 17.577 8.41121V16.04C17.577 16.4719 17.2421 16.8224 16.8294 16.8224H16.0373C15.6668 16.8224 15.3393 16.5435 15.2915 16.1593C14.998 13.8066 13.2047 12.3473 11.0354 12.3473C8.86609 12.3473 7.0728 13.8065 6.77935 16.1593C6.73152 16.5435 6.40369 16.8224 6.03358 16.8224H1C0.447715 16.8224 0 16.3747 0 15.8224V1C0 0.447715 0.447715 0 1 0H10.7307ZM5.98832 6.25951C5.98832 6.69183 6.32287 7.04195 6.73598 7.04195L12.8855 7C13.5195 7 13.7911 6.50974 13.3855 6L10.3855 2.5C10.3321 2.43298 10.2483 2.34571 10.1643 2.26289C9.98871 2.08955 9.749 2 9.50225 2H7.17772C6.9869 2 6.79906 2.05322 6.64743 2.16905C6.38406 2.37025 5.99639 2.71483 5.99639 3L5.98832 6.25951Z" fill="#0500FF" />
  </svg>
)

const DelivetyDate = () => useMemo(() => {
  const currentDate = new Date(Date.now());

  const addDay = (days: number) => {
    currentDate.setDate(currentDate.getDate() + days);
  }

  const currentDay = currentDate.getDay();

  if (currentDay >= 5) {
    const neededForValidDay = 6 - currentDay + 1;
    addDay(neededForValidDay);
  }

  addDay(1);

  return (
    <DeliveryDateContainer>
      <span><Icon /></span>
      <span>
        Buy now and get it by
        <span id="date">
          {currentDate.getDate()}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
        </span>
      </span>
    </DeliveryDateContainer>
  )
}, [])

export default DelivetyDate
