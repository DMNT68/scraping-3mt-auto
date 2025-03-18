import {chromium} from 'playwright';

export const scraping = async () => {
    const browser = await chromium.launch({headless: true}); // Cambia a false para ver la navegación en tiempo real
    const page = await browser.newPage();

    // Navegar a la página de stock de autos
    await page.goto('https://3mtauto.com.au/stock-list/', {waitUntil: 'load'});

    // Esperar a que los elementos con información de autos estén cargados
    await page.waitForSelector('.vy-item');

    // Extraer la información de los autos
    const cars = await page.evaluate(() => {
        let carElements = document.querySelectorAll('.vy-item-wrapper');

        let carData: any[] | Promise<any[]> = [];

        carElements.forEach((car) => {
            let name = car.querySelector('.vy-title-block')?.textContent ? car.querySelector('.vy-title-block')?.textContent?.trim() : undefined;

            let price = car.querySelector('.vy-price')?.textContent ? car.querySelector('.vy-price')?.textContent?.trim() : undefined;

            let price_tax = car.querySelector('.vy-price-tax')?.textContent ? car.querySelector('.vy-price-tax')?.textContent?.trim() : undefined;

            let image = car.querySelector('img')?.src || undefined;

            carData.push({name, price, price_tax, image});
        });

        return carData;
    });

    //console.log(cars); // Imprime la información en la consola

    await browser.close();

    return cars;
};
