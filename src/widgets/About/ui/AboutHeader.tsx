export const AboutHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-[268px]">
      <div className="shrink-0">
        <h2
          id="about-heading"
          className="font-sans font-normal text-[32px] leading-[1.2] sm:text-[40px] xl:text-[56px] xl:leading-[68px] gradient-text"
        >
          О НАС
          <br />и НАШЕМ БИЗНЕСЕ
        </h2>
      </div>
      <p className="font-sans font-normal text-[16px] leading-[1.5] lg:text-[18px] xl:text-[22px] xl:leading-[30px] text-primary xl:w-[497px]">
        Каждому клиенту мы гарантируем взаимовыгодные условия сотрудничества. Мы дорожим своими
        заказчиками, поэтому брак и низкокачественный металл никогда не поступают на склады
        предприятия. С нами — надёжно, выгодно и безопасно!
      </p>
    </div>
  );
};
