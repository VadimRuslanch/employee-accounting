export default defineEventHandler(() => {
    const employees = [
        {
            "id": 1,
            "name": "Мартынова Татьяна",
            "position": "Менеджер проектов",
            "email": "tatiana.martynova@mail.ru",
            "timeInCompany": "9 лет 3 месяца"
        },
        {
            "id": 2,
            "name": "Зайцева Мария",
            "position": "Менеджер проектов",
            "email": "maria.zaiceva@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 3,
            "name": "Шевченко Наталья",
            "position": "Менеджер проектов",
            "email": "n.shevchenko@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 4,
            "name": "Абашина Ксения",
            "position": "Менеджер проектов",
            "email": "ksenia.abashina@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 5,
            "name": "Иванов Павел",
            "position": "Фронтенд-разработчик",
            "email": "pavel.ivanov@mail.ru",
            "timeInCompany": "4 года 1 месяц"
        },
        {
            "id": 6,
            "name": "Пономарев Дмитрий",
            "position": "Фронтенд-разработчик",
            "email": "dmitry.ponomarev@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 7,
            "name": "Дедищев Павел",
            "position": "Бэкенд-разработчик",
            "email": "p.dedishev@mail.ru",
            "timeInCompany": "1 год 11 месяцев"
        },
        {
            "id": 8,
            "name": "Громова Ирина",
            "position": "Бэкенд-разработчик",
            "email": "irina.gromova@mail.ru",
            "timeInCompany": "1 год 11 месяцев"
        },
        {
            "id": 9,
            "name": "Дозоров Александр",
            "position": "Бэкенд-разработчик",
            "email": "alex.dozorov@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 10,
            "name": "Трутнев Иван",
            "position": "Бэкенд-разработчик",
            "email": "ivan.trutnev@mail.ru",
            "timeInCompany": "5 лет 3 месяца"
        },
        {
            "id": 11,
            "name": "Смирнова Ольга",
            "position": "Фронтенд-разработчик",
            "email": "olga.smirnova@mail.ru",
            "timeInCompany": "3 года 6 месяцев"
        },
        {
            "id": 12,
            "name": "Кузнецов Николай",
            "position": "Фронтенд-разработчик",
            "email": "nikolay.kuznetsov@mail.ru",
            "timeInCompany": "6 лет 4 месяца"
        },
        {
            "id": 13,
            "name": "Петрова Анна",
            "position": "Менеджер проектов",
            "email": "anna.petrova@mail.ru",
            "timeInCompany": "2 года 2 месяца"
        },
        {
            "id": 14,
            "name": "Кирсанов Владимир",
            "position": "Бэкенд-разработчик",
            "email": "vladimir.kirsanov@mail.ru",
            "timeInCompany": "4 года 5 месяцев"
        },
        {
            "id": 15,
            "name": "Васильев Андрей",
            "position": "Фронтенд-разработчик",
            "email": "andrey.vasilev@mail.ru",
            "timeInCompany": "2 года 9 месяцев"
        },
        {
            "id": 16,
            "name": "Зайцева Мария",
            "position": "HR-специалист",
            "email": "hr.zayceva@mail.ru",
            "timeInCompany": "7 лет 8 месяцев"
        },
        {
            "id": 17,
            "name": "Иванов Сергей",
            "position": "Системный администратор",
            "email": "sergey.ivanov@mail.ru",
            "timeInCompany": "2 года 5 месяцев"
        },
        {
            "id": 18,
            "name": "Кузнецов Николай",
            "position": "Менеджер проектов",
            "email": "nikolay.kuznetsov2@mail.ru",
            "timeInCompany": "3 года 3 месяца"
        },
        {
            "id": 19,
            "name": "Мартынова Татьяна",
            "position": "Бизнес-аналитик",
            "email": "tatiana.martynova2@mail.ru",
            "timeInCompany": "4 года 10 месяцев"
        },
        {
            "id": 20,
            "name": "Дроздова Елена",
            "position": "Аналитик данных",
            "email": "elena.drozdova@mail.ru",
            "timeInCompany": "6 лет 1 месяц"
        },
        {
            "id": 21,
            "name": "Шевченко Наталья",
            "position": "Тестировщик",
            "email": "n.shevchenko2@mail.ru",
            "timeInCompany": "2 года 7 месяцев"
        },
        {
            "id": 22,
            "name": "Тимофеев Алексей",
            "position": "Девопс-инженер",
            "email": "alexey.timofeev@mail.ru",
            "timeInCompany": "1 год 9 месяцев"
        },
        {
            "id": 23,
            "name": "Абашина Ксения",
            "position": "Тестировщик",
            "email": "ksenia.abashina2@mail.ru",
            "timeInCompany": "2 года 4 месяца"
        },
        {
            "id": 24,
            "name": "Смирнова Ольга",
            "position": "Аналитик данных",
            "email": "olga.smirnova2@mail.ru",
            "timeInCompany": "5 лет 2 месяца"
        },
        {
            "id": 25,
            "name": "Петрова Анна",
            "position": "HR-специалист",
            "email": "anna.petrova2@mail.ru",
            "timeInCompany": "3 года 1 месяц"
        },
        {
            "id": 26,
            "name": "Громова Ирина",
            "position": "Финансовый менеджер",
            "email": "irina.gromova2@mail.ru",
            "timeInCompany": "1 год 2 месяца"
        },
        {
            "id": 27,
            "name": "Васильев Андрей",
            "position": "Девопс-инженер",
            "email": "andrey.vasilev2@mail.ru",
            "timeInCompany": "4 года 7 месяцев"
        },
        {
            "id": 28,
            "name": "Пономарев Дмитрий",
            "position": "Архитектор ПО",
            "email": "dmitry.ponomarev2@mail.ru",
            "timeInCompany": "7 лет 3 месяца"
        },
        {
            "id": 29,
            "name": "Иванов Сергей",
            "position": "Аналитик данных",
            "email": "sergey.ivanov2@mail.ru",
            "timeInCompany": "3 года 6 месяцев"
        },
        {
            "id": 30,
            "name": "Кирсанов Владимир",
            "position": "Системный администратор",
            "email": "vladimir.kirsanov2@mail.ru",
            "timeInCompany": "5 лет 8 месяцев"
        },
        {
            "id": 211,
            "name": "Шевченко Наталья",
            "position": "Тестировщик",
            "email": "n.shevchenko2@mail.ru",
            "timeInCompany": "2 года 7 месяцев"
        },
        {
            "id": 222,
            "name": "Тимофеев Алексей",
            "position": "Девопс-инженер",
            "email": "alexey.timofeev@mail.ru",
            "timeInCompany": "1 год 9 месяцев"
        },
        {
            "id": 233,
            "name": "Абашина Ксения",
            "position": "Тестировщик",
            "email": "ksenia.abashina2@mail.ru",
            "timeInCompany": "2 года 4 месяца"
        },
        {
            "id": 244,
            "name": "Смирнова Ольга",
            "position": "Аналитик данных",
            "email": "olga.smirnova2@mail.ru",
            "timeInCompany": "5 лет 2 месяца"
        },
        {
            "id": 255,
            "name": "Петрова Анна",
            "position": "HR-специалист",
            "email": "anna.petrova2@mail.ru",
            "timeInCompany": "3 года 1 месяц"
        },
        {
            "id": 266,
            "name": "Громова Ирина",
            "position": "Финансовый менеджер",
            "email": "irina.gromova2@mail.ru",
            "timeInCompany": "1 год 2 месяца"
        },
        {
            "id": 277,
            "name": "Васильев Андрей",
            "position": "Девопс-инженер",
            "email": "andrey.vasilev2@mail.ru",
            "timeInCompany": "4 года 7 месяцев"
        },
        {
            "id": 288,
            "name": "Пономарев Дмитрий",
            "position": "Архитектор ПО",
            "email": "dmitry.ponomarev2@mail.ru",
            "timeInCompany": "7 лет 3 месяца"
        },
        {
            "id": 299,
            "name": "Иванов Сергей",
            "position": "Аналитик данных",
            "email": "sergey.ivanov2@mail.ru",
            "timeInCompany": "3 года 6 месяцев"
        },
        {
            "id": 300,
            "name": "Кирсанов Владимир",
            "position": "Системный администратор",
            "email": "vladimir.kirsanov2@mail.ru",
            "timeInCompany": "5 лет 8 месяцев"
        }
    ]

    return employees;
});
