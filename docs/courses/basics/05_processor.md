# Процессор

:::caution

Раздел в разработке

:::

В основе процессора лежит полный сумматор с регистрами и управляющим автоматом. Такое сочетание блоков делают его универсальным вычислительным устройством, который умеет складывать, отнимать, умножать, делить и многие другие математические операции.

простейшая модель процессора
Шина - логически объединенный пучок проводов. В данном случае, контактов процессора. Шина адреса задает адрес в памяти с которым процессор работает в данный момент. Шина данных служит для передачи данных выбранного адреса. Шина управления служит для задания режима работы: считывания данных или запись.

Регистры процессора используются для сохранения промежуточных результатов вычислений, а также управляют поведением процессора с внешними устройствами. Регистр счетчика команд - счетчик, показывающий текущий адрес исполняемой команды.

Арифметическо-логическое устройство (АЛУ) - в простейшем случае, сумматор. Флаги - набор битов, устанавливаемых после проведения вычислений. Например, бит переполнения устанавливается в 1, когда результат сложения превысил разрядность.

Управляющий автомат (УА) управляет поведением блоков, соединяет различный блоки между собой через общую шину.

Когда включается питание процессора, во всех регистрах установлены 0. Управляющий автомат соединяет регистр счетчика команд с шиной адреса, а в шину управления устанавливает сигнал чтения. Так процессор дает знать, что хочет считать данные из памяти по адресу 0. Когда по шине управления приходит сигнал о готовности данных, управляющий автомат считывает данные из шины данных в свой блок. Полученные данные воспринимаются им как команда.

Допустим, мы получили команды ничего не делать. УА отсчитывает процессорный такт ничего не предпринимая. После этого, он посылает сигнал на регистр счетчика команд для увеличения значения счетчика на +1. Далее цикл повторяется, т.е. УА соединяет СК с ША и режим чтения в ШУ. Таким образом, процессор считывает команду из памяти с адресом 1.

Виды команд:

Команда сохранить значение по адресу X в регистр Y. УА в этом случае устанавливает адрес Х на ША, на ШУ - чтение, а ШД соединяет с регистром Y. Регистр Y может быть регистр СК. Таким образом, командами в памяти можно управлять последовательностью исполнения команд.
Команда сложения значений из регистра X и Y. УА соединяет регистр X c блоком А АЛУ, и регистр Y с блоком B АЛУ. Подает сигнал АЛУ на сложение чисел. Результат сложения из A+B сохраняет в регистр X.
Команда условной записи в регистр СК. УА проверяет, к примеру, установлен ли флаг переполнения в АЛУ. Если установлен, записать в регистр СК соответствующее значение.
Почитать о работе процессора можно тут.

