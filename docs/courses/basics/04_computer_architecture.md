# Архитектура ЭВМ

ЭВМ - электронно вычислительная машина.

В основе архитектуре ЭВМ лежат три шины: шина адреса, данных и управления.

Оперативно-запоминающее устройство (ОЗУ) - быстрая, но энергозависимая память (т.е. хранит информацию только пока есть питание).

Постоянно-запоминающее устройство (ПЗУ) - медленная, но энергонезависимая память. Т.е. сохраняет информацию даже при отсутствии питания.

Шина адреса (ША) определяет адрес с которым хочет работать в данный момент процессор. Шина данных (ШД) используется как транспорт данных. Шина управления (ШУ) - как набор управляющих сигналов от процессора, например: чтение адреса или запись в него.

Процессор взаимодействует с внешним миром через 3 шины: адреса, данных и управления. Все устройства подключаются в этим шинам, так, чтобы за каждым устройством был закреплен свой, непересекающиеся с другими, диапазон адресов.

Например, если подключить ПЗУ к диапазону от 0 по 255 адресам, а ОЗУ подключить от 256 по 511 адресам. Таким образом, если процессор установит на шине адреса число 56, он будет работать с ячейкой №56 из ПЗУ. Однако, когда процессор установит на ША адрес 256, работать он будет уже с ячейкой под №0 из ОЗУ, т.к. для ОЗУ адрес 256 - это ячейка №0. Согласование адресов реализуется с помощью мультиплексоров.

Таким образом, можно подключать сколько угодно устройств к общим шинам, ограниченные диапазоном доступных адресов.

Про архитектуру ЭВМ можно почитать тут.

# Операционная система

Операционная система - это программа. У современной операционной системы, есть масса задач, которые она решает. Попробуем кратко рассказать о них.

Первоначальная идея операционной системы (ОС) - упростить запуск других программ. Первые ОС только этим и занимались: предоставляли интерфейс для запуска других программ в виде командной строки. Пользователь просто вводит название программы, и ОС запускала ее. После завершения программы, управление передавалось обратно ОС, которая снова была готова к запуску следующей команды.

Таким образом любая запущенная программа имела полный доступ к компьютеру. В том числе, она могла изменить память, где хранилась сама ОС. Когда такое происходило, ОС зависала, и это никому не нравилось. Поэтому, в ОС начали внедрять изолированность самой ОС от запускаемых программ. Теперь, запускаемые программы могли работать только с выделенной для них памятью.

Позже, всем вдруг захотелось запускать несколько программ одновременно. И в ОС реализовали многозадачность. При этом нужно понимать, что многозадачность довольно сложная задача: мало того, что эти запущенные программы должны быть изолированны не только по отношению к ОС, но и к друг другу, так еще и к устройствам ввода/вывода, к которым они возможно захотят обращаться одновременно, например к клавиатуре, чтобы считать что ввел пользователь или монитору, чтобы отобразить что-то пользователю. Для разделения доступа в ОС ввели понятие системного вызова, который может разрешать читать или записывать программе на какое-то физическое устройство. Иными словами, запущенная программа, чтобы получить доступ к определенному устройству, должна вызвать определенный системный вызов ОС. И только после того, когда ОС ответит на этот вызов, доступ будет получен.

Надежность - еще одна функции ОС. Ведь если из 10 запущенных программ, в одной закралась ошибка, мы не хотим чтобы весь компьютер из-за этого завис. ОС отлавливает ошибку, обрабатывает ее, и аварийно завершает только проблемную программу.

В добавок к этому, в ОС внедрили многопользовательский режим, чтобы ей могли пользоваться несколько пользователей, у каждого свой набор программ и данных с разными типами доступа.

# Языки программирования

Прежде чем начать рассматривать языки программирования, настоятельно рекомендую прочитать статью Что такое программирование.

Более подробно рассматриваю языки программирования в материале по ссылке.

# Компьютерные сети и интернет

В основе компьютерных сетей лежит сетевая модель OSI ISO.

//TODO

# Заключение

Это только упрощенные основы CS. Каждая из озвученных тем стоит более подробного изучения. Да и из этих тем выводится перечить не менее важных. Данная подборка должна мотивировать к выбору направления творческого поиска.