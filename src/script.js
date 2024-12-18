
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Currency Converter
    const convertButton = document.getElementById('convert');
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultDisplay = document.getElementById('result');

    convertButton.addEventListener('click', async () => {
      const amount = parseFloat(amountInput.value);
      const currency = currencySelect.value;

      if (isNaN(amount) || amount <= 0) {
        resultDisplay.textContent = 'Por favor, insira um valor válido.';
        return;
      }

      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/BRL`);
        const data = await response.json();
        const rate = data.rates[currency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultDisplay.textContent = `O valor convertido é: ${convertedAmount} ${currency}`;
      } catch (error) {
        resultDisplay.textContent = 'Erro ao converter. Tente novamente mais tarde.';
      }
    });