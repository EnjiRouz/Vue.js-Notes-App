// вручную настроеннная конфигурация для:
// - смены стандартных путей в билде;
// - исключения из сборки файлов map;
// - включения hashes в названии файла для корретной прогрузки обновлений без чистки кэша со стороны пользователей
// Документация: https://cli.vuejs.org/config/

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '' // для сервера использовать '/' либо путь к нужной папке, а для локального билда ''
        : '/',
    assetsDir: 'assets',
    productionSourceMap: false,
    filenameHashing: true
};