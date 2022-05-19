Вы уже поработали с API фильмов в одном из предыдущих заданий. Код компонентов вам знаком, но его можно и нужно улучшить. В этом задании вам предстоит написать НОС получения данных. Схожие НОС вы сможете встретить и в других связанных с React библиотеках. Поэтому это задание — хорошая подготовка для работы с ними.
Создайте в директории компонентов папку 
    hocs/, а в ней — файл with-fetch.js.
В самом файле объявите функцию withFetch. Функция должна возвращать классовый компонент. Перенесите всё содержимое компонента App в новый компонент withFetch.
В самом компоненте App объявите переменную WithFetchFilm со значением withFetch без параметров. Рендер-метод компонента App должен отрисовывать WithFetchFilm.
Не забудьте, что нужно:

    импортировать всё необходимое в компонент withFetch,
    экспортировать withFetch в компонент App.

Всё содержимое компонента App перенесите в новый компонент withFetch:

    import React from 'react';
    import Film from '../film';
    import styles from '../../styles.module.css'

    const withFetch = () => class extends React.Component {
        // Здесь будет содержимое компонента App
    } 

Подключите компонент withFetch в App и присвойте компонент константе WithFetchFilm:

    const WithFetchFilm = withFetch(); 


Урок 2.2

Компонент withFetch содержит URL к API и компонент Film. Это не укладывается в концепцию НОС — отличные от Film компоненты отрисовать не получится.
Чтобы это исправить, отредактируйте компонент withFetch так, чтобы рендер-метод возвращал переданный WrappedComponent. При этом URL должен браться из пропсов.
Небольшая подсказка: воспользуйтесь каррированием внутри компонента withFetch. Простой пример каррирования выглядит так:

function carried(props) {
    return function carrying(callback) { 
        return callback(props);
    }
}

// С использованием стрелочных функций:
const carried = props => callback => callback(props); 

URL-адрес и компонент Film передайте в WithFetchFilm. Не забудьте перенести импорт компонента Film в App.

Если возникли сложности с каррированием, то вот так выглядит передача URL и компонента Film в переменную WithFetchFilm:

const WithFetchFilm = withFetch('https://api.nomoreparties.co/beatfilm-movies')(Film); 

Компонент withFetch также изменится:

import React from 'react';
import styles from '../../styles.module.css'

const withFetch = props => WrappedComponent => class extends React.Component {
    // Здесь содержимое компонента withFetch
} 

Мы знаем, что это сложная задача в плане проверки кода тренажером на валидность. Если вы уверены, что ваш код правильный, но тренажер не может его принять, вы можете сравнить ваше решение с решением автора.

# practicum-react-advanced-lesson-2
Created with CodeSandbox
