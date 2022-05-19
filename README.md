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


# HOC: Компоненты высшего порядка 2/2

Продвинутый React

[Урок 2:](https://practicum.yandex.ru/trainer/react/lesson/a6f5d641-1cac-424f-a074-606baffb4cd1/task/d8a02f7a-0f73-43fb-af95-109a28ec7032/)

HOC: Компоненты высшего порядка 2/2

```jsx
// with-fetch.js

import React from 'react';
import styles from '../../styles.module.css'

const withFetch = props => WrappedComponent => class extends React.Component {
    state = {
      isLoading: false,
      hasError: false,
      data: []
    };

    componentDidMount() {
      this.getData();
    }

    getData() {
      this.setState({ ...this.state, hasError: false, isLoading: true });

      fetch(props)
        .then((res) => res.json())
        .then((data) =>
          this.setState({ ...this.state, data, isLoading: false })
        )
        .catch((e) => {
          this.setState({ ...this.state, hasError: true, isLoading: false });
        });
    }

    render() {
      const { data, isLoading, hasError } = this.state;
      return (
        <section className={styles.grid}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading &&
          !hasError &&
          data.length &&
          data.map((film, index) => <WrappedComponent key={index} data={film} />)}
        </section>
      );
    }
};

export default withFetch;
```

```jsx

// app.js

import React from 'react';
import withFetch from './hocs/with-fetch';
import Film from './film';
import styles from '../styles.module.css'

const WithFetchFilm = withFetch('https://api.nomoreparties.co/beatfilm-movies')(Film);

class App extends React.Component {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className={styles.app}>
        <WithFetchFilm />
      </div>
    )
  }
}

export default App;
```


# practicum-react-advanced-lesson-2
Created with CodeSandbox
