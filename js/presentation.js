import React, { Component } from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";
import Clock from "./components/clock";
import DevTools from './components/devtools';

import mainBakckground from "../img/main.png";
import vkLogo from "../img/vk.svg";
import paperLogo from "../img/paper.svg";
import superman from "../img/superman.jpg";
import reactivePlane from "../img/shutterstock_300080930.jpg";
import react from "../img/react.png";
import boxes from "../img/boxes.jpg";
import kittens from "../img/kittens.jpg";
import hulk from "../img/halk.jpg";
import promiseImg from "../img/promise.png";
import promise2Img from "../img/promise2.png";
import promise3Img from "../img/promise3.png";
import observable from "../img/observable.png";
import observableFlat from "../img/observable-flat.png";
import signal from "../img/signal.png";
import interstellar from "../img/interstellar.png";
import wardrobe from "../img/wardrobe.jpg";
import frozen from "../img/frozen.jpeg";
import doctorwho from "../img/doctorwho.jpg";

import reactCode from "raw!../code/react_example.js";
import pureComponent from "raw!../code/pure_component.js";
import promiseExample from "raw!../code/promise.js";
import promise2Example from "raw!../code/promise_composition.js";
import materializedEffects from "raw!../code/materializedEffects.js"
import bacon from "raw!../code/bacon.js";
import behav from "raw!../code/behaviour.hs";
import formulate from "raw!../code/formulate.hs";


import {} from "../css/theme.css";
import {} from "../css/prism.css";

const TOPIC = 'Функциональное реактивное программирование глазами frontend-разработчика';
const SPEAKER = 'Вячеслав Шебанов';

export default class Presentation extends Component {

  render() {
    return (
      <div>
      <Deck>

        <header className="caption">
          <h1>{TOPIC}</h1>
          <p>{SPEAKER}</p>
        </header>

        <Slide className="cover-slide">
          <h2>{TOPIC}</h2>
          <p>{SPEAKER}</p>
          <img src={mainBakckground} alt="" className="cover" />
        </Slide>

        <Slide>
          <h2>Привет, меня зовут Слава</h2>
          <ul>
            <li className="sparse-item">
              <img className="work-logo" src={vkLogo} /> Разработчик «ВКонтакте»
              (<a href="https://vk.com" target="_blank">vk.com</a>)
            </li>
            <li className="sparse-item">
              <img className="work-logo work-logo_paper" src={paperLogo} /> Сооснователь интернет-газеты «Бумага»
              (<a href="http://paperpaper.ru" target="_blank">paperpaper.ru</a>)
            </li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="shout smaller">Функциональное Реактивное <br/> Программирование</h2>
        </Slide>

        <Slide>
          <h2 className="shout smaller">Зачем мне это?</h2>
        </Slide>

        <Slide>
          <h2>Какие парадигмы мы используем?</h2>
          <ol>
            <li>Императивное программирование</li>
            <li>Конкурентное программирование</li>
            <li>Программирование с зависимыми вычислениями</li>
          </ol>
        </Slide>

        <Slide>
          <h2>Разработка интерфейса это сложно</h2>
          <figure>
            <blockquote><p>I dont think our species intelligent enough to do dependable concurrent imperative programming.</p></blockquote>
            <figcaption>Conal Elliot, “The Essence of FRP”, 2015</figcaption>
          </figure>
        </Slide>

        <Slide className="black">
          <img src={superman} alt="" className="cover" />
        </Slide>

        <Slide>
          <h2 className="shout smaller">MVC</h2>
        </Slide>
        <Slide>
          <h2 className="shout smaller">
            STOP <span style={{textDecoration: 'line-through'}}>MVC</span>
          </h2>
        </Slide>
        <Slide>
          <h2 className="shout">React</h2>
        </Slide>
        <Slide>
          <div className="place left side-image">
            <img src={reactivePlane} alt="" />
            <p>Реактивный</p>
          </div>
          <div className="place right side-image">
            <img src={react} alt="" />
            <p>Не реактивный</p>
          </div>
        </Slide>
        <Slide className="black full">
          <Code code={reactCode}/>
        </Slide>
        <Slide className="">
          <h2>Чистая функция</h2>
          <Code code={pureComponent}/>
        </Slide>
        <Slide>
          <h2>Композиция чистых функций</h2>
          <div className="top-bottom">
            <img src={boxes} alt="" />
          </div>
        </Slide>
        <Slide>
          <h2>Композиция обычных функций</h2>
          <div className="top-bottom">
            <img src={kittens} alt="" />
          </div>
        </Slide>
        <Slide>
          <h2>Ограничения чистых функций</h2>
          <ol>
            <li>Локальность</li>
            <li>Неизменямость данных</li>
            <li>Отсутствие операций ввода/вывода</li>
          </ol>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Острова <mark>«чистого»</mark> кода в океане императивного</h2>
        </Slide>
        <Slide>
          <h2>Еще функционального подхода?</h2>
          <ol>
            <li>Система типов (Flow, TypeScript)</li>
            <li>Эффективные неизменямые типы данных (Immutable.js, mori)</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Не только React</h2>
          <ul>
            <li>Angular 2</li>
            <li>Ember.js 2</li>
            <li>И не только веб</li>
          </ul>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Реактивное программирование</h2>
        </Slide>
        <Slide>
          <h2>Promise</h2>
          <Code code={promiseExample}/>
        </Slide>
        <Slide>
          <h2>За что мы его любим?</h2>
          <ol>
            <li>Хорошо комбинируется с другими promise-значениями</li>
            <li>Коллбэк вызывается всегда один раз</li>
            <li>Помогает избежать адской пирамиды коллбэков</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Композиция Promise</h2>
          <Code code={promise2Example} />
        </Slide>
        <Slide>
          <h2>Материализация побочных эффектов</h2>
          <Code code={materializedEffects} lang="haskell"/>
        </Slide>
        <Slide>
          <h2 className="shout"><a href="https://gist.github.com/briancavalier/3296186">Монада</a></h2>
        </Slide>
        <Slide className="center full black">
          <img src={interstellar} alt="" />
        </Slide>
        <Slide>
          <h2 className="shout">Граф</h2>
        </Slide>
        <Slide className="center">
          <img src={promiseImg} alt="" />
        </Slide>
        <Slide className="center">
          <img src={promise2Img} alt="" />
        </Slide>
        <Slide className="center">
          <img src={promise3Img} alt="" />
        </Slide>
        <Slide>
          <h2>Observable</h2>
          <ol>
            <li>Promise — одно значение, Observable — много</li>
            <li>Можно отменять подписку</li>
            <li>Observable — конечный</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Bacon.js</h2>
          <Code code={bacon}/>
        </Slide>
        <Slide className="center full white">
          <img src={observable} alt="" />
        </Slide>
        <Slide className="center full white">
          <img src={observableFlat} alt="" />
        </Slide>
        <Slide>
          <h2 className="shout smaller"><a href="https://github.com/Reactive-Extensions" target="_blank">ReactiveExtension</a></h2>
        </Slide>
        <Slide>
          <h2>Какие проблемы решает?</h2>
          <ol>
            <li>Прозрачная асинхронность</li>
            <li>Упрощает работу с IO</li>
            <li>Модульность</li>
            <li>Декларативность</li>
          </ol>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Итак, ФРП</h2>
        </Slide>
        <Slide>
          <h2>История</h2>
          <p>“Functional Reactive Animation”, <br/><i>Conal Elliot, Paul Hudak, 1997</i></p>
          <p>“Elm: Concurrent FRP for Functional GUIs”, <br/><i>Evan Czaplicki, 2012</i></p>
        </Slide>
        <Slide>
          <h2>5-мерный шкаф</h2>
          <img src={wardrobe} />
        </Slide>
        <Slide>
          <h2>Представьте таймер</h2>
          <Clock />
        </Slide>
        <Slide>
          <h2>Замороженный таймер</h2>
          <p className="clock">5:12:15<span className="diem">PM</span></p>
        </Slide>
        <Slide>
          <h2>Замороженный таймер</h2>
          <p className="clock">5:12:15<span className="diem">PM</span></p>
          <p className="clock">5:12:16<span className="diem">PM</span></p>
          <p className="clock">5:12:17<span className="diem">PM</span></p>
          <p className="clock">5:12:18<span className="diem">PM</span></p>
        </Slide>
        <Slide>
          <h2>Поведение</h2>
          <Code lang="haskell" code={behav}/>
          <p>где T — рациональное число, a «а» произвольный тип.</p>
        </Slide>
        <Slide>
          <h2 className="shout smaller">Время это аргумент</h2>
        </Slide>
        <Slide className="center full black">
          <img src={frozen} alt="" />
        </Slide>
        <Slide>
          <h2>Недостатки</h2>
          <ol>
            <li>Cтремление к непрерывности</li>
            <li>Частый пересчет</li>
            <li>Утечки</li>
          </ol>
        </Slide>
        <Slide>
          <h2>Concurrent FRP</h2>
          <ol>
            <li>Signal = Behaviour + Observable</li>
            <li>Бесконечный поток</li>
            <li>Граф статичен</li>
          </ol>
        </Slide>
        <Slide className="center full white">
          <img src={signal} alt="" />
        </Slide>
        <Slide>
          <h2>Преймущества</h2>
          <ol>
            <li>Функциональное</li>
            <li>Реактивное</li>
            <li><b>Время</b></li>
          </ol>
        </Slide>
        <Slide>
          <h2>Путешествия во времени</h2>
          <img src={wardrobe} />
        </Slide>
        <Slide>
          <h2 className="shout"><a href="https://elm-lang.org">Elm</a></h2>
        </Slide>
        <Slide>
          <h2 className="shout"><a href="http://redux.js.org/">Redux</a> + <a href="https://facebook.github.io/react/">React</a></h2>
        </Slide>
        <Slide>
          <h2 className="shout">Океаны кода</h2>
        </Slide>
        <Slide className="center full black">
          <img src={doctorwho} alt="" />
        </Slide>
        <Slide>
          <h2>Контакты</h2>
          <ul>
            <li>Twitter: <a href="https://twitter.com/thought_sync">thought_sync</a></li>
            <li>Github: <a href="https://github.com/Termina1">Termina1</a></li>
            <li>VK: <a href="https://vk.com/bysoul">/id245216</a></li>
          </ul>
        </Slide>
        <Slide>
          <h2>Список литературы</h2>
          <ul>
            <li><a href="https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf">Why Functional Programming Matters</a></li>
            <li><a href="https://www.edx.org/course/introduction-functional-programming-delftx-fp101x-0">Introduction to Functional Programming (EDX)</a></li>
            <li><a href="https://begriffs.com/posts/2015-07-22-essence-of-frp.html?hn=2">The Essence of FRP</a></li>
            <li><a href="">Elm: Concurrent FRP for Function GUIs</a></li>
            <li><a href="http://conal.net/papers/icfp97/icfp97.pdf">Functional reactive animation</a></li>
          </ul>
        </Slide>
        <Slide>
          <h2>Список литературы</h2>
          <ul>
            <li><a href="http://www.reactivemanifesto.org/">Reactive manifesto</a></li>
            <li><a href="https://www.coursera.org/course/reactive">Principles of reactive programming (Coursera)</a></li>
            <li><a href="https://www.youtube.com/watch?v=b0EF0VTs9Dc">Monads and Gonads</a></li>
            <li><a href="https://www.youtube.com/watch?v=Agu6jipKfYw">Elm Functional Reactive Programming</a></li>
            <li><a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754">The introduction to Reactive Programming</a></li>
          </ul>
        </Slide>
        <Slide>
          <h2 className="shout">Вопросы?</h2>
        </Slide>
      </Deck>
      <DevTools />
      </div>
    );
  }
}
