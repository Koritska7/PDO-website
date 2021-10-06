// let accordions;
const accordionWrapper = document.querySelector('.accordion-wrapper');

const faqData = [
{
	id: 1,
	title: 'Монтаж, демонтаж мостовых и козловых кранов',
	content: ''
},
{
	id: 2,
	title: 'Реконструкция и модернизация кранов',
    content: ''
},
{
	id: 3,
	title: 'Перевод кранов на управление с пола, радиоуправление',
	content: ''
},
{
	id: 4,
	title: 'Проведение полного технического обследования кранов',
	content: ''
},
{
	id: 5,
	title: 'Изготовление полного перечня запасных частей на краны',
	content: ''
}
]

const createTemplate = item => {
	return `<div class="accordion-item">
			<div class="accordion-item-title">${item.title}</div>
			<div class="accordion-item-content">${item.content}</div>
		</div>`;
}

const fillHtmlList = () => {
	faqData.forEach(item => {
		accordionWrapper.innerHTML += createTemplate(item);
	})
}

fillHtmlList();

const accordions = document.querySelectorAll('.accordion-item');

if (accordions) {
	for (item of accordions) {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    })
  }
}
