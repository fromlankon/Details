export const getData = async () => {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=218403d14023013610cbda3b344b5379")
    let data = await res.json()
    return data.results
}

export const getSingleData = async (id) => {
    try {
        let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=218403d14023013610cbda3b344b5379`);
        let data = await res.json();

        // Проверяем, был ли успешен запрос
        if (res.ok) {
            // Возвращаем детали фильма напрямую
            return data;
        } else {
            // Обрабатываем случаи ошибок
            console.error(`Ошибка: ${data.status_message}`);
            return null; // или выбрасываем ошибку, если вы хотите обработать ее выше по стеку вызовов
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null; // или выбрасываем ошибку, если вы хотите обработать ее выше по стеку вызовов
    }
}
