---
id: basic_logic_elements
title: Логические элементы
---
import Invertor from './invertor-white.gif';
import NotElement from './not.png';

import OrElement from './or.png';
import OrWork from './or.gif';

import AndElement from './and.png';
import AndWork from './and.gif';

В цифровой электронике, транзистор используется как переключатель. Для описания состояний таких переключателей, отходят от точных значений напряжений и токов, и используют цифры 0 и 1.

**0 или логический ноль**, означает отсутствие напряжения на контакте (ниже определенного значения). **1 или логическая единица**, означает присутствие напряжения на контакте (выше определенного значения).



## Базовые логические элементы

На основе транзисторов строят базовые логические элементы, к которым относят:

- Инвертор
- Дизъюнктор
- Конъюнктор


Разберем их немного подробнее.

### Инвертор

У инвертора один вход (A) и один выход (Q).

<div style={{textAlign: 'center'}}>
  <img src={NotElement} width="50%"/><br />
  Рисунок 1
</div>

Инветор меняет входной сигнал на противоположный: если на вход подается 1, на выходе получаем 0, если на входе подается 0, то на выходе получаем 1.

Таблица, содержащая все возможные варианты входов и выходов логического элемента, называют **таблицей истинности**:

| A | Q |
| - |:-:|
| 0 | 1 |
| 1 | 0 |

Инвертор стоится на транзисторе, как показано на рисунке:
<div style={{textAlign: 'center'}}>
  <img src={Invertor} width="50%"/><br/>
  Рисунок 2
</div>

 Когда на затвор подается логическая 1, транзистор "открывается", т.е. его сопротивление становится очень мало и весь ток идет через него; на выходе получаем 0. Когда на затворе подаем логический 0, транзистор "закрывается", т.е. его сопротивление становится велико и ток через него не идет; на выходе получаем 1.

### Дезъюнктор

Дизъюнктор - логический элемент "ИЛИ", у которого два входа (А и B) и один выход (Q). 

<div style={{textAlign: 'center'}}>
  <img src={OrElement} width="50%"/>
</div>

Если хотябы в одном из входов присутствует логическая 1, то на выходе будет 1. Если все входы 0, то на выходе 0.

Таблица истинности дизъюнктора:

| A | B | Q |
| - |:-:| - |
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 1 | 1 |

Дизъюнктор можно построить на двух транзисторах:
<div style={{textAlign: 'center'}}>
  <img src={OrWork} width="50%"/>
</div>

Транзисторы соеденены параллельно друг другу: если хотя бы один "открыт", то на выходе устанавливается логическая 1. Если все транзисторы закрыты, на выходе логический 0.

### Конъюнктор

Конъюнктор - логический элемент "И", у которого два входа (A и B) и один выход (Q).

<div style={{textAlign: 'center'}}>
  <img src={AndElement} width="50%"/>
</div>

Если хотябы в одном из входов присутствует логический 0, то на выходе будет логический 0. Если все входы установелны в 1, на выходе - 1.

Таблица истинности конъюнктора:

| A | B | Q |
| - |:-:| - |
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

Конъюнктор можно построить на двух транзисторах:
<div style={{textAlign: 'center'}}>
  <img src={AndWork} width="50%"/>
</div>

Транзисторы соеденены последовательно: для установления логической 1 на выходе, оба они должны быть открыты.

## Составные логические элементы

На базовых логических элементах строяться довольно большое количество составных логических элементов. Часть из них мы разберем далее.

### Дешифратор

Логический элемент дешифратор - это устройство, которое принимает на вход код (обычно двоичный) и выводит на одном из своих выходов сигнал, соответствующий этому коду. Например, 2-разрядный дешифратор может принимать на вход два бита (A и B) и выводить на одном из своих четырех выходов сигнал, соответствующий этому коду (00, 01, 10 или 11). 

Для этого дешифратор использует логические операции (например, ИЛИ, НЕ) для определения, какой выход должен быть активирован в зависимости от входного кода. Каждый выход дешифратора имеет свой уникальный код, который определяется комбинацией входных сигналов. 

Таким образом, логический элемент дешифратор может использоваться для управления другими устройствами в зависимости от входного кода, например, для выбора нужного устройства на основе адреса в памяти компьютера.

### Сумматор

Сумматор - это логический элемент, который складывает два числа 

:::caution

Раздел в разработке

:::

Давайте рассмотрим простой пример. У нас есть два провода. По каждому может приходить либо логический 0 или логическая 1. Нам нужно сложить эти два сигнала, что и будет выходным значением. Для этого нам понадобятся два двоичных выхода, т.к. 1 + 1 = 10.

Давайте составим таблицу истинности:
| A | B | Q1 | Q0 |
| - |:-:| - | - |
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

Таблица истинности для выхода Q0 почти в точности совпадает с элементом "ИЛИ" (дезъюнктором) за исключением последнего случая, когда A и B равны 1. А выход Q1 точно совпадает с элементом "И".

//TODO image
| A | B | Q1 | Q0 |
| - |:-:| - | - |
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

Единственная проблема, когда A = 1 и B = 1, выход Q0 должен быть = 0, а у нас получается = 1. Давайте попробуем это исправить.

Можно заметить, что на Q0 должен быть 0, когда нам элемент "И" выдает 1. Для достижения этого, можно пропустить выходы элементов "ИЛИ" и "И" через еще один элемент "И" с использованием инвертора.

//TODO image

В результате, мы получили сумматор двух одноразрядных (1 провод) чисел. Его обычно обозначают следующим образом:

//TODO image

Для числел с большим количеством разрядов можно воспользоваться одноразрядным сумматором:

//TODO image


## Дополнительные материалы

Хорошее видео по теме:
<iframe width="560" height="315" src="https://www.youtube.com/embed/bXdiYU3IUJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
