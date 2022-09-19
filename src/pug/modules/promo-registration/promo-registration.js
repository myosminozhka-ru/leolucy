export default class PromoRegistration {
    constructor() {
        this.promoRegistration = document.querySelector('.promo-registration');
        this.isSuccessSendForm = false;
    }

    onSend() {
        const form = document.querySelector(".promo-registration__form");
        const inputs = form.getElementsByTagName("input");
        const formData = new FormData();

        Array.from(inputs).forEach(input => {
            if (input.value) {
                formData.append(input.name, input.value);
            } else {
                const parentInput = input.closest(".promo-input");
                parentInput.classList.add("promo-input--error");
                parentInput.querySelector(".promo-input__info").innerHTML =
                    "Поле обязательное для заполнения";
            }
        })

        const lengthFormData = Array.from(formData.entries(), ([key, prop]) => ({
            [key]: {
                ContentLength: typeof prop === "string" ? prop.length : prop.size,
            },
        })).length;

        if (lengthFormData === inputs.length) {
            const request = new XMLHttpRequest();
            // const url = "/local/api/register.php";
            const url = "https://leolucy.fvds.ru/local/api/register.php";
            request.responseType = "json";
            request.open("POST", url, true);

            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    let obj = request.response;
                    if ("success" in obj) {
                        this.isSuccessSendForm = true
                    } else {
                        if ("error" in obj) {
                            for (let errorItem in obj.error) {
                                const parentInput = form
                                    .querySelector('[name="' + errorItem + '"]')
                                    ?.closest(".promo-input");

                                if(parentInput) {
                                    parentInput.classList.add("promo-input--error");
                                    parentInput.querySelector(".promo-input__info").innerHTML =
                                        obj.error[errorItem];
                                }

                            }
                        }
                    }
                }
            });

            request.send(formData);
        }
    }

    showPromoPresentations(event, promo) {
        promo.isShowPromoPresentations = true;

        setTimeout(() => {
            this.scrollToPresentations()
        }, 500)
    }

    scrollToPresentations() {
        let headerHeight = document.querySelector(".header").clientHeight;
        const block = document.querySelector(".promo-presentations");
        const position = block.getBoundingClientRect().top;
        let offsetPosition = position - headerHeight;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}