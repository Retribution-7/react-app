import { useActionState, useState } from 'react';
import { MessengerLinks } from '@/shared/ui/MessengerLinks';

interface FormErrors {
  name?: string;
  phone?: string;
}

interface FormState {
  errors: FormErrors;
  success: boolean;
}

const initialState: FormState = {
  errors: {},
  success: false,
};

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    async (_prev: FormState, formData: FormData): Promise<FormState> => {
      const name = (formData.get('name') as string).trim();
      const phone = (formData.get('phone') as string).trim();

      const errors: FormErrors = {};

      if (!name) {
        errors.name = 'Пожалуйста, введите ваше имя';
      }

      const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;
      if (!phone) {
        errors.phone = 'Пожалуйста, введите номер телефона';
      } else if (!phoneRegex.test(phone)) {
        errors.phone = 'Введите корректный номер телефона';
      }

      if (Object.keys(errors).length > 0) {
        return { errors, success: false };
      }

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { errors: {}, success: true };
      } catch {
        return { errors: { phone: 'Ошибка отправки. Попробуйте позже.' }, success: false };
      }
    },
    initialState,
  );

  const [isReset, setIsReset] = useState(false);
  const showSuccess = state.success && !isReset;

  return (
    <section
      className="bg-surface overflow-hidden transition-colors duration-300"
      id="consultation"
      aria-labelledby="consultation-heading"
    >
      <div className="container-main flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-14">
        <div className="shrink-0 hidden lg:block">
          <img
            src="/images/peoples/people-2.png"
            alt="Консультант Металлобазы"
            className="w-[500px] max-h-[639px] object-contain object-bottom"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-[33px] max-w-[538px] w-full">
          <h2
            id="consultation-heading"
            className="gradient-text font-sans font-normal text-[32px] leading-[1.2] sm:text-[40px] xl:text-[56px] xl:leading-[68px]"
          >
            ЕСТЬ ВОПРОСЫ?
          </h2>

          <p className="font-sans font-normal text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.5] text-primary/80">
            Если у Вас есть вопросы или требуется помощь в подборе кровельных материалов, то
            оставьте свои данные, мы свяжемся с Вами и проконсультируем.
          </p>

          {showSuccess ? (
            <div className="p-6 rounded-2xl bg-button-first/10 border border-button-first/30 text-primary flex flex-col gap-3">
              <h3 className="font-sans font-medium text-[20px]">Спасибо за заявку!</h3>
              <p className="font-sans text-[15px] text-primary/80">
                Наш менеджер свяжется с Вами в ближайшее время для консультации.
              </p>
              <button
                type="button"
                onClick={() => setIsReset(true)}
                className="self-start text-[14px] text-button-first underline cursor-pointer hover:opacity-80 mt-2"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form
              id="consultation-form"
              action={(formData) => {
                setIsReset(false);
                formAction(formData);
              }}
              className="flex flex-col gap-4"
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="consultation-name" className="sr-only">
                  Ваше имя
                </label>
                <input
                  id="consultation-name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  defaultValue=""
                  aria-invalid={!!state.errors.name}
                  className="w-full h-[52px] px-5 rounded-full border border-button-first/40 bg-bg-first font-sans text-[15px] text-primary placeholder:text-primary/50 focus:outline-none focus:border-button-first transition-colors"
                />
                {state.errors.name && (
                  <span className="text-red-500 text-[13px] pl-4">{state.errors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="consultation-phone" className="sr-only">
                  Телефон
                </label>
                <input
                  id="consultation-phone"
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  defaultValue=""
                  aria-invalid={!!state.errors.phone}
                  className="w-full h-[52px] px-5 rounded-full border border-button-first/40 bg-bg-first font-sans text-[15px] text-primary placeholder:text-primary/50 focus:outline-none focus:border-button-first transition-colors"
                />
                {state.errors.phone && (
                  <span className="text-red-500 text-[13px] pl-4">{state.errors.phone}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="self-start inline-flex items-center justify-center rounded-full bg-gradient-to-r from-button-first to-button-second px-9 py-4 font-sans text-[18px] sm:text-[22px] font-normal text-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer shadow-[inset_0_0_12px_0_rgba(255,255,255,0.45)] mt-2"
              >
                {isPending ? 'Отправка...' : 'Получить консультацию'}
              </button>
            </form>
          )}

          <div className="flex items-center gap-4 pt-2">
            <p className="font-sans font-normal text-[15px] sm:text-[17px] leading-[1.4] text-primary/60 w-[140px] shrink-0">
              или напишите нам в мессенджер
            </p>
            <div className="flex items-center gap-2.5 flex-wrap">
              <MessengerLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
