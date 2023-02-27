const select = document.querySelector('.feedback-form-select');
const options = document.querySelectorAll('.feedback-form-options__item');
const optionsList = document.querySelector('.feedback-form-options');
const selectArrow = select.querySelector('.feedback-form-select__picture');

const toggleList = () => {
    optionsList.classList.toggle('feedback-form-options--active');
    selectArrow.classList.toggle('feedback-form-select__picture--active');
}

const handleSelectOption = (event) => {
    const selectedValue = event.target.innerText;
    const inputField = document.querySelector('#selectedGrade');
    const selectValue = select.querySelector('.feedback-form-select__default');

    selectValue.innerText = selectedValue;
    inputField.setAttribute('value', selectedValue)

    optionsList.classList.remove('feedback-form-options--active');
    selectArrow.classList.remove('feedback-form-select__picture--active');
}

select?.addEventListener('click', toggleList);
options?.forEach(option => {
    option.addEventListener('click', event => handleSelectOption(event))
})